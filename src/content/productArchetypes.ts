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
export type PageSectionId = ContentSectionId | "inside" | "evidence";
export type SectionLayout = "balanced" | "steps" | "dense" | "evidence";
export type ProductCopyCardSource = Extract<
  keyof ProductCopy,
  "positioning" | "features" | "workflow" | "automation" | "examples"
>;
export type VisualPolicy = "s3Benchmark" | "storageAgent" | "worldClockScreenshot" | "doubanScreenshot";
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
  storageCli: {
    group: "storage",
    pageClass: "product-page product-page-storageCli",
    sectionIndex: true,
    indexLabel: { en: "Read this page", zh: "阅读路径" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "s3Benchmark",
    sections: [
      { id: "inside", label: { en: "Overview", zh: "概览" }, required: true },
      { id: "evidence", label: { en: "Evidence", zh: "证据" }, required: true },
      { id: "positioning", label: { en: "Fit", zh: "定位" }, source: "positioning", required: true },
      {
        id: "automation",
        label: { en: "Automation", zh: "自动化" },
        layout: "evidence",
        mergeSources: ["features", "automation"],
        required: true,
      },
      { id: "story", label: { en: "Details", zh: "细节" }, required: true },
      {
        id: "workflow",
        label: { en: "Flow", zh: "流程" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      { id: "examples", label: { en: "Examples", zh: "示例" }, layout: "dense", source: "examples", required: true },
      { id: "cases", label: { en: "Compatibility", zh: "兼容性" }, required: true },
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
      { id: "evidence", label: { en: "Evidence", zh: "证据" }, required: true },
      { id: "positioning", label: { en: "Fit", zh: "定位" }, source: "positioning", required: true },
      {
        id: "features",
        label: { en: "Skills and tools", zh: "技能和工具" },
        layout: "evidence",
        source: "features",
        required: true,
      },
      { id: "story", label: { en: "Details", zh: "细节" }, required: true },
      {
        id: "workflow",
        label: { en: "Flow", zh: "流程" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      { id: "cases", label: { en: "Failure domains", zh: "故障领域" }, required: true },
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
      { id: "positioning", label: { en: "Best for", zh: "适合谁" }, source: "positioning", required: true },
      { id: "features", label: { en: "What appears", zh: "页面里有什么" }, source: "features", required: true },
      { id: "story", label: { en: "Details", zh: "细节" }, required: true },
      { id: "faq", label: { en: "FAQ", zh: "FAQ" }, required: true },
    ],
  },
};

export const productArchetypeLayouts = Object.fromEntries(
  Object.entries(productArchetypeContracts).map(([key, contract]) => [key, contract.sections]),
) as Record<ProductArchetype, ArchetypeSectionSpec[]>;
