// Releases: the latest release per product with earlier ones, the undated list, and the Atom feed.
import { headingText } from "../heading";
import { products } from "../../content/products";
import { absoluteUrl, site, ui } from "../../content/site";
import { type Locale } from "../../content/schema";
import { formatDate, otherLocale, pathFor, releaseTags, releasedOf, versionOf } from "./shared";
import { type PageLanguageLink, type PageSeo, buildSeo, languageLink } from "./seo";

export type ReleaseItem = {
  name: string;
  href: string;
  icon: string;
  version: string;
  released?: string;
  /** Machine-readable publish date (YYYY-MM-DD). */
  published?: string;
  /** A hand-written one-line summary (releaseHighlights) for this tag, or none. */
  summary?: string;
  /**
   * What changed, from the product's hand-written highlights for exactly this
   * tag, in both languages or neither. A tag without them shows its date and
   * a link to its notes, never lines quoted raw from GitHub.
   */
  items: string[];
  /** The release's full notes on GitHub. */
  notesUrl: string;
  /** Up to four releases before this one, newest first: tag and date only. */
  earlier: Array<{ version: string; published: string; released?: string }>;
};

/** Every product with a release, newest first, each with one highlight in the page's language or none. */
export function releaseItems(locale: Locale): ReleaseItem[] {
  return products
    .filter((product) => releaseTags[product.slug])
    .sort((a, b) => (releaseTags[b.slug]?.published ?? "").localeCompare(releaseTags[a.slug]?.published ?? ""))
    .map((product) => {
      const release = releaseTags[product.slug];
      const current = currentHighlights(product, locale);
      const items = current?.items.slice(0, 4) ?? [];
      const summary = current?.summary;
      return {
        name: product[locale].title,
        href: pathFor(locale, product.slug),
        icon: product.icon,
        version: release.version,
        released: releasedOf(product.slug, locale),
        published: release.published,
        summary,
        items,
        notesUrl: notesUrlOf(product.slug),
        earlier: (release.history ?? [])
          .filter((entry) => entry.version !== release.version)
          .slice(0, 4)
          .map((entry) => ({
            version: entry.version,
            published: entry.published,
            released: formatDate(entry.published, locale),
          })),
      };
    });
}

/** A product without synced releases: the version its own file states, if any, and no date. */
export type UndatedReleaseItem = { name: string; href: string; icon: string; version?: string };

function undatedReleaseItems(locale: Locale): UndatedReleaseItem[] {
  return products
    .filter((product) => !releaseTags[product.slug])
    .map((product) => ({
      name: product[locale].title,
      href: pathFor(locale, product.slug),
      icon: product.icon,
      version: versionOf(product.slug),
    }));
}

/** The product's hand-written highlights, only while they describe its current release. */
export function currentHighlights(product: (typeof products)[number], locale: Locale) {
  const highlights = product[locale].releaseHighlights;
  return highlights && highlights.version === versionOf(product.slug) ? highlights : undefined;
}

/** Where a release's full notes are: its GitHub release, or its PyPI page. */
export function notesUrlOf(slug: string): string {
  const release = releaseTags[slug];
  if (release.pypi) return `https://pypi.org/project/${release.pypi}/${release.version.replace(/^v/, "")}/`;
  return (
    release.notes?.url ?? `https://github.com/${release.repo}/releases/tag/${release.tagPrefix ?? ""}${release.version}`
  );
}

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
  earlierLabel: string;
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
  const items = releaseItems(locale);
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
    earlierLabel: copy.releasesEarlier,
    items,
    undated: { title: copy.releasesUndatedTitle, sub: copy.releasesUndatedSub, items: undatedReleaseItems(locale) },
    feed: { label: copy.aboutFeed, href: "/releases.xml" },
    expectedText: [
      copy.releasesHeadline,
      copy.releasesLead,
      // The heading as the page sets it: a label, without its closing period.
      headingText(copy.releasesUndatedTitle),
      ...(items.some((item) => item.earlier.length > 0) ? [copy.releasesEarlier] : []),
    ],
  };
}

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
        notesUrl: notesUrlOf(product.slug),
        summary: product.en.summary,
        items: currentHighlights(product, "en")?.items ?? [],
      };
    })
    .sort((a, b) => b.published.localeCompare(a.published));
