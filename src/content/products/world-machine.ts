import { defineProduct } from "../schema";

export default defineProduct({
  slug: "world-machine",
  line: "games",
  type: "game",
  platforms: [{ id: "macos", min: "14" }],
  license: "Apache-2.0",
  firstOpen: { macos: "once" },
  repo: "hxddh/world-machine",
  icon: "/assets/icons/world-machine.webp",
  og: "/assets/og-world-machine.png",
  schema: {
    category: "GameApplication",
    os: "macOS",
  },
  sectionIndex: true,
  en: {
    title: "World Machine",
    description:
      "A small harbour town that grows a day at a time: each day you sit down with it, a morning brings a letter, a choice and a find. A game for macOS, now at 1.0.",
    eyebrow: "Harbour game for macOS",
    headline: "A harbour town that grows a day at a time.",
    lead: "A small harbour town on your Mac whose people work, marry and grow old. Each morning brings a letter, a choice and a find.",
    summary: "A small harbour town with a new morning for every day you visit.",
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/world-machine/releases",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/world-machine",
    },
    releaseHighlights: {
      version: "v1.0.0",
      items: [
        "1.0 starts its own save format: Worlds from the v0.x previews no longer open, and every later release opens 1.0 saves.",
        "A new harbour’s first sitting is six days, and works rise over several days while residents lend a hand.",
        "Talking needs no AI: people answer from what they know, and Play freely in Settings lets the next day begin at once.",
      ],
    },
    privacy: {
      network: "automatic",
      networkNote: "Once per launch it asks `api.github.com` for the latest release; World voice is off by default.",
      stays: "Worlds are files on your Mac; no account, no telemetry, nothing uploaded.",
    },
    visual: {
      kind: "screenshot",
      label: "World Machine",
      frame: "wide",
      image: {
        src: "/assets/world-machine-morning.webp",
        alt: "Tiny Society's morning on day 21, the harbour still dark: the letter from Noah, today's choice about money in town, what Mia looked after overnight, and the gull's feather found by Island School. Captured from the app on macOS.",
        width: 2560,
        height: 1430,
      },
      caption: "Captured from the app on macOS.",
      asOf: "v0.30.0",
    },
    showcases: [
      {
        src: "/assets/world-machine-ares.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "Pocket Universe on Ares, sol 35: domes, habitat modules and a greenhouse on red regolith, gauges for trust, tension and stores, and Nia asking whether the grow lights can run an hour longer because the beans are sulking. Captured from the app running in its Linux preview.",
        title: "Other places in Pocket Universe.",
        body: "Ares, Maple Street and Icebridge still open, though New offers only the harbour.",
        caption: "From the app’s Linux preview, like the next picture.",
      },
      {
        src: "/assets/world-machine-moment.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "A moment in Tiny Society on day 360: a three-panel strip titled Rosa settles for good, captioned before, during and after, over the harbour. Captured from the app running in its Linux preview.",
        title: "Big moments get three panels.",
        body: "Weddings, births and farewells, drawn as before, during and after.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "The town lives on its own.",
        items: [
          { title: "Whole lives", body: "Residents are born, grow up, grow old and die." },
          {
            title: "Build, paint, name",
            body: "Works rise over several days. You can paint a flag and name boats and babies.",
          },
          {
            title: "Talk without AI",
            body: "Residents answer from what they know, and when someone asks a favour, talking it through gets it done.",
          },
          {
            title: "Three languages",
            body: "The interface, the stories and the talk come in English, Chinese or Japanese.",
          },
          {
            title: "World voice, if you want it",
            body: "Experimental and off by default. Turned on, an AI model can word the World’s news and replies.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "World voice is off by default; with your API key, it sends only that World's facts and your words to `api.anthropic.com`.",
          "A crash writes a report on your Mac; the next launch offers to copy it into a GitHub issue.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Will my old Worlds open?",
            body: "Not from the v0.x previews. 1.0 starts its own save format, so start a new World; the old file is left as it was.",
            steps: [
              "From 1.0 on, every later release opens every release's saves.",
              "Each save keeps the one before as `<name>.world.bak`, and once a day a `<name>.world.day.bak`.",
              "A World saved by a newer version is refused and never written over.",
            ],
            asOf: "v1.0.0",
          },
          {
            title: "Is there a free demo?",
            body: "Yes. World Machine Demo, also on GitHub Releases, is about half an hour of Tiny Society: the first six days and the next morning. Your harbour stays in My Worlds, and the full app opens it and carries on.",
            asOf: "v1.0.0",
          },
          {
            title: "Does a World move while I am away?",
            body: "No. Opening a World on a new day of this computer's calendar begins a sitting, which passes one World day. A week or a month away still brings one day.",
            steps: [
              "A new World's first sitting is six days.",
              "When the day is spent, a Goodnight card comes up; Not yet keeps the evening open.",
              "With Play freely on in Settings, the next day can begin at once.",
            ],
            asOf: "v1.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "World Machine",
    description:
      "一座一天一天长大的海港小镇：每天陪它坐一会儿，早晨会带来一封信、一个选择和一件新发现。macOS 游戏，已到 1.0。",
    eyebrow: "macOS 海港小镇游戏",
    headline: "一天天长大的海港小镇",
    lead: "Mac 上的一座海港小镇，居民工作、成家、变老。每天早晨，都有一封信、一个选择和一件新发现等着你。",
    summary: "一座海港小镇，你哪天来，哪天就有一个新的早晨。",
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/world-machine/releases",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/world-machine",
    },
    releaseHighlights: {
      version: "v1.0.0",
      items: [
        "1.0 启用自己的存档格式：v0.x 预览版的世界不再能打开，之后的每个版本都能打开 1.0 的存档。",
        "新港口的第一次到访有六天；工程要盖上好几天，居民也会来搭把手。",
        "聊天不需要 AI：居民按自己知道的回答；在设置里打开“自由游玩”，第二天可以马上开始。",
      ],
    },
    privacy: {
      network: "automatic",
      networkNote: "每次启动向 `api.github.com` 查询一次最新版本；世界之声默认关闭。",
      stays: "世界是你 Mac 上的文件；没有账户、没有遥测，什么都不上传。",
    },
    visual: {
      kind: "screenshot",
      label: "World Machine",
      frame: "wide",
      image: {
        src: "/assets/world-machine-morning.webp",
        alt: "Tiny Society 第 21 天的早晨，港口还未天亮：Noah 的信、今天的选择（镇上的钱紧）、Mia 夜里照看过的门，以及在学校岛捡到的海鸥羽毛。截自 macOS 应用，界面为英文。",
        width: 2560,
        height: 1430,
      },
      caption: "截自 macOS 应用；本页截图界面均为英文。",
      asOf: "v0.30.0",
    },
    showcases: [
      {
        src: "/assets/world-machine-ares.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "Pocket Universe 的 Ares 第 35 个火星日：红色风化层上的穹顶、居住舱和温室，信任、紧张与储备三个指标，Nia 问能不能让补光灯多开一小时，因为豆子在闹脾气。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        title: "Pocket Universe 里的其他地方",
        body: "Ares、Maple Street 和 Icebridge 仍能打开，只是新建时只提供港口。",
        caption: "此图与下一张截自应用的 Linux 预览环境。",
      },
      {
        src: "/assets/world-machine-moment.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "Tiny Society 第 360 天的一个时刻：港口上方一组三格画，标题“Rosa settles for good”，分别配着之前、当时、之后的说明。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        title: "大事画成三格",
        body: "婚礼、出生和告别，按之前、当时、之后画出来。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "小镇自己过日子",
        items: [
          { title: "完整的一生", body: "居民会出生、长大、变老，最后离世。" },
          { title: "建造、绘制、命名", body: "工程要盖上好几天。你可以画一面旗，给船和新生儿起名。" },
          { title: "不用 AI 也能聊", body: "居民按自己知道的回答；有人托你帮忙，聊一聊就能办成。" },
          { title: "三种语言", body: "界面、故事和对话都有中文、英文和日文。" },
          { title: "想用再开的世界之声", body: "实验功能，默认关闭。打开后，可由 AI 模型讲述世界的消息、替居民回答。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "世界之声默认关闭；使用你的 API 密钥时，只会把该世界已记录的事实和你说的话发给 `api.anthropic.com`。",
          "应用崩溃时会在你的 Mac 上写一份报告；下次启动时会问你要不要把它复制进一个 GitHub issue。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "以前的世界还能打开吗？",
            body: "v0.x 预览版的世界打不开。1.0 启用了自己的存档格式，请新建一个世界，旧文件原样保留。",
            steps: [
              "从 1.0 起，之后的每个版本都能打开以往各版本的存档。",
              "每次保存都会把上一份留作 `<name>.world.bak`，每天还会留一份 `<name>.world.day.bak`。",
              "更新版本保存的世界会被拒绝打开，绝不会被覆盖。",
            ],
            asOf: "v1.0.0",
          },
          {
            title: "有免费试玩版吗？",
            body: "有。同样在 GitHub Releases 上的 World Machine Demo 是大约半小时的 Tiny Society：头六天，再加第七天的早晨。你的港口会留在“我的世界”里，完整版应用能打开它接着玩。",
            asOf: "v1.0.0",
          },
          {
            title: "我不在时世界还会走吗？",
            body: "不会。在这台电脑日历上的新一天打开世界，就是一次到访，世界走一天。离开一周或一个月，也只走一天。",
            steps: [
              "新世界的第一次到访走六天。",
              "这一天过完会出现“晚安”卡片；选“还不睡”，夜晚就继续。",
              "在设置里打开“自由游玩”，第二天可以马上开始。",
            ],
            asOf: "v1.0.0",
          },
        ],
      },
    ],
  },
});
