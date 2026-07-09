export const aboutModelCopy = {
  en: {
    contactLabel: "Contact",
    toolsLabel: "Tools",
    heroBody:
      "I work on cloud object storage by day. On the side I ship small tools for jobs that keep showing up: list and diff large buckets, inspect HTTP beside a command, and run local agents without sending credentials or evidence to a hosted service.",
    whyLabel: "How the catalog is organized",
    whyTitle: "Two lines, one habit",
    whyBody:
      "Most of the storage tools start from the same habit: leave an inspectable result, keep side effects local, and say clearly what the tool will not do.",
    whyStorageLabel: "Object storage",
    whyStorageBody: "Inventory, diagnosis, and read-only investigation around S3-compatible systems.",
    whyPersonalLabel: "Reading & media",
    whyPersonalBody: "Documents, time zones, film ratings, and a Markdown radar for agent signals.",
    whyClosing:
      "They are not a product suite. They are independent tools that share a bias: local-first where it matters, facts over dashboards, and a short path from problem to evidence.",
  },
  zh: {
    contactLabel: "联系",
    toolsLabel: "工具",
    heroBody:
      "白天做云对象存储相关的产品；业余时间把反复遇到的问题收成小工具：大桶 list / diff、终端旁看 HTTP，以及尽量不把密钥和证据送上托管服务的本地 agent。",
    whyLabel: "工具怎么分",
    whyTitle: "两块内容，同一习惯",
    whyBody: "存储相关工具共享同一个习惯：留下可检查的结果，副作用尽量留在本机，并写清楚工具不会做什么。",
    whyStorageLabel: "对象存储",
    whyStorageBody: "围绕 S3 兼容系统的盘点、排查与只读调查。",
    whyPersonalLabel: "阅读与影音",
    whyPersonalBody: "文档、时区、观影评分，以及用 Markdown 跟踪 agent 信号。",
    whyClosing:
      "它们不是套件，是彼此独立的工具；共同偏好是：该本地就本地、用事实而不是仪表盘、从问题到证据的路径要短。",
  },
} as const;

export const catalogCopy = {
  en: {
    httpmon: "Watch one command's HTTP/HTTPS in the terminal — no system-proxy change.",
    s3Text: "Automatic, fast S3 list / diff with Parquet output.",
    s3Role: "List / Diff",
    workbenchText: "A local desktop app whose agent investigates S3-compatible storage read-only.",
    workbenchRole: "Desktop agent",
    storageopsText: "Pi extension for S3-compatible storage troubleshooting.",
    storageopsRole: "Pi extension",
    httpmonRole: "HTTP inspection",
    worldClockText: "A fast multi-city time popup.",
    worldClockRole: "Timezone utility",
    doubanText: "Shows IMDb, Rotten Tomatoes, and Metacritic inside Douban movie pages.",
    doubanRole: "Rating context",
    pagewiseText: "Local desktop agent for PDF text, OCR, and page-wise Q&A.",
    pagewiseRole: "Document agent",
    agentRadarText: "Markdown-first AI Agent trend radar with watchlist, field notes, and playbooks.",
    agentRadarRole: "Trend radar",
  },
  zh: {
    httpmon: "在终端实时查看一条命令的 HTTP/HTTPS，不改系统代理。",
    s3Text: "自动展开的高速 S3 list / diff，输出 Parquet。",
    s3Role: "List / Diff",
    storageopsText: "Pi 的对象存储排查 skills 与工具。",
    storageopsRole: "Pi 扩展",
    workbenchText: "本地桌面应用，agent 只读调查 S3 兼容存储。",
    workbenchRole: "桌面 agent",
    httpmonRole: "请求排查",
    worldClockText: "快速查看城市时间。",
    worldClockRole: "时区工具",
    doubanText: "在豆瓣电影页内对照 IMDb、Rotten Tomatoes 和 Metacritic。",
    doubanRole: "评分辅助",
    pagewiseText: "本地桌面 agent：PDF 文本、OCR 与按页问答。",
    pagewiseRole: "文档 agent",
    agentRadarText: "Markdown 优先的 AI Agent 趋势雷达：观察名单、现场笔记与 playbook。",
    agentRadarRole: "趋势雷达",
  },
} as const;
