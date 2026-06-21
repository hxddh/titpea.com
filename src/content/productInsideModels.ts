import { storageOpsEvidenceFacts } from "./productEvidenceFacts";
import { insideValueCopy } from "./i18n/insideCopy";
import type { ProductInsideModel } from "./productPageTypes";
import type { Locale, ProductSlug } from "../lib/site";

type LocalizedText = Record<Locale, string>;

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
      kicker: "What it does",
      title: "Answers for large buckets",
      body: "One CLI for the two questions that matter before a migration, investigation, or inventory: what is here, and what changed?",
      panel: {
        kind: "s3Purpose",
        label: "What s3-turbo-list is for",
        items: [
          {
            label: "LIST",
            title: "Know what is in a bucket",
            body: "Turn a large S3-compatible bucket into an analysis-ready object list without hand-tuning a scanner first.",
          },
          {
            label: "DIFF",
            title: "Know what changed between two buckets",
            body: "Compare source and target object metadata, then work from one ordered difference dataset.",
          },
        ],
        boundaryLabel: "Not a sync engine",
        boundary:
          "s3-turbo-list does not copy objects or replace a storage browser. It produces a reliable basis for the next decision.",
      },
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "它解决什么",
      title: "先回答大桶里的两个问题",
      body: "迁移、排查或盘点之前，先弄清两件事：桶里有什么，以及两端到底差了什么。",
      panel: {
        kind: "s3Purpose",
        label: "s3-turbo-list 的用途",
        items: [
          {
            label: "LIST",
            title: "弄清桶里有什么",
            body: "把大规模 S3 兼容存储写成可分析的对象清单，不必先手动调一套扫描参数。",
          },
          {
            label: "DIFF",
            title: "弄清两端差了什么",
            body: "对比源端和目标端的对象元数据，得到一份有序的差异结果。",
          },
        ],
        boundaryLabel: "不负责同步对象",
        boundary: "它不复制对象，也不替代存储浏览器；它负责给后续判断留下可靠的依据。",
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
