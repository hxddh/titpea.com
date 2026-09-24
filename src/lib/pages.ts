// Page models: everything a page renders, derived from product files, the
// site copy, and the synced release tags. Components only render these.
import releases from "../content/releases.json";
import { products } from "../content/products";
import { absoluteUrl, site, ui } from "../content/site";
import { lines, locales, type Line, type Locale, type Product, type ProductCopy } from "../content/schema";

export type CurrentPage = "home" | "about" | (string & {});

type ReleaseNotes = { summary: string; items: string[]; url: string };
const releaseTags = releases as Record<
  string,
  { repo: string; version: string; published?: string; notes?: ReleaseNotes }
>;

export const versionOf = (slug: string): string | undefined => releaseTags[slug]?.version;

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** The latest release's publish date, written out for the locale ("Sep 4, 2026" / "2026年9月4日"). */
export function releasedOf(slug: string, locale: Locale): string | undefined {
  const match = releaseTags[slug]?.published?.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return undefined;
  const [, year, month, day] = match.map(Number);
  return locale === "zh" ? `${year}年${month}月${day}日` : `${months[month - 1]} ${day}, ${year}`;
}

export function pathFor(locale: Locale, slug?: string) {
  const prefix = locale === "zh" ? "/zh" : "";
  return slug ? `${prefix}/${slug}/` : `${prefix}/`;
}

const otherLocale = (locale: Locale): Locale => (locale === "zh" ? "en" : "zh");
export const pageTitle = (title: string) => (title === site.brand ? title : `${title} - ${site.brand}`);

/* ---------- SEO ---------- */

export type PageSeo = {
  title: string;
  description: string;
  canonicalPath: string;
  canonicalUrl: string;
  alternates: { en: string; zh: string; xDefault: string };
  ogImage: string;
  ogImageUrl: string;
  structuredData?: Record<string, unknown>;
  robots?: string;
};

export type PageLanguageLink = { href: string; label: string; locale: Locale; hreflang: "en" | "zh-CN" };

export function buildSeo(input: {
  title: string;
  description: string;
  path: string;
  alternatePath: string;
  locale: Locale;
  ogImage: string;
  structuredData?: Record<string, unknown>;
  robots?: string;
}): PageSeo {
  const enPath = input.locale === "en" ? input.path : input.alternatePath;
  const zhPath = input.locale === "zh" ? input.path : input.alternatePath;
  return {
    title: input.title,
    description: input.description,
    canonicalPath: input.path,
    canonicalUrl: absoluteUrl(input.path),
    alternates: { en: absoluteUrl(enPath), zh: absoluteUrl(zhPath), xDefault: absoluteUrl(enPath) },
    ogImage: input.ogImage,
    ogImageUrl: absoluteUrl(input.ogImage),
    structuredData: input.structuredData,
    robots: input.robots,
  };
}

export function languageLink(locale: Locale, alternatePath: string): PageLanguageLink {
  const target = otherLocale(locale);
  return {
    href: alternatePath,
    label: target === "zh" ? "中文" : "English",
    locale: target,
    hreflang: target === "zh" ? "zh-CN" : "en",
  };
}

/* ---------- Navigation ---------- */

export type NavItem = { label: string; href: string; current?: CurrentPage; external?: boolean };
export type NavGroup = { label: string; line?: Line; items: NavItem[] };

const navLabel = (product: Product, locale: Locale) => product[locale].navLabel ?? product[locale].title;

/** Home and About, then each product line with all of its products, then GitHub. */
export function navGroups(locale: Locale): NavGroup[] {
  const copy = ui[locale];
  return [
    {
      label: copy.groups.main,
      items: [
        { label: copy.home, href: pathFor(locale), current: "home" },
        { label: copy.about, href: pathFor(locale, "about"), current: "about" },
      ],
    },
    ...lines.map((line) => ({
      label: copy.groups[line],
      line,
      items: products
        .filter((product) => product.line === line)
        .map((product) => ({
          label: navLabel(product, locale),
          href: pathFor(locale, product.slug),
          current: product.slug,
        })),
    })),
    { label: copy.groups.external, items: [{ label: "GitHub", href: site.github, external: true }] },
  ];
}

/* ---------- Product pages ---------- */

