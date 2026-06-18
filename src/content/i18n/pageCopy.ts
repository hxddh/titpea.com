import { siteConfig } from "../siteConfig";
import type { Locale } from "../../lib/site";

export const localeMeta: Record<Locale, { htmlLang: "en" | "zh-CN"; alternateLabel: string }> = {
  en: { htmlLang: "en", alternateLabel: "中文" },
  zh: { htmlLang: "zh-CN", alternateLabel: "English" },
};

export const homeModelCopy = {
  en: {
    description: `Titpea is the personal site and product index for hxddh.`,
    expectedEvidence: "Product evidence",
    proofLabel: "Product spine",
    evidenceKicker: "Product evidence",
    evidenceTitle: "Evidence before features",
    evidenceBody:
      "The main products lead with checkable evidence: one shows benchmark data, the other shows what the agent package installs.",
    browserBody:
      "These two tools stay intentionally narrow: one checks time, the other adds rating context where you are already reading.",
    screenshotLabel: "Browser extension screenshots",
    worldClockAlt: "World Clock dark interface screenshot",
    doubanAlt: "Douban Movie Rating Assistant page screenshot",
  },
  zh: {
    description: `${siteConfig.brand} 是 hxddh 的个人网站和产品索引。`,
    expectedEvidence: "先看事实",
    proofLabel: "产品主线",
    evidenceKicker: "主产品证据",
    evidenceTitle: "先看事实，再看功能",
    evidenceBody: "主产品先给可检查的证据：一个有压测结果，一个说明 Pi 诊断包到底装了什么。",
    browserBody: "这两件工具不做平台，只解决一个浏览器里的小问题：一个看时间，一个补评分。",
    screenshotLabel: "浏览器扩展截图",
    worldClockAlt: "世界时钟深色界面截图",
    doubanAlt: "豆瓣电影评分助手页面截图",
  },
} as const;

export const aboutModelCopy = {
  en: {
    contactLabel: "Contact links",
    systemLabel: "Product lines",
    productsTitle: "Storage first, utilities second",
    focusTitle: "Working boundaries",
  },
  zh: {
    contactLabel: "联系方式",
    systemLabel: "产品线",
    productsTitle: "先是存储主线，然后是轻工具",
    focusTitle: "关注边界",
  },
} as const;

export const catalogCopy = {
  en: {
    httpmon:
      "Capture the real HTTP request and response when signing, retries, redirects, or provider behavior hide the clue.",
    s3Text:
      "Run automatic inventory or diff on large S3-compatible buckets, then keep Parquet, JSON plans, and run manifests.",
    s3Tagline: "Automatic object storage list / diff CLI",
    s3Role: "Inventory / Diff",
    storageopsText:
      "Give Pi a storage diagnosis layer: domain skills, bounded tools, deterministic helpers, and eval-backed routing.",
    storageopsTagline: "Pi-based object storage diagnosis agent",
    storageopsRole: "Diagnosis agent",
    httpmonTagline: "Command-line HTTP / HTTPS inspection",
    httpmonRole: "Traffic inspection",
    worldClockText: "A fast city-time popup for remote work, travel, and quick context checks.",
    browserTagline: "Lightweight Chrome extension",
    worldClockRole: "Timezone utility",
    doubanText: "Adds IMDb, Rotten Tomatoes, and Metacritic context inside Douban movie pages.",
    doubanRole: "Rating context",
    s3EvidenceTitle: "1M objects, ~55s to ~19s",
    s3EvidenceBody:
      "The current README cites a third-party Alibaba Cloud OSS benchmark: 1M objects in ~55s single-stream and ~19s with `-c 8`.",
    storageopsEvidenceTitle: "The storage diagnosis layer for Pi",
    storageopsEvidenceBody:
      "StorageOps is not a prompt pack. It gives Pi skills, tools, helpers, and evals that constrain the diagnostic path and evidence boundary.",
    groups: [
      {
        title: "Object storage",
        text: "One path for inventory, diff, diagnosis, and request-level evidence.",
      },
      {
        title: "Browser utilities",
        text: "Small extensions that add missing context without taking over the page.",
      },
      {
        title: "Working style",
        text: "Clear commands, inspectable output, and artifacts that can move into CI, DuckDB, logs, or the next diagnostic step.",
      },
    ],
  },
  zh: {
    httpmon: "当签名、重试、跳转或服务商行为藏在 SDK 下面时，直接看真实 HTTP 请求和响应。",
    s3Text: "自动列举或对比大型 S3 兼容存储桶，留下 Parquet、JSON plan 和运行记录。",
    s3Tagline: "自动化对象存储 list / diff CLI",
    s3Role: "对象清单 / Diff",
    storageopsText: "给 Pi 一层对象存储诊断能力：领域技能、有边界的工具、确定性脚本和回归用例。",
    storageopsTagline: "Pi 的对象存储诊断 agent",
    storageopsRole: "诊断 Agent",
    httpmonTagline: "命令行 HTTP / HTTPS 流量检查",
    httpmonRole: "流量检查",
    worldClockText: "快速查看几个城市的当前时间，适合远程协作、旅行和临时确认时区。",
    browserTagline: "轻量 Chrome 扩展",
    worldClockRole: "时区工具",
    doubanText: "把 IMDb、Rotten Tomatoes 和 Metacritic 参考评分补到豆瓣电影页里。",
    doubanRole: "评分辅助",
    s3EvidenceTitle: "1M 对象，~55s 到 ~19s",
    s3EvidenceBody:
      "最新 README 引用的第三方 Alibaba Cloud OSS 测试：1M 对象单流约 55s，`-c 8` 约 19s。默认路径会自动发现和并发。",
    storageopsEvidenceTitle: "Pi 的对象存储诊断层",
    storageopsEvidenceBody:
      "StorageOps 不是提示词集合。它把诊断技能、取证工具、确定性脚本和回归用例装进 Pi，让诊断路径和证据边界更清楚。",
    groups: [
      {
        title: "对象存储",
        text: "围绕对象清单、差异对比、诊断和请求级证据，做一条能接起来的工具线。",
      },
      {
        title: "浏览器工具",
        text: "只补当前页面缺的一点上下文，不把小工具做成平台。",
      },
      {
        title: "做事方式",
        text: "命令要清楚，输出要能检查，产物要能继续进入 CI、DuckDB、日志或下一步排查。",
      },
    ],
  },
} as const;
