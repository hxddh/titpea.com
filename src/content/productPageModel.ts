import { productArchetypeContracts, type PageSectionId } from "./productArchetypes";
import { productEvidenceModel } from "./productEvidenceModels";
import { productInsideModel } from "./productInsideModels";
import { productPageRegistry } from "./productPageRegistry";
import { productStructuredData } from "./productSeo";
import { productSections } from "./productSections";
import type { ProductPageModel, ProductPageSection } from "./productPageTypes";
import { visualModel } from "./visualModels";
import { pathFor, type Locale, type Product } from "../lib/site";

function requiredSections(sections: ProductPageSection[], expectedIds: PageSectionId[], slug: string) {
  const ids = new Set(sections.map((section) => section.id));
  const missing = expectedIds.filter((id) => !ids.has(id));
  if (missing.length > 0) throw new Error(`${slug}: missing required page sections: ${missing.join(", ")}`);
}

function assertRequiredCopy(product: Product, locale: Locale) {
  const copy = product.locales[locale];
  const contract = productArchetypeContracts[product.archetype];
  const missing = contract.requiredCopy.filter((key) => {
    const value = copy[key];
    return Array.isArray(value) ? value.length === 0 : !value;
  });
  if (missing.length > 0) throw new Error(`${product.slug} ${locale}: missing required copy: ${missing.join(", ")}`);
}

export function productPageModel(product: Product, locale: Locale): ProductPageModel {
  assertRequiredCopy(product, locale);

  const contract = productArchetypeContracts[product.archetype];
  const registry = productPageRegistry[product.slug];
  const copy = product.locales[locale];
  const contentSections = productSections(locale, copy, product.archetype);
  const inside = productInsideModel(product.slug, locale);
  const evidence = productEvidenceModel(product.slug, locale);

  const sectionById = new Map<ProductPageSection["id"], ProductPageSection>([
    [inside.id, inside],
    ...(evidence ? [[evidence.id, evidence] as const] : []),
    ...contentSections.map((section) => [section.id, section] as const),
  ]);
  const sections = contract.sections.flatMap((spec) => {
    const section = sectionById.get(spec.id);
    if (!section && spec.required)
      throw new Error(`${product.slug} ${locale}: required section ${spec.id} was not built`);
    return section ? [section] : [];
  });
  requiredSections(
    sections,
    contract.sections.filter((section) => section.required).map((section) => section.id),
    product.slug,
  );

  const path = pathFor(locale, product.slug);
  const alternatePath = pathFor(locale === "zh" ? "en" : "zh", product.slug);
  const navItems = contract.sections
    .filter((spec) => sections.some((section) => section.id === spec.id))
    .map((spec) => ({ id: spec.id, label: spec.label[locale] }));

  return {
    kind: "product",
    locale,
    slug: product.slug,
    current: product.slug,
    path,
    alternatePath,
    pageClass: contract.pageClass,
    title: copy.title,
    description: copy.description,
    ogImage: registry.ogImage,
    primaryCta: copy.primaryCta.href,
    expectedText: registry.expectedText(copy, locale),
    sectionIndex: contract.sectionIndex,
    indexLabel: contract.indexLabel[locale],
    navItems,
    visual: visualModel(registry.visual ?? contract.defaultVisual, locale, copy.title),
    structuredData: productStructuredData(product, locale, contract),
    copy,
    sections,
  };
}

export function productPageModels(products: Product[], locale: Locale) {
  return products.map((product) => productPageModel(product, locale));
}
