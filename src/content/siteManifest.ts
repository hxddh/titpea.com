import { ui } from "./home";
import { products, productSlugs } from "./products";
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
const ogImages: Record<ProductSlug | "home" | "about", string> = {
  home: "/assets/og-home.png",
  about: "/assets/og-about.png",
  "s3-turbo-list": "/assets/og-s3-turbo-list.png",
  storageops: "/assets/og-storageops.png",
  "world-clock": "/assets/og-world-clock.png",
  "douban-movie-rating": "/assets/og-douban-movie-rating.png",
};

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

function productExpectedText(locale: Locale, slug: ProductSlug) {
  const product = products[slug];
  const copy = product.locales[locale];

  if (product.role === "inventory") return [copy.headline, locale === "zh" ? "自动化" : "Automation"];
  if (product.role === "diagnosis") return [copy.headline, locale === "zh" ? "技能和工具" : "Skills and tools"];
  return [copy.headline, copy.faqLabel ?? (locale === "zh" ? "问题与用法" : "Questions & how-to")];
}

function productRoute(locale: Locale, slug: ProductSlug): SiteRoute {
  const product = products[slug];
  const copy = product.locales[locale];
  const path = pathFor(locale, slug);
  const alternatePath = pathFor(alternateLocale(locale), slug);

  return {
    path,
    locale,
    current: product.current,
    kind: "product",
    slug,
    title: titleFor(copy.title),
    canonicalPath: path,
    alternatePath,
    ogImage: ogImages[slug],
    expectedText: productExpectedText(locale, slug),
    primaryCta: copy.primaryCta.href,
    sectionIndex: product.category === "storage",
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
