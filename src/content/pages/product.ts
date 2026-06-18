import { productArchetypeContracts, type PageSectionId } from "../productArchetypes";
import { productEvidenceModel } from "../productEvidenceModels";
import { productInsideModel } from "../productInsideModels";
import { productPageRegistry } from "../productPageRegistry";
import { productStructuredData } from "../productSeo";
import { productSections } from "../productSections";
import { visualModel } from "../visualModels";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { ProductPageModel } from "./types";
import type { ProductPageSection } from "../productPageTypes";
import type { Locale, Product, ProductSlug } from "../../lib/site";
import { products } from "../products";

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

export function buildProductPage(slug: ProductSlug, locale: Locale): ProductPageModel {
  const product = products[slug];
  assertRequiredCopy(product, locale);

  const contract = productArchetypeContracts[product.archetype];
  const registry = productPageRegistry[slug];
  const copy = product.locales[locale];
  const contentSections = productSections(locale, copy, product.archetype);
  const inside = productInsideModel(slug, locale);
  const evidence = productEvidenceModel(slug, locale);

  const sectionById = new Map<ProductPageSection["id"], ProductPageSection>([
    [inside.id, inside],
    ...(evidence ? [[evidence.id, evidence] as const] : []),
    ...contentSections.map((section) => [section.id, section] as const),
  ]);
  const sections = contract.sections.flatMap((spec) => {
    const section = sectionById.get(spec.id);
    if (!section && spec.required) throw new Error(`${slug} ${locale}: required section ${spec.id} was not built`);
    return section ? [section] : [];
  });
  requiredSections(
    sections,
    contract.sections.filter((section) => section.required).map((section) => section.id),
    slug,
  );

  const path = pagePath(locale, slug);
  const alternatePath = pagePath(alternateLocale(locale), slug);
  const structuredData = productStructuredData(product, locale, contract);
  const seo = buildPageSeo({
    title: pageTitle(copy.title),
    description: copy.description,
    path,
    alternatePath,
    locale,
    ogImage: registry.ogImage,
    structuredData,
  });
  const navItems = contract.sections
    .filter((spec) => sections.some((section) => section.id === spec.id))
    .map((spec) => ({ id: spec.id, label: spec.label[locale] }));

  return {
    kind: "product",
    locale,
    slug,
    current: slug,
    path,
    alternatePath,
    pageClass: contract.pageClass,
    title: copy.title,
    description: copy.description,
    ogImage: registry.ogImage,
    primaryCta: copy.primaryCta.href,
    expectedText: registry.expectedText(copy, locale),
    seo,
    language: languageLink(locale, alternatePath),
    sectionIndex: contract.sectionIndex,
    indexLabel: contract.indexLabel[locale],
    navItems,
    visual: visualModel(registry.visual ?? contract.defaultVisual, locale, copy.title),
    structuredData,
    copy,
    sections,
  };
}

export function productPageModels(locale: Locale) {
  return Object.keys(products).map((slug) => buildProductPage(slug as ProductSlug, locale));
}
