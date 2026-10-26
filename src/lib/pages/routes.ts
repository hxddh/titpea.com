// Every page model, and what QA needs to know about each route.
import { products } from "../../content/products";
import { locales, type Locale } from "../../content/schema";
import { type CurrentPage, newestRelease } from "./shared";
import { type ProductPageModel, productPage } from "./product";
import { type HomePageModel, homePage } from "./home";
import { type ReleasesPageModel, releasesPage } from "./releases";
import { type AboutPageModel, aboutPage } from "./about";
import { type PrivacyPageModel, privacyPage } from "./privacy";

export type SitePageModel = HomePageModel | AboutPageModel | ReleasesPageModel | PrivacyPageModel | ProductPageModel;

export const allPages: SitePageModel[] = locales.flatMap((locale) => [
  homePage(locale),
  aboutPage(locale),
  releasesPage(locale),
  privacyPage(locale),
  ...products.map((product) => productPage(product, locale)),
]);

/** The newest release date anywhere, for pages that change with every release. */
export const newestReleaseDate = newestRelease;

export const productBySlug = (slug: string) => {
  const product = products.find((item) => item.slug === slug);
  if (!product) throw new Error(`Unknown product: ${slug}`);
  return product;
};

/** What QA needs to know about each route. */
export type SiteRoute = {
  path: string;
  locale: Locale;
  current: CurrentPage;
  kind: SitePageModel["kind"];
  slug?: string;
  title: string;
  canonicalPath: string;
  alternatePath: string;
  ogImage: string;
  expectedText: string[];
  primaryCta?: string;
  sectionIndex?: boolean;
  /** Section links the local nav shows: the nav items when `sectionIndex`, otherwise none. */
  sectionLinks?: number;
  browserVisual?: boolean;
};

export const siteRoutes: SiteRoute[] = allPages.map((page) => ({
  path: page.path,
  locale: page.locale,
  current: page.current,
  kind: page.kind,
  slug: page.kind === "product" ? page.slug : undefined,
  title: page.seo.title,
  canonicalPath: page.seo.canonicalPath,
  alternatePath: page.alternatePath,
  ogImage: page.seo.ogImage,
  expectedText: page.expectedText,
  primaryCta: page.kind === "home" || page.kind === "product" ? page.primaryCta : undefined,
  sectionIndex: page.kind === "product" ? page.sectionIndex : undefined,
  sectionLinks: page.kind === "product" ? (page.sectionIndex ? page.navItems.length : 0) : undefined,
  browserVisual:
    page.kind === "product" ? productBySlug(page.slug).schema.category === "BrowserApplication" : undefined,
}));
