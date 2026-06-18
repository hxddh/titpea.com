import type { Locale, Product, ProductContentCard, ProductContentInput, ProductCopy } from "../lib/site";
import { archetypeSpec } from "./productArchetypes";

export type ProductSection =
  | {
      id: "positioning" | "features" | "workflow" | "automation" | "examples";
      kind: "cards";
      label: string;
      items: ProductContentCard[];
      layout?: "balanced" | "steps" | "dense" | "evidence";
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
      items: ProductContentCard[];
    };

const section = <T extends ProductSection>(value: T) => value;
const cards = (items: ProductContentInput[] = []): ProductContentCard[] =>
  items.map((item) => (Array.isArray(item) ? { title: item[0], body: item[1] } : item));

export function productSections(locale: Locale, copy: ProductCopy, product?: Product): ProductSection[] {
  const isZh = locale === "zh";
  const spec = (id: ProductSection["id"]) => (product ? archetypeSpec(product, id) : undefined);
  const specLabel = (id: ProductSection["id"], fallback: string) => spec(id)?.label[locale] ?? fallback;
  const baseSections = [
    {
      id: "positioning",
      kind: "cards",
      label: copy.positioningLabel,
      items: cards(copy.positioning),
    },
    {
      id: "features",
      kind: "cards",
      label: copy.featuresLabel,
      items: cards(copy.features),
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
          items: cards(copy.workflow),
          numbered: true,
        }
      : null,
    copy.automation && copy.automationLabel
      ? {
          id: "automation",
          kind: "cards",
          label: copy.automationLabel,
          items: cards(copy.automation),
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
          items: cards(copy.examples),
        }
      : null,
    copy.faq && copy.faqLabel
      ? {
          id: "faq",
          kind: "faq",
          label: copy.faqLabel,
          items: cards(copy.faq),
        }
      : null,
  ].filter((item): item is ProductSection => item !== null);

  if (!product) return baseSections;

  if (product.archetype === "browserExtension") {
    return [
      section({
        id: "positioning",
        kind: "cards",
        label: specLabel("positioning", isZh ? "适合谁" : "Best for"),
        items: cards(copy.positioning),
      }),
      section({
        id: "features",
        kind: "cards",
        label: specLabel("features", isZh ? "页面里有什么" : "What appears"),
        items: cards(copy.features),
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
              items: cards(copy.faq),
            }),
          ]
        : []),
    ];
  }

  if (product.archetype === "storageCli") {
    return [
      section({
        id: "positioning",
        kind: "cards",
        label: specLabel("positioning", isZh ? "它解决什么" : "What it solves"),
        items: cards(copy.positioning),
      }),
      section({
        id: "automation",
        kind: "cards",
        label: specLabel("automation", isZh ? "自动化路径" : "Automation path"),
        items: cards([...copy.features, ...(copy.automation ?? [])]),
        layout: spec("automation")?.layout ?? "evidence",
      }),
      section({
        id: "story",
        kind: "story",
        label: copy.rationaleLabel,
        title: copy.rationaleTitle,
        body: copy.rationaleBody,
      }),
      ...(copy.workflow && copy.workflowLabel
        ? [
            section({
              id: "workflow",
              kind: "cards",
              label: specLabel("workflow", isZh ? "一次运行" : "One run"),
              items: cards(copy.workflow),
              layout: spec("workflow")?.layout ?? "steps",
              numbered: spec("workflow")?.numbered ?? true,
            }),
          ]
        : []),
      ...(copy.examples && copy.examplesLabel
        ? [
            section({
              id: "examples",
              kind: "cards",
              label: specLabel("examples", isZh ? "实际用法" : "Practical runs"),
              items: cards(copy.examples),
              layout: spec("examples")?.layout ?? "dense",
            }),
          ]
        : []),
      ...(copy.cases && copy.casesLabel && copy.casesTitle
        ? [
            section({
              id: "cases",
              kind: "cases",
              label: specLabel("cases", isZh ? "兼容端点" : "Compatible endpoints"),
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
              items: cards(copy.faq),
            }),
          ]
        : []),
    ];
  }

  if (product.archetype === "agentPackage") {
    return [
      section({
        id: "positioning",
        kind: "cards",
        label: specLabel("positioning", isZh ? "它解决什么" : "What it solves"),
        items: cards(copy.positioning),
      }),
      section({
        id: "features",
        kind: "cards",
        label: specLabel("features", isZh ? "技能和工具" : "Skills and tools"),
        items: cards(copy.features),
        layout: spec("features")?.layout ?? "evidence",
      }),
      section({
        id: "story",
        kind: "story",
        label: copy.rationaleLabel,
        title: copy.rationaleTitle,
        body: copy.rationaleBody,
      }),
      ...(copy.workflow && copy.workflowLabel
        ? [
            section({
              id: "workflow",
              kind: "cards",
              label: specLabel("workflow", isZh ? "诊断流程" : "Diagnosis flow"),
              items: cards(copy.workflow),
              layout: spec("workflow")?.layout ?? "steps",
              numbered: spec("workflow")?.numbered ?? true,
            }),
          ]
        : []),
      ...(copy.cases && copy.casesLabel && copy.casesTitle
        ? [
            section({
              id: "cases",
              kind: "cases",
              label: specLabel("cases", isZh ? "故障领域" : "Failure domains"),
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
              items: cards(copy.faq),
            }),
          ]
        : []),
    ];
  }

  return baseSections;
}
