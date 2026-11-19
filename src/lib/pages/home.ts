// Home: hero, then the catalog: featured work, then every other product by line.
import { products } from "../../content/products";
import { absoluteUrl, site, ui } from "../../content/site";
import { featuredSrc, lines, platformOrder, type Line, type Locale } from "../../content/schema";
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
    about: { label: string; href: string };
  };
  /** The picks: three products, each with a capture, its claim and its latest tag. */
  featured: {
    title: string;
    items: Array<
      CatalogItem & {
        eyebrow: string;
        headline: string;
        image: { src: string; width: number; height: number };
        caption?: string;
      }
    >;
  };
  /** The index: every product by line, in site order, the picks included, with filters. */
  more: {
    title: string;
    filters: {
      lineLabel: string;
      platformLabel: string;
      empty: string;
      lines: Array<{ key: string; label: string }>;
      platforms: Array<{ key: string; label: string }>;
    };
    groups: Array<{ line: Line; label: string; count: string; items: CatalogItem[] }>;
  };
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
      about: { label: copy.aboutMore, href: pathFor(locale, "about") },
    },
    featured: {
      title: copy.featuredTitle,
      items: featured.map((product) => {
        const { image } = product.featured!;
        const visual = product[locale].visual;
        return {
          ...catalogItem(product, locale),
          eyebrow: product[locale].eyebrow,
          headline: product[locale].headline,
          image:
            visual.kind === "screenshot" ? visual.image : { ...image, src: featuredSrc(product.featured!, locale) },
          caption: product.featured!.caption?.[locale],
        };
      }),
    },
    more: {
      title: copy.moreToolsTitle,
      filters: {
        lineLabel: copy.filterLine,
        platformLabel: copy.filterPlatform,
        empty: copy.filterEmpty,
        lines: [
          { key: "all", label: copy.allLabel },
          ...lines.map((line) => ({ key: line, label: copy.groups[line] })),
        ],
        platforms: [
          { key: "all", label: copy.allLabel },
          ...platformOrder
            .filter((id) => products.some((product) => product.platforms.some((platform) => platform.id === id)))
            .map((id) => ({ key: id, label: copy.platforms[id].name })),
          { key: "cli", label: copy.commandLine },
        ],
      },
      groups: lines.map((line) => {
        const items = products
          .filter((product) => product.line === line)
          .map((product) => catalogItem(product, locale));
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
