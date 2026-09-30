import { defineProduct } from "../schema";

export default defineProduct({
  slug: "world-machine",
  line: "experimental",
  repo: "hxddh/world-machine",
  icon: "/assets/icons/world-machine.webp",
  og: "/assets/og-world-machine.png",
  schema: {
    category: "DeveloperApplication",
    os: "macOS",
  },
  sectionIndex: true,
  en: {
    title: "World Machine",
    description:
      "A small persistent world that keeps living while you are away and tells you what changed when you return. An experimental macOS app in pre-alpha.",
    eyebrow: "Experimental macOS project",
    headline: "A world that keeps going.",
    lead: "Leave it. Come back to the news. macOS pre-alpha.",
    catalog: {
      role: "Pre-alpha",
      text: "A world that keeps living while you are away. macOS, pre-alpha.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/world-machine/releases",
    },
    secondaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/world-machine",
    },
    meta: "Experimental · pre-alpha · macOS 14+ · {version} · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "World Machine",
      frame: "wide",
      image: {
        src: "/assets/world-machine-plot.webp",
        alt: "World Machine on day 27 of Tiny Society: a plot on the square offers a clock tower, bookshop, cheese shop, surgery, pottery or gallery with their costs, while Evan asks whether to stay or take a job. Captured from the app running in its Linux preview.",
        width: 1100,
        height: 900,
      },
    },
    showcases: [
      {
        src: "/assets/world-machine-moment.webp",
        width: 1100,
        height: 900,
        alt: "A moment in Tiny Society on day 360: a three-panel strip titled Rosa settles for good, captioned before, during and after, over the harbour. Captured from the app running in its Linux preview.",
        title: "Moments become panels.",
        body: "Weddings, births and farewells, drawn before, during and after.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Live in it, or leave it.",
        items: [
          { title: "Lives with an arc", body: "People are born, grow up, grow old and die." },
          { title: "Build on plots", body: "What you build decides who moves in." },
          { title: "Designs and names", body: "Paint a flag or a sail; name boats and babies." },
          { title: "Talk to anyone", body: "People understand everyday phrasing, in English or Chinese." },
          { title: "On any screen edge", body: "A strip you can click; drag its letters open." },
          { title: "Share a World", body: "Read-only World codes; a friend's resident can visit." },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Your Worlds are files on your Mac; there is no account or telemetry, and nothing is uploaded.",
          "Once per launch, the app asks `api.github.com` for the latest release.",
          "World voice is off by default; with your API key, each return sends that World's recorded facts to `api.anthropic.com`.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Is it stable?",
            body: "No. World Machine is an experimental pre-alpha. Releases v0.20 to v0.23 each open Worlds saved by the release before, but a World saved by an older Pack version may not open; nothing is deleted, and the file keeps its whole history.",
          },
          {
            title: "How do I open it the first time?",
            body: "Download the DMG from the Releases page and drag World Machine onto Applications; it runs on Apple Silicon or Intel. Builds are not notarized, so the first launch needs a one-time Open Anyway step, described in the install guide.",
          },
          {
            title: "How far does a World move while I am away?",
            body: "One period for every six hours you were away, at most 28 periods (a week) per return. The return briefing says how many.",
          },
          {
            title: "Do people understand everything I type?",
            body: "Not everything. Without World voice, people hear 28 kinds of everyday talk in English and Chinese, and some new phrasing is missed.",
          },
          {
            title: "Can I add other World Packs?",
            body: "Yes. The app activates its included Packs on first launch; any other `.worldpack` runs only after you review its executable identity and SHA-256.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "World Machine",
    description: "一个在你离开时仍在继续的小世界，回来时告诉你发生了什么。面向 macOS 的实验性应用，当前为早期预览版。",
    eyebrow: "macOS 实验项目",
    headline: "离开时，世界仍在继续",
    lead: "放着它。回来听新鲜事。macOS 早期预览版。",
    catalog: {
      role: "早期预览",
      text: "你离开时仍在继续的小世界。macOS，早期预览版。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/world-machine/releases",
    },
    secondaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/world-machine",
    },
    meta: "实验 · 早期预览 · macOS 14+ · {version} · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "World Machine",
      frame: "wide",
      image: {
        src: "/assets/world-machine-plot.webp",
        alt: "Tiny Society 第 27 天的 World Machine：广场上的一块地可以建钟楼、书店、奶酪店、诊所、陶艺坊或画廊，各标造价；Evan 在问留下还是去接那份工作。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        width: 1100,
        height: 900,
      },
    },
    showcases: [
      {
        src: "/assets/world-machine-moment.webp",
        width: 1100,
        height: 900,
        alt: "Tiny Society 第 360 天的一个时刻：港口上方一组三格画，标题「Rosa settles for good」，分别配着之前、当时、之后的说明。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        title: "大事画成三格",
        body: "婚礼、出生、告别，画成之前、当时、之后。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "住进去，或放着它",
        items: [
          { title: "有始有终的一生", body: "居民出生、长大、变老、离世。" },
          { title: "在地块上建造", body: "你建的东西决定谁搬来。" },
          { title: "设计与命名", body: "画旗帜或船帆，给船和新生儿起名。" },
          { title: "和谁都能聊", body: "听得懂日常说法，中文英文都行。" },
          { title: "放在屏幕任意边", body: "长条可以点居民，拖开来信。" },
          { title: "分享一个世界", body: "World 代码只读打开；朋友的居民能来做客。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据",
        title: "数据的去向",
        items: [
          "世界是你 Mac 上的文件；没有账户、没有遥测，什么都不上传。",
          "每次启动，应用向 `api.github.com` 查询一次最新版本。",
          "世界之声默认关闭；使用你的 API 密钥时，每次回来会把该世界已记录的事实发给 `api.anthropic.com`。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "现在稳定吗？",
            body: "不稳定。World Machine 是实验性的早期预览版。v0.20 到 v0.23 每一版都能打开上一版保存的世界，但更旧的 Pack 版本保存的世界可能打不开；文件不会被删除，完整历史仍在其中。",
          },
          {
            title: "第一次怎么打开？",
            body: "从 Releases 页面下载 DMG，把 World Machine 拖进「应用程序」，Apple 芯片与 Intel 都能运行。构建尚未公证，首次启动需要一次「仍要打开」，步骤见安装指南。",
          },
          {
            title: "离开时世界会走多远？",
            body: "每离开六小时前进一个周期，每次回来最多 28 个周期（一周）。回来时的简报会说明走了多少。",
          },
          {
            title: "我打的每句话都能听懂吗？",
            body: "不是每句。不开世界之声时，居民能听懂中英文里 28 类日常话题，部分新说法会听不懂。",
          },
          {
            title: "能添加其他 World Pack 吗？",
            body: "可以。应用首次启动时启用自带的 Pack；其他 `.worldpack` 要先审阅其可执行身份与 SHA-256 才会运行。",
          },
        ],
      },
    ],
  },
});
