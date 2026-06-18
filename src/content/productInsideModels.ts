import { s3EvidenceFacts, storageOpsEvidenceFacts } from "./productEvidenceFacts";
import type { ProductInsideModel } from "./productPageTypes";
import type { Locale, ProductSlug } from "../lib/site";

type LocalizedText = Record<Locale, string>;

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
      id: "inside",
      kind: "inside",
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
  storageops: {
    en: {
      id: "inside",
      kind: "inside",
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
      id: "inside",
      kind: "inside",
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
