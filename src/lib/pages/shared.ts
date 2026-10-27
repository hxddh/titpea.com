// Shared by every page model: paths, titles, release tags and dates, and the
// checks that both languages show the same things.
import releases from "../../content/releases.json";
import { products } from "../../content/products";
import { about, site } from "../../content/site";
import { type Locale } from "../../content/schema";

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

export type ReleaseNotes = { summary: string; items: string[]; url: string };
/** One of a repository's last releases (scripts/sync-releases.mjs); the title is stored, never shown. */
type ReleaseHistoryEntry = { version: string; published: string; title: string };
export const releaseTags = releases as Record<
  string,
  { repo: string; version: string; published?: string; notes?: ReleaseNotes; history?: ReleaseHistoryEntry[] }
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

export const otherLocale = (locale: Locale): Locale => (locale === "zh" ? "en" : "zh");
export const pageTitle = (title: string) => (title === site.brand ? title : `${title} — ${site.brand}`);

/** Copy without its `code` markers, for structured data and meta text. */
export const plainText = (text: string) => text.replaceAll("`", "");

const hasChinese = (text: string) => /[\u4e00-\u9fff]/.test(text);
/** Release notes are quoted only in the page's own language, line by line. */
export const inPageLanguage = (line: string | undefined, locale: Locale): line is string =>
  Boolean(line) && (locale === "zh") === hasChinese(line!);

/** "Oct 17, 2026" / "2026年10月17日" from a YYYY-MM-DD date. */
export function formatDate(date: string | undefined, locale: Locale) {
  const match = date?.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return undefined;
  const [, year, month, day] = match.map(Number);
  return locale === "zh" ? `${year}年${month}月${day}日` : `${months[month - 1]} ${day}, ${year}`;
}

export const newestRelease = () =>
  Object.values(releaseTags)
    .map((entry) => entry.published ?? "")
    .sort()
    .at(-1);
