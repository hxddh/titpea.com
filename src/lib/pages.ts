// Page models: everything a page renders, derived from product files, the
// site copy, and the synced release tags. Components only render these.
import releases from "../content/releases.json";
import { products } from "../content/products";
import { about, absoluteUrl, site, ui, type AboutPerson } from "../content/site";
import {
  featuredSrc,
  lines,
  locales,
  type Line,
  type Locale,
  type PrivacySummary,
  type Product,
  type ProductCopy,
  type ReleaseHighlights,
} from "../content/schema";

export type CurrentPage = "home" | "about" | "releases" | "privacy" | (string & {});

// A field that one language has must exist in the other: the two pages
// differ in words, never in what they show.
for (const product of products) {
  for (const field of ["installNote", "privacy"] as const) {
    if (Boolean(product.en[field]) !== Boolean(product.zh[field]))
      throw new Error(`${product.slug}: ${field} is set in one language only`);
  }
  if (product.en.privacy && product.en.privacy.network !== product.zh.privacy?.network)
    throw new Error(`${product.slug}: privacy.network differs between languages`);
}
if (Boolean(about.person.en) !== Boolean(about.person.zh))
  throw new Error("site.ts: about.person is set in one language only");

type ReleaseNotes = { summary: string; items: string[]; url: string };
const releaseTags = releases as Record<
  string,
  { repo: string; version: string; published?: string; notes?: ReleaseNotes }
>;

export const versionOf = (slug: string): string | undefined => releaseTags[slug]?.version;

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** The latest release's publish date, written out for the locale ("Sep 4, 2026" / "2026年9月4日"). */
export function releasedOf(slug: string, locale: Locale): string | undefined {
  return formatDate(releaseTags[slug]?.published, locale);
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

/** Copy without its `code` markers, for structured data and meta text. */
export const plainText = (text: string) => text.replaceAll("`", "");

/** Local nav links on a product page, Get started and FAQ included. */
export const maxNavLinks = 4;

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
        { label: copy.releases, href: pathFor(locale, "releases"), current: "releases" },
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
  line: Line;
  current: string;
  path: string;
  alternatePath: string;
  seo: PageSeo;
  language: PageLanguageLink;
  copy: ProductCopy;
  icon: string;
  version?: string;
  /** Publish date of that release, already formatted for the locale. */
  released?: string;
  /** Summary and highlights quoted from the release's own notes. */
  whatsNew?: ReleaseNotes & { version: string; title: string; linkLabel: string; released?: string };
  /** The primary action downloads a release, so the button carries the tag. */
  downloadsRelease: boolean;
  frame: "wide" | "narrow";
  sectionIndex: boolean;
  navItems: Array<{ id: string; label: string }>;
  /** Before the closing band: where to go next. */
  related: { title: string; items: CatalogItem[]; all: { label: string; href: string } };
  primaryCta?: string;
  expectedText: string[];
};

function productStructuredData(product: Product, copy: ProductCopy, path: string, locale: Locale, version?: string) {
  const faq = copy.sections.find((section) => section.kind === "faq");
  const action = !copy.primaryCta.soon && copy.primaryCta.href.startsWith("http") ? copy.primaryCta.href : undefined;
  const repoUrl = product.repo
    ? `https://github.com/${product.repo}`
    : action && /^https:\/\/github\.com\/[^/]+\/[^/#?]+\/?$/.test(action)
      ? action
      : undefined;
  const app = {
    "@type": "SoftwareApplication",
    name: copy.title,
    description: copy.description,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    applicationCategory: product.schema.category,
    operatingSystem: product.schema.os,
    url: absoluteUrl(path),
    // Every product is free. A store listing installs and a release downloads;
    // a source-only product's repository is only its sameAs, never a download.
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Person", name: "hxddh", url: site.github },
    ...(version ? { softwareVersion: version.replace(/^v/, "") } : {}),
    ...(action?.includes("chromewebstore.google.com") ? { installUrl: action } : {}),
    ...(action && /\/releases(\/|$)/.test(action) ? { downloadUrl: action } : {}),
    ...(repoUrl ? { sameAs: repoUrl } : {}),
  };
  const faqPage = faq && {
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.title,
      acceptedAnswer: { "@type": "Answer", text: plainText(item.body) },
    })),
  };
  return { "@context": "https://schema.org", "@graph": faqPage ? [app, faqPage] : [app] };
}

