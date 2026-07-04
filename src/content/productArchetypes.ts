import type { Locale, ProductArchetype, ProductCopy } from "../lib/site";

export type ContentSectionId =
  | "positioning"
  | "features"
  | "workflow"
  | "automation"
  | "examples"
  | "story"
  | "cases"
  | "faq";
export type PageSectionId = ContentSectionId | "inside" | "evidence" | "results";
export type SectionLayout = "balanced" | "steps" | "dense" | "evidence";
export type ProductCopyCardSource = Extract<
  keyof ProductCopy,
  "positioning" | "features" | "workflow" | "automation" | "examples"
>;
export type VisualPolicy =
  | "s3Benchmark"
  | "storageAgent"
  | "storageWorkbench"
  | "httpmonTerminal"
  | "worldClockScreenshot"
  | "doubanScreenshot"
  | "pagewiseWorkbench";
export type ProductGroup = "storage" | "personal";

export type ArchetypeSectionSpec = {
  id: PageSectionId;
  label: Record<Locale, string>;
  layout?: SectionLayout;
  numbered?: boolean;
  source?: ProductCopyCardSource;
  mergeSources?: ProductCopyCardSource[];
  required?: boolean;
};

export type ProductArchetypeContract = {
  group: ProductGroup;
  pageClass: string;
  sectionIndex: boolean;
  indexLabel: Record<Locale, string>;
  applicationCategory: "DeveloperApplication" | "BrowserApplication";
  operatingSystem: "Cross-platform" | "Chrome";
  defaultVisual: VisualPolicy;
  sections: ArchetypeSectionSpec[];
};

export const productArchetypeContracts: Record<ProductArchetype, ProductArchetypeContract> = {
  s3TurboList: {
    group: "storage",
    pageClass: "product-page product-page-s3TurboList",
    sectionIndex: true,
    indexLabel: { en: "On this page", zh: "页面内容" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "s3Benchmark",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      { id: "evidence", label: { en: "Scan plan", zh: "扫描方式" }, required: true },
      { id: "results", label: { en: "Results", zh: "结果" }, required: true },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
  storageCli: {
    group: "storage",
    pageClass: "product-page product-page-storageCli",
    sectionIndex: true,
    indexLabel: { en: "On this page", zh: "页面内容" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "s3Benchmark",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      { id: "evidence", label: { en: "Local layer", zh: "本地观察层" }, required: true },
      {
        id: "workflow",
        label: { en: "In the terminal", zh: "终端里看什么" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
  agentPackage: {
    group: "storage",
    pageClass: "product-page product-page-agentPackage",
    sectionIndex: true,
    indexLabel: { en: "Pi and StorageOps", zh: "Pi 与 StorageOps" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "storageAgent",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      { id: "evidence", label: { en: "Skills and tools", zh: "技能与工具" }, required: true },
      {
        id: "workflow",
        label: { en: "In a case", zh: "处理一次问题" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      { id: "cases", label: { en: "Where it helps", zh: "适用问题" }, required: true },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
  agentWorkbench: {
    group: "storage",
    pageClass: "product-page product-page-agentWorkbench",
    sectionIndex: true,
    indexLabel: { en: "On this page", zh: "页面内容" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "storageWorkbench",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      {
        id: "features",
        label: { en: "What it investigates", zh: "它能查什么" },
        source: "features",
        required: true,
      },
      {
        id: "workflow",
        label: { en: "How a session runs", zh: "一次会话怎么跑" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      {
        id: "positioning",
        label: { en: "Local and read-only", zh: "本地 · 只读" },
        source: "positioning",
        layout: "dense",
        required: true,
      },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
  browserExtension: {
    group: "personal",
    pageClass: "product-page product-page-browserExtension",
    sectionIndex: false,
    indexLabel: { en: "Read this page", zh: "阅读路径" },
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    defaultVisual: "worldClockScreenshot",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      {
        id: "positioning",
        label: { en: "Use it when", zh: "适用场景" },
        source: "positioning",
        layout: "dense",
        required: true,
      },
      { id: "features", label: { en: "In the page", zh: "页面里的信息" }, source: "features", required: true },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
};

export const productArchetypeLayouts = Object.fromEntries(
  Object.entries(productArchetypeContracts).map(([key, contract]) => [key, contract.sections]),
) as Record<ProductArchetype, ArchetypeSectionSpec[]>;
