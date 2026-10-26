// Home: hero, then the catalog: featured work, then every other product by line.
import { products } from "../../content/products";
import { absoluteUrl, site, ui } from "../../content/site";
import { featuredSrc, lines, type Line, type Locale } from "../../content/schema";
import { otherLocale, pathFor } from "./shared";
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
    browse: string;
    about: { label: string; href: string };
  };
  /** The first, larger cards of the catalog (not a section of their own). */
  featured: {
    /** Names the featured row for assistive tech. */
    title: string;
    learnMore: string;
    items: Array<
      CatalogItem & {
        image: { src: string; alt: string; width: number; height: number };
        caption?: string;
      }
    >;
  };
  /** Every tool: after the featured row, every other product by line, in site order. */
  more: {
    title: string;
    groups: Array<{ line: Line; label: string; items: CatalogItem[] }>;
  };
  primaryCta: string;
  expectedText: string[];
};

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
    // Every other product, under its line (the header menu's names and order).
    more: {
      title: copy.moreToolsTitle,
      groups: lines
        .map((line) => ({
          line,
          label: copy.groups[line],
          items: products
            .filter((product) => product.line === line && !product.featured)
            .map((product) => catalogItem(product, locale)),
        }))
        .filter((group) => group.items.length > 0),
    },
    // The hero's primary button jumps to the full catalog.
    primaryCta: `${path}#more-title`,
    expectedText: [copy.homeTitle.replaceAll("|", ""), copy.homeLead, copy.moreToolsTitle],
  };
}
