import { indexedProduct, localizedProductTitle } from "./productIndex";
import { catalogCopy } from "./i18n/pageCopy";
import { type Locale, type ProductSlug } from "../lib/site";
import { productManifest } from "./productManifest";

export type ProductCatalogItem = {
  id: string;
  number?: string;
  name: string;
  href: string;
  text: string;
  displayRole: string;
  isPrimary?: boolean;
  slug?: ProductSlug;
  group: "storage" | "personal";
};

export function productCatalogModel(locale: Locale) {
  const copy = catalogCopy[locale];
  const catalogText = (slug: ProductSlug): [string, string] => {
    if (slug === "s3-turbo-list") return [copy.s3Text, copy.s3Role];
    if (slug === "storage-agent-workbench") return [copy.workbenchText, copy.workbenchRole];
    if (slug === "storageops") return [copy.storageopsText, copy.storageopsRole];
    if (slug === "httpmon") return [copy.httpmon, copy.httpmonRole];
    if (slug === "world-clock") return [copy.worldClockText, copy.worldClockRole];
    return [copy.doubanText, copy.doubanRole];
  };
  const catalogItems = productManifest.map((item) => {
    const product = indexedProduct(item.slug, locale);
    const [text, displayRole] = catalogText(item.slug);
    return {
      id: item.slug,
      number: item.group === "storage" ? String(item.catalog.order).padStart(2, "0") : undefined,
      name: item.group === "personal" ? localizedProductTitle(item.slug, locale) : product.name,
      href: product.href,
      text,
      displayRole,
      slug: item.slug,
      isPrimary: item.catalog.primary,
      group: item.group,
    } satisfies ProductCatalogItem;
  });
  const storage = catalogItems.filter((item) => item.group === "storage");
  const personal = catalogItems.filter((item) => item.group === "personal");
  const s3 = indexedProduct("s3-turbo-list", locale);

  return {
    storage,
    personal,
    all: [...storage, ...personal],
    featuredProductPath: s3.href,
  };
}
