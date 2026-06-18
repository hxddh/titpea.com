import { productArchetypeContracts, type PageSectionId, type VisualPolicy } from "./productArchetypes";
import { s3EvidenceFacts, storageOpsEvidenceFacts } from "./productEvidenceFacts";
import { productSections, type ProductSection } from "./productSections";
import { pathFor, type CurrentPage, type Locale, type Product, type ProductSlug } from "../lib/site";

type LocalizedText = Record<Locale, string>;

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

export type ProductVisualSpec = {
  kind: VisualPolicy;
  label: string;
};

export type ProductPageModel = {
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
  visual: ProductVisualSpec;
  structuredData: Record<string, unknown>;
  copy: Product["locales"][Locale];
  sections: ProductPageSection[];
};

type ProductPageRegistryItem = {
  ogImage: string;
  visual: VisualPolicy;
  inside: Record<Locale, Omit<ProductInsideModel, "id" | "kind">>;
  evidence?: Record<Locale, Omit<ProductEvidenceModel, "id" | "kind">>;
  expectedText: (copy: Product["locales"][Locale], locale: Locale) => string[];
};

const s3MetricValue = (locale: Locale, value: string) => {
  if (locale !== "zh") return value;
  return value === "zero hints" ? "零 hints" : value;
};

const s3ArtifactLabel = (locale: Locale, label: string) => {
  if (locale !== "zh") return label;
  return { artifacts: "产物", "provider logs": "服务商日志" }[label] ?? label;
};

const storageOpsValue = (locale: Locale, value: string) => {
  if (locale !== "zh") return value;
  return value
    .replace("15 diagnostic skills", `${storageOpsEvidenceFacts.skillsCount} 个诊断技能`)
    .replace("4 Pi tools", `${storageOpsEvidenceFacts.toolsCount} 个 Pi 工具`)
    .replace("deterministic helpers", "确定性脚本")
    .replace("eval cases", "回归用例");
};

const browserInside = (title: LocalizedText, body: LocalizedText): ProductPageRegistryItem["inside"] => ({
  en: { kicker: "A look inside", title: title.en, body: body.en },
  zh: { kicker: "内部视角", title: title.zh, body: body.zh },
});

