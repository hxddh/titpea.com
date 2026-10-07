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
    meta: "macOS + Windows · MIT · {version} · Local app",
    visual: {
      kind: "screenshot",
      label: "Goban",
      frame: "wide",
      image: {
        src: "/assets/goban-game-board-en.webp",
        alt: "Goban wood board showing a finished game with Black's five in a row, the top bar, and the timeline under the board",
        width: 2446,
        height: 1536,
      },
    },
    showcases: [
      {
        src: "/assets/goban-review-en.webp",
        alt: "Goban reviewing a finished game on the board: the score curve under it, the numbered mistakes, and one move explained on the card beside it",
        width: 1222,
        height: 768,
        // Recorded from the app's own review (scripts/record-board-demos.mjs).
        video: { mp4: "/assets/goban-review-en.mp4", webm: "/assets/goban-review-en.webm" },
        title: "Review names the mistakes.",
        body: "Review stays on the board: the timeline becomes a score curve, and each mistake it can prove is explained beside it.",
      },
      {
        src: "/assets/goban-notebook-en.webp",
        alt: "Goban notebook theme showing a completed game with triangle and circle pieces, a five-in-a-row highlight, and the timeline",
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
        label: "Every game stays on this computer.",
        items: [
          { title: "Three rule sets", body: "Freestyle, swap2, or Renju." },
          { title: "Four computer levels", body: "Beginner to Extreme; Hard and Extreme alternate colours." },
          { title: "Review an SGF", body: "Import, paste, or drag in a file." },
          { title: "Replay the key move", body: "Retry from before the mistake; the original game stays." },
          { title: "Practise positions", body: "Drills on the main board and a daily streak." },
          { title: "No account", body: "Nothing to sign in to; no server." },
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
            title: "What happens when I import an SGF?",
            body: "It opens at the last move; the timeline under the board steps through it. If the position is unfinished, you can continue playing from it.",
          },
          {
            title: "How strong is the computer?",
            body: "All four levels use one engine. Beginner blocks your fours but often misses open threes; Normal takes about 0.4 seconds a move; Extreme uses Hard's search with two and a half times the time. By default you alternate colours on Hard and Extreme. The rule set is chosen on the New game card and applies when you press Start.",
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
    meta: "macOS + Windows · MIT · {version} · 本地应用",
    visual: {
      kind: "screenshot",
      label: "五子棋 Goban",
      frame: "wide",
      image: {
        src: "/assets/goban-game-board-zh.webp",
        alt: "Goban 木质棋盘上的完整对局，显示黑棋五连、顶栏与棋盘下方的时间线",
        width: 2446,
        height: 1536,
      },
    },
    showcases: [
      {
        src: "/assets/goban-review-zh.webp",
        alt: "Goban 在棋盘上复盘一局：下方的评分曲线、按手数列出的失着，以及旁边卡片里对其中一手的解释",
        width: 1222,
        height: 768,
        video: { mp4: "/assets/goban-review-zh.mp4", webm: "/assets/goban-review-zh.webm" },
        title: "复盘点出失着",
        body: "复盘就在棋盘上：时间线变成评分曲线，每个可证明的失着在旁边讲清原因。",
      },
      {
        src: "/assets/goban-notebook-zh.webp",
        alt: "Goban 练习本棋盘上的完整棋局，显示三角与圆形棋子、五连高亮和时间线",
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
        label: "每一局都留在本机",
        items: [
          { title: "三套规则", body: "自由式、swap2 或连珠。" },
          { title: "四档电脑", body: "入门到极限，困难与极限每局轮流执子。" },
          { title: "带入 SGF", body: "导入、粘贴或拖入文件。" },
          { title: "重下关键一手", body: "回到失着之前再下，原局一手不改。" },
          { title: "做题练习", body: "在主棋盘上做题，每日打卡。" },
          { title: "无需账号", body: "不用登录，也不连服务器。" },
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
            title: "导入 SGF 之后会怎样？",
            body: "停在最后一手，用棋盘下方的时间线逐手查看。棋局尚未结束时，可以从那里继续下。",
          },
          {
            title: "电脑有多强？",
            body: "四档用同一个引擎。入门会挡住你的冲四，但常漏活三；普通每手约 0.4 秒；极限与困难同一套搜索，多给两倍半的时间。困难与极限默认每局轮流执子。规则在“新局”卡片里选，按开始时生效。",
          },
        ],
      },
    ],
  },
});
