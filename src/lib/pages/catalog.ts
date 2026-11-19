// Catalog items (Home, menus, related products) and families (product pages).
import { products } from "../../content/products";
import { familyMembers, familyOf, ui } from "../../content/site";
import { type FamilyId, type Line, type Locale, type Product } from "../../content/schema";
import { pathFor } from "./shared";
import { filterKeys, productFacts, type ProductFacts } from "./facts";

export type CatalogItem = {
  slug: string;
  line: Line;
  name: string;
  href: string;
  /** The one line of value. */
  text: string;
  icon: string;
  facts: ProductFacts;
  /** Home's filter keys: platform ids, and `cli`. */
  filters: string[];
};

/** Products that work together, in order, each with its step. `current` marks this page. */
export type Family = {
  id: FamilyId;
  title: string;
  members: Array<{ slug: string; name: string; href: string; icon: string; role: string; current: boolean }>;
};

export const catalogItem = (product: Product, locale: Locale): CatalogItem => ({
  slug: product.slug,
  line: product.line,
  name: product[locale].title,
  href: pathFor(locale, product.slug),
  text: product[locale].summary,
  icon: product.icon,
  facts: productFacts(product, locale),
  filters: filterKeys(product),
});

export function familyFor(slug: string, locale: Locale): Family | undefined {
  const id = familyOf(slug);
  return id ? familyModel(id, locale, slug) : undefined;
}

/**
 * A product outside any family ends on up to three others of its line, the
 * ones after it in site order first, so neighbours point at each other
 * instead of all at the line's first products.
 */
export function relatedFor(product: Product, locale: Locale): { title: string; items: CatalogItem[] } | undefined {
  const line = products.filter((candidate) => candidate.line === product.line);
  const at = line.indexOf(product);
  const others = [...line.slice(at + 1), ...line.slice(0, at)].slice(0, 3);
  if (others.length === 0) return undefined;
  const copy = ui[locale];
  return {
    title: copy.moreIn.replace("{line}", copy.groups[product.line]),
    items: others.map((other) => catalogItem(other, locale)),
  };
}

function familyModel(id: FamilyId, locale: Locale, current?: string): Family {
  const copy = ui[locale].families[id];
  return {
    id,
    title: copy.title,
    members: familyMembers[id].map((member) => {
      const product = products.find((candidate) => candidate.slug === member)!;
      return {
        slug: member,
        name: product[locale].title,
        href: pathFor(locale, member),
        icon: product.icon,
        role: copy.roles[member],
        current: member === current,
      };
    }),
  };
}