const productPageRegistry: Record<ProductSlug, ProductPageRegistryItem> = {
  "s3-turbo-list": {
    ogImage: "/assets/og-s3-turbo-list.png",
    visual: "s3Benchmark",
    inside: {
      en: {
        kicker: "A look inside",
        title: "The default path handles the hard parts",
        body: "s3-turbo-list now behaves more like an automated inventory and diff tool: startup discovery, runtime splitting, dry-run plans, run manifests, and artifact checks sit on the default path.",
        panel: {
          kind: "metricWorkbench",
          label: "s3-turbo-list run workbench",
          title: "automatic inventory path",
          metrics: s3EvidenceFacts.insideMetrics.map((metric, index) => ({
            label: metric.label.en,
            value: s3MetricValue("en", metric.value),
            body: metric.body.en,
            strong: index === 0,
          })),
          rows: s3EvidenceFacts.artifactRows.map(([label, value]) => ({ label, value })),
        },
      },
      zh: {
        kicker: "内部视角",
        title: "默认路径自动完成繁琐部分",
        body: "s3-turbo-list 现在更像一个自动化对象清单 / diff 工具：启动发现、运行时拆分、dry-run plan、运行记录和产物校验都在默认路径里。",
        panel: {
          kind: "metricWorkbench",
          label: "s3-turbo-list run workbench",
          title: "自动对象清单路径",
          metrics: s3EvidenceFacts.insideMetrics.map((metric, index) => ({
            label: metric.label.zh,
            value: s3MetricValue("zh", metric.value),
            body: metric.body.zh,
            strong: index === 0,
          })),
          rows: s3EvidenceFacts.artifactRows.map(([label, value]) => ({ label: s3ArtifactLabel("zh", label), value })),
        },
      },
    },
    evidence: {
      en: {
        variant: "runChain",
        kicker: "Evidence chain",
        title: "One run from discovery to verification",
        body: "s3-turbo-list is not a pile of knobs. It pulls the error-prone parts of large object-storage list and diff runs into the default path.",
        cards: s3EvidenceFacts.deepDiveCards.map((card, index) => ({
          label: card.label.en,
          value: String(index + 1).padStart(2, "0"),
          body: card.body.en,
        })),
        benchmark: [
          { label: "Third-party OSS run", value: "1M objects" },
          ...s3EvidenceFacts.parallelRuns.map((run) => ({
            label: run.label,
            value: `${run.seconds}s`,
            body: `${run.throughput.toLocaleString()} objects/s`,
          })),
        ],
      },
      zh: {
        variant: "runChain",
        kicker: "证据链",
        title: "从发现到校验，一次运行闭环",
        body: "s3-turbo-list 的重点不是多给参数，而是把大型对象存储 list / diff 里最容易出错的步骤收进默认路径。",
        cards: s3EvidenceFacts.deepDiveCards.map((card, index) => ({
          label: card.label.zh,
          value: String(index + 1).padStart(2, "0"),
          body: card.body.zh,
        })),
        benchmark: [
          { label: "第三方 OSS 测试", value: "1M 对象" },
          ...s3EvidenceFacts.parallelRuns.map((run) => ({
            label: run.label,
            value: `${run.seconds}s`,
            body: `${run.throughput.toLocaleString()} objects/s`,
          })),
        ],
      },
    },
    expectedText: (copy, locale) => [copy.headline, locale === "zh" ? "自动化" : "Automation"],
  },
  storageops: {
    ogImage: "/assets/og-storageops.png",
    visual: "storageAgent",
    inside: {
      en: {
        kicker: "A look inside",
        title: "Turn Pi into a storage diagnosis agent",
        body: "StorageOps is not just a guide. It installs object-storage skills, Pi extension tools, helper scripts, and eval cases so Pi can diagnose S3-compatible failures.",
        panel: {
          kind: "agentEvidence",
          label: "StorageOps skills and tools summary",
          title: "skills + tools loaded",
          metrics: storageOpsEvidenceFacts.insideMetrics.map((metric) => ({
            label: metric.label.en,
            value: storageOpsValue("en", metric.value),
            body: metric.body.en,
          })),
        },
      },
      zh: {
        kicker: "内部视角",
        title: "让 Pi 会诊断对象存储问题",
        body: "StorageOps 不是一组排查说明，而是一套给 Pi 安装的能力：对象存储诊断技能、扩展工具、确定性脚本和回归用例。",
        panel: {
          kind: "agentEvidence",
          label: "StorageOps skills and tools summary",
          title: "skills + tools loaded",
          metrics: storageOpsEvidenceFacts.insideMetrics.map((metric) => ({
            label: metric.label.zh,
            value: storageOpsValue("zh", metric.value),
            body: metric.body.zh,
          })),
        },
      },
    },
    evidence: {
      en: {
        variant: "agentTopology",
        kicker: "Agent topology",
        title: "Skills decide; tools collect evidence",
        body: "StorageOps is not a prompt pack. It breaks Pi diagnosis into domain skills, evidence tools, deterministic helpers, and evals.",
        cards: storageOpsEvidenceFacts.capabilityCards.map((card) => ({
          label: card.label.en,
          value: card.value,
          body: card.body.en,
        })),
      },
      zh: {
        variant: "agentTopology",
        kicker: "Agent 拓扑",
        title: "技能决定判断，工具负责取证",
        body: "StorageOps 的核心不是提示词，而是把 Pi 的诊断过程拆成领域技能、取证工具、确定性脚本和回归评测。",
        cards: storageOpsEvidenceFacts.capabilityCards.map((card) => ({
          label: card.label.zh,
          value: card.value,
          body: card.body.zh,
        })),
      },
    },
    expectedText: (copy, locale) => [copy.headline, locale === "zh" ? "技能和工具" : "Skills and tools"],
  },
  "world-clock": {
    ogImage: "/assets/og-world-clock.png",
    visual: "worldClockScreenshot",
    inside: browserInside(
      { en: "Time, checked quickly", zh: "查时间应该很短" },
      {
        en: "World Clock is not a scheduling system. It is a compact context tool: open it, glance at city time, and return to the task.",
        zh: "世界时钟不是排期系统。它是一个快速上下文工具：打开弹窗，看一眼城市时间、工作时段和日期，然后回到当前任务。",
      },
    ),
    expectedText: (copy) => [copy.headline, "FAQ"],
  },
  "douban-movie-rating": {
    ogImage: "/assets/og-douban-movie-rating.png",
    visual: "doubanScreenshot",
    inside: browserInside(
      { en: "Ratings without leaving Douban", zh: "不离开豆瓣，对照评分" },
      {
        en: "The extension adds context rather than replacing Douban: when a reliable match exists, IMDb, Rotten Tomatoes, and Metacritic appear in the page you are already reading.",
        zh: "豆瓣电影评分助手只补充参考信息：匹配到影片时，把 IMDb、Rotten Tomatoes 和 Metacritic 放进豆瓣详情页，原来的阅读节奏不变。",
      },
    ),
    expectedText: (copy) => [copy.headline, "FAQ"],
  },
};

