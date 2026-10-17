import { defineProduct } from "../schema";

export default defineProduct({
  slug: "goban",
  line: "games",
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
      "A desktop Gomoku board for macOS and Windows: free, swap2, or Renju, with review, drills, and a daily streak.",
    eyebrow: "Desktop Gomoku game",
    headline: "Play Gomoku, then review.",
    lead: "A 15×15 board. Three rule sets. Games stay local.",
    catalog: {
      role: "",
      text: "Freestyle, swap2, or Renju. Review an SGF when you want.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/goban/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/goban",
    },
    installNote:
      "The macOS build is not notarized: the first time, click Open Anyway in System Settings → Privacy & Security.",
    privacy: {
      network: "onRequest",
      networkNote: "No account and no network; on macOS, Check for Updates contacts GitHub only when you click it.",
      stays: "Games, practice progress and settings in the app’s storage on this computer.",
    },
    meta: "macOS + Windows · MIT · {version} · Local app",
    visual: {
      kind: "screenshot",
      label: "Goban",
      frame: "wide",
      image: {
        src: "/assets/goban-game-board-en.webp",
        alt: "Goban wood board after a two-player game: Black's five in a row, each stone ringed, Black's seat marked Won in the top bar, and the timeline under the board",
        width: 2446,
        height: 1536,
      },
    },
    showcases: [
      {
        src: "/assets/goban-review-en.webp",
        alt: "Goban reviewing a finished game: the score curve under the board, and on the card beside it the numbered mistakes, move 3 explained, and Replay from move 3",
        width: 1222,
        height: 768,
        // Recorded from the app's own review (scripts/record-board-demos.mjs).
        video: { mp4: "/assets/goban-review-en.mp4", webm: "/assets/goban-review-en.webm" },
        title: "Review names the mistakes.",
        body: "Review stays on the board: the timeline becomes a score curve, and the card beside it explains each mistake and lets you replay from that move.",
      },
      {
        src: "/assets/goban-notebook-en.webp",
        alt: "Goban notebook theme at the same finished game: triangle and circle pieces on ruled paper, the five-in-a-row highlight, and Black's seat marked Won",
        width: 2446,
        height: 1536,
        title: "A notebook board, too.",
        body: "One of four boards: triangles and circles on ruled paper; the game stays as it was.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Import an SGF and play on.",
        items: [
          { title: "Pick the rules", body: "Freestyle, swap2, or Renju, on the New game card." },
          { title: "Four computer levels", body: "Beginner to Extreme; Hard and Extreme alternate colours." },
          { title: "One-click rematch", body: "Play again keeps your settings; on Alt, colours swap." },
          { title: "Replay the key move", body: "Start again from that move; the original game stays." },
          { title: "Practise positions", body: "134 built-in puzzles, plus ones made from your own mistakes." },
          { title: "Every game listed", body: "A summary line on top; open any game to review it." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "Your unfinished game, the last 100 finished games, practice progress, and settings stay in the app's storage on this computer.",
          "Back up in Settings · Data saves games, results, and practice progress to one file; Restore replaces current data with it.",
          "No account and no network; on macOS, Check for Updates contacts GitHub only when you click it.",
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
            title: "Will my games still be there after upgrading to 3.x?",
            body: "Yes. Versions 3.0 and 3.1 keep the storage format of 2.x, which kept the format of 1.x, so saved games, the game library, results, practice progress, and settings open as before. The Think setting from 1.x (fast, standard, deep) is gone, and a saved value for it is ignored.",
          },
          {
            title: "What happens when I import an SGF?",
            body: "It opens at the last move; the timeline under the board steps through it. If the game is unfinished, press Continue to play on, against the computer too. Import and Paste are at the bottom of Games in the ⋯ menu, or drag a .sgf file onto the window; Export is on the review card.",
          },
          {
            title: "How strong is the computer?",
            body: "All four levels use one engine. Beginner blocks your fours but often misses open threes; Normal thinks for 0.55 seconds a move, Hard for up to about 2 seconds, and Extreme runs Hard's search for the full 5 seconds. The computer always waits at least 0.6 seconds before it plays. Under Renju, its search leaves out the points where Black may not play. By default you alternate colours on Hard and Extreme. The rule set is chosen on the New game card and applies when you press Start.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "五子棋 Goban",
    description: "面向 macOS 与 Windows 的桌面五子棋：自由式、swap2 或连珠，需要时再复盘与做题。",
    eyebrow: "桌面五子棋",
    headline: "下一局，再复盘",
    lead: "15×15 棋盘。三套规则。棋谱在本机。",
    catalog: {
      role: "",
      text: "自由式、swap2 或连珠。需要时再复盘。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/goban/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/goban",
    },
    installNote: "macOS 版未经公证：第一次打开时，到“系统设置 → 隐私与安全性”点“仍要打开”。",
    privacy: {
      network: "onRequest",
      networkNote: "不要账号，也不联网；macOS 上的“检查更新”只在你点它时向 GitHub 查询。",
      stays: "对局、练习进度和设置都存在这台电脑上应用自己的存储里。",
    },
    meta: "macOS + Windows · MIT · {version} · 本地应用",
    visual: {
      kind: "screenshot",
      label: "五子棋 Goban",
      frame: "wide",
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
        width: 1222,
        height: 768,
        video: { mp4: "/assets/goban-review-zh.mp4", webm: "/assets/goban-review-zh.webm" },
        title: "复盘点出失着",
        body: "复盘就在棋盘上：时间线变成评分曲线，旁边的卡片讲清每个失着，并可从那一手重下。",
      },
      {
        src: "/assets/goban-notebook-zh.webp",
        alt: "Goban 练习本棋盘上的同一局：横线纸上的三角与圆圈棋子、五连高亮，顶栏黑方座位写着“胜”",
        width: 2446,
        height: 1536,
        title: "还有练习本棋盘",
        body: "四套棋盘之一：横线纸上画三角和圆圈，棋局不变。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "导入 SGF，接着下",
        items: [
          { title: "选规则", body: "自由式、swap2 或连珠，在“新局”卡片里选。" },
          { title: "四档电脑", body: "入门到极限，困难与极限每局轮流执子。" },
          { title: "一键再来", body: "“再来一局”沿用设置；选“轮流”时自动换色。" },
          { title: "重下关键一手", body: "从那一手重下，原局一手不改。" },
          { title: "做题练习", body: "134 道内置题，另有从你的失着生成的题。" },
          { title: "对局一览", body: "最上面一行汇总，点任意一局以复盘打开。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "没下完的一局、最近 100 局、练习进度和设置，都存在这台电脑上应用自己的存储里。",
          "“设置 · 数据”里的“备份”把对局、战绩和练习进度存成一个文件；“恢复”用它替换现有数据。",
          "不要账号，也不联网；macOS 上的“检查更新”只在你点它时向 GitHub 查询。",
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
            title: "升级到 3.x，以前的对局还在吗？",
            body: "在。3.0 和 3.1 沿用 2.x 的存储格式，2.x 又沿用 1.x 的，存档、对局库、战绩、练习进度和设置都照常读取。1.x 的“思考”设置（快、标、深）已经去掉，存过的值会被忽略。",
          },
          {
            title: "导入 SGF 之后会怎样？",
            body: "停在最后一手，用棋盘下方的时间线逐手查看。棋局尚未结束时，点“续下”可以接着下，也可以让电脑接着走。“导入棋谱”和“粘贴”在 ⋯ 菜单“对局”的底部，也可以把 .sgf 文件拖进窗口；导出在复盘卡片上。",
          },
          {
            title: "电脑有多强？",
            body: "四档用同一个引擎。入门会挡住你的冲四，但常漏活三；普通每手算 0.55 秒，困难至多约 2 秒，极限用困难的搜索、把 5 秒用满。电脑至少等 0.6 秒才落子。禁手规则下，它的搜索不再考虑黑棋的禁手点。困难与极限默认每局轮流执子。规则在“新局”卡片里选，按开始时生效。",
          },
        ],
      },
    ],
  },
});
