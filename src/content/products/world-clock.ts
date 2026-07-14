import type { BrowserExtensionProduct } from "../../lib/site";
import { worldClockFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const worldClockMeta = `Chrome Web Store · ${worldClockFacts.category} · No data collection disclosed`;
const worldClockMetaZh = `Chrome Web Store · ${worldClockFacts.category} · 声明不收集数据`;

export const worldClockProduct: BrowserExtensionProduct = {
  slug: "world-clock",
  name: "World Clock",
  archetype: "browserExtension",
  locales: {
    en: {
      title: "World Clock",
      description: "A minimalist Chrome extension showing live time across major cities.",
      eyebrow: "Chrome Extension",
      headline: "Time across cities at a glance",
      lead: "Open one small popup to see the local time, UTC offset, date, and work-hours context for the cities you care about.",
      primaryCta: {
        label: "Install",
        href: siteConfig.externalLinks.worldClockChrome,
      },
      secondaryCta: { label: "Privacy details", href: siteConfig.externalLinks.worldClockPrivacy },
      meta: worldClockMeta,
      proof: ["Work-hours status", "Live city rows", "Light and dark themes", "No data collection disclosed"],
      positioningLabel: "Positioning",
      positioning: [
        {
          title: "Use it when",
          body: "You need a fast timezone glance during remote work, travel planning, or cross-region conversations.",
          intent: "fit",
          surface: "browser",
          priority: "primary",
        },
        {
          title: "What you get",
          body: "City names, codes, UTC offsets, work-hour status, live seconds, and date context.",
          intent: "fit",
          surface: "browser",
        },
      ],
      featuresLabel: "Capabilities",
      features: [
        {
          title: "Live city rows",
          body: "Each row keeps the city, code, UTC offset, work-hour status, local time, seconds, and date in one scan line.",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "Two visual modes",
          body: "The extension supports a light paper-like theme and a dark terminal-style theme.",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "Multilingual",
          body: "Available in 9 languages including English, Chinese, Japanese, Korean, French, German, Spanish, and Portuguese.",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "Privacy disclosure",
          body: "See the Chrome Web Store listing for the current no-collection statement.",
          intent: "evidence",
          evidence: "No data collection disclosed",
          surface: "browser",
        },
      ],
      rationaleLabel: "Details",
      rationaleTitle: "Open it, glance, get back to work",
      rationaleBody: [
        "The extension is listed under Tools in the Chrome Web Store and offered by titpea.com.",
        "Use it as a quick timezone glance for remote work, travel coordination, or checking whether a city is in business hours.",
      ],
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "Does it collect my location?",
          body: "The Chrome Web Store listing discloses no user-data collection. The extension is meant for manual city-time lookup, not location tracking.",
        },
      ],
    },
    zh: {
      title: "世界时钟",
      description: "一个很轻的 Chrome 扩展，用来快速查看几个主要城市的当前时间。",
      eyebrow: "Chrome 扩展",
      headline: "一眼看清几个城市的时间",
      lead: "打开一个小弹窗，直接看城市时间、UTC 偏移、日期和工作时段，看完继续手头的事。",
      primaryCta: {
        label: "安装扩展",
        href: siteConfig.externalLinks.worldClockChrome,
      },
      secondaryCta: { label: "隐私说明", href: siteConfig.externalLinks.worldClockPrivacy },
      meta: worldClockMetaZh,
      proof: ["工作时段状态", "城市时间行", "浅色和深色主题", "声明不收集数据"],
      positioningLabel: "边界",
      positioning: [
        {
          title: "什么时候用",
          body: "远程协作、旅行安排、跨地区沟通前，想快速确认几个城市现在几点、是不是工作时间。",
          intent: "fit",
          surface: "browser",
          priority: "primary",
        },
        {
          title: "打开后能看到什么",
          body: "城市名、城市代码、UTC 偏移、工作时段状态、秒数和日期。",
          intent: "fit",
          surface: "browser",
        },
      ],
      featuresLabel: "能力",
      features: [
        {
          title: "一行一个城市",
          body: "每行一个城市：城市、代码、UTC 偏移、状态、本地时间、秒数和日期，一行看完。",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "浅色 / 深色",
          body: "提供纸张质感的浅色主题，也有终端感更强的深色主题。",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "多语言",
          body: "支持 9 种语言，包括英文、中文、日文、韩文、法文、德文、西班牙文和葡萄牙文。",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "隐私说明",
          body: "具体以 Chrome Web Store 的隐私披露为准。",
          intent: "evidence",
          evidence: "声明不收集数据",
          surface: "browser",
        },
      ],
      rationaleLabel: "详情",
      rationaleTitle: "小而快，打开就能看",
      rationaleBody: [
        "该扩展在 Chrome Web Store 中归类为 Tools，由 titpea.com 提供。",
        "适合远程协作、旅行安排，或快速确认某个城市是否处于工作时间。",
      ],
      faqLabel: "常见问题",
      faq: [
        {
          title: "会收集我的位置吗？",
          body: "商店信息显示不收集用户数据。它只做手动城市时间查询，不做位置追踪。",
        },
      ],
    },
  },
};
