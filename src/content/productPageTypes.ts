import type { ProductSection } from "./productSections";

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
