import manifest from "./siteManifest.json";
import type { CurrentPage, Locale, ProductSlug } from "../lib/site";

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

export const siteRoutes = manifest.routes as SiteRoute[];

export function routeForPath(path: string) {
  return siteRoutes.find((route) => route.path === path);
}

export function routeForPage(locale: Locale, current: CurrentPage) {
  return siteRoutes.find((route) => route.locale === locale && route.current === current);
}

export function routeForProduct(locale: Locale, slug: ProductSlug) {
  return siteRoutes.find((route) => route.locale === locale && route.slug === slug);
}
