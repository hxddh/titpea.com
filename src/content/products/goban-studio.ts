import { defineProduct } from "../schema";

// Goban Studio, the Go app (围棋 · 바둑 · 囲碁), a separate app from Goban, the
// Gomoku game. Facts: the repo's README, .github/release-notes/v7.0.0.md
// to v14.0.0.md, docs/plan.md and docs/strength.md at v14.0.0; macOS 11 from build.zig. The
// brand is not translated (docs/feasibility-zh.md §10). Pictures: the app's
// own interface rendered by its UI test harness (scripts/ui-test.mjs) at 2x,
// with four analysed sample games seeded as its practice-focus test does. The browser
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
    lead: "Learn Go from the first stone. The KataGo engine plays you at your chosen rank and reviews each game, all on your computer.",
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
      "Not notarized yet: on macOS 15 or later, choose “Open Anyway” in System Settings → Privacy & Security; on Windows, choose “More info”, then “Run anyway”.",
    releaseHighlights: {
      version: "v14.0.0",
      items: [
        "The app now opens on Today, where one button starts lesson one, a gentle 9×9 game or a 19×19 game, depending on what you said you know.",
        "If you are new, the rules follow your language: Chinese rules in Chinese, Korean rules in Korean, Japanese rules otherwise.",
        "The placement quiz stops early when you miss the first four problems, instead of asking six more.",
      ],
    },
    privacy: {
      network: "onRequest",
      networkNote:
        "No account or telemetry; it goes online only when you ask, for updates or to download a neural network you choose.",
      stays: "Games, progress, level and settings in the app’s storage on this computer.",
    },
    meta: "macOS + Windows · MIT · {version} · KataGo built in",
    visual: {
      kind: "screenshot",
      label: "Goban Studio",
      frame: "wide",
      image: {
        src: "/assets/goban-studio-today-en.webp",
        alt: "Goban Studio’s Today screen: a suggested 9×9 even game against about 23 kyu that works on this week’s focus, cutting, today’s practice, 0 of 6, starting with The board and the stones, and your progress: the last four weeks as dots and recent milestones.",
        width: 2880,
        height: 1800,
      },
      caption: "Goban Studio 14.0; the games and progress shown are samples.",
      asOf: "v14.0.0",
    },
    showcases: [
      {
        src: "/assets/goban-studio-problem-en.webp",
        alt: "A Goban Studio problem, the second of today’s six practice items, chosen for this week’s focus, cutting: Black to play and capture the marked stones, with Hint, Show answer, the difficulty and your record beside the board.",
        width: 2880,
        height: 1800,
        asOf: "v14.0.0",
        title: "Problems with proved answers.",
        body: "543 built-in problems, each answer proved by the app’s solver; old ones come back turned, mirrored or recoloured.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "From the first stone to a review.",
        items: [
          {
            title: "A KataGo opponent",
            body: "Choose about 30 kyu to 7 dan; it suggests a handicap from your level.",
          },
          {
            title: "A review of every game",
            body: "It picks up to three key moments, and you can retry each one from its position.",
          },
          {
            title: "This week’s focus",
            body: "One or two themes drawn from your games and problems, with the reason why.",
          },
          { title: "Lessons from the first stone", body: "23 units and 104 lessons, from beginner to about 1 dan." },
          {
            title: "Boards and rules",
            body: "9×9, 13×13 or 19×19 boards; Japanese, Chinese or Korean rules; up to nine handicap stones.",
          },
          { title: "An opening book", body: "3,874 opening positions evaluated by KataGo, available offline." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "KataGo, the Go engine, runs on your computer with its neural network; two larger neural networks download only if you choose them.",
          "Games, progress and settings stay on this computer; “Export backup” saves them to one file, and you can undo a restore.",
          "No account or telemetry. “Check for updates” contacts GitHub when you ask; the weekly check is off until you turn it on.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Can it sit beside Goban, the Gomoku app?",
            body: "Yes. Goban Studio is a separate app with its own name, so the two install and update independently.",
            asOf: "v14.0.0",
          },
          {
            title: "Which computers does it run on?",
            body: "macOS 11 or later on Apple Silicon or Intel, and Windows 10 or 11 on x64 with WebView2, which they usually include. Windows on ARM runs the x64 build under emulation; analysis is slower there. On macOS 14 or earlier, open it the first time by right-clicking the app and choosing “Open”.",
            asOf: "v14.0.0",
          },
          {
            title: "How strong is the computer?",
            body: "From about 30 kyu to about 7 dan: you pick a rank and the app picks the closest KataGo setting; without the optional neural networks it stops at about 4 dan. The ranks are approximate: they are calibrated against a model, not against people.",
            asOf: "v14.0.0",
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
    lead: "从第一颗子学起。KataGo 围棋引擎按你选的段位陪你下，并在你的电脑上复盘每一局。",
    catalog: {
      role: "",
      text: "围棋课程和题目，加上用来对弈和复盘的 KataGo 引擎，全部离线。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/goban-studio/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/goban-studio",
    },
    installNote:
      "目前未经公证：macOS 15 及以上，到“系统设置 → 隐私与安全性”点“仍要打开”；Windows 上点“更多信息”，再点“仍要运行”。",
    releaseHighlights: {
      version: "v14.0.0",
      items: [
        "第一次打开就是“今天”页面：按你说的基础，一个按钮开始第一课、一盘轻松的 9 路对局或一盘 19 路对局。",
        "新用户的规则跟随界面语言：中文用中国规则，韩文用韩国规则，其他语言用日本规则。",
        "定级测验如果前四题全错，就提前结束，不再多问六题。",
      ],
    },
    privacy: {
      network: "onRequest",
      networkNote: "不要账号，没有遥测；只在你要求时联网：检查更新，或下载你选的神经网络（权重）。",
      stays: "对局、进度、棋力和设置都存在这台电脑上应用自己的存储里。",
    },
    meta: "macOS + Windows · MIT · {version} · 内置 KataGo",
    visual: {
      kind: "screenshot",
      label: "Goban Studio",
      frame: "wide",
      image: {
        src: "/assets/goban-studio-today-zh.webp",
        alt: "Goban Studio 的“今天”页面：推荐一盘 9 路分先、对约 23 级的对局，练本周重点“切断”；今天的练习 0/6，第一项是“棋盘和棋子”；下面是你的进步：最近四周的圆点和最近的里程碑。",
        width: 2880,
        height: 1800,
      },
      caption: "Goban Studio 14.0；图中的对局和进度为示例。",
      asOf: "v14.0.0",
    },
    showcases: [
      {
        src: "/assets/goban-studio-problem-zh.webp",
        alt: "Goban Studio 今天练习 6 项中的第 2 项，来自本周重点“切断”：黑先，吃掉标记的棋子，棋盘旁有提示、看答案、难度和记录。",
        width: 2880,
        height: 1800,
        asOf: "v14.0.0",
        title: "每道题的答案都经过证明",
        body: "内置 543 道题，答案都由应用的求解器证明；旧题会旋转、镜像或换色再出现。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "从第一颗子到复盘",
        items: [
          { title: "KataGo 陪你下", body: "段位从约 30 级到 7 段任选；让子数按你的棋力建议。" },
          { title: "每一局都复盘", body: "最多挑出三个关键时刻，每个都能从那个局面再下一次。" },
          { title: "本周重点", body: "从你的对局和做题里挑出一两个主题，并说明为什么。" },
          { title: "从第一颗子学起", body: "23 个单元、104 课，从入门到约 1 段。" },
          { title: "棋盘和规则", body: "9 路、13 路或 19 路；日本、中国或韩国规则；最多让九子。" },
          { title: "定式和布局库", body: "3,874 个开局局面由 KataGo 评估，离线可用。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "KataGo 围棋引擎和它的神经网络（权重）在你的电脑上运行；两个更大的神经网络只在你选择时下载。",
          "对局、进度、棋力和设置都存在这台电脑上应用自己的存储里；“导出备份”把它们存成一个文件，恢复之后也能撤销。",
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
            body: "能。Goban Studio 是另一个应用，有自己的名字，两个应用各自安装、各自更新。",
            asOf: "v14.0.0",
          },
          {
            title: "能在哪些电脑上运行？",
            body: "macOS 11 或更高版本，Apple Silicon 和 Intel 都行；Windows 10 或 11 的 x64，需要 WebView2，一般已预装。Windows on ARM 通过系统的 x64 模拟运行 x64 版，分析会慢一些。macOS 14 及更早版本第一次打开时，右键点应用，选“打开”。",
            asOf: "v14.0.0",
          },
          {
            title: "电脑有多强？",
            body: "约 30 级到约 7 段：你选段位，应用选最接近的 KataGo 设置；不装可选的神经网络（权重）时最高约 4 段。段位是近似值：是对照模型校准的，不是对照真人。",
            asOf: "v14.0.0",
          },
        ],
      },
    ],
  },
});
