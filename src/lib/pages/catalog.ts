// Catalog cards, families and the related row, shared by Home and product pages.
import { products } from "../../content/products";
import { familyMembers, familyOf, ui } from "../../content/site";
import {
  featuredSrc,
  type FamilyId,
  type Locale,
  type Platform,
  type Product,
  type Purpose,
} from "../../content/schema";
import { pathFor } from "./shared";

export type CatalogItem = {
  slug: string;
  name: string;
  href: string;
  role: string;
  text: string;
  icon: string;
};

/** A catalog card: the item, a thumbnail, chips, and the facet values it answers to. */
export type CatalogCardItem = CatalogItem & {
  thumb:
    | { kind: "image"; src: string; width: number; height: number }
    | { kind: "command"; command: string }
    | { kind: "icon" };
  chips: Array<{ label: string; tone?: "status" }>;
  purposes: Purpose[];
  runsOn: Platform[];
};

/** Products that work together, in order, each with its step. `current` marks this page. */
export type Family = {
  id: FamilyId;
  title: string;
  sub: string;
  members: Array<{ slug: string; name: string; href: string; icon: string; role: string; current: boolean }>;
};

export const catalogItem = (product: Product, locale: Locale): CatalogItem => ({
  slug: product.slug,
  name: product[locale].title,
  href: pathFor(locale, product.slug),
  // Cards without a catalog role fall back to the product eyebrow, so every card has a kicker.
  role: product[locale].catalog.role || product[locale].eyebrow,
  text: product[locale].catalog.text,
  icon: product.icon,
});

/**
 * The catalog thumbnail: the hero screenshot, the Home photograph, or the
 * first showcase, whichever exists first; tools without a picture show their
 * first command; anything else shows its icon.
 */
function thumbFor(product: Product, locale: Locale): CatalogCardItem["thumb"] {
  const copy = product[locale];
  const image =
    copy.visual.kind === "screenshot"
      ? copy.visual.image
      : product.featured
        ? { ...product.featured.image, src: featuredSrc(product.featured, locale) }
        : copy.showcases?.[0];
  if (image) return { kind: "image", src: image.src, width: image.width, height: image.height };
  const command = copy.commands?.items[0]?.command;
  if (command) return { kind: "command", command };
  return { kind: "icon" };
}

export const catalogCard = (product: Product, locale: Locale): CatalogCardItem => {
  const copy = ui[locale];
  return {
    ...catalogItem(product, locale),
    thumb: thumbFor(product, locale),
    chips: [
      { label: copy.types[product.type] },
      // A platform that only repeats the type ("Chrome extension" · "Chrome") adds nothing.
      ...product.runsOn
        .filter((platform) => !copy.types[product.type].includes(copy.platforms[platform]))
        .map((platform) => ({ label: copy.platforms[platform] })),
      ...(product.status === "preview" ? [{ label: copy.statusPreview, tone: "status" as const }] : []),
    ],
    purposes: product.purposes,
    runsOn: product.runsOn,
  };
};

export function familyFor(slug: string, locale: Locale): Family | undefined {
  const id = familyOf(slug);
  return id ? familyModel(id, locale, slug) : undefined;
}

export function familyModel(id: FamilyId, locale: Locale, current?: string): Family {
  const copy = ui[locale].families[id];
  return {
    id,
    title: copy.title,
    sub: copy.sub,
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

/**
 * Up to three other products to read next: the rest of this product's line
 * in site order after it, then the other lines, so the list never runs dry.
 */
export function relatedFor(product: Product, locale: Locale) {
  const copy = ui[locale];
  const index = products.indexOf(product);
  const after = [...products.slice(index + 1), ...products.slice(0, index)];
  const items = [
    ...after.filter((other) => other.line === product.line),
    ...after.filter((other) => other.line !== product.line),
  ].slice(0, 3);
  const sameLine = items.every((other) => other.line === product.line);
  // "更多 Agent 工具": Latin words inside Chinese take spaces.
  const line = copy.groups[product.line];
  const lineLabel = locale === "zh" && /[A-Za-z]/.test(line) ? ` ${line} ` : line;
  return {
    title: sameLine ? copy.relatedInLine.replace("{line}", lineLabel) : copy.relatedTitle,
    items: items.map((other) => catalogItem(other, locale)),
    all: { label: copy.browseAllTools, href: `${pathFor(locale)}#more-title` },
  };
}
