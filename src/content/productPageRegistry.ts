import type { Locale, Product, ProductSlug } from "../lib/site";
import { productManifestBySlug } from "./productManifest";
import type { VisualPolicy } from "./productArchetypes";

export type ProductPageRegistryItem = {
  ogImage: string;
  visual: VisualPolicy;
  semanticChecks: (copy: Product["locales"][Locale], locale: Locale) => string[];
};

export const productPageRegistry: Record<ProductSlug, ProductPageRegistryItem> = Object.fromEntries(
  Object.values(productManifestBySlug).map((item) => [
    item.slug,
    {
      ogImage: item.ogImage,
      visual: item.visual,
      semanticChecks: (copy: Product["locales"][Locale]) =>
        [copy.headline, copy.primaryCta.label, copy.faqLabel ?? ""].filter(Boolean),
    },
  ]),
) as unknown as Record<ProductSlug, ProductPageRegistryItem>;
