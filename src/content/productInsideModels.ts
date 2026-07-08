import type { ProductInsideModel } from "./productPageTypes";
import type { Locale, ProductSlug } from "../lib/site";

type LocalizedText = Record<Locale, string>;

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
      body: "One CLI for the two questions that matter before a migration or investigation: what is here, and what changed?",
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
            body: "把大规模 S3 兼容存储写成可分析的 Parquet list，不必先手动调一套扫描参数。",
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
  "storage-agent-workbench": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Native desktop agent",
      title: "Ask about your storage, get evidence back",
      body: "Start a chat or pick a task — bucket config, access logs, inventory, errors, or cost. The agent plans read-only checks, works in DuckDB on imported evidence, and cites the log rows or config lines behind each finding.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "本地原生 agent",
      title: "问一句存储，拿回一份证据",
      body: "开对话或选任务——桶配置、访问日志、清单、错误或成本。agent 规划只读检查，在 DuckDB 里分析导入材料，每条结论都带上对应的日志行或配置行。",
    },
  },
  storageops: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Pi extension + skill pack",
      title: "Storage expertise for Pi",
      body: "StorageOps gives Pi the skills, extension tools, and deterministic helpers needed to investigate S3-compatible storage from the evidence you provide.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "Pi 扩展与 skill pack",
      title: "Pi 可用的对象存储 skills 与工具",
      body: "把报错、日志、配置或 trace 交给 Pi。StorageOps 提供对象存储技能、扩展工具和确定性脚本，供 Pi 按需调用。",
    },
  },
  httpmon: browserInside(
    { en: "The command runs as before", zh: "命令照常运行，请求同时可见" },
    {
      en: "httpmon starts a local proxy for one subprocess. It supplies the proxy and CA through that process only, then clears the temporary setup when it exits.",
      zh: "httpmon 只为当前子进程启动本地代理，并向它传入代理和 CA。命令退出后，临时设置会自动清理。",
    },
  ),
  "agent-radar": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Markdown-first radar",
      title: "Signals you can edit and version",
      body: "Agent Radar keeps thesis, watchlist, field notes, playbooks, and storage implications in plain Markdown files — plus a stdlib Python CLI to scaffold, validate, and brief the repo.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "Markdown 优先雷达",
      title: "可编辑、可版本管理的信号",
      body: "Agent Radar 把判断、观察名单、现场笔记、playbook 和存储视角放在纯 Markdown 文件里，并用标准库 Python CLI 脚手架化、校验和生成简报。",
    },
  },
  pagewise: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Local desktop agent",
      title: "Read documents page by page",
      body: "Open a PDF or image, extract text locally, and ask the agent about specific pages. The preview follows what it reads so you can verify every citation.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "本地桌面 agent",
      title: "按页读懂你的文档",
      body: "打开 PDF 或图片，在本地提取文本，向 agent 提问具体页面。预览会跟着它读的页走，方便核对每条引用。",
    },
  },
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
