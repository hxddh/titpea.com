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
      kind: "s3Purpose";
      label: string;
      items: Array<{ label: string; title: string; body: string }>;
      boundaryLabel: string;
      boundary: string;
    }
  | {
      kind: "agentEvidence";
      label: string;
      eyebrow: string;
      title: string;
      metrics: Array<{ label: string; value: string; body: string }>;
    };

export type ProductEvidenceModel = {
  id: "evidence";
  kind: "evidence";
  variant: "scanPlan" | "diagnosisFlow" | "trafficFlow";
  kicker: string;
  title: string;
  body: string;
  cards: Array<{ label: string; value?: string; body: string }>;
};

export type ProductResultsModel = {
  id: "results";
  kind: "results";
  kicker: string;
  title: string;
  body: string;
  paths: Array<{
    label: string;
    title: string;
    input: string;
    output: string;
    detail: string;
  }>;
};

export type ProductPageSection = ProductInsideModel | ProductEvidenceModel | ProductResultsModel | ProductSection;
