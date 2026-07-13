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
      kicker: "Agent-native",
      title: "The agent owns the investigation thread",
      body: "Storage Agent is agent-native by construction: one tool-calling thread plans skills and whitelisted reads, narrates triage, and shows grounding — DuckDB / rule runs stay the deterministic floor under it.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "Agent-native",
      title: "调查线程由 Agent 主导",
      body: "Storage Agent 从架构上就是 agent-native。一条工具调用线程规划 skills 与白名单只读、叙述 triage，并展示 grounding——其下是确定性的 DuckDB / 规则 run。",
    },
  },
  storageops: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Pi extension + skill pack",
      title: "Domain skills Pi can load on demand",
      body: "Bring an error, log, config snippet, or trace. StorageOps supplies storage-specific skills, extension tools, and helpers so Pi can investigate from that material — without connecting to your cloud account.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "Pi 扩展与 skill pack",
      title: "按需加载的对象存储技能",
      body: "带上报错、日志、配置片段或 trace。StorageOps 提供存储领域的 skills、扩展工具和辅助脚本，让 Pi 根据材料排查——不连接你的云账号。",
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
      kicker: "Four parts, one loop",
      title: "Repo, runner, two models, free-source grid",
      body: "Agent Radar is a GitHub Actions research loop: Markdown as durable state, a deterministic runner, cheap-then-strong model routing, and free-source collection — with attention budget, evidence rules, and promote boundaries built in.",
      panel: {
        kind: "agentEvidence",
        label: "radar.md excerpt",
        eyebrow: "Illustrative sample",
        title: "radar.md · sample week",
        metrics: [
          {
            label: "Current thesis",
            value: "Local agents win on evidence",
            body: "Coding agents that keep workspace artifacts local are easier to audit than chat-only hosted flows.",
          },
          {
            label: "Changed",
            value: "Sandbox + snapshot noise",
            body: "More products advertise sandboxes; few document snapshot retention or replay cost.",
          },
          {
            label: "Open questions",
            value: "Who owns the artifact store?",
            body: "When agents write logs, checkpoints, and playbooks, which storage path is intentional vs incidental?",
          },
        ],
      },
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "四件套，一条循环",
      title: "内容仓、编排器、两级模型、免费源网",
      body: "Agent Radar 是跑在 GitHub Actions 上的研究循环。Markdown 作持久状态，确定性 runner 与两级模型路由，再加免费源采集——注意力预算、证据纪律与升格边界写进产品本身。",
      panel: {
        kind: "agentEvidence",
        label: "radar.md 摘录",
        eyebrow: "示例摘录",
        title: "radar.md · 示例周",
        metrics: [
          {
            label: "当前判断",
            value: "本地 agent 更易审计",
            body: "把工作区产物留在本地的 coding agent，比纯托管聊天流更容易核对证据。",
          },
          {
            label: "已变化",
            value: "沙箱与快照噪声",
            body: "更多产品宣传 sandbox；很少写清快照保留期或回放成本。",
          },
          {
            label: "开放问题",
            value: "产物存在谁的存储里",
            body: "当 agent 写日志、checkpoint 和 playbook 时，哪条存储路径是有意设计、哪条只是附带？",
          },
        ],
      },
    },
  },
  pagewise: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Page as first-class",
      title: "Read under budgets; show the trail",
      body: "PageWise is a local PDF workbench with a tool-loop agent. The page is the unit of reading — what was read stays visible and clickable beside the answer.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "页是一等公民",
      title: "预算内阅读，读迹可见",
      body: "PageWise 是带工具循环的本地 PDF 工作台。页是阅读单位——读过什么留在回答旁边，可点、可跟随。",
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
