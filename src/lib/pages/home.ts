// Home: hero, featured work, the shipping strip, families and the faceted catalog.
import { products } from "../../content/products";
import { absoluteUrl, familyMembers, site, ui } from "../../content/site";
import { featuredSrc, type FamilyId, type Locale, type Platform, type Purpose } from "../../content/schema";
import { otherLocale, pathFor } from "./shared";
import { type PageLanguageLink, type PageSeo, buildSeo, languageLink } from "./seo";
import { type CatalogCardItem, type CatalogItem, type Family, catalogCard, catalogItem, familyModel } from "./catalog";
import { type ReleaseItem, releaseItems } from "./releases";

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
        purposes: Purpose[];
        runsOn: Platform[];
      }
    >;
  };
  shipping: { title: string; more: { label: string; href: string }; items: ReleaseItem[] };
  families: Family[];
  more: {
    title: string;
    filter: {
      label: string;
      all: string;
      forLabel: string;
      runsOnLabel: string;
      purposes: Array<{ value: Purpose; label: string }>;
      platforms: Array<{ value: Platform; label: string }>;
      /** `{count}` is replaced in the page as filters change. */
      count: string;
      none: string;
    };
    items: CatalogCardItem[];
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
          purposes: product.purposes,
          runsOn: product.runsOn,
        };
      }),
    },
    // What shipped last: release cadence is the plainest evidence the tools are alive.
    shipping: {
      title: copy.shippingTitle,
      more: { label: copy.shippingMore, href: pathFor(locale, "releases") },
      items: releaseItems(locale).slice(0, 3),
    },
    families: (Object.keys(familyMembers) as FamilyId[]).map((id) => familyModel(id, locale)),
    // Every other product; the featured ones lead the same catalog as larger
    // cards, so a filtered view is still complete.
    more: {
      title: copy.moreToolsTitle,
      filter: {
        label: copy.filterLabel,
        all: copy.filterAll,
        forLabel: copy.filterFor,
        runsOnLabel: copy.filterRunsOn,
        // Only values some product answers to, in schema order.
        purposes: (Object.keys(copy.purposes) as Purpose[])
          .filter((value) => products.some((product) => product.purposes.includes(value)))
          .map((value) => ({ value, label: copy.purposes[value] })),
        platforms: (Object.keys(copy.platforms) as Platform[])
          .filter((value) => products.some((product) => product.runsOn.includes(value)))
          .map((value) => ({ value, label: copy.platforms[value] })),
        count: copy.filterCount,
        none: copy.filterNone,
      },
      items: products.filter((product) => !product.featured).map((product) => catalogCard(product, locale)),
    },
    // The hero's primary button jumps to the full catalog.
    primaryCta: `${path}#more-title`,
    expectedText: [copy.homeTitle.replaceAll("|", ""), copy.homeLead, copy.moreToolsTitle],
  };
}
