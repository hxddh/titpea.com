import { defineProduct } from "../schema";

export default defineProduct({
  slug: "world-clock",
  line: "everyday",
  icon: "/assets/icons/world-clock.webp",
  og: "/assets/og-world-clock.png",
  schema: {
    category: "BrowserApplication",
    os: "Chrome",
  },
  sectionIndex: false,
  en: {
    title: "World Clock",
    description:
      "Chrome extension that shows the time in the cities you choose: working hours bright, the rest faded, and a scroll to any hour.",
    eyebrow: "Chrome extension",
    headline: "Your cities, right now.",
    lead: "Your cities in one popup. Working hours bright. Scroll to any hour.",
    catalog: {
      role: "",
      text: "The time in your cities; scroll to any hour.",
    },
    primaryCta: {
      label: "Install",
      href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp",
    },
    secondaryCta: {
      label: "Privacy details",
      href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp#privacy",
    },
    meta: "Chrome extension · Chrome 110+ · 8.0.0 · One permission",
    visual: {
      kind: "screenshot",
      label: "World Clock",
      frame: "wide",
      image: {
        src: "/assets/world-clock-en.webp",
        alt: "Store image: the World Clock popup in dark mode listing London (local), New York, San Francisco, Berlin, Singapore, Tokyo and Sydney; cities inside working hours are bright, the others faded",
        width: 1280,
        height: 800,
      },
      caption: "Illustration: store image; time and cities are examples",
    },
    showcases: [
      {
        src: "/assets/world-clock-scroll-en.webp",
        alt: "Store image: the popup shifted three hours ahead, a +3h chip in its header; London and Berlin stay bright, the rest fade",
        width: 1280,
        height: 800,
        title: "Every city moves together.",
        body: "Scroll or press the arrow keys to shift by the hour. Esc returns to now.",
        caption: "Illustration: store image; time and cities are examples",
      },
      {
        src: "/assets/world-clock-search-en.webp",
        alt: "Store image: World Clock settings with “san” typed in search, matching San Francisco, Santiago and other zones, above the city list and the Theme and Time format switches",
        width: 1280,
        height: 800,
        title: "Find any time zone.",
        body: "Search 400+ time zones in 9 languages. Enter adds the top result.",
        caption: "Illustration: store image; time and cities are examples",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Only the cities you choose.",
        items: [
          { title: "Working hours bright", body: "Weekdays 9 to 18 stay lit; nights and weekends fade." },
          { title: "Offsets from you", body: "+7h or −5h from your local time, plus Tomorrow or Yesterday." },
          { title: "Three themes", body: "Default, Terminal, Magazine; each follows system light or dark." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "No data collection: no network requests, and no web pages read.",
          "Your cities, theme and time format sync through Chrome’s storage between your own browsers, never to the developer.",
          "It asks for one permission, `storage`, and needs no account.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "What do I need to run it?",
            body: "Chrome 110 or later. It works offline.",
          },
          {
            title: "How many cities can I keep?",
            body: "Up to 10. In Settings, drag them into any order, or use Alt with the arrow keys; switch between 12-hour and 24-hour time there too.",
          },
          {
            title: "I used an earlier version. Do I lose my cities?",
            body: "No. Version 8 moves your version 7 settings over automatically.",
          },
          {
            title: "Is it free?",
            body: "Yes. It is free on the Chrome Web Store, with no account.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "世界时钟",
    description: "Chrome 扩展：显示你所选城市的时间，工作时间常亮、其余淡出，滚动查看任意时刻。",
    eyebrow: "Chrome 扩展",
    headline: "几个城市，此刻几点",
    lead: "一个弹窗，你的城市。工作时间常亮。滚动查看任意时刻。",
    catalog: {
      role: "",
      text: "你的城市此刻几点，滚动看任意时刻。",
    },
    primaryCta: {
      label: "安装",
      href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp",
    },
    secondaryCta: {
      label: "隐私说明",
      href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp#privacy",
    },
    meta: "Chrome 扩展 · Chrome 110+ · 8.0.0 · 仅一项权限",
    visual: {
      kind: "screenshot",
      label: "世界时钟",
      frame: "wide",
      image: {
        src: "/assets/world-clock-zh.webp",
        alt: "商店图片：深色模式下的世界时钟弹窗，列出北京（本地）、东京、新加坡、伦敦、柏林、纽约和旧金山；处于工作时间的城市常亮，其余淡出",
        width: 1280,
        height: 800,
      },
      caption: "示意图：商店图片，时间和城市为示例",
    },
    showcases: [
      {
        src: "/assets/world-clock-scroll-zh.webp",
        alt: "商店图片：弹窗时间向后拨了三小时，顶部显示 +3h；伦敦和柏林常亮，其余淡出",
        width: 1280,
        height: 800,
        title: "所有城市一起拨动",
        body: "滚动鼠标或按方向键，按小时前后调整。按 Esc 回到现在。",
        caption: "示意图：商店图片，时间和城市为示例",
      },
      {
        src: "/assets/world-clock-search-zh.webp",
        alt: "商店图片：世界时钟设置页，搜索框输入“新”，匹配新德里和新加坡，下方是城市列表以及主题和时间格式切换",
        width: 1280,
        height: 800,
        title: "任意时区，一搜即得",
        body: "400+ 时区，9 种语言可搜索。回车添加第一个结果。",
        caption: "示意图：商店图片，时间和城市为示例",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "只显示你选的城市",
        items: [
          { title: "工作时间常亮", body: "工作日 9 点到 18 点常亮，夜间和周末淡出。" },
          { title: "相对你的时差", body: "显示 +7h、−5h 这样的时差，以及明天或昨天。" },
          { title: "三种主题", body: "默认、终端、杂志，都跟随系统浅色或深色。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "声明不收集数据：不联网，也不读取网页。",
          "你的城市、主题和时间格式通过 Chrome 存储在你自己的浏览器之间同步，不会发送给开发者。",
          "只申请一项权限 `storage`，无需账号。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "需要什么环境？",
            body: "Chrome 110 或更高版本。离线也能用。",
          },
          {
            title: "最多能放几个城市？",
            body: "最多 10 个。在设置里拖动调整顺序，或按住 Alt 用方向键移动；12 小时制和 24 小时制也在那里切换。",
          },
          {
            title: "用过旧版本，城市会丢吗？",
            body: "不会。第 8 版会自动迁移第 7 版的设置。",
          },
          {
            title: "收费吗？",
            body: "不收费。在 Chrome 网上应用店免费安装，无需账号。",
          },
        ],
      },
    ],
  },
});
