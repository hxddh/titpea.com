import { defineProduct } from "../schema";

// Goban Studio, the Go app (围棋 · 바둑 · 囲碁), a separate app from Goban, the
// Gomoku game. Facts: the repo's README, .github/release-notes/v7.0.0.md
// to v17.0.0.md, docs/plan.md and docs/strength.md at v17.0.0; macOS 13 from the
// README's download table. Pictures were captured at v17.0.0. The
// brand is not translated (docs/feasibility-zh.md §10). Pictures: the app's
// own interface rendered by its UI test harness (scripts/ui-test.mjs) at 2x,
// with four analysed sample games seeded as its practice-focus test does; the
// showcase is the same session's first problem. The browser harness has no
// KataGo, so no game or review is shown until a capture of the packaged app
// exists.
export default defineProduct({
  slug: "goban-studio",
  line: "games",
  type: "game",
  platforms: [{ id: "macos" }, { id: "windows" }],
  license: "MIT",
  firstOpen: { macos: "once", macosFrom: "15", windows: true },
  repo: "hxddh/goban-studio",
  icon: "/assets/icons/goban-studio.webp",
  og: "/assets/og-goban-studio.png",
  schema: {
    category: "GameApplication",
  },
  sectionIndex: false,
  en: {
    title: "Goban Studio",
    description:
      "An offline Go app for macOS and Windows: lessons and problems, a KataGo opponent at your level, and a review of every game.",
    eyebrow: "Desktop Go game",
    headline: "Learn Go, play KataGo, and review every game.",
    lead: "Learn Go from the first stone. The KataGo engine plays you at your chosen rank and reviews each game, all on your computer.",
    summary: "Go lessons and problems, with KataGo to play and review your games, all offline.",
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/goban-studio/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/goban-studio",
    },
    releaseHighlights: {
      version: "v17.0.0",
      items: [
        "The openings explorer has its joseki branches back: about 1,700 corner positions again.",
        "The whole course was checked again with the stronger KataGo network; the lesson “Urgent points before big points” got a new board.",
        "On a Mac, the language setting, lessons, problems and classics open again (fixed in v16.0.1); every release now tests this on Mac and Windows.",
      ],
    },
    privacy: {
      network: "onRequest",
      networkNote:
        "No account or telemetry; it goes online only when you ask, for updates or to download a neural network you choose.",
      stays: "Games, progress, level and settings in the app’s storage on this computer.",
    },
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
      caption: "The games and progress shown are samples.",
      asOf: "v17.0.0",
    },
    showcases: [
      {
        src: "/assets/goban-studio-problem-en.webp",
        alt: "A Goban Studio problem on a 19×19 board, the second of today’s six practice items, chosen for this week’s focus, cutting: Black to play and capture the marked stones, with Hint, Show answer, the difficulty and your record beside the board.",
        width: 2880,
        height: 1800,
        asOf: "v17.0.0",
        title: "Every answer is proved.",
        body: "The app’s solver proved the answer to each of the 543 built-in problems; older ones come back turned, mirrored or recoloured.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Lessons, practice and review",
        items: [
          {
            title: "Mistakes marked by KataGo",
            body: "KataGo marks slack moves and mistakes, and picks up to three key moments for you to retry.",
          },
          {
            title: "This week’s focus",
            body: "One or two themes drawn from your games and problems, with the reason for each.",
          },
          { title: "Lessons from the first stone", body: "23 units and 104 lessons, from beginner to about 1 dan." },
          {
            title: "Boards, rules and handicaps",
            body: "9×9, 13×13 or 19×19; Japanese, Chinese or Korean rules; up to nine handicap stones, with a handicap suggested from your level.",
          },
          {
            title: "Openings and classics",
            body: "An offline opening book that includes the Chinese opening, and 20 classic games with their key moments.",
          },
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
            asOf: "v17.0.0",
          },
          {
            title: "Which computers does it run on?",
            body: "macOS 13 or later on Apple Silicon or Intel, and Windows 10 or 11 on x64.",
            steps: [
              "Windows needs WebView2, which Windows 10 and 11 usually include.",
              "Windows on ARM runs the x64 build under emulation; analysis is slower there.",
              "On macOS 14 or earlier, open it the first time by right-clicking the app and choosing “Open”.",
            ],
            asOf: "v17.0.0",
          },
          {
            title: "How strong is the computer?",
            body: "From about 30 kyu to about 7 dan: you pick a rank, and the app picks the closest KataGo setting.",
            steps: [
              "Without the optional neural networks it stops at about 4 dan.",
              "The ranks are approximate: they are calibrated against a model, not against people.",
              "Settings → Engines shows which KataGo build runs and how fast.",
            ],
            asOf: "v17.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Goban Studio",
    description: "面向 macOS 与 Windows 的离线围棋应用：课程和题目，按你的水平对弈的 KataGo，以及每一局的复盘。",
    eyebrow: "桌面围棋",
    headline: "学围棋，和 KataGo 下，每局都复盘",
    lead: "从第一颗子学起。KataGo 围棋引擎按你选的段位陪你下，并在你的电脑上复盘每一局。",
    summary: "围棋课程和题目，再加上陪你对弈、帮你复盘的 KataGo，全部离线。",
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/goban-studio/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/goban-studio",
    },
    releaseHighlights: {
      version: "v17.0.0",
      items: [
        "布局浏览器的定式分支回来了，角部局面又有约 1700 个。",
        "整套课程用更强的 KataGo 网络重新检查了一遍；“急所先于大场”一课换了新棋盘。",
        "Mac 上切换语言、打开课程、题目和名局又都正常了（v16.0.1 修复）；现在每次发布前都会在 Mac 和 Windows 上检查这些。",
      ],
    },
    privacy: {
      network: "onRequest",
      networkNote: "不要账号，没有遥测；只在你要求时联网：检查更新，或下载你选的神经网络（权重）。",
      stays: "对局、进度、棋力和设置都存在这台电脑上应用自己的存储里。",
    },
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
      caption: "图中的对局和进度为示例。",
      asOf: "v17.0.0",
    },
    showcases: [
      {
        src: "/assets/goban-studio-problem-zh.webp",
        alt: "Goban Studio 19 路棋盘上今天练习 6 项中的第 2 项，来自本周重点“切断”：黑先，吃掉标记的棋子，棋盘旁有提示、看答案、难度和记录。",
        width: 2880,
        height: 1800,
        asOf: "v17.0.0",
        title: "每个答案都经过证明",
        body: "内置 543 道题，每道的答案都由应用的求解器证明过；旧题会旋转、镜像或换色后再出现。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "课程、练习和复盘",
        items: [
          { title: "KataGo 标出失着", body: "KataGo 标出缓手和失误，最多挑出三个关键时刻，让你从那个局面再下一次。" },
          { title: "本周重点", body: "从你的对局和做题里挑出一两个主题，并说明为什么挑它。" },
          { title: "从第一颗子学起", body: "23 个单元、104 课，从入门到约 1 段。" },
          {
            title: "棋盘、规则和让子",
            body: "9 路、13 路或 19 路；日本、中国或韩国规则；最多让九子，让子数按你的棋力建议。",
          },
          { title: "布局库和名局", body: "离线布局库收录了中国流；另有 20 局名局，每局都标出关键时刻。" },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "能和五子棋应用 Goban 一起装吗？",
            body: "能。Goban Studio 是另一个应用，有自己的名字，两个应用各自安装、各自更新。",
            asOf: "v17.0.0",
          },
          {
            title: "能在哪些电脑上运行？",
            body: "macOS 13 或更高版本，Apple Silicon 和 Intel 都行；以及 x64 的 Windows 10 或 11。",
            steps: [
              "Windows 需要 WebView2，Windows 10 和 11 一般已预装。",
              "Windows on ARM 靠系统的 x64 模拟运行 x64 版，分析会慢一些。",
              "macOS 14 及更早版本第一次打开时，右键点应用，选“打开”。",
            ],
            asOf: "v17.0.0",
          },
          {
            title: "电脑有多强？",
            body: "约 30 级到约 7 段：你选段位，应用选最接近的 KataGo 设置。",
            steps: [
              "不装可选的神经网络（权重）时，最高约 4 段。",
              "段位是近似值：对照模型校准，而不是对照真人。",
              "“设置 → 引擎”会显示正在用哪个 KataGo 版本、速度多快。",
            ],
            asOf: "v17.0.0",
          },
        ],
      },
    ],
  },
});
