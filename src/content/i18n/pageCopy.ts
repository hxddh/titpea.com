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
    evidenceTitle: "What the main tools prove",
    evidenceBody:
      "s3-turbo-list is measured on large listings. StorageOps is concrete about the skills, tools, helpers, and evals it installs into Pi.",
    browserBody:
      "These two extensions stay deliberately small: one checks city time, the other adds rating context inside Douban movie pages.",
    screenshotLabel: "Browser extension screenshots",
    worldClockAlt: "World Clock dark interface screenshot",
    doubanAlt: "Douban Movie Rating Assistant page screenshot",
  },
  zh: {
    description: `${siteConfig.brand} 是 hxddh 的个人网站和产品索引。`,
    expectedEvidence: "先看事实",
    proofLabel: "产品主线",
    evidenceKicker: "主产品证据",
    evidenceTitle: "主工具先看事实",
    evidenceBody: "s3-turbo-list 有大桶列举测试数据；StorageOps 明确说明装进 Pi 的 skills、tools、helpers 和 evals。",
    browserBody: "两个扩展都刻意做小：一个看城市时间，一个把参考评分补到豆瓣电影页里。",
    screenshotLabel: "浏览器扩展截图",
    worldClockAlt: "世界时钟深色界面截图",
    doubanAlt: "豆瓣电影评分助手页面截图",
  },
} as const;

export const aboutModelCopy = {
  en: {
    contactLabel: "Contact links",
    systemLabel: "Product lines",
    productsTitle: "Storage tools first",
    focusTitle: "Current focus",
  },
  zh: {
    contactLabel: "联系方式",
    systemLabel: "产品线",
    productsTitle: "存储工具优先",
    focusTitle: "当前关注",
  },
} as const;

export const catalogCopy = {
  en: {
    httpmon: "Zero-config terminal inspector for HTTP/HTTPS traffic from curl, aws, python, node, and other CLI tools.",
    s3Text:
      "High-performance listing, diffing, checkpoint/resume, provider validation, and Parquet export for large S3-compatible buckets.",
    s3Tagline: "Fast S3-compatible listing and diff",
    s3Role: "Listing / Diff",
    storageopsText:
      "A Pi Coding Agent extension and skill pack for S3-compatible diagnosis: 16 packs, 4 tools, helpers, and golden cases.",
    storageopsTagline: "Pi extension and S3 skill pack",
    storageopsRole: "Pi diagnosis",
    httpmonTagline: "Zero-config terminal HTTPS inspector",
    httpmonRole: "HTTP inspection",
    worldClockText: "A fast city-time popup for remote work, travel, and quick context checks.",
    browserTagline: "Lightweight Chrome extension",
    worldClockRole: "Timezone utility",
    doubanText: "Adds IMDb, Rotten Tomatoes, and Metacritic context inside Douban movie pages.",
    doubanRole: "Rating context",
    s3EvidenceTitle: "1M objects, ~55s to ~19s",
    s3EvidenceBody:
      "The README cites a third-party Alibaba Cloud OSS benchmark: 1M objects in ~55s single-stream and ~19s with `-c 8`.",
    storageopsEvidenceTitle: "16 packs, 4 Pi tools",
    storageopsEvidenceBody:
      "The README defines StorageOps as a Pi extension and skill pack: diagnostic skills, extension tools, deterministic helpers, and compact golden cases.",
    groups: [
      {
        title: "Object storage",
        text: "Inventory, diff, resume, provider validation, diagnosis, and request-level inspection.",
      },
      {
        title: "Browser utilities",
        text: "Small extensions that add missing context without taking over the page.",
      },
      {
        title: "Working style",
        text: "Small command surfaces, bounded evidence, and artifacts that can move into DuckDB, CI, logs, or Pi.",
      },
    ],
  },
  zh: {
    httpmon: "零配置终端 HTTP/HTTPS 检查器，可包住 curl、aws、python、node 等命令并实时查看请求和响应。",
    s3Text: "面向大型 S3 兼容桶的高性能 listing、diff、checkpoint/resume、端点验证和 Parquet 输出。",
    s3Tagline: "高性能 S3 兼容 listing / diff",
    s3Role: "Listing / Diff",
    storageopsText: "Pi Coding Agent 的扩展和 S3 诊断技能包：16 个包、4 个工具、辅助脚本和 golden cases。",
    storageopsTagline: "Pi 扩展与 S3 技能包",
    storageopsRole: "Pi 诊断",
    httpmonTagline: "零配置终端 HTTPS 检查器",
    httpmonRole: "HTTP 检查",
    worldClockText: "快速查看几个城市的当前时间，适合远程协作、旅行和临时确认时区。",
    browserTagline: "轻量 Chrome 扩展",
    worldClockRole: "时区工具",
    doubanText: "把 IMDb、Rotten Tomatoes 和 Metacritic 参考评分补到豆瓣电影页里。",
    doubanRole: "评分辅助",
    s3EvidenceTitle: "1M 对象，~55s 到 ~19s",
    s3EvidenceBody: "README 引用的第三方 Alibaba Cloud OSS 测试：1M 对象单流约 55s，`-c 8` 约 19s。",
    storageopsEvidenceTitle: "16 个包，4 个 Pi 工具",
    storageopsEvidenceBody:
      "README 对它的定义很具体：Pi extension、诊断 skills、extension tools、确定性 helpers，以及紧凑的 golden cases。",
    groups: [
      {
        title: "对象存储",
        text: "覆盖对象清单、diff、resume、端点验证、诊断和请求级检查。",
      },
      {
        title: "浏览器工具",
        text: "只补当前页面缺的一点上下文，不把小工具做成平台。",
      },
      {
        title: "做事方式",
        text: "命令面要小，证据有边界，产物能继续进入 DuckDB、CI、日志或 Pi。",
      },
    ],
  },
} as const;
