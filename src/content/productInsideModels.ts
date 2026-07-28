import type { ProductInsideModel } from "./productPageTypes";
import type { Locale, ProductSlug } from "../lib/site";

type LocalizedText = Record<Locale, string>;

const browserInside = (title: LocalizedText, body: LocalizedText): Record<Locale, ProductInsideModel> => ({
  en: { id: "inside", kind: "inside", kicker: "A look inside", title: title.en, body: body.en },
  zh: { id: "inside", kind: "inside", kicker: "看一眼", title: title.zh, body: body.zh },
});

export const productInsideModels: Partial<Record<ProductSlug, Record<Locale, ProductInsideModel>>> = {
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
      kicker: "Desktop investigation agent",
      title: "Chat plans the checks; evidence stays open",
      body: "Describe a bucket, error, or log. The agent follows storage playbooks, runs large analyses locally, and leaves the material it used beside the answer.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "桌面调查 Agent",
      title: "对话规划检查，证据留在旁边",
      body: "就桶、报错或日志开一段对话。Agent 按排查手册调用只读工具，大规模分析在本地完成，用过的材料留在回答旁边。",
    },
  },
  storageops: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Pi extension + skill pack",
      title: "Domain skills Pi can load on demand",
      body: "Pi is the runtime; StorageOps supplies storage-specific skills, four investigation tools, and helpers. Bring an error, log, configuration snippet, or trace, and Pi can investigate from that material without connecting to your cloud account.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "Pi 扩展与 skill pack",
      title: "按需加载的对象存储技能",
      body: "Pi 是运行时；StorageOps 提供对象存储 skills、四个调查工具和辅助脚本。带上报错、日志、配置片段或 trace，Pi 就能根据这些材料排查，而不连接你的云账号。",
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
      kicker: "One research loop",
      title: "Markdown state, scheduled runner, two models",
      body: "Agent Radar runs on GitHub Actions: Markdown holds durable research state, a deterministic runner scores and gates writes, and a cheaper model screens before a stronger model drafts.",
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
      kicker: "一条研究循环",
      title: "Markdown 状态、定时 runner、两级模型",
      body: "Agent Radar 跑在 GitHub Actions 上：Markdown 保存研究状态，确定性 runner 记分并约束写入，轻量模型初筛后再由强模型起草。",
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
      kicker: "Local PDF workbench",
      title: "Ask about a page — see what was read",
      body: "Open a PDF, ask a question, and watch the agent read specific pages under a budget. Citations and follow-along preview keep the source beside the answer.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "本地 PDF 工作台",
      title: "就某一页提问，看见它读了什么",
      body: "打开 PDF，提出问题，看 Agent 在预算内读具体页。页引用与跟随预览让原文留在回答旁边。",
    },
  },
  "douban-movie-rating": browserInside(
    { en: "Ratings without leaving Douban", zh: "不离开豆瓣，也能对照评分" },
    {
      en: "The extension adds context rather than replacing Douban: when a reliable match exists, IMDb, Rotten Tomatoes, and Metacritic appear in the page you are already reading.",
      zh: "豆瓣电影评分助手只补充参考信息。匹配到影片后，它会把 IMDb、Rotten Tomatoes 和 Metacritic 放到豆瓣详情页，不打断原本的阅读。",
    },
  ),
  goban: browserInside(
    { en: "Play, inspect, and return to any move", zh: "对弈、查看，再回到任意一手" },
    {
      en: "The board keeps the current game, AI controls, move list, practice drills, daily challenges, statistics, appearance, and SGF tools together in one desktop app.",
      zh: "当前棋局、AI 设置、手数列表、战术练习、每日挑战、对局统计、外观与 SGF 工具都集中在同一个桌面应用里。",
    },
  ),
  chessboard: browserInside(
    { en: "Learn, drill, then play and review", zh: "先学、做题，再对弈与复盘" },
    {
      en: "The board keeps beginner lessons, mate drills, Stockfish controls, clocks, SAN move list, review curve, themes, and PGN tools together in one desktop app.",
      zh: "零基础课程、杀型做题、Stockfish 设置、棋钟、SAN 着法列表、复盘曲线、主题与 PGN 工具都集中在同一个桌面应用里。",
    },
  ),
  pulse: browserInside(
    { en: "A lamp for waiting agents", zh: "给等待中的 Agent 一盏灯" },
    {
      en: "Pulse sits in the macOS menu bar: glance for waiting, running, or idle; open the tray for session rows; click through to the terminal that needs you.",
      zh: "Pulse 待在 macOS 菜单栏：余光看等待、运行或空闲；打开托盘看会话行；点一下跳到需要你的终端。",
    },
  ),
  "easier-bookmarks": browserInside(
    { en: "Your bookmark tree, without the menu maze", zh: "不用层层点菜单，也能看清书签树" },
    {
      en: "The side panel keeps folders, instant search, item actions, and drag or keyboard reordering available beside the page you are browsing.",
      zh: "文件夹、即时搜索、项目操作，以及拖放或键盘排序都留在侧边栏里，不挡住正在浏览的页面。",
    },
  ),
};

export const productInsideModel = (slug: ProductSlug, locale: Locale) => productInsideModels[slug]?.[locale] ?? null;
