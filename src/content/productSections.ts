import type { Locale, ProductCopy } from "../lib/site";

export type ProductSection =
  | {
      id: "positioning" | "features" | "workflow" | "automation" | "examples";
      kind: "cards";
      label: string;
      items: Array<[string, string]>;
      numbered?: boolean;
    }
  | {
      id: "story";
      kind: "story";
      label: string;
      title: string;
      body: string[];
    }
  | {
      id: "cases";
      kind: "cases";
      label: string;
      title: string;
      body?: string;
      items: string[];
    }
  | {
      id: "faq";
      kind: "faq";
      label: string;
      items: Array<[string, string]>;
    };

export function productSections(_locale: Locale, copy: ProductCopy): ProductSection[] {
  return [
    {
      id: "positioning",
      kind: "cards",
      label: copy.positioningLabel,
      items: copy.positioning,
    },
    {
      id: "features",
      kind: "cards",
      label: copy.featuresLabel,
      items: copy.features,
    },
    {
      id: "story",
      kind: "story",
      label: copy.rationaleLabel,
      title: copy.rationaleTitle,
      body: copy.rationaleBody,
    },
    copy.workflow && copy.workflowLabel
      ? {
          id: "workflow",
          kind: "cards",
          label: copy.workflowLabel,
          items: copy.workflow,
          numbered: true,
        }
      : null,
    copy.automation && copy.automationLabel
      ? {
          id: "automation",
          kind: "cards",
          label: copy.automationLabel,
          items: copy.automation,
        }
      : null,
    copy.cases && copy.casesLabel && copy.casesTitle
      ? {
          id: "cases",
          kind: "cases",
          label: copy.casesLabel,
          title: copy.casesTitle,
          body: copy.casesBody,
          items: copy.cases,
        }
      : null,
    copy.examples && copy.examplesLabel
      ? {
          id: "examples",
          kind: "cards",
          label: copy.examplesLabel,
          items: copy.examples,
        }
      : null,
    copy.faq && copy.faqLabel
      ? {
          id: "faq",
          kind: "faq",
          label: copy.faqLabel,
          items: copy.faq,
        }
      : null,
  ].filter((section): section is ProductSection => section !== null);
}
