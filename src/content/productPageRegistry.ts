import { siteConfig } from "./siteConfig";
import { productRegistryCopy } from "./i18n/productRegistryCopy";
import type { VisualPolicy } from "./productArchetypes";
import type { Locale, Product, ProductSlug } from "../lib/site";

export type ProductPageRegistryItem = {
  ogImage: string;
  visual: VisualPolicy;
  expectedText: (copy: Product["locales"][Locale], locale: Locale) => string[];
};

export const productPageRegistry: Record<ProductSlug, ProductPageRegistryItem> = {
  "s3-turbo-list": {
    ogImage: siteConfig.assets.og["s3-turbo-list"],
    visual: "s3Benchmark",
    expectedText: (copy, locale) => [copy.headline, productRegistryCopy[locale].automation],
  },
  storageops: {
    ogImage: siteConfig.assets.og.storageops,
    visual: "storageAgent",
    expectedText: (copy, locale) => [copy.headline, productRegistryCopy[locale].skillsAndTools],
  },
  "world-clock": {
    ogImage: siteConfig.assets.og["world-clock"],
    visual: "worldClockScreenshot",
    expectedText: (copy) => [copy.headline, "FAQ"],
  },
  "douban-movie-rating": {
    ogImage: siteConfig.assets.og["douban-movie-rating"],
    visual: "doubanScreenshot",
    expectedText: (copy) => [copy.headline, "FAQ"],
  },
};
