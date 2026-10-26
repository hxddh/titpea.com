// Product pages: copy with its synced version, structured data, local nav, what's new.
import { absoluteUrl, site, ui } from "../../content/site";
import { type Line, type Locale, type Product, type ProductCopy, type ReleaseHighlights } from "../../content/schema";
import {
  type ReleaseNotes,
  inPageLanguage,
  otherLocale,
  pageTitle,
  pathFor,
  plainText,
  releaseTags,
  releasedOf,
  versionOf,
} from "./shared";
import { type PageLanguageLink, type PageSeo, buildSeo, languageLink } from "./seo";
import { maxNavLinks } from "./nav";
import { type CatalogItem, type Family, familyFor, relatedFor } from "./catalog";

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
  /** Members of a family see the whole family, with this page marked, above the related row. */
  family?: Family;
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
    ...(product.price === "unannounced" ? {} : { offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }),
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
    family: familyFor(product.slug, locale),
    primaryCta: copy.primaryCta.soon ? undefined : copy.primaryCta.href,
    expectedText: [copy.headline, copy.primaryCta.label],
  };
}

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
