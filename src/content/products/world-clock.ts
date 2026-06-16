import type { Product } from "../../lib/site";
import { worldClockFacts } from "../productFacts";

const worldClockMeta = `Chrome Web Store · ${worldClockFacts.category} · No data collection disclosed`;
const worldClockMetaZh = `Chrome Web Store · ${worldClockFacts.category} · 声明不收集数据`;

export const worldClockProduct: Product = {
  slug: "world-clock",
  current: "world-clock",
  name: "World Clock",
  category: "browser",
  archetype: "browserExtension",
  role: "time",
  visual: "clock",
  locales: {
    en: {
      title: "World Clock",
      description: "A minimalist Chrome extension showing live time across major cities.",
      eyebrow: "Chrome Extension",
      headline: "A timezone feed in one click",
      lead: "World Clock is a small Chrome popup for live city time. It opens fast, shows work-hours context, and gets out of the way.",
      primaryCta: {
        label: "Install",
        href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp",
      },
      secondaryCta: { label: "Back to profile", href: "/about/" },
      meta: worldClockMeta,
      proof: ["Chrome Web Store: Tools", "Live city rows", "Light and dark themes", "No data collection disclosed"],
      positioningLabel: "Positioning",
      positioning: [
        [
          "Use it when",
          "You need a fast timezone glance during remote work, travel planning, or cross-region conversations.",
        ],
        [
          "It is not",
          "A scheduler, calendar, or timezone planning suite. It is a compact feed for checking the current time.",
        ],
        [
          "What you get",
          "City names, UTC offsets, live seconds, work-hour labels, date context, and no disclosed user-data collection.",
        ],
      ],
      featuresLabel: "Capabilities",
      features: [
        [
          "Live city rows",
          "Each row keeps the city, code, UTC offset, status, local time, seconds, and date in one scan line.",
        ],
        ["Two visual modes", "The extension supports a light paper-like theme and a dark terminal-style theme."],
        [
          "Multilingual",
          "Available in 9 languages including English, Chinese, Japanese, Korean, French, German, Spanish, and Portuguese.",
        ],
        [
          "Private by design",
          "The Chrome Web Store listing states that the extension does not collect or use user data.",
        ],
      ],
      rationaleLabel: "Details",
      rationaleTitle: "Small, fast, and browser-native",
      rationaleBody: [
        "The extension is listed under Tools in the Chrome Web Store and offered by titpea.com.",
        "Use it as a quick timezone glance for remote work, travel coordination, or checking whether a city is in business hours.",
      ],
      faqLabel: "Questions & how-to",
      faq: [
        [
          "Does it collect my location?",
          "The Chrome Web Store listing discloses no user-data collection. The extension is meant for manual city-time lookup, not location tracking.",
        ],
        [
          "Is it for scheduling meetings?",
          "No. It is intentionally simpler than a scheduler: open the popup, check the time, and return to what you were doing.",
        ],
      ],
    },
    zh: {
      title: "世界时钟",
      description: "一个很轻的 Chrome 扩展，用来快速查看几个主要城市的当前时间。",
      eyebrow: "Chrome 扩展",
      headline: "一键看世界时间",
      lead: "一个很小的 Chrome 弹窗。打开后直接看到城市、时区、当前时间、工作时段和日期，看完就回到手头的事。",
      primaryCta: {
        label: "安装扩展",
        href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp",
      },
      secondaryCta: { label: "返回简介", href: "/zh/about/" },
      meta: worldClockMetaZh,
      proof: ["Chrome Web Store: Tools", "城市时间行", "浅色和深色主题", "声明不收集数据"],
      positioningLabel: "边界",
      positioning: [
        ["什么时候用", "远程协作、旅行安排、跨地区沟通前，想快速确认几个城市现在几点、是不是工作时间。"],
        ["它不是什么", "不是排会工具，也不是日历替代品。它只是一眼看时间的浏览器弹窗。"],
        ["打开后看到什么", "城市名、城市代码、UTC 偏移、状态标签、实时秒数、日期，以及浅色和深色两种显示风格。"],
      ],
      featuresLabel: "能力",
      features: [
        ["城市时间行", "每个城市一行，左侧是城市和时区，中间是状态，右侧是本地时间和日期。"],
        ["浅色 / 深色", "真实界面有纸张质感的浅色主题，也有终端感更强的深色主题。"],
        ["多语言", "支持 9 种语言，包括英文、中文、日文、韩文、法文、德文、西班牙文和葡萄牙文。"],
        ["隐私说明清楚", "Chrome Web Store 信息显示，这个扩展不会收集或使用用户数据。"],
      ],
      rationaleLabel: "详情",
      rationaleTitle: "小、快，直接运行在浏览器里",
      rationaleBody: [
        "该扩展在 Chrome Web Store 中归类为 Tools，由 titpea.com 提供。",
        "适合远程协作、旅行安排，或快速确认某个城市是否处于工作时间。",
      ],
      faqLabel: "问题与用法",
      faq: [
        ["会收集我的位置吗？", "商店信息显示不收集用户数据。它只做手动城市时间查询，不做位置追踪。"],
        ["适合拿来排会议吗？", "不适合。它比排期工具简单得多：打开弹窗，看一眼时间，然后继续工作。"],
      ],
    },
  },
};
