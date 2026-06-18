import { absoluteUrl } from "./siteConfig";
import type { ProductArchetypeContract } from "./productArchetypes";
import type { Locale, Product } from "../lib/site";

export function productStructuredData(product: Product, locale: Locale, contract: ProductArchetypeContract) {
  const copy = product.locales[locale];
  const path = locale === "zh" ? `/zh/${product.slug}/` : `/${product.slug}/`;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: copy.title,
    description: copy.description,
    applicationCategory: contract.applicationCategory,
    operatingSystem: contract.operatingSystem,
    url: absoluteUrl(path),
    sameAs: copy.primaryCta.href,
  };
}
