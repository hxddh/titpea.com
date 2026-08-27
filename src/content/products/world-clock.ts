import type { BrowserExtensionProduct } from "../../lib/site";
import { worldClockFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const worldClockMeta = `Chrome Web Store · ${worldClockFacts.category} · No data collection disclosed`;
const worldClockMetaZh = "Chrome 网上应用店 · 工具 · 声明不收集数据";

export const worldClockProduct: BrowserExtensionProduct = {
  slug: "world-clock",
  name: "World Clock",
  archetype: "browserExtension",
  locales: {
    en: {
      title: "World Clock",
      description: "A lightweight Chrome extension showing live time across the cities you choose.",
      eyebrow: "Chrome Extension",
      headline: "Time across cities at a glance",
      lead: "One popup shows local time, UTC offset, date, and work-hours context for the cities you keep.",
      primaryCta: {
        label: "Install",
        href: siteConfig.externalLinks.worldClockChrome,
      },
      secondaryCta: { label: "Privacy details", href: siteConfig.externalLinks.worldClockPrivacy },
      meta: worldClockMeta,
      proof: [],
      positioningLabel: "Cities you choose",
      positioning: [
        {
          title: "A fast timezone glance",
          body: "You need a fast timezone glance during remote work, travel planning, or cross-region conversations.",
          intent: "fit",
          surface: "browser",
          priority: "primary",
        },
        {
          title: "No location, no calendar",
          body: "It shows the city times you choose. It does not read your location, calendar, or meetings.",
          intent: "boundary",
          surface: "browser",
        },
      ],
    },
    zh: {
      title: "世界时钟",
      description: "一个很轻的 Chrome 扩展，用来快速查看你选择的城市当前时间。",
      eyebrow: "Chrome 扩展",
      headline: "一眼看清几个城市的时间",
      lead: "打开弹窗即可看到城市当地时间、UTC 偏移、日期和工作时段。",
      primaryCta: {
        label: "安装扩展",
        href: siteConfig.externalLinks.worldClockChrome,
      },
      secondaryCta: { label: "隐私说明", href: siteConfig.externalLinks.worldClockPrivacy },
      meta: worldClockMetaZh,
      proof: [],
      positioningLabel: "你选的城市",
      positioning: [
        {
          title: "要快速看时区",
          body: "远程协作、旅行安排、跨地区沟通前，想快速确认几个城市现在几点、是不是工作时间。",
          intent: "fit",
          surface: "browser",
          priority: "primary",
        },
        {
          title: "不读位置，也不读日历",
          body: "只显示你选的城市时间，不读取你的位置、日历或会议。",
          intent: "boundary",
          surface: "browser",
        },
      ],
    },
  },
};
