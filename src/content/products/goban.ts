import { defineProduct } from "../schema";

export default defineProduct({
  slug: "goban",
  line: "everyday",
  repo: "hxddh/goban",
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
    headline: "A game of Gomoku",
    lead: "Play on a 15×15 desktop board with freestyle, swap2, or Renju rules. Review a game or practise a position when you want to.",
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
        src: "/assets/goban-review.webp",
        alt: "Goban reviewing a mid-game position on a wood board with the move list and replay controls visible",
        width: 1223,
        height: 768,
        kicker: "Move-by-move review",
        title: "Return to any recorded move",
        body: "Enable replay analysis and select any move from the record. The board reconstructs that position with the move list and replay controls beside it.",
      },
      {
        src: "/assets/goban-notebook.webp",
        alt: "Goban notebook theme showing a completed game with triangle and circle pieces, a five-in-a-row highlight, and the game sidebar",
        width: 1223,
        height: 768,
        kicker: "Notebook theme",
        title: "Notebook theme: marks on ruled paper",
        body: "Switch from traditional stones to triangle and circle marks on ruled paper. The game state and controls remain the same.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "positioning",
        label: "A local Gomoku board",
        items: [
          {
            title: "Review an SGF",
            body: "Import, paste, or drag in an SGF file to inspect the move list. Continue playing if the position is unfinished.",
          },
          {
            title: "Local games and records",
            body: "Gameplay, saves, and imported records stay local. No account or server is required. There is no Intel Mac build.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "五子棋 Goban",
    description: "面向 macOS 与 Windows 的桌面五子棋：自由式、swap2 或连珠，需要时再复盘与做题。",
    eyebrow: "桌面五子棋",
    headline: "下一局五子棋",
    lead: "在桌面的 15×15 棋盘上下棋，选择自由式、swap2 或连珠规则。下完可以复盘，也可以做题练习。",
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
        src: "/assets/goban-review.webp",
        alt: "Goban 在木质棋盘上复盘中局局面，旁边显示着法列表与复盘控制",
        width: 1223,
        height: 768,
        kicker: "逐手复盘",
        title: "回到棋谱里的任意一手",
        body: "开启复盘分析后，从棋谱中选择任意一手。棋盘会还原当时局面，着法列表与复盘控制留在旁边。",
      },
      {
        src: "/assets/goban-notebook.webp",
        alt: "Goban 作业本主题完整棋局，显示三角与圆形棋子、五连高亮和对局侧栏",
        width: 1223,
        height: 768,
        kicker: "作业本主题",
        title: "作业本主题：横线纸上的记号",
        body: "把传统黑白棋子切换为横线纸上的三角与圆圈，棋局状态与操作面板保持一致。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "positioning",
        label: "本机五子棋盘",
        items: [
          {
            title: "带入 SGF 复盘",
            body: "导入、粘贴或拖入 SGF 文件，逐手查看棋谱。棋局尚未结束时，可以继续下。",
          },
          {
            title: "对弈与棋谱保存在本机",
            body: "对弈、存档和导入的棋谱都在本地，无需账号或服务器。目前没有 Intel Mac 构建。",
          },
        ],
      },
    ],
  },
});
