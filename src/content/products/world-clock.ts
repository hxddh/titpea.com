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
    eyebrow: "Chrome Extension",
    headline: "Your cities, right now",
    lead: "One popup shows local time, UTC offset, date, and work-hours context for the cities you keep.",
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
          src: "/assets/world-clock-light.png",
          alt: "World Clock light theme timezone feed screenshot",
          width: 716,
          height: 776,
          className: "clock-shot light",
        },
        {
          src: "/assets/world-clock-dark.png",
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
        id: "positioning",
        label: "Cities you choose",
        items: [
          {
            title: "No location, no calendar",
            body: "It shows the city times you choose. It does not read your location, calendar, or meetings.",
            priority: "primary",
          },
        ],
      },
    ],
  },
  zh: {
    title: "世界时钟",
    description: "用来查看所选城市当前时间的 Chrome 弹窗。",
    eyebrow: "Chrome 扩展",
    headline: "几个城市，此刻几点",
    lead: "打开弹窗即可看到城市当地时间、UTC 偏移、日期和工作时段。",
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
          src: "/assets/world-clock-light.png",
          alt: "世界时钟浅色主题时区列表截图",
          width: 716,
          height: 776,
          className: "clock-shot light",
        },
        {
          src: "/assets/world-clock-dark.png",
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
        id: "positioning",
        label: "你选的城市",
        items: [
          {
            title: "不读位置，也不读日历",
            body: "只显示你选的城市时间，不读取你的位置、日历或会议。",
            priority: "primary",
          },
        ],
      },
    ],
  },
});
