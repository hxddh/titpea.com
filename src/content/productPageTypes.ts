import type { PageSectionId } from "./productArchetypes";
import type { ProductSection } from "./productSections";
import type { ProductVisualModel } from "./visualModels";
import type { CurrentPage, Locale, Product, ProductSlug } from "../lib/site";

export type ProductInsideModel = {
  id: "inside";
  kind: "inside";
  kicker: string;
  title: string;
  body: string;
  panel?: ProductInsidePanel;
};

export type ProductInsidePanel =
  | {
      kind: "metricWorkbench";
      label: string;
      title: string;
      metrics: Array<{ label: string; value: string; body: string; strong?: boolean }>;
      rows: Array<{ label: string; value: string }>;
    }
  | {
      kind: "agentEvidence";
      label: string;
      title: string;
      metrics: Array<{ label: string; value: string; body: string }>;
    };

export type ProductEvidenceModel = {
  id: "evidence";
  kind: "evidence";
  variant: "runChain" | "agentTopology";
  kicker: string;
  title: string;
  body: string;
  cards: Array<{ label: string; value?: string; body: string }>;
  benchmark?: Array<{ label: string; value: string; body?: string }>;
};

export type ProductPageSection = ProductInsideModel | ProductEvidenceModel | ProductSection;

export type ProductPageModel = {
  kind: "product";
  locale: Locale;
  slug: ProductSlug;
  current: CurrentPage;
  path: string;
  alternatePath: string;
  pageClass: string;
  title: string;
  description: string;
  ogImage: string;
  primaryCta: string;
  expectedText: string[];
  sectionIndex: boolean;
  indexLabel: string;
  navItems: Array<{ id: PageSectionId; label: string }>;
  visual: ProductVisualModel;
  structuredData: Record<string, unknown>;
  copy: Product["locales"][Locale];
  sections: ProductPageSection[];
};