/** Replace `{version}` everywhere in a product's copy with its synced release tag. */
function withVersion(copy: ProductCopy, version: string | undefined): ProductCopy {
  if (!version) return copy;
  return JSON.parse(JSON.stringify(copy).replaceAll("{version}", version)) as ProductCopy;
}

export type ProductPageModel = {
  kind: "product";
  locale: Locale;
  slug: string;
  current: string;
  path: string;
  alternatePath: string;
  seo: PageSeo;
  language: PageLanguageLink;
  copy: ProductCopy;
  icon?: string;
  version?: string;
  /** Publish date of that release, already formatted for the locale. */
  released?: string;
  /** Summary and highlights quoted from the release's own notes. */
  whatsNew?: ReleaseNotes & { title: string; linkLabel: string; released?: string };
  /** The primary action downloads a release, so the button carries the tag. */
  downloadsRelease: boolean;
  frame: "wide" | "narrow";
  sectionIndex: boolean;
  navItems: Array<{ id: string; label: string }>;
  primaryCta: string;
  expectedText: string[];
};

function productStructuredData(product: Product, copy: ProductCopy, path: string, version?: string) {
  const faq = copy.sections.find((section) => section.kind === "faq");
  const app = {
    "@type": "SoftwareApplication",
    name: copy.title,
    description: copy.description,
    applicationCategory: product.schema.category,
    operatingSystem: product.schema.os,
    url: absoluteUrl(path),
    ...(version ? { softwareVersion: version.replace(/^v/, "") } : {}),
    ...(copy.primaryCta.href.startsWith("http") ? { sameAs: copy.primaryCta.href } : {}),
  };
  const faqPage = faq && {
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.title,
      acceptedAnswer: { "@type": "Answer", text: item.body },
    })),
  };
  return { "@context": "https://schema.org", "@graph": faqPage ? [app, faqPage] : [app] };
}

export function productPage(product: Product, locale: Locale): ProductPageModel {
  const version = versionOf(product.slug);
  const copy = withVersion(product[locale], version);
  const path = pathFor(locale, product.slug);
  const alternatePath = pathFor(otherLocale(locale), product.slug);
  const navItems = copy.sections.flatMap((section) => {
    const item = { id: section.id, label: section.nav ?? ("label" in section ? section.label : section.kicker) };
    // The command block sits just before the FAQ, so its link does too.
    return section.kind === "faq" && copy.commands ? [{ id: "start", label: copy.commands.title }, item] : [item];
  });
  if (copy.commands && !copy.sections.some((section) => section.kind === "faq")) {
    navItems.push({ id: "start", label: copy.commands.title });
  }
  return {
    kind: "product",
    locale,
    slug: product.slug,
    current: product.slug,
    path,
    alternatePath,
    seo: buildSeo({
      title: pageTitle(copy.title),
      description: copy.description,
      path,
      alternatePath,
      locale,
      ogImage: product.og,
      structuredData: productStructuredData(product, copy, path, version),
    }),
    language: languageLink(locale, alternatePath),
    copy,
    icon: product.icon,
    version,
    released: releasedOf(product.slug, locale),
    whatsNew: whatsNewFor(product.slug, locale, version),
    downloadsRelease: Boolean(version) && /\/releases/.test(copy.primaryCta.href),
    frame: copy.visual.frame ?? "narrow",
    sectionIndex: product.sectionIndex,
    navItems,
    primaryCta: copy.primaryCta.href,
    expectedText: [copy.headline, copy.primaryCta.label],
  };
}

function whatsNewFor(slug: string, locale: Locale, version?: string) {
  const notes = releaseTags[slug]?.notes;
  if (!version || !notes || (!notes.summary && notes.items.length === 0)) return undefined;
  const copy = ui[locale];
  return {
    ...notes,
    title: copy.whatsNew.replace("{version}", version),
    linkLabel: copy.releaseNotes,
    released: releasedOf(slug, locale),
  };
}

/* ---------- Home ---------- */

export type CatalogItem = {
  slug: string;
  name: string;
  href: string;
  role: string;
  text: string;
  icon?: string;
  version?: string;
  released?: string;
};