export function productPage(product: Product, locale: Locale): ProductPageModel {
  const version = versionOf(product.slug);
  const copy = withVersion(product[locale], version);
  const path = pathFor(locale, product.slug);
  const alternatePath = pathFor(otherLocale(locale), product.slug);
  // The local nav holds at most four links: the first sections in page
  // order, then Get started and FAQ, which always stay (in that order).
  const faq = copy.sections.find((section) => section.kind === "faq");
  const tail = [
    ...(copy.commands ? [{ id: "start", label: copy.commands.title }] : []),
    ...(faq ? [{ id: faq.id, label: faq.nav ?? faq.label }] : []),
  ];
  const navItems = [
    ...copy.sections
      .filter((section) => section.kind !== "faq")
      .map((section) => ({
        id: section.id,
        label:
          section.nav ?? ("label" in section ? section.label : "kicker" in section ? section.kicker : section.title),
      }))
      .slice(0, maxNavLinks - tail.length),
    ...tail,
  ];
  return {
    kind: "product",
    locale,
    slug: product.slug,
    line: product.line,
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
      structuredData: productStructuredData(product, copy, path, locale, version),
    }),
    language: languageLink(locale, alternatePath),
    copy,
    icon: product.icon,
    version,
    released: releasedOf(product.slug, locale),
    whatsNew: whatsNewFor(product.slug, locale, version, product[locale].releaseHighlights),
    downloadsRelease: !copy.primaryCta.soon && Boolean(version) && /\/releases/.test(copy.primaryCta.href),
    frame: copy.visual.frame ?? "narrow",
    sectionIndex: product.sectionIndex,
    navItems,
    related: relatedFor(product, locale),
    primaryCta: copy.primaryCta.soon ? undefined : copy.primaryCta.href,
    expectedText: [copy.headline, copy.primaryCta.label],
  };
}

const hasChinese = (text: string) => /[\u4e00-\u9fff]/.test(text);
/** Release notes are quoted only in the page's own language, line by line. */
const inPageLanguage = (line: string | undefined, locale: Locale): line is string =>
  Boolean(line) && (locale === "zh") === hasChinese(line!);

function whatsNewFor(slug: string, locale: Locale, version?: string, override?: ReleaseHighlights) {
  const copy = ui[locale];
  const synced = releaseTags[slug]?.notes;
  const url = synced?.url ?? `https://github.com/${releaseTags[slug]?.repo}/releases/tag/${version}`;
  if (version && override?.version === version) {
    return {
      summary: override.summary ?? "",
      items: override.items,
      url,
      version,
      title: copy.whatsNew.replace("{version}", version),
      linkLabel: copy.releaseNotes,
      released: releasedOf(slug, locale),
    };
  }
  const notes = synced;
  if (!version || !notes || (!notes.summary && notes.items.length === 0)) return undefined;
  // Lines in another language are left to the release page: with none left,
  // the section is one line (tag, date, link). The release title is the
  // author's shorthand ("context economy and Codex chrome"), so only a
  // curated override carries a summary.
  return {
    summary: "",
    items: notes.items.filter((item) => inPageLanguage(item, locale)),
    url,
    version,
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
  icon: string;
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
    /** The title in pieces that never wrap inside ("|" in the copy). */
    titleParts: string[];
    lead: string;
    icons: Array<{ src: string; href: string; name: string }>;
    browse: string;
    about: { label: string; href: string };
  };
  featured: {
    title: string;
    learnMore: string;
    items: Array<
      CatalogItem & {
        image: { src: string; alt: string; width: number; height: number };
        caption?: string;
      }
    >;
  };
  shipping: { title: string; more: { label: string; href: string }; items: ReleaseItem[] };
  more: {
    title: string;
    filter: { label: string; all: string };
    groups: Array<{ label: string; note: string; line: Line; items: CatalogItem[] }>;
  };
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
});

