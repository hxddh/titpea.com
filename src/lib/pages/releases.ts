// Releases: the latest release per product with earlier ones, the undated list, and the Atom feed.
import { products } from "../../content/products";
import { absoluteUrl, site, ui } from "../../content/site";
import { type Locale } from "../../content/schema";
import { formatDate, inPageLanguage, otherLocale, pathFor, releaseTags, releasedOf, versionOf } from "./shared";
import { type PageLanguageLink, type PageSeo, buildSeo, languageLink } from "./seo";

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
  /** Up to four releases before this one, newest first: tag and date only. */
  earlier: Array<{ version: string; published: string; released?: string }>;
};

/** Every product with a release, newest first, each with one highlight in the page's language or none. */
export function releaseItems(locale: Locale): ReleaseItem[] {
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
      copy.releasesUndatedTitle,
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
