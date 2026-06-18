import type { Locale, ProductArchetype, ProductContentCard, ProductCopy } from "../lib/site";
import {
  productArchetypeLayouts,
  type ArchetypeSectionSpec,
  type ContentSectionId,
  type SectionLayout,
} from "./productArchetypes";

export type ProductSection =
  | {
      id: "positioning" | "features" | "workflow" | "automation" | "examples";
      kind: "cards";
      label: string;
      items: ProductContentCard[];
      layout?: SectionLayout;
      numbered?: boolean;
    }
  | {
      id: "story";
      kind: "story";
      label: string;
      title: string;
      body: string[];
    }
  | {
      id: "cases";
      kind: "cases";
      label: string;
      title: string;
      body?: string;
      items: string[];
    }
  | {
      id: "faq";
      kind: "faq";
      label: string;
      items: ProductContentCard[];
    };

const section = <T extends ProductSection>(value: T) => value;
const contentIds = new Set<ContentSectionId>([
  "positioning",
  "features",
  "workflow",
  "automation",
  "examples",
  "story",
  "cases",
  "faq",
]);

function cardItems(copy: ProductCopy, spec: ArchetypeSectionSpec) {
  const sources = spec.mergeSources ?? (spec.source ? [spec.source] : []);
  return sources.flatMap((source) => copy[source] ?? []);
}

function sectionFromSpec(locale: Locale, copy: ProductCopy, spec: ArchetypeSectionSpec): ProductSection | null {
  if (!contentIds.has(spec.id as ContentSectionId)) return null;

  const label = spec.label[locale];

  if (spec.id === "story") {
    return section({
      id: "story",
      kind: "story",
      label,
      title: copy.rationaleTitle,
      body: copy.rationaleBody,
    });
  }

  if (spec.id === "cases") {
    if (!copy.cases || !copy.casesTitle) return null;
    return section({
      id: "cases",
      kind: "cases",
      label,
      title: copy.casesTitle,
      body: copy.casesBody,
      items: copy.cases,
    });
  }

  if (spec.id === "faq") {
    if (!copy.faq) return null;
    return section({
      id: "faq",
      kind: "faq",
      label,
      items: copy.faq,
    });
  }

  const items = cardItems(copy, spec);
  if (items.length === 0) return null;

  return section({
    id: spec.id,
    kind: "cards",
    label,
    items,
    layout: spec.layout,
    numbered: spec.numbered,
  });
}

export function productSections(locale: Locale, copy: ProductCopy, archetype: ProductArchetype): ProductSection[] {
  return productArchetypeLayouts[archetype]
    .map((spec) => sectionFromSpec(locale, copy, spec))
    .filter((item): item is ProductSection => item !== null);
}
