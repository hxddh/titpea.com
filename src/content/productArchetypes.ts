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
  | "httpmonTerminal"
  | "worldClockScreenshot"
  | "doubanScreenshot";
export type ProductGroup = "storage" | "browser";

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
      {
        id: "automation",
        label: { en: "Automation", zh: "自动化" },
        layout: "balanced",
        source: "automation",
        required: true,
      },
      { id: "cases", label: { en: "Endpoints", zh: "端点" }, required: true },
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
      { id: "evidence", label: { en: "Capture path", zh: "工作方式" }, required: true },
      {
        id: "automation",
        label: { en: "Keep the session", zh: "保留现场" },
        layout: "evidence",
        source: "automation",
        required: true,
      },
      {
        id: "workflow",
        label: { en: "Use it", zh: "怎么用" },
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
    indexLabel: { en: "Diagnosis path", zh: "诊断路径" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "storageAgent",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      { id: "evidence", label: { en: "How it reasons", zh: "如何判断" }, required: true },
      {
        id: "workflow",
        label: { en: "A diagnosis", zh: "一次诊断" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      { id: "cases", label: { en: "Common cases", zh: "常见问题" }, required: true },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
  browserExtension: {
    group: "browser",
    pageClass: "product-page product-page-browserExtension",
    sectionIndex: false,
    indexLabel: { en: "Read this page", zh: "阅读路径" },
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    defaultVisual: "worldClockScreenshot",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      { id: "features", label: { en: "In the page", zh: "页面里的信息" }, source: "features", required: true },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
};

export const productArchetypeLayouts = Object.fromEntries(
  Object.entries(productArchetypeContracts).map(([key, contract]) => [key, contract.sections]),
) as Record<ProductArchetype, ArchetypeSectionSpec[]>;
