import { ui } from "./home";
import { productSlugs, products } from "./products";
import { productPageModel } from "./productPageModel";
import { pathFor, type CurrentPage, type Locale, type ProductSlug } from "../lib/site";

export type SiteRoute = {
  path: string;
  locale: Locale;
  current: CurrentPage;
  kind: "home" | "about" | "product";
  slug?: ProductSlug;
  title: string;
  canonicalPath: string;
  alternatePath: string;
  ogImage: string;
  expectedText: string[];
  primaryCta?: string;
  sectionIndex?: boolean;
};

const locales: Locale[] = ["en", "zh"];
const ogImages = {
  home: "/assets/og-home.png",
  about: "/assets/og-about.png",
} as const;

const titleFor = (title: string) => (title === "Titpea" ? title : `${title} - Titpea`);
const alternateLocale = (locale: Locale): Locale => (locale === "zh" ? "en" : "zh");

function pageRoute(locale: Locale, current: "home" | "about"): SiteRoute {
  const copy = ui[locale];
  const isHome = current === "home";
  const path = pathFor(locale, isHome ? undefined : "about");
  const alternatePath = pathFor(alternateLocale(locale), isHome ? undefined : "about");

  return {
    path,
    locale,
    current,
    kind: current,
    title: isHome ? "Titpea" : titleFor(copy.aboutTitle),
    canonicalPath: path,
    alternatePath,
    ogImage: ogImages[current],
    expectedText: isHome
      ? [copy.homeTitle, locale === "zh" ? "先看事实" : "Product evidence"]
      : [copy.aboutHeadline, copy.profileTitle],
    primaryCta: isHome ? pathFor(locale, "s3-turbo-list") : undefined,
  };
}

function productRoute(locale: Locale, slug: ProductSlug): SiteRoute {
  const model = productPageModel(products[slug], locale);

  return {
    path: model.path,
    locale,
    current: model.current,
    kind: "product",
    slug,
    title: titleFor(model.title),
    canonicalPath: model.path,
    alternatePath: model.alternatePath,
    ogImage: model.ogImage,
    expectedText: model.expectedText,
    primaryCta: model.primaryCta,
    sectionIndex: model.sectionIndex,
  };
}

export const siteRoutes: SiteRoute[] = locales.flatMap((locale) => [
  pageRoute(locale, "home"),
  pageRoute(locale, "about"),
  ...productSlugs.map((slug) => productRoute(locale, slug)),
]);

export function routeForPath(path: string) {
  return siteRoutes.find((route) => route.path === path);
}

export function routeForPage(locale: Locale, current: CurrentPage) {
  return siteRoutes.find((route) => route.locale === locale && route.current === current);
}

export function routeForProduct(locale: Locale, slug: ProductSlug) {
  return siteRoutes.find((route) => route.locale === locale && route.slug === slug);
}
