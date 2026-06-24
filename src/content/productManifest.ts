import type { ProductSlug } from "../lib/site";
import type { ProductGroup, VisualPolicy } from "./productArchetypes";

export type ProductManifestItem = {
  slug: ProductSlug;
  name: string;
  group: ProductGroup;
  nav: { primary: boolean; label?: "worldClock" | "douban" };
  catalog: { order: number; primary?: boolean };
  visual: VisualPolicy;
  ogImage: string;
  factId: string;
};

export const productManifest: readonly ProductManifestItem[] = [
  {
    slug: "s3-turbo-list",
    name: "s3-turbo-list",
    group: "storage",
    nav: { primary: true },
    catalog: { order: 1, primary: true },
    visual: "s3Benchmark",
    ogImage: "/assets/og-s3-turbo-list.png",
    factId: "s3-turbo-list",
  },
  {
    slug: "storageops",
    name: "StorageOps",
    group: "storage",
    nav: { primary: true },
    catalog: { order: 2, primary: true },
    visual: "storageAgent",
    ogImage: "/assets/og-storageops.png",
    factId: "storageops",
  },
  {
    slug: "httpmon",
    name: "httpmon",
    group: "storage",
    nav: { primary: true },
    catalog: { order: 3 },
    visual: "httpmonTerminal",
    ogImage: "/assets/og-httpmon.png",
    factId: "https-traffic-inspector",
  },
  {
    slug: "world-clock",
    name: "World Clock",
    group: "browser",
    nav: { primary: true, label: "worldClock" },
    catalog: { order: 1 },
    visual: "worldClockScreenshot",
    ogImage: "/assets/og-world-clock.png",
    factId: "world-clock",
  },
  {
    slug: "douban-movie-rating",
    name: "Douban Movie Rating Assistant",
    group: "browser",
    nav: { primary: true, label: "douban" },
    catalog: { order: 2 },
    visual: "doubanScreenshot",
    ogImage: "/assets/og-douban-movie-rating.png",
    factId: "douban-movie-rating",
  },
] as const;

export const productManifestBySlug = Object.fromEntries(productManifest.map((item) => [item.slug, item])) as Record<
  ProductSlug,
  ProductManifestItem
>;

export const productOgImages = Object.fromEntries(productManifest.map((item) => [item.slug, item.ogImage])) as Record<
  ProductSlug,
  string
>;
