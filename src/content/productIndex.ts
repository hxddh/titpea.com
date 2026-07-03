import { products } from "./products";
import { pathFor, type Locale, type ProductSlug } from "../lib/site";

export type IndexedProduct = {
  slug: ProductSlug;
  name: string;
  href: string;
  group: "storage" | "personal";
};

export function indexedProduct(slug: ProductSlug, locale: Locale): IndexedProduct {
  return {
    slug,
    name: products[slug].name,
    href: pathFor(locale, slug),
    group: products[slug].archetype === "browserExtension" ? "personal" : "storage",
  };
}

export function localizedProductTitle(slug: ProductSlug, locale: Locale) {
  return products[slug].locales[locale].title;
}
