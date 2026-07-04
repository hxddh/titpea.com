import { productCatalogModel } from "./productCatalogModel";
import type { ProductArchetype, ProductSlug } from "../lib/site";
import type { Locale } from "../lib/site";
import type { PageSectionId } from "./productArchetypes";

export type ProductChapterSpec = {
  id: string;
  title: Record<Locale, string>;
  thesis?: Record<Locale, string>;
  sectionIds: PageSectionId[];
};

const chapterSpecs: Record<ProductArchetype, ProductChapterSpec[]> = {
  s3TurboList: [
    {
      id: "overview",
      title: { en: "What it changes", zh: "它改变什么" },
      thesis: {
        en: "Large-bucket list and diff without building a scanner first.",
        zh: "大规模 list / diff，不必先搭扫描器。",
      },
      sectionIds: ["inside"],
    },
    {
      id: "how-it-runs",
      title: { en: "How the scan runs", zh: "扫描怎么跑" },
      sectionIds: ["evidence", "results"],
    },
    {
      id: "adoption",
      title: { en: "Getting started", zh: "上手" },
      sectionIds: ["faq"],
    },
  ],
  storageCli: [
    {
      id: "overview",
      title: { en: "What it observes", zh: "它观察什么" },
      sectionIds: ["inside"],
    },
    {
      id: "in-practice",
      title: { en: "In the terminal", zh: "终端里怎么用" },
      sectionIds: ["evidence", "workflow"],
    },
    {
      id: "adoption",
      title: { en: "Getting started", zh: "上手" },
      sectionIds: ["faq"],
    },
  ],
  agentPackage: [
    {
      id: "overview",
      title: { en: "What it packages", zh: "它打包什么" },
      sectionIds: ["inside"],
    },
    {
      id: "skills",
      title: { en: "Skills and tools", zh: "技能与工具" },
      sectionIds: ["evidence", "workflow"],
    },
    {
      id: "adoption",
      title: { en: "Getting started", zh: "上手" },
      sectionIds: ["faq"],
    },
  ],
  agentWorkbench: [
    {
      id: "overview",
      title: { en: "What it investigates", zh: "它调查什么" },
      sectionIds: ["inside"],
    },
    {
      id: "investigation",
      title: { en: "How a session runs", zh: "一次会话怎么跑" },
      sectionIds: ["features", "workflow"],
    },
    {
      id: "boundaries",
      title: { en: "Local and read-only", zh: "本地 · 只读" },
      sectionIds: ["positioning"],
    },
    {
      id: "adoption",
      title: { en: "Getting started", zh: "上手" },
      sectionIds: ["faq"],
    },
  ],
  browserExtension: [
    {
      id: "overview",
      title: { en: "What it adds", zh: "它补充什么" },
      sectionIds: ["inside"],
    },
    {
      id: "in-page",
      title: { en: "In the page", zh: "页面里的信息" },
      sectionIds: ["features"],
    },
    {
      id: "adoption",
      title: { en: "Getting started", zh: "上手" },
      sectionIds: ["faq"],
    },
  ],
};

export type ProductChapterModel = {
  id: string;
  title: string;
  thesis?: string;
  sectionIds: PageSectionId[];
};

export function productChapters(archetype: ProductArchetype, locale: Locale): ProductChapterModel[] {
  return chapterSpecs[archetype].map((chapter) => ({
    id: chapter.id,
    title: chapter.title[locale],
    thesis: chapter.thesis?.[locale],
    sectionIds: chapter.sectionIds,
  }));
}

export function chapterNavItems(archetype: ProductArchetype, locale: Locale) {
  return productChapters(archetype, locale).map((chapter) => ({
    id: chapter.id,
    label: chapter.title,
  }));
}

export function relatedProducts(slug: ProductSlug, locale: Locale, group: "storage" | "personal") {
  const catalog = productCatalogModel(locale);
  const items = group === "storage" ? catalog.storage : catalog.personal;
  return items.filter((item) => item.slug !== slug).slice(0, 2);
}
