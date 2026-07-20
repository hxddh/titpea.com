import type { ProductSlug } from "../lib/site";
import type { ProductGroup, VisualPolicy } from "./productArchetypes";

export type ProductManifestItem = {
  slug: ProductSlug;
  name: string;
  group: ProductGroup;
  nav: {
    primary: boolean;
    label?: "storageAgent" | "worldClock" | "douban" | "pagewise" | "agentRadar" | "goban" | "easierBookmarks";
  };
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
    catalog: { order: 1 },
    visual: "s3Benchmark",
    ogImage: "/assets/og-s3-turbo-list.png",
    factId: "s3-turbo-list",
  },
  {
    slug: "storage-agent-workbench",
    name: "Storage Agent",
    group: "storage",
    nav: { primary: true, label: "storageAgent" },
    catalog: { order: 2, primary: true },
    visual: "agentWorkbenchScreenshot",
    ogImage: "/assets/og-storage-agent-workbench.png",
    factId: "storage-agent-workbench",
  },
  {
    slug: "storageops",
    name: "StorageOps",
    group: "storage",
    nav: { primary: true },
    catalog: { order: 3 },
    visual: "storageAgent",
    ogImage: "/assets/og-storageops.png",
    factId: "storageops",
  },
  {
    slug: "httpmon",
    name: "httpmon",
    group: "storage",
    nav: { primary: true },
    catalog: { order: 4 },
    visual: "httpmonTerminal",
    ogImage: "/assets/og-httpmon.png",
    factId: "https-traffic-inspector",
  },
  {
    slug: "pagewise",
    name: "PageWise",
    group: "personal",
    nav: { primary: false, label: "pagewise" },
    catalog: { order: 1, primary: true },
    visual: "agentWorkbenchScreenshot",
    ogImage: "/assets/og-pagewise.png",
    factId: "pagewise",
  },
  {
    slug: "world-clock",
    name: "World Clock",
    group: "personal",
    nav: { primary: true, label: "worldClock" },
    catalog: { order: 2 },
    visual: "worldClockScreenshot",
    ogImage: "/assets/og-world-clock.png",
    factId: "world-clock",
  },
  {
    slug: "douban-movie-rating",
    name: "Douban Movie Rating Assistant",
    group: "personal",
    nav: { primary: true, label: "douban" },
    catalog: { order: 3 },
    visual: "doubanScreenshot",
    ogImage: "/assets/og-douban-movie-rating.png",
    factId: "douban-movie-rating",
  },
  {
    slug: "agent-radar",
    name: "Agent Radar",
    group: "personal",
    nav: { primary: false, label: "agentRadar" },
    catalog: { order: 4 },
    visual: "agentRadarTerminal",
    ogImage: "/assets/og-agent-radar.png",
    factId: "agent-radar",
  },
  {
    slug: "goban",
    name: "Goban",
    group: "personal",
    nav: { primary: true, label: "goban" },
    catalog: { order: 5 },
    visual: "gobanBoard",
    ogImage: "/assets/og-goban.png",
    factId: "goban",
  },
  {
    slug: "easier-bookmarks",
    name: "Easier Bookmarks",
    group: "personal",
    nav: { primary: true, label: "easierBookmarks" },
    catalog: { order: 6 },
    visual: "easierBookmarksScreenshot",
    ogImage: "/assets/og-easier-bookmarks.png",
    factId: "easier-bookmarks",
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
