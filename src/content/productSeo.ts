import { absoluteUrl } from "./siteConfig";
import type { ProductArchetypeContract } from "./productArchetypes";
import { pathFor, type Locale, type Product } from "../lib/site";

export function productStructuredData(product: Product, locale: Locale, contract: ProductArchetypeContract) {
  const copy = product.locales[locale];
  const path = pathFor(locale, product.slug);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: copy.title,
    description: copy.description,
    applicationCategory: contract.applicationCategory,
    operatingSystem: contract.operatingSystem,
    url: absoluteUrl(path),
    ...(copy.primaryCta.href.startsWith("http") ? { sameAs: copy.primaryCta.href } : {}),
  };
}
