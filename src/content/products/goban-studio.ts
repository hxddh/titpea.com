import { defineProduct } from "../schema";

// Goban Studio, the Go app (围棋 · 바둑 · 囲碁), a separate app from Goban, the
// Gomoku game. Facts: the repo's README, .github/release-notes/v7.0.0.md,
// docs/plan.md and docs/strength.md at v7.0.0; macOS 11 from build.zig. The
// brand is not translated (docs/feasibility-zh.md §10). Pictures: the app's
// own interface rendered by its UI test harness (scripts/ui-test.mjs) at 2x,
// with the four analysed sample games its v7 plan test seeds. The browser
// harness has no KataGo, so no game or review is shown until a capture of the
// packaged app exists.
export default defineProduct({
  slug: "goban-studio",
  line: "games",
  type: "game",
  repo: "hxddh/goban-studio",
  icon: "/assets/icons/goban-studio.webp",
  og: "/assets/og-goban-studio.png",
  schema: {
    category: "GameApplication",
    os: "macOS, Windows",
  },
  sectionIndex: false,
  en: {
    title: "Goban Studio",
    description:
      "An offline Go app for macOS and Windows: lessons and problems, a KataGo opponent at your level, and a review of every game.",
    eyebrow: "Desktop Go game",
    headline: "Learn Go, play, review.",
    lead: "Go on 9×9, 13×13 or 19×19, from the first stone. KataGo plays at your level and reviews every game on your computer.",
    catalog: {
      role: "",
      text: "Lessons, problems, and KataGo to play and review, all offline.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/goban-studio/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/goban-studio",
    },
    installNote:
      "Not notarized yet: on macOS, right-click the app and choose Open the first time; on Windows, choose More info, then Run anyway.",
    privacy: {
      network: "onRequest",
      networkNote:
        "No account or telemetry; it goes online only to check for updates or to download a network you choose.",
      stays: "Games, progress, level and settings in the app’s storage on this computer.",
    },
    meta: "macOS + Windows · MIT · {version} · KataGo built in",
    visual: {
      kind: "screenshot",
      label: "Goban Studio",
      frame: "wide",
      image: {
        src: "/assets/goban-studio-today-en.webp",
        alt: "Goban Studio’s Today screen: a suggested 19×19 game, today’s five problems, the next lesson, and this week’s focus on cutting, chosen because about 20 points were lost there in the last four games.",
        width: 2880,
        height: 1800,
      },
      caption: "Goban Studio 7.0’s own interface, rendered by its UI tests with their four sample games.",
      asOf: "v7.0.0",
    },
    showcases: [
      {
        src: "/assets/goban-studio-problem-en.webp",
        alt: "A Goban Studio problem from today’s five: Black to play and capture the marked stones, with Hint, Show answer, and the problem’s difficulty and theme beside the board.",
        width: 2880,
        height: 1800,
        asOf: "v7.0.0",
        title: "Problems with proved answers.",
        body: "543 built-in problems, each answer proved by the app’s solver; import your own SGF collections too.",
        caption: "Goban Studio 7.0’s own interface, rendered by its UI tests.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "From the first stone to a review.",
        items: [
          { title: "A KataGo opponent", body: "About 30 kyu to 7 dan; handicap suggested from your level." },
          {
            title: "A review of every game",
            body: "Win rate, score lead, and your three costliest moves with better lines.",
          },
          { title: "This week’s focus", body: "One or two themes from your games and problems, with the reason." },
          { title: "Lessons from the first stone", body: "18 units and 82 lessons, from beginner to about 1 dan." },
          {
            title: "Boards and rules",
            body: "9×9, 13×13, 19×19; Japanese, Chinese or Korean rules; up to nine handicap stones.",
          },
          { title: "An opening book", body: "3,874 positions evaluated by KataGo, included offline." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "KataGo and its network ship with the app and run on your computer; two larger networks download only if you choose them.",
          "Games, progress, level and settings stay in the app’s storage on this computer; Back up saves them all to one file.",
          "No account or telemetry. Check for updates contacts GitHub when you ask; the weekly check is off until you turn it on.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Can it sit beside Goban, the Gomoku app?",
            body: "Yes. Goban Studio is a separate app with its own name, bundle ID and repository, so the two install and update independently.",
          },
          {
            title: "Which computers does it run on?",
            body: "macOS 11 or later on Apple Silicon or Intel, and Windows 10 or 11 on x64 with WebView2, which they usually include. Windows on ARM runs the x64 build under emulation; analysis is slower there.",
          },
          {
            title: "How strong is the computer?",
            body: "From about 30 kyu to about 7 dan, on a standard or a human-style ladder. The labels are approximate: they are calibrated against a model, not against people.",
            asOf: "v7.0.0",
          },
          {
            title: "I imported SGF games before 7.0. Are they right?",
            body: "Records from other programs that use the letter i in their coordinates were misread before 7.0; import them again. Records the app saved itself read as before.",
            asOf: "v7.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Goban Studio",
    description: "面向 macOS 与 Windows 的离线围棋应用：课程和题目，按你的水平对弈的 KataGo，以及每一局的复盘。",
    eyebrow: "桌面围棋",
    headline: "学围棋，下棋，复盘",
    lead: "9、13、19 路，从第一颗子学起。KataGo 按你的水平陪你下，并在本机复盘每一局。",
    catalog: {
      role: "",
      text: "课程、做题、KataGo 对弈与复盘，全部离线。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/goban-studio/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/goban-studio",
    },
    installNote: "目前未经公证：macOS 第一次打开时右键点应用选“打开”；Windows 出现提示时点“更多信息”，再点“仍要运行”。",
    privacy: {
      network: "onRequest",
      networkNote: "不要账号，没有遥测；只在检查更新或下载你选的网络时联网。",
      stays: "对局、进度、棋力和设置都存在这台电脑上应用自己的存储里。",
    },
    meta: "macOS + Windows · MIT · {version} · 内置 KataGo",
    visual: {
      kind: "screenshot",
      label: "Goban Studio",
      frame: "wide",
      image: {
        src: "/assets/goban-studio-today-zh.webp",
        alt: "Goban Studio 的“今天”页面：推荐一盘 19 路对局、今天的五道题、下一课，以及本周重点“切断”：最近 4 局在这里损失约 20 目。",
        width: 2880,
        height: 1800,
      },
      caption: "Goban Studio 7.0 自己的界面，由它的界面测试用四盘示例对局渲染。",
      asOf: "v7.0.0",
    },
    showcases: [
      {
        src: "/assets/goban-studio-problem-zh.webp",
        alt: "Goban Studio 每日五题中的一道：黑先，吃掉标记的白子，棋盘旁有提示、看答案，以及难度和题型。",
        width: 2880,
        height: 1800,
        asOf: "v7.0.0",
        title: "每道题的答案都经过证明",
        body: "内置 543 道题，答案都由应用的求解器证明；也能导入自己的 SGF 题集。",
        caption: "Goban Studio 7.0 自己的界面，由它的界面测试渲染。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "从第一颗子到复盘",
        items: [
          { title: "KataGo 陪你下", body: "约 30 级到 7 段；让子数按你的棋力建议。" },
          { title: "每一局都复盘", body: "胜率、目差，以及代价最大的三手和更好的下法。" },
          { title: "本周重点", body: "从你的对局和做题里挑一两个主题，并说明原因。" },
          { title: "从第一颗子学起", body: "18 个单元、82 课，从入门到约 1 段。" },
          { title: "棋盘和规则", body: "9、13、19 路；日本、中国或韩国规则；最多让九子。" },
          { title: "定式和布局库", body: "3,874 个局面由 KataGo 评估，离线可用。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "KataGo 和它的网络随应用一起安装，在你的电脑上运行；两个更大的网络只在你选择时下载。",
          "对局、进度、棋力和设置都存在这台电脑上应用自己的存储里；“备份”把它们存成一个文件。",
          "不要账号，没有遥测。“检查更新”只在你点它时访问 GitHub；每周自动检查默认关闭。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "能和五子棋 Goban 一起装吗？",
            body: "能。Goban Studio 是另一个应用，名字、包标识和仓库都不同，两个应用各自安装、各自更新。",
          },
          {
            title: "能在哪些电脑上运行？",
            body: "macOS 11 或更高版本，Apple Silicon 和 Intel 都行；Windows 10 或 11 的 x64，需要 WebView2，一般已预装。Windows on ARM 通过系统的 x64 模拟运行 x64 版，分析会慢一些。",
          },
          {
            title: "电脑有多强？",
            body: "约 30 级到约 7 段，可选标准或仿人棋风的阶梯。棋力标签是近似值：是对照模型校准的，不是对照真人。",
            asOf: "v7.0.0",
          },
          {
            title: "7.0 之前导入的 SGF 对吗？",
            body: "其他软件存的棋谱，坐标里用到字母 i 的，在 7.0 之前会读错，请重新导入。应用自己存的棋谱照常读取。",
            asOf: "v7.0.0",
          },
        ],
      },
    ],
  },
});
