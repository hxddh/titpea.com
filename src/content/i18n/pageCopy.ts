import { siteConfig } from "../siteConfig";
import type { Locale } from "../../lib/site";

export const localeMeta: Record<Locale, { htmlLang: "en" | "zh-CN"; alternateLabel: string }> = {
  en: { htmlLang: "en", alternateLabel: "中文" },
  zh: { htmlLang: "zh-CN", alternateLabel: "English" },
};

export const homeModelCopy = {
  en: {
    description: `Titpea is the personal site and product index for hxddh.`,
    expectedEvidence: "Storage tools",
    proofLabel: "Signals",
    evidenceKicker: "Evidence",
    evidenceTitle: "Evidence",
    evidenceBody: "Benchmarks and diagnosis tools.",
    browserBody: "Two small extensions.",
    screenshotLabel: "Browser extension screenshots",
    worldClockAlt: "World Clock dark interface screenshot",
    doubanAlt: "Douban Movie Rating Assistant page screenshot",
  },
  zh: {
    description: `${siteConfig.brand} 是 hxddh 的个人网站和产品索引。`,
    expectedEvidence: "存储工具",
    proofLabel: "关键词",
    evidenceKicker: "证据",
    evidenceTitle: "证据",
    evidenceBody: "压测数据和诊断工具。",
    browserBody: "两个小型扩展。",
    screenshotLabel: "浏览器扩展截图",
    worldClockAlt: "世界时钟深色界面截图",
    doubanAlt: "豆瓣电影评分助手页面截图",
  },
} as const;

export const aboutModelCopy = {
  en: {
    contactLabel: "Contact links",
    systemLabel: "Product lines",
    productsTitle: "Products",
    focusTitle: "Current focus",
  },
  zh: {
    contactLabel: "联系方式",
    systemLabel: "产品线",
    productsTitle: "产品",
    focusTitle: "当前关注",
  },
} as const;

export const catalogCopy = {
  en: {
    httpmon: "See one command's HTTP/HTTPS requests in the terminal.",
    s3Text: "Automatic, fast S3 list / diff with Parquet output.",
    s3Tagline: "Automatic S3 list / diff",
    s3Role: "List / Diff",
    storageopsText: "Pi skills and tools for diagnosing S3-compatible storage.",
    storageopsTagline: "Storage diagnosis for Pi",
    storageopsRole: "Pi extension",
    httpmonTagline: "Terminal HTTP inspector",
    httpmonRole: "HTTP inspection",
    worldClockText: "A fast city-time popup.",
    browserTagline: "Lightweight Chrome extension",
    worldClockRole: "Timezone utility",
    doubanText: "Adds external rating context to Douban movie pages.",
    doubanRole: "Rating context",
    s3EvidenceTitle: "1M objects, ~55s to ~19s",
    s3EvidenceBody:
      "The README cites a third-party Alibaba Cloud OSS benchmark: 1M objects in ~55s single-stream and ~19s with `-c 8`.",
    storageopsEvidenceTitle: "Pi extension, skills, and tools",
    storageopsEvidenceBody:
      "StorageOps gives Pi storage skills and extension tools for evidence-based investigation, without connecting to cloud accounts.",
    groups: [
      {
        title: "Object storage",
        text: "List, diff, diagnosis, and request inspection.",
      },
      {
        title: "Browser utilities",
        text: "Small extensions for one missing context.",
      },
      {
        title: "Working style",
        text: "Small surfaces. Inspectable output.",
      },
    ],
  },
  zh: {
    httpmon: "在终端查看一条命令发出的 HTTP/HTTPS 请求。",
    s3Text: "自动展开的高速 S3 list / diff，输出 Parquet。",
    s3Tagline: "自动 S3 list / diff",
    s3Role: "List / Diff",
    storageopsText: "给 Pi 用的 S3 兼容存储诊断 skills 和工具。",
    storageopsTagline: "Pi 的对象存储诊断扩展",
    storageopsRole: "Pi 扩展",
    httpmonTagline: "终端 HTTP 查看器",
    httpmonRole: "请求排查",
    worldClockText: "快速查看城市时间。",
    browserTagline: "轻量 Chrome 扩展",
    worldClockRole: "时区工具",
    doubanText: "给豆瓣电影页补充外部评分。",
    doubanRole: "评分辅助",
    s3EvidenceTitle: "1M 对象，~55s 到 ~19s",
    s3EvidenceBody: "README 引用第三方 Alibaba Cloud OSS 测试：1M 对象单流约 55 秒，`-c 8` 约 19 秒。",
    storageopsEvidenceTitle: "Pi 扩展、skills 与工具",
    storageopsEvidenceBody: "StorageOps 为 Pi 提供对象存储 skills 和扩展工具，根据现场材料排查问题，不会连接云账号。",
    groups: [
      {
        title: "对象存储",
        text: "对象 list、diff、诊断和请求排查。",
      },
      {
        title: "浏览器工具",
        text: "只补浏览时真正缺的一点信息。",
      },
      {
        title: "做事方式",
        text: "命令面克制，结果可复查。",
      },
    ],
  },
} as const;
