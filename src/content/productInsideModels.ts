import type { ProductInsideModel } from "./productPageTypes";
import type { Locale, ProductSlug } from "../lib/site";

type LocalizedText = Record<Locale, string>;

const productInside = (
  kicker: LocalizedText,
  title: LocalizedText,
  body: LocalizedText,
): Record<Locale, ProductInsideModel> => ({
  en: { id: "inside", kind: "inside", kicker: kicker.en, title: title.en, body: body.en },
  zh: { id: "inside", kind: "inside", kicker: kicker.zh, title: title.zh, body: body.zh },
});

export const productInsideModels: Partial<Record<ProductSlug, Record<Locale, ProductInsideModel>>> = {
  "s3-turbo-list": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "List and diff",
      title: "Answers for large buckets",
      body: "One CLI for the two questions that matter before a migration or investigation: what is here, and what changed?",
      panel: {
        kind: "s3Purpose",
        label: "List and diff outputs",
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
      kicker: "list 与 diff",
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
      title: "Investigation stays on this machine",
      body: "Consoles manage objects in the browser. Here the investigation runs on this desktop — tools, local analysis, and session evidence in one place.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "桌面调查 Agent",
      title: "排查留在这台机器",
      body: "控制台在浏览器里管对象。这里排查跑在这台桌面上——工具、本地分析和会话证据都在一处。",
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
  httpmon: productInside(
    { en: "Beside the command", zh: "就在命令旁边" },
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
      title: "The trail is the interface",
      body: "Citations, pages-read, and follow-along preview are controls, not a recap. Marks stay on the file; the thread stays with that document.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "本地 PDF 工作台",
      title: "阅读轨迹就是操作界面",
      body: "页引用、已读页和跟随预览是操作，不是复述。批注留在文件上；线程跟着这篇文档走。",
    },
  },
  "douban-movie-rating": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "On the movie page",
      title: "A match, then three scores",
      body: "Scores appear only when titles and metadata line up. An uncertain match adds nothing; Douban keeps the page.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "就在豆瓣页里",
      title: "先匹配，再对照分数",
      body: "片名和信息对得上才显示。对不上就不加；豆瓣页面照常。",
    },
  },
  goban: productInside(
    { en: "On the board", zh: "棋盘上" },
    { en: "Play, inspect, and return to any move", zh: "对弈、查看，再回到任意一手" },
    {
      en: "Stay on one board: the game, the evaluation curve, and the move you jumped to are the same surface.",
      zh: "同一张棋盘上对弈、看曲线、再跳回那一手。",
    },
  ),
  chessboard: productInside(
    { en: "At the chessboard", zh: "在国际象棋棋盘上" },
    { en: "One board for the lesson and the game", zh: "学棋和对弈在同一张盘上" },
    {
      en: "The lesson, the drill, the game, and the review curve stay on one board instead of three apps.",
      zh: "学棋、做题、对弈和复盘都在同一张棋盘上，不用在几个应用之间跳。",
    },
  ),
  pulse: productInside(
    { en: "Menu-bar lamp", zh: "菜单栏状态灯" },
    { en: "The tray keeps facts; snooze keeps the row", zh: "托盘留下事实，稍后仍留那一行" },
    {
      en: "Waiting only arrives from hooks or an explicit pending mark. Snooze quiets the lamp without dropping the session row.",
      zh: "Waiting 只来自 hooks 或明确的 pending。稍后只关掉红灯，会话行还在。",
    },
  ),
  celagent: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Pi TUI + BOS persistence",
      title: "BOS is the session; the worker is a cache",
      body: "Each turn dual-writes a local worker cache and BOS with CAS; restore reads BOS first so sessions survive machine changes.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "Pi TUI + BOS 持久化",
      title: "会话在 BOS，worker 只是缓存",
      body: "每轮双写本地 worker 缓存与带 CAS 的 BOS；恢复先读 BOS，换机器也能找回会话。",
    },
  },
  "world-machine": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Experimental semantic runtime",
      title: "Inspectable worlds with explicit projections",
      body: "World Machine keeps semantic state in the runtime and feeds GPUI through projection snapshots. Packs supply domain worlds; the kernel stays generic and pre-alpha.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "实验性语义运行时",
      title: "可检查的世界，投影边界清晰",
      body: "World Machine 把语义状态留在运行时，经投影快照供给 GPUI。Pack 提供领域世界；内核保持通用，并明确处于 pre-alpha。",
    },
  },
  "easier-bookmarks": productInside(
    { en: "In the side panel", zh: "就在侧边栏里" },
    { en: "Chrome already has the tree", zh: "书签树还是 Chrome 的" },
    {
      en: "The side panel is for seeing and moving it in place. There is no second library to import.",
      zh: "侧边栏只是让你能看清、挪动。不必导入另一套资料库。",
    },
  ),
};

export const productInsideModel = (slug: ProductSlug, locale: Locale) => productInsideModels[slug]?.[locale] ?? null;
