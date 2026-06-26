import { buildAboutPage } from "./pages/about";
import { buildHomePage } from "./pages/home";
import { buildProductPage } from "./pages/product";
import { productSlugs } from "./products";
import type {
  AboutPageModel,
  HomePageModel,
  PageLanguageLink,
  PageSeo,
  ProductPageModel,
  SitePageModel,
  SiteRoute,
} from "./pages/types";
import type { Locale, ProductSlug } from "../lib/site";

const locales: Locale[] = ["en", "zh"];

export function pageModels(locale: Locale): SitePageModel[] {
  return [buildHomePage(locale), buildAboutPage(locale), ...productSlugs.map((slug) => buildProductPage(slug, locale))];
}

export const allPageModels: SitePageModel[] = locales.flatMap((locale) => pageModels(locale));

export function routeFromModel(model: SitePageModel): SiteRoute {
  return {
    path: model.path,
    locale: model.locale,
    current: model.current,
    kind: model.kind,
    slug: model.kind === "product" ? model.slug : undefined,
    title: model.seo.title,
    canonicalPath: model.seo.canonicalPath,
    alternatePath: model.alternatePath,
    ogImage: model.seo.ogImage,
    ogImageUrl: model.seo.ogImageUrl,
    expectedText: model.expectedText,
    primaryCta: "primaryCta" in model ? model.primaryCta : undefined,
    sectionIndex: model.kind === "product" ? model.sectionIndex : undefined,
  };
}

export const siteRoutes: SiteRoute[] = allPageModels.map(routeFromModel);

export function homeModel(locale: Locale): HomePageModel {
  return buildHomePage(locale);
}

export function aboutModel(locale: Locale): AboutPageModel {
  return buildAboutPage(locale);
}

export function productModel(slug: ProductSlug, locale: Locale): ProductPageModel {
  return buildProductPage(slug, locale);
}

export type { AboutPageModel, HomePageModel, PageLanguageLink, PageSeo, ProductPageModel, SitePageModel, SiteRoute };
