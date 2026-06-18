import { aboutPageModel } from "./aboutPageModel";
import { homePageModel } from "./homePageModel";
import { productPageModel } from "./productPageModel";
import { productSlugs, products } from "./products";
import type { ProductPageModel } from "./productPageTypes";
import type { CurrentPage, Locale, ProductSlug } from "../lib/site";

export type UtilityPageModel = ReturnType<typeof homePageModel> | ReturnType<typeof aboutPageModel>;
export type SitePageModel = UtilityPageModel | ProductPageModel;

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
const titleFor = (title: string) => (title === "Titpea" ? title : `${title} - Titpea`);

export function sitePageModels(locale: Locale): SitePageModel[] {
  return [
    homePageModel(locale),
    aboutPageModel(locale),
    ...productSlugs.map((slug) => productPageModel(products[slug], locale)),
  ];
}

export const allSitePageModels: SitePageModel[] = locales.flatMap((locale) => sitePageModels(locale));

export function routeFromModel(model: SitePageModel): SiteRoute {
  return {
    path: model.path,
    locale: model.locale,
    current: model.current,
    kind: model.kind,
    slug: model.kind === "product" ? model.slug : undefined,
    title: titleFor(model.title),
    canonicalPath: model.path,
    alternatePath: model.alternatePath,
    ogImage: model.ogImage,
    expectedText: model.expectedText,
    primaryCta: "primaryCta" in model ? model.primaryCta : undefined,
    sectionIndex: model.kind === "product" ? model.sectionIndex : undefined,
  };
}

export const siteRoutes: SiteRoute[] = allSitePageModels.map(routeFromModel);

export function routeForPath(path: string) {
  return siteRoutes.find((route) => route.path === path);
}

export function routeForPage(locale: Locale, current: CurrentPage) {
  return siteRoutes.find((route) => route.locale === locale && route.current === current);
}

export function routeForProduct(locale: Locale, slug: ProductSlug) {
  return siteRoutes.find((route) => route.locale === locale && route.slug === slug);
}
