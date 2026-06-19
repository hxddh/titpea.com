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
  zh: { id: "inside", kind: "inside", kicker: "看一眼", title: title.zh, body: body.zh },
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
      kicker: "看一眼",
      title: "长任务也有迹可循",
      body: "s3-turbo-list 只做 list / diff。分段 list、断点续跑、trace JSONL、dry-run plan、运行记录和 Parquet 输出，都是默认流程的一部分。",
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
      kicker: "看一眼",
      title: "Pi 外面的一层诊断能力",
      body: "StorageOps 围绕 Pi 组织技能、注册工具、解析器、分析器、历史检索、Web API、MCP 和凭据脱敏，用来排查 S3 兼容故障。",
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
  httpmon: browserInside(
    { en: "See traffic without changing the command", zh: "不改命令，直接查看请求" },
    {
      en: "httpmon starts a local proxy for one subprocess, injects the needed proxy and CA settings, then removes everything when that command exits.",
      zh: "httpmon 只为当前子进程启动本地代理，并注入所需的代理和 CA 设置。命令退出后，临时内容会自动清理。",
    },
  ),
  "world-clock": browserInside(
    { en: "Time, checked quickly", zh: "看一眼，就知道几点" },
    {
      en: "World Clock is not a scheduling system. It is a compact context tool: open it, glance at city time, and return to the task.",
      zh: "世界时钟不是排期工具。打开弹窗，一眼看清城市时间、工作时段和日期，然后继续手头的事。",
    },
  ),
  "douban-movie-rating": browserInside(
    { en: "Ratings without leaving Douban", zh: "不离开豆瓣，也能对照评分" },
    {
      en: "The extension adds context rather than replacing Douban: when a reliable match exists, IMDb, Rotten Tomatoes, and Metacritic appear in the page you are already reading.",
      zh: "豆瓣电影评分助手只补充参考信息。匹配到影片后，它会把 IMDb、Rotten Tomatoes 和 Metacritic 放到豆瓣详情页，不打断原本的阅读。",
    },
  ),
};

export const productInsideModel = (slug: ProductSlug, locale: Locale) => productInsideModels[slug][locale];
