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
  | "celagentTerminal"
  | "worldClockScreenshot"
  | "doubanScreenshot"
  | "pagewiseWorkbench"
  | "agentWorkbenchScreenshot"
  | "agentRadarTerminal"
  | "gobanScreenshot"
  | "chessboardScreenshot"
  | "easierBookmarksScreenshot"
  | "pulseMenuBar"
  | "worldMachineProjection";
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
  applicationCategory: "DeveloperApplication" | "BrowserApplication" | "GameApplication";
  operatingSystem: "Cross-platform" | "Chrome" | "macOS" | "macOS and Windows";
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
      { id: "story", label: { en: "Why it exists", zh: "为什么做" }, required: true },
      { id: "evidence", label: { en: "Scan plan", zh: "扫描方式" }, required: true },
      { id: "results", label: { en: "Results", zh: "结果" }, required: true },
      { id: "cases", label: { en: "Compatibility", zh: "兼容性" }, required: true },
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
      {
        id: "automation",
        label: { en: "Record and export", zh: "记录与导出" },
        layout: "dense",
        source: "automation",
        required: true,
      },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
  markdownRadar: {
    group: "personal",
    pageClass: "product-page product-page-markdownRadar",
    sectionIndex: true,
    indexLabel: { en: "On this page", zh: "页面内容" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "agentRadarTerminal",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      { id: "evidence", label: { en: "Git state", zh: "Git 状态" }, required: true },
      {
        id: "workflow",
        label: { en: "How the pipeline runs", zh: "流水线怎么跑" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      {
        id: "automation",
        label: { en: "Ops and cadence", zh: "运行与节奏" },
        layout: "dense",
        source: "automation",
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
  cliAgent: {
    group: "storage",
    pageClass: "product-page product-page-cliAgent",
    sectionIndex: true,
    indexLabel: { en: "On this page", zh: "页面内容" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "celagentTerminal",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      { id: "evidence", label: { en: "Persistence model", zh: "持久化模型" }, required: true },
      {
        id: "workflow",
        label: { en: "How a session runs", zh: "一次会话怎么跑" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      { id: "cases", label: { en: "What it covers", zh: "覆盖范围" }, required: true },
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
        label: { en: "How investigations work", zh: "调查怎么推进" },
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
        label: { en: "Built to investigate safely", zh: "为安全排查而设计" },
        source: "positioning",
        required: true,
      },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
  worldRuntime: {
    group: "personal",
    pageClass: "product-page product-page-worldRuntime",
    sectionIndex: true,
    indexLabel: { en: "On this page", zh: "页面内容" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS",
    defaultVisual: "worldMachineProjection",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      {
        id: "features",
        label: { en: "What the runtime does", zh: "运行时做什么" },
        source: "features",
        required: true,
      },
      {
        id: "workflow",
        label: { en: "How a world runs", zh: "一个世界怎么跑" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      {
        id: "positioning",
        label: { en: "Experimental status", zh: "实验状态" },
        source: "positioning",
        required: true,
      },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
  documentAgent: {
    group: "personal",
    pageClass: "product-page product-page-documentAgent",
    sectionIndex: true,
    indexLabel: { en: "On this page", zh: "页面内容" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "pagewiseWorkbench",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      {
        id: "features",
        label: { en: "What you get in the workbench", zh: "工作台里有什么" },
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
        label: { en: "Local by design", zh: "本地优先" },
        source: "positioning",
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
      { id: "inside", label: { en: "Overview", zh: "概览" } },
      {
        id: "positioning",
        label: { en: "Fit and limits", zh: "适用与边界" },
        source: "positioning",
        required: true,
      },
      { id: "features", label: { en: "In the page", zh: "页面里的信息" }, source: "features", required: true },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
  nativeApp: {
    group: "personal",
    pageClass: "product-page product-page-nativeApp",
    sectionIndex: false,
    indexLabel: { en: "Read this page", zh: "阅读路径" },
    applicationCategory: "GameApplication",
    operatingSystem: "macOS and Windows",
    defaultVisual: "gobanScreenshot",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" } },
      {
        id: "positioning",
        label: { en: "Fit and limits", zh: "适用与边界" },
        source: "positioning",
        required: true,
      },
      { id: "features", label: { en: "At the board", zh: "棋盘上的能力" }, source: "features", required: true },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
  menuBarApp: {
    group: "personal",
    pageClass: "product-page product-page-menuBarApp",
    sectionIndex: false,
    indexLabel: { en: "Read this page", zh: "阅读路径" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS",
    defaultVisual: "pulseMenuBar",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" } },
      {
        id: "positioning",
        label: { en: "Fit and limits", zh: "适用与边界" },
        source: "positioning",
        required: true,
      },
      {
        id: "features",
        label: { en: "In the menu bar", zh: "菜单栏里有什么" },
        source: "features",
        required: true,
      },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
};

export const productArchetypeLayouts = Object.fromEntries(
  Object.entries(productArchetypeContracts).map(([key, contract]) => [key, contract.sections]),
) as Record<ProductArchetype, ArchetypeSectionSpec[]>;
