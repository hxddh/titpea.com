export const aboutModelCopy = {
  en: {
    contactLabel: "Contact",
    productsLabel: "Products",
    heroBody:
      "I work on cloud object storage by day. I also ship independent products for the jobs that keep showing up: large-bucket inventory and diagnosis, local agents, and a few focused utilities.",
    whyLabel: "How the catalog is organized",
    whyTitle: "Two lines, one habit",
    whyBody:
      "The storage products share one habit: leave an inspectable result, keep side effects local, and say clearly what the product will not do.",
    whyStorageLabel: "Object storage",
    whyStorageBody:
      "Installable products and CLIs for inventory, diagnosis, and read-only investigation on S3-compatible systems.",
    whyPersonalLabel: "Reading & media",
    whyPersonalBody:
      "A local document agent, plus utilities for time zones and film ratings, and a Markdown radar for agent signals.",
    whyClosing:
      "Not a product suite—independent releases that share a bias: local-first where it matters, facts over dashboards, and a short path from problem to evidence.",
  },
  zh: {
    contactLabel: "联系",
    productsLabel: "作品",
    heroBody:
      "白天做云对象存储产品；同时把反复遇到的问题做成可安装的独立产品：大桶盘点与排查、本地 agent，以及少量场景明确的轻量工具。",
    whyLabel: "作品怎么分",
    whyTitle: "两块内容，同一习惯",
    whyBody: "存储相关产品共享同一个习惯：留下可检查的结果，副作用尽量留在本机，并写清楚产品不会做什么。",
    whyStorageLabel: "对象存储",
    whyStorageBody: "面向 S3 兼容系统的可安装产品与 CLI：盘点、排查与只读调查。",
    whyPersonalLabel: "阅读与影音",
    whyPersonalBody: "本地文档 agent，以及时区、观影评分等轻量工具，和用 Markdown 跟踪 agent 信号的雷达。",
    whyClosing:
      "不是套件，是彼此独立发布的产品；共同偏好是：该本地就本地、用事实而不是仪表盘、从问题到证据的路径要短。",
  },
} as const;

export const catalogCopy = {
  en: {
    httpmon: "Watch one command's HTTP/HTTPS in the terminal — no system-proxy change.",
    s3Text: "Automatic, fast S3 list / diff with Parquet output.",
    s3Role: "List / Diff CLI",
    workbenchText: "Native desktop agent for read-only S3-compatible storage investigation.",
    workbenchRole: "Desktop product",
    storageopsText: "Pi extension for S3-compatible storage troubleshooting.",
    storageopsRole: "Agent package",
    httpmonRole: "CLI product",
    worldClockText: "A fast multi-city time popup.",
    worldClockRole: "Chrome extension",
    doubanText: "Shows IMDb, Rotten Tomatoes, and Metacritic inside Douban movie pages.",
    doubanRole: "Chrome extension",
    pagewiseText: "Local desktop agent for PDF text, OCR, and page-wise Q&A.",
    pagewiseRole: "Desktop product",
    agentRadarText: "Markdown-first AI Agent trend radar with watchlist, field notes, and playbooks.",
    agentRadarRole: "CLI product",
    badgeDesktop: "Desktop app",
    badgeExtension: "Extension",
    badgeCli: "CLI",
    badgePackage: "Package",
    homeFlagshipVisual: "Storage Agent product interface",
  },
  zh: {
    httpmon: "在终端实时查看一条命令的 HTTP/HTTPS，不改系统代理。",
    s3Text: "自动展开的高速 S3 list / diff，输出 Parquet。",
    s3Role: "List / Diff CLI",
    storageopsText: "Pi 的对象存储排查 skills 与工具。",
    storageopsRole: "Agent 扩展包",
    workbenchText: "本地桌面 agent：只读调查 S3 兼容存储。",
    workbenchRole: "桌面产品",
    httpmonRole: "CLI 产品",
    worldClockText: "快速查看城市时间。",
    worldClockRole: "Chrome 扩展",
    doubanText: "在豆瓣电影页内对照 IMDb、Rotten Tomatoes 和 Metacritic。",
    doubanRole: "Chrome 扩展",
    pagewiseText: "本地桌面 agent：PDF 文本、OCR 与按页问答。",
    pagewiseRole: "桌面产品",
    agentRadarText: "Markdown 优先的 AI Agent 趋势雷达：观察名单、现场笔记与 playbook。",
    agentRadarRole: "CLI 产品",
    badgeDesktop: "桌面应用",
    badgeExtension: "浏览器扩展",
    badgeCli: "CLI",
    badgePackage: "扩展包",
    homeFlagshipVisual: "Storage Agent 产品界面",
  },
} as const;
