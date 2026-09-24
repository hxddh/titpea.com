import { defineProduct } from "../schema";

export default defineProduct({
  slug: "world-clock",
  line: "everyday",
  og: "/assets/og-world-clock.png",
  schema: {
    category: "BrowserApplication",
    os: "Chrome",
  },
  sectionIndex: false,
  en: {
    title: "World Clock",
    description: "A Chrome popup for live time across the cities you choose.",
    eyebrow: "Chrome extension",
    headline: "Your cities, right now.",
    lead: "One popup. Local time, UTC offset, date. Work-hours context.",
    catalog: {
      role: "",
      text: "Time, date, and work hours for the cities you keep.",
    },
    primaryCta: {
      label: "Install",
      href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp",
    },
    secondaryCta: {
      label: "Privacy details",
      href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp#privacy",
    },
    meta: "Chrome Web Store · Tools · No data collection disclosed",
    visual: {
      kind: "clockScreenshots",
      label: "World Clock",
      images: [
        {
          src: "/assets/world-clock-light.webp",
          alt: "World Clock light theme timezone feed screenshot",
          width: 716,
          height: 776,
          className: "clock-shot light",
        },
        {
          src: "/assets/world-clock-dark.webp",
          alt: "World Clock dark theme timezone feed screenshot",
          width: 702,
          height: 778,
          className: "clock-shot dark",
        },
      ],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "It shows the cities you choose.",
        items: [
          { title: "Work hours in view", body: "Time, UTC offset, date, and work hours." },
          { title: "No location, no calendar", body: "Location, calendar, and meetings are not read." },
          { title: "No data collection disclosed", body: "See the privacy details on the store." },
        ],
      },
    ],
  },
  zh: {
    title: "世界时钟",
    description: "用来查看所选城市当前时间的 Chrome 弹窗。",
    eyebrow: "Chrome 扩展",
    headline: "几个城市，此刻几点",
    lead: "一个弹窗。当地时间、UTC 偏移和日期。附带工作时段。",
    catalog: {
      role: "",
      text: "你选的城市，此刻几点。",
    },
    primaryCta: {
      label: "安装扩展",
      href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp",
    },
    secondaryCta: {
      label: "隐私说明",
      href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp#privacy",
    },
    meta: "Chrome 网上应用店 · 工具 · 声明不收集数据",
    visual: {
      kind: "clockScreenshots",
      label: "世界时钟",
      images: [
        {
          src: "/assets/world-clock-light.webp",
          alt: "世界时钟浅色主题时区列表截图",
          width: 716,
          height: 776,
          className: "clock-shot light",
        },
        {
          src: "/assets/world-clock-dark.webp",
          alt: "世界时钟深色主题时区列表截图",
          width: 702,
          height: 778,
          className: "clock-shot dark",
        },
      ],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "只显示你选的城市",
        items: [
          { title: "工作时段", body: "当地时间、UTC 偏移、日期和工作时段。" },
          { title: "不读位置和日历", body: "不读取你的位置、日历或会议。" },
          { title: "声明不收集数据", body: "详见应用店隐私说明。" },
        ],
      },
    ],
  },
});
