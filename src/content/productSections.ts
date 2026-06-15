import type { Locale, Product, ProductCopy } from "../lib/site";

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

const section = <T extends ProductSection>(value: T) => value;

export function productSections(locale: Locale, copy: ProductCopy, product?: Product): ProductSection[] {
  const isZh = locale === "zh";
  const baseSections = [
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
  ].filter((item): item is ProductSection => item !== null);

  if (!product) return baseSections;

  if (product.category === "browser") {
    return [
      section({
        id: "positioning",
        kind: "cards",
        label: isZh ? "适合谁" : "Best for",
        items: copy.positioning,
      }),
      section({
        id: "features",
        kind: "cards",
        label: isZh ? "页面里有什么" : "What appears",
        items: copy.features,
      }),
      section({
        id: "story",
        kind: "story",
        label: copy.rationaleLabel,
        title: copy.rationaleTitle,
        body: copy.rationaleBody,
      }),
      ...(copy.faq && copy.faqLabel
        ? [
            section({
              id: "faq",
              kind: "faq",
              label: copy.faqLabel,
              items: copy.faq,
            }),
          ]
        : []),
    ];
  }

  if (product.role === "inventory") {
    return [
      section({
        id: "positioning",
        kind: "cards",
        label: isZh ? "它解决什么" : "What it solves",
        items: copy.positioning,
      }),
      section({
        id: "automation",
        kind: "cards",
        label: isZh ? "自动化路径" : "Automation path",
        items: [...copy.features, ...(copy.automation ?? [])],
      }),
      ...(copy.workflow && copy.workflowLabel
        ? [
            section({
              id: "workflow",
              kind: "cards",
              label: isZh ? "一次运行" : "One run",
              items: copy.workflow,
              numbered: true,
            }),
          ]
        : []),
      ...(copy.cases && copy.casesLabel && copy.casesTitle
        ? [
            section({
              id: "cases",
              kind: "cases",
              label: isZh ? "兼容端点" : "Compatible endpoints",
              title: copy.casesTitle,
              body: copy.casesBody,
              items: copy.cases,
            }),
          ]
        : []),
      ...(copy.faq && copy.faqLabel
        ? [
            section({
              id: "faq",
              kind: "faq",
              label: copy.faqLabel,
              items: copy.faq,
            }),
          ]
        : []),
    ];
  }

  if (product.role === "diagnosis") {
    return [
      section({
        id: "positioning",
        kind: "cards",
        label: isZh ? "它解决什么" : "What it solves",
        items: copy.positioning,
      }),
      section({
        id: "features",
        kind: "cards",
        label: isZh ? "技能和工具" : "Skills and tools",
        items: copy.features,
      }),
      ...(copy.workflow && copy.workflowLabel
        ? [
            section({
              id: "workflow",
              kind: "cards",
              label: isZh ? "诊断流程" : "Diagnosis flow",
              items: copy.workflow,
              numbered: true,
            }),
          ]
        : []),
      ...(copy.cases && copy.casesLabel && copy.casesTitle
        ? [
            section({
              id: "cases",
              kind: "cases",
              label: isZh ? "故障领域" : "Failure domains",
              title: copy.casesTitle,
              body: copy.casesBody,
              items: copy.cases,
            }),
          ]
        : []),
      ...(copy.faq && copy.faqLabel
        ? [
            section({
              id: "faq",
              kind: "faq",
              label: copy.faqLabel,
              items: copy.faq,
            }),
          ]
        : []),
    ];
  }

  return baseSections;
}
