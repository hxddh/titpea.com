import { defineProduct } from "../schema";

export default defineProduct({
  slug: "chessboard",
  line: "everyday",
  featured: {
    image: {
      src: {
        en: "/assets/chessboard-featured-en.webp",
        zh: "/assets/chessboard-featured-zh.webp",
      },
      width: 1800,
      height: 1200,
      alt: {
        en: "Chessboard after a full-game Stockfish review: the final position, the evaluation curve with marked mistakes, and each side's accuracy",
        zh: "Chessboard 用 Stockfish 复盘完整局：终局局面、标出失着的评估曲线，以及双方精准度",
      },
    },
    // The evaluation curve and each side's accuracy.
    detail: { x: 1270, y: 650, width: 530, height: 530 },
  },
  repo: "hxddh/chessboard",
  icon: "/assets/icons/chessboard.webp",
  og: "/assets/og-chessboard.png",
  schema: {
    category: "GameApplication",
    os: "macOS and Windows",
  },
  sectionIndex: false,
  en: {
    title: "Chessboard",
    description:
      "A desktop chessboard for macOS and Windows, with Stockfish 19, offline lessons, mate drills, and local review.",
    eyebrow: "Desktop chess",
    headline: "Learn, then play.",
    lead: "Offline lessons. Mate drills. Stockfish or a friend.",
    catalog: {
      role: "Stockfish + lessons",
      text: "Learn, drill, then play Stockfish or a friend on the same board.",
    },
    primaryCta: {
      label: "Download latest release",
      href: "https://github.com/hxddh/chessboard/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/chessboard",
    },
    meta: "macOS + Windows · GPLv3 · {version} · Local app",
    stats: {
      title: "Lessons, puzzles, openings",
      items: [
        {
          value: "96",
          label: "lessons from zero to intermediate",
        },
        {
          value: "1,170",
          label: "puzzles: 168 hand-written, 1,002 engine-mined",
        },
        {
          value: "195",
          label: "ECO openings recognised",
        },
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Chessboard",
      frame: "wide",
      image: {
        src: "/assets/chessboard-game-board.webp",
        alt: "Chessboard wood theme showing a finished game, piece highlights, move list, and sidebar controls",
        width: 1223,
        height: 768,
      },
    },
    showcases: [
      {
        src: "/assets/chessboard-review-en.webp",
        alt: "Chessboard finishing a Stockfish review of a 17-move game, then stepping through it move by move as the evaluation curve marks mistakes",
        width: 1222,
        height: 768,
        // Recorded from the app's own review (scripts/record-board-demos.mjs).
        video: { mp4: "/assets/chessboard-review-en.mp4", webm: "/assets/chessboard-review-en.webm" },
        title: "Mistakes show on the curve.",
        body: "A full-game Stockfish pass builds a centipawn curve and marks mistakes; jump to any position and play on.",
      },
      {
        src: "/assets/chessboard-theme.webp",
        alt: "Chessboard night theme showing a chess position with the sidebar and theme controls visible",
        width: 1223,
        height: 768,
        title: "Four boards, one game.",
        body: "Switch between wood, night, day, and paper without losing the position.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Lessons and games stay on this computer.",
        items: [
          { title: "Offline lessons", body: "From zero to intermediate." },
          { title: "Mate drills", body: "Practise mating patterns." },
          { title: "Stockfish 19", body: "Play the engine locally." },
          { title: "A friend, same screen", body: "Two players, one board." },
          { title: "Bring a PGN", body: "Including FEN-start studies." },
          { title: "Local saves", body: "Games, saves, and analysis." },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Can I play online?",
            body: "No. Online matchmaking is not included. Play against the engine or a friend on the same screen.",
          },
          {
            title: "What can I do with a PGN?",
            body: "Paste or import a PGN, including FEN-start studies. Review the moves, jump to a position, or continue playing from it.",
          },
          {
            title: "Does it keep stats?",
            body: "Yes. Local stats are kept by difficulty. You can also flip the board and mute sound.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "国际象棋 Chessboard",
    description: "面向 macOS 与 Windows 的桌面国际象棋：Stockfish 19、离线课程、杀型练习与本机复盘。",
    eyebrow: "桌面国际象棋",
    headline: "学棋、练习，再下一局",
    lead: "离线课程。杀型练习。与 Stockfish 或好友对弈。",
    catalog: {
      role: "Stockfish 与课程",
      text: "学棋、做题，再与 Stockfish 或同屏好友下一局。",
    },
    primaryCta: {
      label: "下载最新版本",
      href: "https://github.com/hxddh/chessboard/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/chessboard",
    },
    meta: "macOS + Windows · GPLv3 · {version} · 本地应用",
    stats: {
      title: "课程、题库、开局",
      items: [
        {
          value: "96",
          label: "课，从零基础到中级",
        },
        {
          value: "1,170",
          label: "道题：手写 168，引擎挖出 1,002",
        },
        {
          value: "195",
          label: "条 ECO 开局可识别",
        },
      ],
    },
    visual: {
      kind: "screenshot",
      label: "国际象棋 Chessboard",
      frame: "wide",
      image: {
        src: "/assets/chessboard-game-board.webp",
        alt: "Chessboard 木色主题终局局面，显示棋子高亮、着法列表与侧栏控制",
        width: 1223,
        height: 768,
      },
    },
    showcases: [
      {
        src: "/assets/chessboard-review-zh.webp",
        alt: "Chessboard 用 Stockfish 分析完一局 17 回合的棋，再逐手回放，评估曲线标出失着",
        width: 1222,
        height: 768,
        video: { mp4: "/assets/chessboard-review-zh.mp4", webm: "/assets/chessboard-review-zh.webm" },
        title: "失着落在曲线上",
        body: "Stockfish 跑完整局，生成评估曲线并标注失着；跳到任意局面可继续下。",
      },
      {
        src: "/assets/chessboard-theme.webp",
        alt: "Chessboard 夜色主题棋盘，侧栏与主题控制可见",
        width: 1223,
        height: 768,
        title: "四种棋盘，同一局棋",
        body: "木色、夜色、日间、纸本随意切换，局面不变。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "学棋与对弈都在这台电脑上",
        items: [
          { title: "离线课程", body: "从零基础到中级。" },
          { title: "杀型练习", body: "反复练习杀型。" },
          { title: "引擎对弈", body: "在本机与 Stockfish 19 下棋。" },
          { title: "同屏对弈", body: "两人共用一块棋盘。" },
          { title: "带入 PGN", body: "支持指定 FEN 开局的棋谱。" },
          { title: "本机保存", body: "对弈、存档与分析。" },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "能在线对战吗？",
            body: "不能，不提供在线匹配。可以与引擎或同屏好友下棋。",
          },
          {
            title: "PGN 能做什么？",
            body: "粘贴或导入 PGN，支持指定 FEN 开局的棋谱。逐着查看，跳到任意局面，也可从那里继续下。",
          },
          {
            title: "有对局统计吗？",
            body: "有。按难度保留本地胜负统计，还可以翻转棋盘、开关音效。",
          },
        ],
      },
    ],
  },
});