/**
 * Up to three other products to read next: the rest of this product's line
 * in site order after it, then the other lines, so the list never runs dry.
 */
function relatedFor(product: Product, locale: Locale) {
  const copy = ui[locale];
  const index = products.indexOf(product);
  const after = [...products.slice(index + 1), ...products.slice(0, index)];
  const items = [
    ...after.filter((other) => other.line === product.line),
    ...after.filter((other) => other.line !== product.line),
  ].slice(0, 3);
  const sameLine = items.every((other) => other.line === product.line);
  // "更多 Agent 工具": Latin words inside Chinese take spaces.
  const line = copy.groups[product.line];
  const lineLabel = locale === "zh" && /[A-Za-z]/.test(line) ? ` ${line} ` : line;
  return {
    title: sameLine ? copy.relatedInLine.replace("{line}", lineLabel) : copy.relatedTitle,
    items: items.map((other) => catalogItem(other, locale)),
    all: { label: copy.browseAllTools, href: `${pathFor(locale)}#more-title` },
  };
}

export function homePage(locale: Locale): HomePageModel {
  const copy = ui[locale];
  const path = pathFor(locale);
  const alternatePath = pathFor(otherLocale(locale));
  const featured = products.filter((product) => product.featured).sort((a, b) => a.featured!.order - b.featured!.order);
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
      title: copy.homeTitle.replaceAll("|", ""),
      titleParts: copy.homeTitle.split("|"),
      lead: copy.homeLead,
      icons: products.map((product) => ({
        src: product.icon,
        href: pathFor(locale, product.slug),
        name: product[locale].title,
      })),
      browse: copy.browseTools.replace("{count}", String(products.length)),
      about: { label: copy.aboutMore, href: pathFor(locale, "about") },
    },
    featured: {
      title: copy.featuredTitle,
      learnMore: copy.learnMore,
      items: featured.map((product) => {
        const { image } = product.featured!;
        return {
          ...catalogItem(product, locale),
          image: { ...image, src: featuredSrc(product.featured!, locale), alt: image.alt[locale] },
          caption: product.featured!.caption?.[locale],
        };
      }),
    },
    // What shipped last: release cadence is the plainest evidence the tools are alive.
    shipping: {
      title: copy.shippingTitle,
      more: { label: copy.shippingMore, href: pathFor(locale, "releases") },
      items: releaseItems(locale).slice(0, 3),
    },
    // Every product, featured ones included, so a filtered line is complete.
    more: {
      title: copy.moreToolsTitle,
      filter: { label: copy.filterLabel, all: copy.filterAll },
      groups: lines.map((line) => ({
        label: copy.groups[line],
        note: copy.groupNotes[line],
        line,
        items: products.filter((product) => product.line === line).map((product) => catalogItem(product, locale)),
      })),
    },
    // The hero's primary button jumps to the full catalog.
    primaryCta: `${path}#more-title`,
    expectedText: [copy.homeTitle.replaceAll("|", ""), copy.homeLead, copy.featuredTitle, copy.moreToolsTitle],
  };
}

export type ReleaseItem = {
  name: string;
  href: string;
  icon: string;
  version: string;
  released?: string;
  /** Machine-readable publish date (YYYY-MM-DD). */
  published?: string;
  highlight?: string;
  /** A hand-written one-line summary (releaseHighlights) for this tag, or none. */
  summary?: string;
  /** Up to three lines quoted from the notes, in the page's language only. */
  items: string[];
  /** The release's full notes on GitHub. */
  notesUrl: string;
};

