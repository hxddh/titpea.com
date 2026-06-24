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
    httpmon: "Watch one command's HTTP/HTTPS in the terminal — no system-proxy change.",
    s3Text: "Automatic, fast S3 list / diff with Parquet output.",
    s3Role: "List / Diff",
    storageopsText: "Pi skills and tools for diagnosing S3-compatible storage.",
    storageopsRole: "Pi extension",
    httpmonRole: "HTTP inspection",
    worldClockText: "A fast multi-city time popup.",
    worldClockRole: "Timezone utility",
    doubanText: "Shows IMDb, Rotten Tomatoes, and Metacritic inside Douban movie pages.",
    doubanRole: "Rating context",
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
    httpmon: "在终端实时查看一条命令的 HTTP/HTTPS，不改系统代理。",
    s3Text: "自动展开的高速 S3 list / diff，输出 Parquet。",
    s3Role: "List / Diff",
    storageopsText: "给 Pi 用的 S3 兼容存储诊断 skills 和工具。",
    storageopsRole: "Pi 扩展",
    httpmonRole: "请求排查",
    worldClockText: "快速查看城市时间。",
    worldClockRole: "时区工具",
    doubanText: "在豆瓣电影页内对照 IMDb、Rotten Tomatoes 和 Metacritic。",
    doubanRole: "评分辅助",
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
