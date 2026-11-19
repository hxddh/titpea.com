import { defineProduct } from "../schema";

export default defineProduct({
  slug: "goban",
  line: "games",
  type: "game",
  platforms: [{ id: "macos" }, { id: "windows" }],
  license: "MIT",
  firstOpen: { macos: "once" },
  repo: "hxddh/goban",
  icon: "/assets/icons/goban.webp",
  og: "/assets/og-goban.png",
  schema: {
    category: "GameApplication",
    os: "macOS, Windows",
  },
  sectionIndex: false,
  en: {
    title: "Goban",
    description:
      "A desktop Gomoku board for macOS and Windows: freestyle, swap2, or Renju, with review and practice puzzles.",
    eyebrow: "Desktop Gomoku game",
    headline: "Play Gomoku, then review your mistakes.",
    lead: "Play Gomoku, five in a row on a 15×15 board, against the computer or a friend. Games stay on your computer.",
    summary: "Gomoku under freestyle, swap2 or Renju rules, with a review whenever you want one.",
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/goban/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/goban",
    },
    privacy: {
      network: "onRequest",
      networkNote:
        "No account; nothing goes online except “Check for Updates” on macOS, which contacts GitHub only when you click it.",
      stays: "Games, practice progress and settings in the app’s storage on this computer.",
    },
    visual: {
      kind: "screenshot",
      label: "Goban",
      frame: "wide",
      asOf: "v3.2.0",
      image: {
        src: "/assets/goban-game-board-en.webp",
        alt: "Goban wood board after a two-player game: Black’s five in a row, each stone ringed, Black’s seat marked Won in the top bar, and the timeline under the board",
        width: 2446,
        height: 1536,
      },
    },
    showcases: [
      {
        src: "/assets/goban-review-en.webp",
        alt: "Goban reviewing a finished game: the score curve under the board, and on the card beside it the numbered mistakes, move 3 explained, and Replay from move 3",
        width: 2446,
        height: 1536,
        asOf: "v3.2.0",
        // Recorded from the app's own review (scripts/record-board-demos.mjs).
        video: { mp4: "/assets/goban-review-en.mp4", webm: "/assets/goban-review-en.webm" },
        title: "The review stays on the board.",
        body: "The timeline turns into a score curve, and the card beside it explains each mistake and lets you replay from that move.",
      },
      {
        src: "/assets/goban-notebook-en.webp",
        alt: "Goban notebook theme at the same finished game: triangle and circle pieces on ruled paper, the five-in-a-row highlight, and Black’s seat marked Won",
        width: 2446,
        height: 1536,
        asOf: "v3.2.0",
        title: "Or play it in a notebook.",
        body: "One of four board themes draws triangles and circles on ruled paper; the game itself is the same.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Rules, opponents and practice",
        items: [
          {
            title: "Three rule sets",
            body: "Freestyle; swap2, a balanced opening; or Renju, where Black has forbidden moves. You choose on the “New game” card, and it applies when you press “Start”.",
          },
          {
            title: "Four computer levels",
            body: "Beginner to Extreme. On Hard and Extreme you alternate colours each game by default, and “Play again” keeps your settings.",
          },
          { title: "Practice puzzles", body: "134 come built in, and more are made from your own mistakes." },
          {
            title: "Finished games are kept",
            body: "They are listed under a line with your record; open one to review it.",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Which computers does it run on?",
            body: "macOS on Apple Silicon and Windows x64. There is no Intel Mac build. On Windows it needs the WebView2 runtime, which Windows 10 and 11 usually include.",
          },
          {
            title: "What happens when I import an SGF game record?",
            body: "It opens at the last move, and the timeline under the board steps through it.",
            steps: [
              "If the game is unfinished, press “Continue” to play on, against the computer too.",
              "“Import game…” and “Paste” are at the bottom of “Games” in the ⋯ menu; you can also drag a .sgf file onto the window.",
              "“Export” is on the review card.",
            ],
          },
          {
            title: "How strong is the computer?",
            body: "All four levels use one engine. Since 3.2 its pattern scores come from self-play, and Normal and Hard play clearly stronger.",
            steps: [
              "Beginner blocks your fours but often misses open threes.",
              "Normal thinks for 0.55 seconds a move; Hard for up to about 2 seconds.",
              "Extreme runs Hard’s search for the full 2.5 seconds.",
              "Whatever the level, the computer waits at least 0.6 seconds before it plays.",
              "Under Renju, its search leaves out the points where Black may not play.",
            ],
            asOf: "v3.2.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Goban",
    description: "面向 macOS 与 Windows 的桌面五子棋：自由式、swap2 或连珠，需要时再复盘与做题。",
    eyebrow: "桌面五子棋",
    headline: "下完五子棋，复盘你的失着",
    lead: "在 15×15 的棋盘上下五子棋，对手可以是电脑，也可以是朋友。对局都存在你自己的电脑上。",
    summary: "按自由式、swap2 或连珠规则下五子棋，想复盘时随时复盘。",
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/goban/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/goban",
    },
    privacy: {
      network: "onRequest",
      networkNote: "不要账号；只有 macOS 上的“检查更新”会联网，而且只在你点它时向 GitHub 查询。",
      stays: "对局、练习进度和设置都存在这台电脑上应用自己的存储里。",
    },
    visual: {
      kind: "screenshot",
      label: "Goban",
      frame: "wide",
      asOf: "v3.2.0",
      image: {
        src: "/assets/goban-game-board-zh.webp",
        alt: "Goban 木质棋盘上下完的一局双人对局：黑棋五连、每颗套一圈细环，顶栏黑方座位写着“胜”，棋盘下方是时间线",
        width: 2446,
        height: 1536,
      },
    },
    showcases: [
      {
        src: "/assets/goban-review-zh.webp",
        alt: "Goban 在棋盘上复盘一局：下方是评分曲线，旁边卡片列出失着手数，解释第 3 手，并有“从第 3 手重下”和“推演”",
        width: 2446,
        height: 1536,
        asOf: "v3.2.0",
        video: { mp4: "/assets/goban-review-zh.mp4", webm: "/assets/goban-review-zh.webm" },
        title: "就在棋盘上复盘",
        body: "时间线变成评分曲线，旁边的卡片讲清每个失着，还能从那一手重下。",
      },
      {
        src: "/assets/goban-notebook-zh.webp",
        alt: "Goban 练习本棋盘上的同一局：横线纸上的三角与圆圈棋子、五连高亮，顶栏黑方座位写着“胜”",
        width: 2446,
        height: 1536,
        asOf: "v3.2.0",
        title: "也可以在练习本上下",
        body: "四套棋盘外观之一，在横线纸上画三角和圆圈；棋局本身不变。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "规则、对手和练习",
        items: [
          {
            title: "三套规则",
            body: "自由式；平衡开局的 swap2；或黑棋有禁手的连珠。在“新局”卡片里选，按“开始”时生效。",
          },
          { title: "四档电脑", body: "从入门到极限。困难与极限默认每局轮流执黑白，“再来一局”沿用你的设置。" },
          { title: "做题练习", body: "内置 134 道，另有从你自己的失着生成的题。" },
          { title: "下完的对局都留着", body: "列表最上面一行是你的战绩；点开任意一局就能复盘。" },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "能在哪些电脑上运行？",
            body: "Apple Silicon 的 macOS 和 x64 的 Windows，目前没有 Intel Mac 构建。Windows 需要 WebView2 运行时，Win10 / 11 一般已预装。",
          },
          {
            title: "导入 SGF 棋谱之后会怎样？",
            body: "棋谱停在最后一手，用棋盘下方的时间线逐手查看。",
            steps: [
              "棋局还没结束时，点“续下”接着下，也可以让电脑接着走。",
              "“导入棋谱”和“粘贴”在 ⋯ 菜单“对局”的底部；也可以把 .sgf 文件拖进窗口。",
              "导出在复盘卡片上。",
            ],
          },
          {
            title: "电脑有多强？",
            body: "四档用同一个引擎。3.2 起棋型分值从自对弈中拟合，普通和困难明显更强。",
            steps: [
              "入门会挡住你的冲四，但常漏掉活三。",
              "普通每手算 0.55 秒；困难至多约 2 秒。",
              "极限用困难的搜索，把 2.5 秒用满。",
              "不管哪一档，电脑都至少等 0.6 秒才落子。",
              "连珠规则下，它的搜索不考虑黑棋的禁手点。",
            ],
            asOf: "v3.2.0",
          },
        ],
      },
    ],
  },
});