/** Every product with a release, newest first, each with one highlight in the page's language or none. */
function releaseItems(locale: Locale): ReleaseItem[] {
  return products
    .filter((product) => versionOf(product.slug))
    .sort((a, b) => (releaseTags[b.slug]?.published ?? "").localeCompare(releaseTags[a.slug]?.published ?? ""))
    .map((product) => {
      const release = releaseTags[product.slug];
      const notes = release?.notes;
      const override = product[locale].releaseHighlights;
      const current = override?.version === versionOf(product.slug) ? override : undefined;
      // Never the release title: the synced summary comes from it, so only a
      // curated override carries a summary.
      const items = (current ? current.items : (notes?.items ?? []))
        .filter((line) => inPageLanguage(line, locale))
        .slice(0, 3);
      const summary = current?.summary && inPageLanguage(current.summary, locale) ? current.summary : undefined;
      return {
        name: product[locale].title,
        href: pathFor(locale, product.slug),
        icon: product.icon,
        version: release.version,
        released: releasedOf(product.slug, locale),
        published: release.published,
        highlight: [...items, ...(summary ? [summary] : [])][0],
        summary,
        items,
        notesUrl: notes?.url ?? `https://github.com/${release.repo}/releases/tag/${release.version}`,
      };
    });
}

/** A product without GitHub releases: the version its own page lists, if any, and no date. */
export type UndatedReleaseItem = { name: string; href: string; icon: string; version?: string };

const plainVersion = /^v?\d+(?:\.\d+)+$/;

function undatedReleaseItems(locale: Locale): UndatedReleaseItem[] {
  return products
    .filter((product) => !versionOf(product.slug))
    .map((product) => ({
      name: product[locale].title,
      href: pathFor(locale, product.slug),
      icon: product.icon,
      version: product[locale].meta.split(" · ").find((part) => plainVersion.test(part.trim())),
    }));
}

/** "Oct 17, 2026" / "2026年10月17日" from a YYYY-MM-DD date. */
function formatDate(date: string | undefined, locale: Locale) {
  const match = date?.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return undefined;
  const [, year, month, day] = match.map(Number);
  return locale === "zh" ? `${year}年${month}月${day}日` : `${months[month - 1]} ${day}, ${year}`;
}

const newestRelease = () =>
  Object.values(releaseTags)
    .map((entry) => entry.published ?? "")
    .sort()
    .at(-1);

/* ---------- About ---------- */

export type AboutPageModel = {
  kind: "about";
  locale: Locale;
  current: "about";
  path: string;
  alternatePath: string;
  seo: PageSeo;
  language: PageLanguageLink;
  hero: { eyebrow: string; title: string; lead: string };
  /** The owner's own paragraph and portrait; absent until they supply it. */
  person?: AboutPerson;
  /** Computed from the catalog and releases.json, with the GitHub profile. */
  facts: { parts: string[]; github: { label: string; href: string } };
  scenes: {
    title: string;
    items: Array<{
      line: Line;
      label: string;
      when: string;
      value: string;
      products: Array<{ name: string; href: string; icon: string }>;
    }>;
  };
  releases: {
    title: string;
    moreLabel: string;
    feed: { label: string; href: string };
    items: Array<{
      name: string;
      href: string;
      icon: string;
      version: string;
      released?: string;
      highlight?: string;
    }>;
  };
  contact: {
    title: string;
    sub: string;
    /** Shown only while Web Analytics is on (edge-injected or by token). */
    analytics?: string;
    label: string;
    actions: Array<{ label: string; href: string; style: "primary" | "ghost" }>;
  };
  /** How many releases show before the rest fold away. */
  releasesShown: number;
  expectedText: string[];
};

