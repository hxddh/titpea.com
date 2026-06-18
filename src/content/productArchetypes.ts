import type { Locale, Product, ProductCopy } from "../lib/site";

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

export type ArchetypeSectionSpec = {
  id: PageSectionId;
  label: Record<Locale, string>;
  layout?: SectionLayout;
  numbered?: boolean;
  source?: ProductCopyCardSource;
  mergeSources?: ProductCopyCardSource[];
};

export const productArchetypeLayouts: Record<Product["archetype"], ArchetypeSectionSpec[]> = {
  storageCli: [
    { id: "inside", label: { en: "Overview", zh: "概览" } },
    { id: "evidence", label: { en: "Evidence", zh: "证据" } },
    { id: "positioning", label: { en: "Fit", zh: "定位" }, source: "positioning" },
    {
      id: "automation",
      label: { en: "Automation", zh: "自动化" },
      layout: "evidence",
      mergeSources: ["features", "automation"],
    },
    { id: "story", label: { en: "Details", zh: "细节" } },
    { id: "workflow", label: { en: "Flow", zh: "流程" }, layout: "steps", numbered: true, source: "workflow" },
    { id: "examples", label: { en: "Examples", zh: "示例" }, layout: "dense", source: "examples" },
    { id: "cases", label: { en: "Compatibility", zh: "兼容性" } },
    { id: "faq", label: { en: "FAQ", zh: "FAQ" } },
  ],
  agentPackage: [
    { id: "inside", label: { en: "Overview", zh: "概览" } },
    { id: "evidence", label: { en: "Evidence", zh: "证据" } },
    { id: "positioning", label: { en: "Fit", zh: "定位" }, source: "positioning" },
    { id: "features", label: { en: "Skills and tools", zh: "技能和工具" }, layout: "evidence", source: "features" },
    { id: "story", label: { en: "Details", zh: "细节" } },
    { id: "workflow", label: { en: "Flow", zh: "流程" }, layout: "steps", numbered: true, source: "workflow" },
    { id: "cases", label: { en: "Failure domains", zh: "故障领域" } },
    { id: "faq", label: { en: "FAQ", zh: "FAQ" } },
  ],
  browserExtension: [
    { id: "inside", label: { en: "Overview", zh: "概览" } },
    { id: "positioning", label: { en: "Best for", zh: "适合谁" }, source: "positioning" },
    { id: "features", label: { en: "What appears", zh: "页面里有什么" }, source: "features" },
    { id: "story", label: { en: "Details", zh: "细节" } },
    { id: "faq", label: { en: "FAQ", zh: "FAQ" } },
  ],
};

export const archetypeSpec = (product: Product, id: PageSectionId) =>
  productArchetypeLayouts[product.archetype].find((item) => item.id === id);

export function productNavItems(product: Product, locale: Locale, visibleIds: Set<string>) {
  return productArchetypeLayouts[product.archetype]
    .filter((item) => visibleIds.has(item.id))
    .map((item) => ({ id: item.id, label: item.label[locale] }));
}

export function productPageProfile(product: Product) {
  const hasSectionIndex = productArchetypeLayouts[product.archetype].some((item) => item.id === "evidence");
  return {
    pageClass: `product-page product-page-${product.archetype}`,
    hasSectionIndex,
    indexLabel: {
      en: product.archetype === "agentPackage" ? "Diagnosis path" : "Read this page",
      zh: product.archetype === "agentPackage" ? "诊断路径" : "阅读路径",
    },
    applicationCategory: product.category === "browser" ? "BrowserApplication" : "DeveloperApplication",
    operatingSystem: product.category === "browser" ? "Chrome" : "Cross-platform",
  };
}
