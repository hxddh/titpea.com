import { s3EvidenceFacts, storageOpsEvidenceFacts } from "./productEvidenceFacts";
import { insideValueCopy } from "./i18n/insideCopy";
import type { ProductInsideModel } from "./productPageTypes";
import type { Locale, ProductSlug } from "../lib/site";

type LocalizedText = Record<Locale, string>;

const s3MetricValue = (locale: Locale, value: string) => {
  const localized = insideValueCopy.s3MetricValues[locale];
  return value in localized ? localized[value as keyof typeof localized] : value;
};

const s3ArtifactLabel = (locale: Locale, label: string) => {
  const localized = insideValueCopy.s3ArtifactLabels[locale];
  return label in localized ? localized[label as keyof typeof localized] : label;
};

const storageOpsValue = (locale: Locale, value: string) => {
  const localized = insideValueCopy.storageOpsValues[locale];
  return value in localized ? localized[value as keyof typeof localized] : value;
};

const browserInside = (title: LocalizedText, body: LocalizedText): Record<Locale, ProductInsideModel> => ({
  en: { id: "inside", kind: "inside", kicker: "A look inside", title: title.en, body: body.en },
  zh: { id: "inside", kind: "inside", kicker: "内部视角", title: title.zh, body: body.zh },
});

export const productInsideModels: Record<ProductSlug, Record<Locale, ProductInsideModel>> = {
  "s3-turbo-list": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "A look inside",
      title: "The default path keeps long runs inspectable",
      body: "s3-turbo-list keeps list / diff focused: segmented list, checkpoint resume, trace JSONL, dry-run plans, run manifests, and Parquet output sit on the normal path.",
      panel: {
        kind: "metricWorkbench",
        label: "s3-turbo-list run workbench",
        title: "list / diff path",
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
      id: "inside",
      kind: "inside",
      kicker: "内部视角",
      title: "默认路径保留可检查产物",
      body: "s3-turbo-list 聚焦 list / diff：分段 list、断点恢复、trace JSONL、dry-run plan、运行记录和 Parquet 输出都在正常路径里。",
      panel: {
        kind: "metricWorkbench",
        label: "s3-turbo-list run workbench",
        title: "list / diff 路径",
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
  storageops: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "A look inside",
      title: "A diagnosis system around Pi",
      body: "StorageOps combines skills, registered tools, parsers, analyzers, memory search, Web API, MCP, and secret redaction around Pi for S3-compatible troubleshooting.",
      panel: {
        kind: "agentEvidence",
        label: "StorageOps skills and tools summary",
        eyebrow: "storageops agent",
        title: "skills + tools loaded",
        metrics: storageOpsEvidenceFacts.insideMetrics.map((metric) => ({
          label: metric.label.en,
          value: storageOpsValue("en", metric.value),
          body: metric.body.en,
        })),
      },
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "内部视角",
      title: "围绕 Pi 的诊断系统",
      body: "StorageOps 把 skills、注册工具、解析器、分析器、历史搜索、Web API、MCP 和凭据脱敏组合到 Pi 周围，用来排查 S3 兼容故障。",
      panel: {
        kind: "agentEvidence",
        label: "StorageOps skills and tools summary",
        eyebrow: "storageops 诊断系统",
        title: "skills + tools loaded",
        metrics: storageOpsEvidenceFacts.insideMetrics.map((metric) => ({
          label: metric.label.zh,
          value: storageOpsValue("zh", metric.value),
          body: metric.body.zh,
        })),
      },
    },
  },
  "world-clock": browserInside(
    { en: "Time, checked quickly", zh: "查时间应该很短" },
    {
      en: "World Clock is not a scheduling system. It is a compact context tool: open it, glance at city time, and return to the task.",
      zh: "世界时钟不是排期系统。它是一个快速上下文工具：打开弹窗，看一眼城市时间、工作时段和日期，然后回到当前任务。",
    },
  ),
  "douban-movie-rating": browserInside(
    { en: "Ratings without leaving Douban", zh: "不离开豆瓣，对照评分" },
    {
      en: "The extension adds context rather than replacing Douban: when a reliable match exists, IMDb, Rotten Tomatoes, and Metacritic appear in the page you are already reading.",
      zh: "豆瓣电影评分助手只补充参考信息：匹配到影片时，把 IMDb、Rotten Tomatoes 和 Metacritic 放进豆瓣详情页，原来的阅读节奏不变。",
    },
  ),
};

export const productInsideModel = (slug: ProductSlug, locale: Locale) => productInsideModels[slug][locale];
