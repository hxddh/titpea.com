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
    httpmon: "Inspect HTTP/HTTPS traffic from terminal commands.",
    s3Text: "Fast list / diff with resume, trace, and Parquet output.",
    s3Tagline: "Fast S3 list / diff",
    s3Role: "List / Diff",
    storageopsText: "S3 diagnostics agent with skills, parsers, analyzers, MCP, and Web API.",
    storageopsTagline: "S3 diagnostics agent",
    storageopsRole: "S3 diagnostics",
    httpmonTagline: "Terminal HTTPS inspector",
    httpmonRole: "HTTP inspection",
    worldClockText: "A fast city-time popup.",
    browserTagline: "Lightweight Chrome extension",
    worldClockRole: "Timezone utility",
    doubanText: "Adds external rating context to Douban movie pages.",
    doubanRole: "Rating context",
    s3EvidenceTitle: "1M objects, ~55s to ~19s",
    s3EvidenceBody:
      "The README cites a third-party Alibaba Cloud OSS benchmark: 1M objects in ~55s single-stream and ~19s with `-c 8`.",
    storageopsEvidenceTitle: "15 skills, 21 tools",
    storageopsEvidenceBody:
      "The README defines StorageOps as a diagnostics system: CLI sessions, skills, registered tools, Web API, MCP, reports, memory, and secret redaction.",
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
    httpmon: "查看终端命令发出的 HTTP/HTTPS 流量。",
    s3Text: "高速 S3 list / diff，支持恢复、trace 和 Parquet 输出。",
    s3Tagline: "高速 S3 list / diff",
    s3Role: "List / Diff",
    storageopsText: "S3 诊断 agent，包含 skills、解析器、分析器、MCP 和 Web API。",
    storageopsTagline: "S3 诊断 agent",
    storageopsRole: "S3 诊断",
    httpmonTagline: "终端 HTTPS 检查器",
    httpmonRole: "HTTP 检查",
    worldClockText: "快速查看城市时间。",
    browserTagline: "轻量 Chrome 扩展",
    worldClockRole: "时区工具",
    doubanText: "给豆瓣电影页补充外部评分。",
    doubanRole: "评分辅助",
    s3EvidenceTitle: "1M 对象，~55s 到 ~19s",
    s3EvidenceBody: "README 引用的第三方 Alibaba Cloud OSS 测试：1M 对象单流约 55s，`-c 8` 约 19s。",
    storageopsEvidenceTitle: "15 个 skills，21 个 tools",
    storageopsEvidenceBody:
      "README 里的定位已经是诊断系统：CLI session、skills、注册工具、Web API、MCP、报告、历史记忆和凭据脱敏。",
    groups: [
      {
        title: "对象存储",
        text: "对象清单、diff、诊断和请求检查。",
      },
      {
        title: "浏览器工具",
        text: "只补一个缺失上下文。",
      },
      {
        title: "做事方式",
        text: "命令面小，输出可检查。",
      },
    ],
  },
} as const;
