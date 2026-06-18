import { products } from "./products";
import { siteConfig } from "./siteConfig";
import { pathFor, type Locale, type ProductSlug } from "../lib/site";

export type IndexedProduct = {
  slug: ProductSlug;
  name: string;
  href: string;
  group: "storage" | "browser";
};

export type ExternalProject = {
  id: "https-traffic-inspector";
  name: string;
  href: string;
  group: "external";
};

export function indexedProduct(slug: ProductSlug, locale: Locale): IndexedProduct {
  return {
    slug,
    name: products[slug].name,
    href: pathFor(locale, slug),
    group: products[slug].archetype === "browserExtension" ? "browser" : "storage",
  };
}

export function localizedProductTitle(slug: ProductSlug, locale: Locale) {
  return products[slug].locales[locale].title;
}

export const externalProjects: Record<ExternalProject["id"], ExternalProject> = {
  "https-traffic-inspector": {
    id: "https-traffic-inspector",
    name: "https-traffic-inspector",
    href: siteConfig.externalLinks.httpmon,
    group: "external",
  },
};