function requiredSections(contractSections: ProductPageSection[], expectedIds: PageSectionId[], slug: ProductSlug) {
  const ids = new Set(contractSections.map((section) => section.id));
  const missing = expectedIds.filter((id) => !ids.has(id));
  if (missing.length > 0) throw new Error(`${slug}: missing required page sections: ${missing.join(", ")}`);
}

function assertRequiredCopy(product: Product, locale: Locale) {
  const copy = product.locales[locale];
  const contract = productArchetypeContracts[product.archetype];
  const missing = contract.requiredCopy.filter((key) => {
    const value = copy[key];
    return Array.isArray(value) ? value.length === 0 : !value;
  });
  if (missing.length > 0) throw new Error(`${product.slug} ${locale}: missing required copy: ${missing.join(", ")}`);
}

export function productPageModel(product: Product, locale: Locale): ProductPageModel {
  assertRequiredCopy(product, locale);

  const contract = productArchetypeContracts[product.archetype];
  const registry = productPageRegistry[product.slug];
  const copy = product.locales[locale];
  const contentSections = productSections(locale, copy, product.archetype);
  const inside: ProductInsideModel = { id: "inside", kind: "inside", ...registry.inside[locale] };
  const evidence: ProductEvidenceModel | null = registry.evidence?.[locale]
    ? { id: "evidence", kind: "evidence", ...registry.evidence[locale] }
    : null;

  const sectionById = new Map<ProductPageSection["id"], ProductPageSection>([
    [inside.id, inside],
    ...(evidence ? [[evidence.id, evidence] as const] : []),
    ...contentSections.map((section) => [section.id, section] as const),
  ]);
  const sections = contract.sections.flatMap((spec) => {
    const section = sectionById.get(spec.id);
    if (!section && spec.required)
      throw new Error(`${product.slug} ${locale}: required section ${spec.id} was not built`);
    return section ? [section] : [];
  });
  requiredSections(
    sections,
    contract.sections.filter((section) => section.required).map((section) => section.id),
    product.slug,
  );

  const path = pathFor(locale, product.slug);
  const alternatePath = pathFor(locale === "zh" ? "en" : "zh", product.slug);
  const navItems = contract.sections
    .filter((spec) => sections.some((section) => section.id === spec.id))
    .map((spec) => ({ id: spec.id, label: spec.label[locale] }));

  return {
    slug: product.slug,
    current: product.slug,
    path,
    alternatePath,
    pageClass: contract.pageClass,
    title: copy.title,
    description: copy.description,
    ogImage: registry.ogImage,
    primaryCta: copy.primaryCta.href,
    expectedText: registry.expectedText(copy, locale),
    sectionIndex: contract.sectionIndex,
    indexLabel: contract.indexLabel[locale],
    navItems,
    visual: { kind: registry.visual ?? contract.defaultVisual, label: copy.title },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: copy.title,
      description: copy.description,
      applicationCategory: contract.applicationCategory,
      operatingSystem: contract.operatingSystem,
      url: `https://titpea.com${path}`,
      sameAs: copy.primaryCta.href,
    },
    copy,
    sections,
  };
}

export function productPageModels(products: Product[], locale: Locale) {
  return products.map((product) => productPageModel(product, locale));
}
