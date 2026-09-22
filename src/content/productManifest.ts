import type { ProductSlug } from "../lib/site";
import type { ProductGroup, VisualPolicy } from "./productArchetypes";

export const catalogLines = ["storage", "agents", "everyday", "experimental"] as const;
export type CatalogLine = (typeof catalogLines)[number];

export type ProductManifestItem = {
  slug: ProductSlug;
  name: string;
  group: ProductGroup;
  line: CatalogLine;
  nav: {
    primary: boolean;
    label?:
      | "storageAgent"
      | "worldClock"
      | "douban"
      | "pagewise"
      | "agentRadar"
      | "goban"
      | "chessboard"
      | "easierBookmarks"
      | "pulse"
      | "celagent"
      | "worldMachine";
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
    line: "storage",
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
    line: "storage",
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
    line: "storage",
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
    line: "storage",
    nav: { primary: true },
    catalog: { order: 4 },
    visual: "httpmonTerminal",
    ogImage: "/assets/og-httpmon.png",
    factId: "https-traffic-inspector",
  },
  {
    slug: "celagent",
    name: "celagent",
    group: "storage",
    line: "agents",
    nav: { primary: true, label: "celagent" },
    catalog: { order: 5 },
    visual: "celagentTerminal",
    ogImage: "/assets/og-celagent.png",
    factId: "celagent",
  },
  {
    slug: "pagewise",
    name: "PageWise",
    group: "personal",
    line: "everyday",
    nav: { primary: false, label: "pagewise" },
    catalog: { order: 1, primary: true },
    visual: "agentWorkbenchScreenshot",
    ogImage: "/assets/og-pagewise.png",
    factId: "pagewise",
  },
  {
    slug: "pulse",
    name: "Pulse",
    group: "personal",
    line: "agents",
    nav: { primary: true, label: "pulse" },
    catalog: { order: 2 },
    visual: "pulseMenuBar",
    ogImage: "/assets/og-pulse.png",
    factId: "pulse",
  },
  {
    slug: "world-machine",
    name: "World Machine",
    group: "personal",
    line: "experimental",
    nav: { primary: true, label: "worldMachine" },
    catalog: { order: 3 },
    visual: "worldMachineProjection",
    ogImage: "/assets/og-world-machine.png",
    factId: "world-machine",
  },
  {
    slug: "world-clock",
    name: "World Clock",
    group: "personal",
    line: "everyday",
    nav: { primary: true, label: "worldClock" },
    catalog: { order: 4 },
    visual: "worldClockScreenshot",
    ogImage: "/assets/og-world-clock.png",
    factId: "world-clock",
  },
  {
    slug: "douban-movie-rating",
    name: "Douban Movie Rating Assistant",
    group: "personal",
    line: "everyday",
    nav: { primary: true, label: "douban" },
    catalog: { order: 5 },
    visual: "doubanScreenshot",
    ogImage: "/assets/og-douban-movie-rating.png",
    factId: "douban-movie-rating",
  },
  {
    slug: "agent-radar",
    name: "Agent Radar",
    group: "personal",
    line: "agents",
    nav: { primary: false, label: "agentRadar" },
    catalog: { order: 6 },
    visual: "agentRadarTerminal",
    ogImage: "/assets/og-agent-radar.png",
    factId: "agent-radar",
  },
  {
    slug: "goban",
    name: "Goban",
    group: "personal",
    line: "everyday",
    nav: { primary: true, label: "goban" },
    catalog: { order: 7 },
    visual: "gobanScreenshot",
    ogImage: "/assets/og-goban.png",
    factId: "goban",
  },
  {
    slug: "chessboard",
    name: "Chessboard",
    group: "personal",
    line: "everyday",
    nav: { primary: true, label: "chessboard" },
    catalog: { order: 8 },
    visual: "chessboardScreenshot",
    ogImage: "/assets/og-chessboard.png",
    factId: "chessboard",
  },
  {
    slug: "easier-bookmarks",
    name: "Easier Bookmarks",
    group: "personal",
    line: "everyday",
    nav: { primary: true, label: "easierBookmarks" },
    catalog: { order: 9 },
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
