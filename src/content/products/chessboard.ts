import { defineProduct } from "../schema";

export default defineProduct({
  slug: "chessboard",
  line: "everyday",
  repo: "hxddh/chessboard",
  og: "/assets/og-chessboard.png",
  schema: {
    category: "GameApplication",
    os: "macOS and Windows",
  },
  sectionIndex: false,
  en: {
    title: "Chessboard",
    description:
      "A desktop chessboard for macOS and Windows, with Stockfish 18, offline lessons, mate drills, and local review.",
    eyebrow: "Desktop chess",
    headline: "Learn, then play",
    lead: "Take an offline lesson, practise a mating pattern, then play Stockfish or a friend on the same board. Review the evaluation curve after the game.",
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
        src: "/assets/chessboard-review.webp",
        alt: "Chessboard reviewing a finished game with a centipawn evaluation curve and annotated mistakes",
        width: 1223,
        height: 768,
        kicker: "Engine review",
        title: "See where the evaluation turned",
        body: "Run a full-game Stockfish pass to build a centipawn curve and mark mistakes on the move list. Jump to any position, then continue from there.",
      },
      {
        src: "/assets/chessboard-theme.webp",
        alt: "Chessboard night theme showing a chess position with the sidebar and theme controls visible",
        width: 1223,
        height: 768,
        kicker: "Board themes",
        title: "Wood, night, day, or paper",
        body: "Keep the same game state while switching appearance. Flip the board, mute sound, and keep local stats by difficulty.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "positioning",
        label: "A local chessboard",
        items: [
          {
            title: "Bring a PGN",
            body: "Paste or import a PGN, including FEN-start studies. Review the moves, jump to a position, or continue playing from it.",
          },
          {
            title: "Lessons and games on this computer",
            body: "Lessons, drills, gameplay, saves, and analysis run locally. Play against the engine or a friend on the same screen; online matchmaking is not included.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "国际象棋 Chessboard",
    description: "面向 macOS 与 Windows 的桌面国际象棋：Stockfish 18、离线课程、杀型练习与本机复盘。",
    eyebrow: "桌面国际象棋",
    headline: "学棋、练习，再下一局",
    lead: "离线学棋、练习杀型，再与 Stockfish 或同屏好友对弈。下完一局，查看评估曲线和逐着分析。",
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
        src: "/assets/chessboard-review.webp",
        alt: "Chessboard 复盘已结束对局，显示引擎评估曲线与失着标注",
        width: 1223,
        height: 768,
        kicker: "引擎复盘",
        title: "看清局势从哪里转折",
        body: "一键跑完 Stockfish 评估，生成引擎评估曲线并在着法列表标注失着；跳到任意局面后可继续下。",
      },
      {
        src: "/assets/chessboard-theme.webp",
        alt: "Chessboard 夜色主题棋盘，侧栏与主题控制可见",
        width: 1223,
        height: 768,
        kicker: "棋盘主题",
        title: "木色、夜色、日间或纸本",
        body: "切换外观时局面不变。可翻转棋盘、开关音效，并按难度保留本地胜负统计。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "positioning",
        label: "本机国际象棋盘",
        items: [
          {
            title: "带入 PGN 复盘",
            body: "粘贴或导入 PGN，支持指定 FEN 开局的棋谱。逐着查看，跳到任意局面，也可从那里继续下。",
          },
          {
            title: "在这台电脑上学棋与对弈",
            body: "课程、做题、对弈、存档和分析都在本地完成。可以与引擎或同屏好友下棋，不提供在线匹配。",
          },
        ],
      },
    ],
  },
});
