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
  badge?: string;
  isPrimary?: boolean;
  slug?: ProductSlug;
  group: "storage" | "personal";
};

function catalogBadge(slug: ProductSlug, locale: Locale): string | undefined {
  const copy = catalogCopy[locale];
  if (slug === "storage-agent-workbench" || slug === "pagewise") return copy.badgeDesktop;
  if (slug === "world-clock" || slug === "douban-movie-rating") return copy.badgeExtension;
  if (slug === "s3-turbo-list" || slug === "httpmon" || slug === "agent-radar") return copy.badgeCli;
  if (slug === "storageops") return copy.badgePackage;
  return undefined;
}

function sortForDisplay(items: Array<ProductCatalogItem & { order: number }>) {
  return [...items].sort((left, right) => {
    if (Boolean(left.isPrimary) !== Boolean(right.isPrimary)) return left.isPrimary ? -1 : 1;
    return left.order - right.order;
  });
}

export function productCatalogModel(locale: Locale) {
  const copy = catalogCopy[locale];
  const catalogText = (slug: ProductSlug): [string, string] => {
    if (slug === "s3-turbo-list") return [copy.s3Text, copy.s3Role];
    if (slug === "storage-agent-workbench") return [copy.workbenchText, copy.workbenchRole];
    if (slug === "storageops") return [copy.storageopsText, copy.storageopsRole];
    if (slug === "httpmon") return [copy.httpmon, copy.httpmonRole];
    if (slug === "pagewise") return [copy.pagewiseText, copy.pagewiseRole];
    if (slug === "agent-radar") return [copy.agentRadarText, copy.agentRadarRole];
    if (slug === "world-clock") return [copy.worldClockText, copy.worldClockRole];
    return [copy.doubanText, copy.doubanRole];
  };

  const raw = productManifest.map((item) => {
    const product = indexedProduct(item.slug, locale);
    const [text, displayRole] = catalogText(item.slug);
    return {
      id: item.slug,
      name: item.group === "personal" ? localizedProductTitle(item.slug, locale) : product.name,
      href: product.href,
      text,
      displayRole,
      badge: catalogBadge(item.slug, locale),
      slug: item.slug,
      isPrimary: item.catalog.primary,
      group: item.group,
      order: item.catalog.order,
    };
  });

  // Primary first, then catalog order. Renumber storage for display so labels match layout.
  const storageSorted = sortForDisplay(raw.filter((item) => item.group === "storage"));
  const personalSorted = sortForDisplay(raw.filter((item) => item.group === "personal"));

  const storage: ProductCatalogItem[] = storageSorted.map((item, index) => ({
    id: item.id,
    number: String(index + 1).padStart(2, "0"),
    name: item.name,
    href: item.href,
    text: item.text,
    displayRole: item.displayRole,
    badge: item.badge,
    isPrimary: item.isPrimary,
    slug: item.slug,
    group: item.group,
  }));

  const personal: ProductCatalogItem[] = personalSorted.map((item) => ({
    id: item.id,
    name: item.name,
    href: item.href,
    text: item.text,
    displayRole: item.displayRole,
    badge: item.badge,
    isPrimary: item.isPrimary,
    slug: item.slug,
    group: item.group,
  }));

  const flagship = storage.find((item) => item.slug === "storage-agent-workbench") ?? storage[0];
  const personalFlagship = personal.find((item) => item.slug === "pagewise") ?? personal[0];

  return {
    storage,
    personal,
    all: [...storage, ...personal],
    featuredProductPath: flagship?.href ?? storage[0]?.href ?? "/",
    flagship,
    personalFlagship,
  };
}