export type HomePageModel = {
  kind: "home";
  locale: Locale;
  current: "home";
  path: string;
  alternatePath: string;
  seo: PageSeo;
  language: PageLanguageLink;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    icons: Array<{ src: string; href: string; name: string }>;
    browse: string;
    about: { label: string; href: string };
  };
  featured: {
    title: string;
    learnMore: string;
    items: Array<CatalogItem & { image: { src: string; alt: string; width: number; height: number } }>;
  };
  more: { title: string; groups: Array<{ label: string; line: Line; items: CatalogItem[] }> };
  primaryCta: string;
  expectedText: string[];
};

const catalogItem = (product: Product, locale: Locale): CatalogItem => ({
  slug: product.slug,
  name: product[locale].title,
  href: pathFor(locale, product.slug),
  // Cards without a catalog role fall back to the product eyebrow, so every card has a kicker.
  role: product[locale].catalog.role || product[locale].eyebrow,
  text: product[locale].catalog.text,
  icon: product.icon,
  version: versionOf(product.slug),
  released: releasedOf(product.slug, locale),
});

export function homePage(locale: Locale): HomePageModel {
  const copy = ui[locale];
  const path = pathFor(locale);
  const alternatePath = pathFor(otherLocale(locale));
  const featured = products.filter((product) => product.featured);
  return {
    kind: "home",
    locale,
    current: "home",
    path,
    alternatePath,
    seo: buildSeo({
      title: copy.homeMetaTitle,
      description: copy.homeDescription,
      path,
      alternatePath,
      locale,
      ogImage: site.og.home,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: site.brand,
        url: absoluteUrl(path),
        inLanguage: locale === "zh" ? "zh-CN" : "en",
        description: copy.homeDescription,
        publisher: { "@type": "Person", name: "hxddh", url: site.github },
      },
    }),
    language: languageLink(locale, alternatePath),
    hero: {
      eyebrow: copy.productIndex,
      title: copy.homeTitle,
      lead: copy.homeLead,
      icons: products
        .filter((product) => product.icon)
        .map((product) => ({ src: product.icon!, href: pathFor(locale, product.slug), name: product[locale].title })),
      browse: copy.browseTools,
      about: { label: copy.aboutMore, href: pathFor(locale, "about") },
    },
    featured: {
      title: copy.featuredTitle,
      learnMore: copy.learnMore,
      items: featured.map((product) => {
        const image = product.featured!.image;
        return { ...catalogItem(product, locale), image: { ...image, alt: image.alt[locale] } };
      }),
    },
    more: {
      title: copy.moreToolsTitle,
      groups: lines.map((line) => ({
        label: copy.groups[line],
        line,
        items: products
          .filter((product) => product.line === line && !product.featured)
          .map((product) => catalogItem(product, locale)),
      })),
    },
    // The hero's primary button jumps to the full catalog.
    primaryCta: `${path}#more-title`,
    expectedText: [copy.homeTitle, copy.homeLead, copy.featuredTitle, copy.moreToolsTitle],
  };
}

/* ---------- About ---------- */

export type AboutPageModel = {
  kind: "about";
  locale: Locale;
  current: "about";
  path: string;
  alternatePath: string;
  seo: PageSeo;
  language: PageLanguageLink;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    contactLabel: string;
    actions: Array<{ label: string; href: string; style: "primary" | "ghost" }>;
  };
  body: string[];
  principles: { title: string; items: Array<{ title: string; body: string }> };
  releases: {
    title: string;
    sub: string;
    feed: { label: string; href: string };
    items: Array<{ name: string; href: string; icon?: string; version: string; released?: string }>;
  };
  expectedText: string[];
};

const withReleases = (text: string) => text.replace(/\{([a-z0-9-]+)\}/g, (match, slug) => versionOf(slug) ?? match);

