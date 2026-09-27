import { defineProduct } from "../schema";

export default defineProduct({
  slug: "goban",
  line: "everyday",
  repo: "hxddh/goban",
  icon: "/assets/icons/goban.webp",
  og: "/assets/og-goban.png",
  schema: {
    category: "GameApplication",
    os: "macOS and Windows",
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
      label: "Download latest release",
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
        src: "/assets/goban-game-board.webp",
        alt: "Goban wood board showing a completed game, black and white stones, a five-in-a-row highlight, and game controls",
        width: 1223,
        height: 768,
      },
    },
    showcases: [
      {
        src: "/assets/goban-review-en.webp",
        alt: "Goban replaying a 15-move game move by move on a wood board, with replay analysis marking each move and the record in the sidebar",
        width: 1222,
        height: 768,
        // Recorded from the app replaying the game (scripts/record-board-demos.mjs).
        video: { mp4: "/assets/goban-review-en.mp4", webm: "/assets/goban-review-en.webm" },
        title: "Records become positions.",
        body: "Turn on replay analysis, then pick a move to rebuild its position.",
      },
      {
        src: "/assets/goban-notebook.webp",
        alt: "Goban notebook theme showing a completed game with triangle and circle pieces, a five-in-a-row highlight, and the game sidebar",
        width: 1223,
        height: 768,
        title: "Stones become marks.",
        body: "Triangles and circles on ruled paper; the game and controls stay.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Every game stays on this computer.",
        items: [
          { title: "Three rule sets", body: "Freestyle, swap2, or Renju." },
          { title: "Review an SGF", body: "Import, paste, or drag in a file." },
          { title: "Keep playing", body: "Continue an unfinished position." },
          { title: "Practise positions", body: "Drills and a daily streak." },
          { title: "Local records", body: "Games, saves, and imported records." },
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
            body: "The move list opens for review. If the position is unfinished, you can continue playing from it.",
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
      label: "下载最新版本",
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
        src: "/assets/goban-game-board.webp",
        alt: "Goban 木质棋盘上的完整对局，显示黑白棋子、五连高亮与对局控制",
        width: 1223,
        height: 768,
      },
    },
    showcases: [
      {
        src: "/assets/goban-review-zh.webp",
        alt: "Goban 在木质棋盘上逐手回放一局 15 手的对局，复盘分析标注每一手，侧栏显示棋谱",
        width: 1222,
        height: 768,
        video: { mp4: "/assets/goban-review-zh.mp4", webm: "/assets/goban-review-zh.webm" },
        title: "棋谱回到棋盘上",
        body: "开启复盘分析，选任意一手即可还原当时局面。",
      },
      {
        src: "/assets/goban-notebook.webp",
        alt: "Goban 作业本主题完整棋局，显示三角与圆形棋子、五连高亮和对局侧栏",
        width: 1223,
        height: 768,
        title: "棋子变成记号",
        body: "横线纸上画三角与圆圈，棋局与操作不变。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "每一局都留在这台电脑上",
        items: [
          { title: "三套规则", body: "自由式、swap2 或连珠。" },
          { title: "带入 SGF", body: "导入、粘贴或拖入文件。" },
          { title: "接着下", body: "未结束的局面可以续下。" },
          { title: "做题练习", body: "战术题与每日打卡。" },
          { title: "棋谱在本机", body: "对弈、存档与导入的棋谱。" },
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
            body: "默认打开复盘，逐手查看棋谱。棋局尚未结束时，可以从那里继续下。",
          },
        ],
      },
    ],
  },
});
