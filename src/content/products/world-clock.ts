import { defineProduct } from "../schema";

export default defineProduct({
  slug: "world-clock",
  line: "everyday",
  type: "extension",
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
    lead: "Your cities in one popup, with working hours lit. Scroll to see any hour.",
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
    privacy: {
      network: "none",
      networkNote: "No network requests, and no web pages read.",
      stays:
        "Cities, theme and time format sync through Chrome storage between your own browsers, never to the developer.",
      policy: {
        label: "Privacy details",
        href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp#privacy",
      },
    },
    meta: "Chrome extension · Chrome 123+ · 9.0.0 · One permission",
    visual: {
      kind: "demo",
      label: "World Clock",
      caption:
        "Try it: a working copy of the popup’s time scroll, on your own clock. Scroll, drag or use the arrow keys; Esc returns to now.",
      demo: {
        kind: "worldClock",
        appTitle: "World Clock",
        label: "World Clock popup, working copy",
        local: "Local",
        tomorrow: "Tomorrow",
        yesterday: "Yesterday",
        slider: "Shift time by the hour",
        now: "Now",
        hint: "Scroll or drag the cities to shift time",
        // The extension's default cities (popup.js defaultCities).
        cities: [
          { name: "New York", zone: "America/New_York", country: "US" },
          { name: "London", zone: "Europe/London", country: "GB" },
          { name: "Tokyo", zone: "Asia/Tokyo", country: "JP" },
          { name: "Sydney", zone: "Australia/Sydney", country: "AU" },
        ],
        localNames: [
          { name: "Beijing", zone: "Asia/Shanghai", country: "CN" },
          { name: "Hong Kong", zone: "Asia/Hong_Kong", country: "HK" },
          { name: "Taipei", zone: "Asia/Taipei", country: "TW" },
          { name: "Singapore", zone: "Asia/Singapore", country: "SG" },
          { name: "Berlin", zone: "Europe/Berlin", country: "DE" },
          { name: "Paris", zone: "Europe/Paris", country: "FR" },
          { name: "Los Angeles", zone: "America/Los_Angeles", country: "US" },
          { name: "Chicago", zone: "America/Chicago", country: "US" },
        ],
        fallback: {
          src: "/assets/world-clock-scroll-en.webp",
          alt: "The popup shifted three hours ahead, a +3h chip in its header: London 3:00 PM, Paris and Berlin 4:00 PM, New York and Toronto 10:00 AM, all in working hours; under each city a strip shows its own working hours and, brighter, the hours they all share",
          width: 680,
          height: 738,
          caption: "World Clock 9.0.0 popup shifted +3h; cities are examples.",
        },
      },
    },
    showcases: [
      {
        src: "/assets/world-clock-names-en.webp",
        alt: "World Clock settings with the New York entry renamed “Alice”, its editor open: Name “Alice” and Working hours 8:00 AM to 4:00 PM, between London (Local), Tokyo and Sydney in the city list",
        width: 680,
        height: 1200,
        asOf: "v9.0.0",
        title: "People, not just cities.",
        body: "Name an entry and set its own working hours; the strips use them.",
        caption: "World Clock 9.0.0 settings, editing an entry; names and cities are examples.",
      },
      {
        src: "/assets/world-clock-search-en.webp",
        alt: "World Clock settings with “san” typed in search, listing San Francisco (already added, ticked), Santiago, San Juan, San Luis, Santarem, Santo Domingo and San Marino with their local times and an add button, above previews of the five themes and the Appearance and Time format switches",
        width: 680,
        height: 1194,
        asOf: "v9.0.0",
        title: "Find any time zone.",
        body: "Search 400+ time zones in 9 languages; Enter adds the top result.",
        caption: "World Clock 9.0.0 settings, searching “san”; cities are examples.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Up to 10 cities, in your order.",
        items: [
          {
            title: "Local weekends",
            body: "Working hours lit, 9:00–18:00 unless you set others; weekends follow each city’s country.",
          },
          { title: "Offsets from you", body: "+7h or −5h from your local time, plus Tomorrow or Yesterday." },
          { title: "Clock changes ahead", body: "Daylight-saving shifts flagged two weeks early, like −7h → −8h." },
          { title: "Copy the times", body: "Click one time, or ⌘C / Ctrl+C for every city." },
          { title: "Names and hours", body: "Name an entry “Alice” and give it its own hours, overnight shifts too." },
          { title: "Five themes", body: "Default, Terminal, Magazine, Paper, Contrast; each Auto, Light or Dark." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "No data collection and no analytics: no network requests, and no web pages read.",
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
            body: "Chrome 123 or later. It works offline.",
          },
          {
            title: "How many cities can I keep?",
            body: "Up to 10. In Settings, drag them into any order, or use Alt with the arrow keys; switch between 12-hour and 24-hour time there too.",
          },
          {
            title: "I used an earlier version. Do I lose my cities?",
            body: "No. Version 9 keeps your cities and settings, and they still sync with browsers on version 8, where a new theme shows as Default.",
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
    lead: "一个弹窗看你的几个城市，工作时间高亮。滚动就能查看任意时刻。",
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
    privacy: {
      network: "none",
      networkNote: "不联网，也不读取网页。",
      stays: "城市、主题和时间格式通过 Chrome 存储在你自己的浏览器之间同步，不发给开发者。",
      policy: {
        label: "隐私说明",
        href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp#privacy",
      },
    },
    meta: "Chrome 扩展 · Chrome 123+ · 9.0.0 · 仅一项权限",
    visual: {
      kind: "demo",
      label: "世界时钟",
      caption: "试一试：弹窗时间滚动的可用副本，用的是你自己的时钟。滚动、拖动或按方向键调整，按 Esc 回到现在。",
      demo: {
        kind: "worldClock",
        appTitle: "世界时钟",
        label: "世界时钟弹窗的可用副本",
        local: "本地",
        tomorrow: "明天",
        yesterday: "昨天",
        slider: "按小时调整时间",
        now: "现在",
        hint: "在城市列表上滚动或拖动，调整时间",
        cities: [
          { name: "纽约", zone: "America/New_York", country: "US" },
          { name: "伦敦", zone: "Europe/London", country: "GB" },
          { name: "东京", zone: "Asia/Tokyo", country: "JP" },
          { name: "悉尼", zone: "Australia/Sydney", country: "AU" },
        ],
        localNames: [
          { name: "北京", zone: "Asia/Shanghai", country: "CN" },
          { name: "香港", zone: "Asia/Hong_Kong", country: "HK" },
          { name: "台北", zone: "Asia/Taipei", country: "TW" },
          { name: "新加坡", zone: "Asia/Singapore", country: "SG" },
          { name: "柏林", zone: "Europe/Berlin", country: "DE" },
          { name: "巴黎", zone: "Europe/Paris", country: "FR" },
          { name: "洛杉矶", zone: "America/Los_Angeles", country: "US" },
          { name: "芝加哥", zone: "America/Chicago", country: "US" },
        ],
        fallback: {
          src: "/assets/world-clock-scroll-zh.webp",
          alt: "弹窗时间向后拨了三小时，顶部显示 +3h：北京 12:00，东京和首尔 13:00，新加坡 12:00，悉尼 15:00，都在工作时间内；每个城市下方的细条标出它自己的工作时间，大家都在上班的那几小时更亮",
          width: 680,
          height: 738,
          caption: "世界时钟 9.0.0 弹窗，时间后拨 3 小时；城市为示例。",
        },
      },
    },
    showcases: [
      {
        src: "/assets/world-clock-names-zh.webp",
        alt: "世界时钟设置页，伦敦这一项改名为“Alice”，编辑栏展开：名称“Alice”，工作时间 10:00 到 19:00；列表里还有北京（本地）、纽约和东京",
        width: 680,
        height: 1200,
        asOf: "v9.0.0",
        title: "记的是人，不只是城市",
        body: "给一项起名、单独设工作时间，细条按它来标。",
        caption: "世界时钟 9.0.0 设置页，编辑一项；名字和城市为示例。",
      },
      {
        src: "/assets/world-clock-search-zh.webp",
        alt: "世界时钟设置页，搜索框输入“新”，匹配新德里和已添加（打勾）的新加坡，并显示当地时间，下方是五种主题的预览、外观和时间格式切换",
        width: 680,
        height: 1040,
        asOf: "v9.0.0",
        title: "任意时区，一搜即得",
        body: "400+ 时区，9 种语言可搜索；回车添加第一个结果。",
        caption: "世界时钟 9.0.0 设置页，搜索“新”；城市为示例。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "最多 10 个城市，顺序由你定",
        items: [
          { title: "各地周末", body: "工作时间常亮，默认 9 点到 18 点；周末按各城市所在国家。" },
          { title: "相对你的时差", body: "显示 +7h、−5h 这样的时差，以及明天或昨天。" },
          { title: "提前提示夏令时", body: "夏令时带来的时差变化提前两周标出，如 −7h → −8h。" },
          { title: "复制时间", body: "点击复制一个，或按 ⌘C / Ctrl+C 复制全部城市。" },
          { title: "名字和工作时间", body: "给一项起名，比如“Alice”，单独设工作时间，夜班也行。" },
          { title: "五种主题", body: "默认、终端、杂志、纸张、高对比；外观可选自动、浅色或深色。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "不收集任何数据，没有分析服务：不联网，也不读取网页。",
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
            body: "Chrome 123 或更高版本。离线也能用。",
          },
          {
            title: "最多能放几个城市？",
            body: "最多 10 个。在设置里拖动调整顺序，或按住 Alt 用方向键移动；12 小时制和 24 小时制也在那里切换。",
          },
          {
            title: "用过旧版本，城市会丢吗？",
            body: "不会。第 9 版保留你的城市和设置，也仍能和装着第 8 版的浏览器同步；在那里，新主题显示为默认主题。",
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
