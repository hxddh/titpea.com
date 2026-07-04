import { productCatalogModel } from "./productCatalogModel";
import type { ProductSlug } from "../lib/site";
import type { Locale } from "../lib/site";

export function relatedProducts(slug: ProductSlug, locale: Locale, group: "storage" | "personal") {
  const catalog = productCatalogModel(locale);
  const items = group === "storage" ? catalog.storage : catalog.personal;
  return items.filter((item) => item.slug !== slug).slice(0, 2);
}
