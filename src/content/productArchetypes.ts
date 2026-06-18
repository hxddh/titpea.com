import type { Locale, Product } from "../lib/site";
import type { ProductSection } from "./productSections";

export type SectionLayout = Extract<ProductSection, { kind: "cards" }>["layout"];

export type ArchetypeSectionSpec = {
  id: ProductSection["id"] | "inside" | "evidence";
  label: Record<Locale, string>;
  layout?: SectionLayout;
  numbered?: boolean;
};

export const productArchetypeLayouts: Record<Product["archetype"], ArchetypeSectionSpec[]> = {
  storageCli: [
    { id: "inside", label: { en: "Overview", zh: "概览" } },
    { id: "evidence", label: { en: "Evidence", zh: "证据" } },
    { id: "positioning", label: { en: "Fit", zh: "定位" } },
    { id: "automation", label: { en: "Automation", zh: "自动化" }, layout: "evidence" },
    { id: "story", label: { en: "Details", zh: "细节" } },
    { id: "workflow", label: { en: "Flow", zh: "流程" }, layout: "steps", numbered: true },
    { id: "examples", label: { en: "Examples", zh: "示例" }, layout: "dense" },
    { id: "cases", label: { en: "Compatibility", zh: "兼容性" } },
    { id: "faq", label: { en: "FAQ", zh: "FAQ" } },
  ],
  agentPackage: [
    { id: "inside", label: { en: "Overview", zh: "概览" } },
    { id: "evidence", label: { en: "Evidence", zh: "证据" } },
    { id: "positioning", label: { en: "Fit", zh: "定位" } },
    { id: "features", label: { en: "Skills and tools", zh: "技能和工具" }, layout: "evidence" },
    { id: "story", label: { en: "Details", zh: "细节" } },
    { id: "workflow", label: { en: "Flow", zh: "流程" }, layout: "steps", numbered: true },
    { id: "cases", label: { en: "Failure domains", zh: "故障领域" } },
    { id: "faq", label: { en: "FAQ", zh: "FAQ" } },
  ],
  browserExtension: [
    { id: "inside", label: { en: "Overview", zh: "概览" } },
    { id: "positioning", label: { en: "Best for", zh: "适合谁" } },
    { id: "features", label: { en: "What appears", zh: "页面里有什么" } },
    { id: "story", label: { en: "Details", zh: "细节" } },
    { id: "faq", label: { en: "FAQ", zh: "FAQ" } },
  ],
};

export const archetypeSpec = (product: Product, id: ArchetypeSectionSpec["id"]) =>
  productArchetypeLayouts[product.archetype].find((item) => item.id === id);