export function aboutPage(locale: Locale): AboutPageModel {
  const copy = ui[locale];
  const path = pathFor(locale, "about");
  const alternatePath = pathFor(otherLocale(locale), "about");
  const count = String(products.length);
  const headline = copy.aboutHeadline.replace("{count}", count);
  const lead = copy.aboutLead;
  return {
    kind: "about",
    locale,
    current: "about",
    path,
    alternatePath,
    seo: buildSeo({
      title: copy.aboutMetaTitle,
      description: copy.aboutDescription,
      path,
      alternatePath,
      locale,
      ogImage: site.og.about,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        inLanguage: locale === "zh" ? "zh-CN" : "en",
        about: {
          "@type": "Person",
          name: "hxddh",
          url: absoluteUrl(path),
          sameAs: [site.github],
          email: site.email,
        },
      },
    }),
    language: languageLink(locale, alternatePath),
    hero: { eyebrow: copy.aboutEyebrow, title: headline, lead },
    person: about.person[locale],
    facts: {
      parts: copy.aboutFacts
        .replace("{released}", String(products.filter((product) => versionOf(product.slug)).length))
        .replace("{date}", formatDate(newestRelease(), locale) ?? "")
        .split(" · "),
      github: { label: site.github.replace(/^https:\/\//, ""), href: site.github },
    },
    scenes: {
      title: copy.aboutScenesTitle,
      items: lines.map((line) => ({
        line,
        label: copy.groups[line],
        ...copy.aboutScenes[line],
        products: products
          .filter((product) => product.line === line)
          .map((product) => ({
            name: product[locale].title,
            href: pathFor(locale, product.slug),
            icon: product.icon,
          })),
      })),
    },
    releases: {
      title: copy.aboutReleasesTitle,
      moreLabel: copy.aboutReleasesMore,
      feed: { label: copy.aboutFeed, href: "/releases.xml" },
      // Newest release first; the list rebuilds itself from releases.json.
      items: releaseItems(locale),
    },
    releasesShown: 6,
    contact: {
      title: copy.aboutContactTitle,
      sub: copy.aboutContactSub,
      analytics: site.analyticsAutoInjected || site.analyticsToken ? copy.aboutAnalytics : undefined,
      label: copy.contactLabel,
      actions: [
        { label: "GitHub", href: site.github, style: "primary" },
        { label: "Email", href: `mailto:${site.email}`, style: "ghost" },
        { label: copy.aboutFeed, href: "/releases.xml", style: "ghost" },
      ],
    },
    expectedText: [headline, lead, copy.aboutReleasesTitle],
  };
}

/* ---------- Releases ---------- */

export type ReleasesPageModel = {
  kind: "releases";
  locale: Locale;
  current: "releases";
  path: string;
  alternatePath: string;
  seo: PageSeo;
  language: PageLanguageLink;
  hero: { eyebrow: string; title: string; lead: string };
  notesLabel: string;
  /** Every product with a GitHub release, newest first. */
  items: ReleaseItem[];
  undated: { title: string; sub: string; items: UndatedReleaseItem[] };
  feed: { label: string; href: string };
  expectedText: string[];
};

export function releasesPage(locale: Locale): ReleasesPageModel {
  const copy = ui[locale];
  const path = pathFor(locale, "releases");
  const alternatePath = pathFor(otherLocale(locale), "releases");
  return {
    kind: "releases",
    locale,
    current: "releases",
    path,
    alternatePath,
    seo: buildSeo({
      title: copy.releasesMetaTitle,
      description: copy.releasesDescription,
      path,
      alternatePath,
      locale,
      ogImage: site.og.home,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: copy.releasesMetaTitle,
        url: absoluteUrl(path),
        inLanguage: locale === "zh" ? "zh-CN" : "en",
        description: copy.releasesDescription,
      },
    }),
    language: languageLink(locale, alternatePath),
    hero: { eyebrow: site.brand, title: copy.releasesHeadline, lead: copy.releasesLead },
    notesLabel: copy.releaseNotes,
    items: releaseItems(locale),
    undated: { title: copy.releasesUndatedTitle, sub: copy.releasesUndatedSub, items: undatedReleaseItems(locale) },
    feed: { label: copy.aboutFeed, href: "/releases.xml" },
    expectedText: [copy.releasesHeadline, copy.releasesLead, copy.releasesUndatedTitle],
  };
}