export function aboutPage(locale: Locale): AboutPageModel {
  const copy = ui[locale];
  const path = pathFor(locale, "about");
  const alternatePath = pathFor(otherLocale(locale), "about");
  const body = copy.aboutNote.map(withReleases);
  return {
    kind: "about",
    locale,
    current: "about",
    path,
    alternatePath,
    seo: buildSeo({
      title: pageTitle(copy.aboutTitle),
      description: copy.aboutDescription,
      path,
      alternatePath,
      locale,
      ogImage: site.og.about,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        inLanguage: locale === "zh" ? "zh-CN" : "en",
        mainEntity: {
          "@type": "Person",
          name: copy.aboutHeadline,
          description: copy.aboutLead,
          url: absoluteUrl(path),
          sameAs: [site.github],
          email: `mailto:${site.email}`,
        },
      },
    }),
    language: languageLink(locale, alternatePath),
    hero: {
      eyebrow: copy.aboutTitle,
      title: copy.aboutHeadline,
      lead: copy.aboutLead,
      contactLabel: copy.contactLabel,
      actions: [
        { label: "GitHub", href: site.github, style: "primary" },
        { label: "Email", href: `mailto:${site.email}`, style: "ghost" },
      ],
    },
    body,
    principles: { title: copy.aboutPrinciplesTitle, items: copy.aboutPrinciples },
    releases: {
      title: copy.aboutReleasesTitle,
      sub: copy.aboutReleasesSub,
      feed: { label: copy.aboutFeed, href: "/releases.xml" },
      // Newest release first; the list rebuilds itself from releases.json.
      items: products
        .filter((product) => versionOf(product.slug))
        .sort((a, b) => (releaseTags[b.slug]?.published ?? "").localeCompare(releaseTags[a.slug]?.published ?? ""))
        .map((product) => ({
          name: product[locale].title,
          href: pathFor(locale, product.slug),
          icon: product.icon,
          version: versionOf(product.slug)!,
          released: releasedOf(product.slug, locale),
        })),
    },
    expectedText: [copy.aboutHeadline, copy.aboutLead, ...body, copy.aboutReleasesTitle],
  };
}

/* ---------- Routes ---------- */

export type SitePageModel = HomePageModel | AboutPageModel | ProductPageModel;

export const allPages: SitePageModel[] = locales.flatMap((locale) => [
  homePage(locale),
  aboutPage(locale),
  ...products.map((product) => productPage(product, locale)),
]);

export const productBySlug = (slug: string) => {
  const product = products.find((item) => item.slug === slug);
  if (!product) throw new Error(`Unknown product: ${slug}`);
  return product;
};

/** What QA needs to know about each route. */
export type SiteRoute = {
  path: string;
  locale: Locale;
  current: CurrentPage;
  kind: SitePageModel["kind"];
  slug?: string;
  title: string;
  canonicalPath: string;
  alternatePath: string;
  ogImage: string;
  expectedText: string[];
  primaryCta?: string;
  sectionIndex?: boolean;
  browserVisual?: boolean;
};

export const siteRoutes: SiteRoute[] = allPages.map((page) => ({
  path: page.path,
  locale: page.locale,
  current: page.current,
  kind: page.kind,
  slug: page.kind === "product" ? page.slug : undefined,
  title: page.seo.title,
  canonicalPath: page.seo.canonicalPath,
  alternatePath: page.alternatePath,
  ogImage: page.seo.ogImage,
  expectedText: page.expectedText,
  primaryCta: page.kind === "about" ? undefined : page.primaryCta,
  sectionIndex: page.kind === "product" ? page.sectionIndex : undefined,
  browserVisual:
    page.kind === "product" ? productBySlug(page.slug).schema.category === "BrowserApplication" : undefined,
}));

/* ---------- Releases feed ---------- */

export type FeedEntry = {
  slug: string;
  name: string;
  version: string;
  published: string;
  pageUrl: string;
  notesUrl: string;
  summary: string;
  items: string[];
};

/** Every product with a GitHub release, newest first, for /releases.xml. */
export const feedEntries = (): FeedEntry[] =>
  products
    .filter((product) => releaseTags[product.slug]?.published)
    .map((product) => {
      const release = releaseTags[product.slug];
      return {
        slug: product.slug,
        name: product.en.title,
        version: release.version,
        published: release.published!,
        pageUrl: absoluteUrl(pathFor("en", product.slug)),
        notesUrl: release.notes?.url ?? `https://github.com/${release.repo}/releases/tag/${release.version}`,
        summary: release.notes?.summary || product.en.catalog.text,
        items: release.notes?.items ?? [],
      };
    })
    .sort((a, b) => b.published.localeCompare(a.published));
