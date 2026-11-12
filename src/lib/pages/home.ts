// Home: hero, then the catalog: featured work, then every other product by line.
import { products } from "../../content/products";
import { absoluteUrl, site, ui } from "../../content/site";
import { featuredSrc, lines, type Line, type Locale } from "../../content/schema";
import { formatDate, otherLocale, pathFor, releaseTags } from "./shared";
import { type PageLanguageLink, type PageSeo, buildSeo, languageLink } from "./seo";
import { type CatalogItem, catalogItem } from "./catalog";

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
    about: { label: string; href: string };
  };
  /** The picks: up to three products, each with a capture and its latest tag. */
  featured: {
    title: string;
    items: Array<
      IndexItem & {
        /** The whole window where the page has one: the stage shows its top-left corner at reading scale. */
        image: { src: string; width: number; height: number };
        caption?: string;
      }
    >;
  };
  /** The index: every product by line, in site order, the picks included. */
  more: {
    /** Names the index for assistive tech. */
    title: string;
    groups: Array<{ line: Line; label: string; count: string; items: IndexItem[] }>;
  };
  expectedText: string[];
};

/** A product in Home's index: its catalog item, and its latest release tag and date when it has one. */
export type IndexItem = CatalogItem & { version?: string; released?: string };

const indexItem = (product: (typeof products)[number], locale: Locale): IndexItem => ({
  ...catalogItem(product, locale),
  version: releaseTags[product.slug]?.version,
  released: formatDate(releaseTags[product.slug]?.published, locale),
});

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
      about: { label: copy.aboutMore, href: pathFor(locale, "about") },
    },
    featured: {
      title: copy.featuredTitle,
      items: featured.map((product) => {
        const { image } = product.featured!;
        const visual = product[locale].visual;
        return {
          ...indexItem(product, locale),
          image:
            visual.kind === "screenshot" ? visual.image : { ...image, src: featuredSrc(product.featured!, locale) },
          caption: product.featured!.caption?.[locale],
        };
      }),
    },
    more: {
      title: copy.moreToolsTitle,
      groups: lines.map((line) => {
        const items = products.filter((product) => product.line === line).map((product) => indexItem(product, locale));
        return {
          line,
          label: copy.groups[line],
          count: (line === "games" ? copy.gameCount : copy.toolCount).replace("{count}", String(items.length)),
          items,
        };
      }),
    },
    expectedText: [copy.homeLead, copy.featuredTitle, copy.groups.storage],
  };
}