/* ---------- Privacy index ---------- */

export type PrivacyPageModel = {
  kind: "privacy";
  locale: Locale;
  current: "privacy";
  path: string;
  alternatePath: string;
  seo: PageSeo;
  language: PageLanguageLink;
  hero: { eyebrow: string; title: string; lead: string };
  columns: { tool: string; network: string; stays: string; details: string };
  rows: Array<{
    name: string;
    href: string;
    icon: string;
    /** Absent when the product's page has no data section yet. */
    privacy?: PrivacySummary & { level: string };
    /** Its "Where your data goes" section, when the page has one. */
    dataHref?: string;
  }>;
  dataLabel: string;
  unstated: string;
  productPage: string;
  /** Shown only while Web Analytics is on, as on About. */
  analytics?: string;
  expectedText: string[];
};

export function privacyPage(locale: Locale): PrivacyPageModel {
  const copy = ui[locale];
  const path = pathFor(locale, "privacy");
  const alternatePath = pathFor(otherLocale(locale), "privacy");
  return {
    kind: "privacy",
    locale,
    current: "privacy",
    path,
    alternatePath,
    seo: buildSeo({
      title: copy.privacyMetaTitle,
      description: copy.privacyDescription,
      path,
      alternatePath,
      locale,
      ogImage: site.og.home,
    }),
    language: languageLink(locale, alternatePath),
    hero: { eyebrow: site.brand, title: copy.privacyHeadline, lead: copy.privacyLead },
    columns: copy.privacyColumns,
    rows: products.map((product) => {
      const privacy = product[locale].privacy;
      const hasData = product[locale].sections.some((section) => section.kind === "data");
      return {
        name: product[locale].title,
        href: pathFor(locale, product.slug),
        icon: product.icon,
        privacy: privacy && { ...privacy, level: copy.privacyLevels[privacy.network] },
        dataHref: hasData ? `${pathFor(locale, product.slug)}#data` : undefined,
      };
    }),
    dataLabel: copy.privacyDataLink,
    unstated: copy.privacyUnstated,
    productPage: copy.privacyProductPage,
    analytics: site.analyticsAutoInjected || site.analyticsToken ? copy.aboutAnalytics : undefined,
    expectedText: [copy.privacyHeadline, copy.privacyColumns.network],
  };
}

/* ---------- Routes ---------- */

export type SitePageModel = HomePageModel | AboutPageModel | ReleasesPageModel | PrivacyPageModel | ProductPageModel;

export const allPages: SitePageModel[] = locales.flatMap((locale) => [
  homePage(locale),
  aboutPage(locale),
  releasesPage(locale),
  privacyPage(locale),
  ...products.map((product) => productPage(product, locale)),
]);

/** The newest release date anywhere, for pages that change with every release. */
export const newestReleaseDate = newestRelease;

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
  /** Section links the local nav shows: the nav items when `sectionIndex`, otherwise none. */
  sectionLinks?: number;
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
  primaryCta: page.kind === "home" || page.kind === "product" ? page.primaryCta : undefined,
  sectionIndex: page.kind === "product" ? page.sectionIndex : undefined,
  sectionLinks: page.kind === "product" ? (page.sectionIndex ? page.navItems.length : 0) : undefined,
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
        // Like the product pages: never the release title, only English lines.
        summary: product.en.catalog.text,
        items: (product.en.releaseHighlights?.version === release.version
          ? product.en.releaseHighlights.items
          : (release.notes?.items ?? [])
        ).filter((line) => inPageLanguage(line, "en")),
      };
    })
    .sort((a, b) => b.published.localeCompare(a.published));
