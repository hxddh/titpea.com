import { defineProduct } from "../schema";

// The demo puzzle: Lichess puzzle GJsTC (lichess.org/training/GJsTC, CC0),
// one of the 40,000 Chessboard ships, row "GJsTC" in src/web/js/lichess/band-0600.js
// (line 18 at hxddh/chessboard v25.0.0, unchanged since v10.0.0; rated 600, themes
// "sacrifice m2"). The FEN is the
// puzzle position (puzzle-db.js decodeRow; Black to move, so the app turns the
// board). Checked with python-chess: no mate in one, Qxf2+ is Black's only mate
// in two, Bxf2 is White's only legal reply, and Rxf2# is the only mate after it.
// (The earlier demo, 6kxUl, left the shipped set with the 8.4 puzzle refresh.)
// Pictures and the review recording were captured at v24.0.0 by
// scripts/capture-board-screenshots.mjs and scripts/record-board-demos.mjs.
const puzzle = {
  fen: "5rk1/1p5p/3p2pb/P2P1r2/4pq2/R3B2Q/1P3P2/4RKN1 b - - 4 27",
  line: [
    { from: "f4", to: "f2", san: "Qxf2+" },
    { from: "e3", to: "f2", san: "Bxf2" },
    { from: "f5", to: "f2", san: "Rxf2#" },
  ],
};

export default defineProduct({
  slug: "chessboard",
  line: "games",
  type: "game",
  platforms: [{ id: "macos" }, { id: "windows" }],
  license: "GPLv3",
  firstOpen: { macos: "once" },
  featured: {
    order: 2,
    image: {
      src: {
        en: "/assets/chessboard-featured-en.webp",
        zh: "/assets/chessboard-featured-zh.webp",
      },
      width: 1800,
      height: 1200,
      alt: {
        en: "Chessboard after a full-game Stockfish review: the final position, a one-line summary, the win-chance curve with marked mistakes, and the one thing to practise, with a link to its lesson",
        zh: "Chessboard 用 Stockfish 复盘完整局：终局局面、一句总结、标出失着的胜率曲线，以及该练的一件事和它的课程链接",
      },
    },
  },
  repo: "hxddh/chessboard",
  icon: "/assets/icons/chessboard.webp",
  og: "/assets/og-chessboard.png",
  schema: {
    category: "GameApplication",
  },
  sectionIndex: false,
  en: {
    title: "Chessboard",
    description:
      "A desktop chess app for macOS and Windows, with Stockfish 19 and Maia opponents, lessons, 40,000 puzzles, and a searchable game library.",
    eyebrow: "Desktop chess",
    headline: "Play chess, and Stockfish marks your mistakes.",
    lead: "The Stockfish engine reviews your games on your computer. Lessons and 40,000 puzzles help you practise.",
    summary: "Lessons and puzzles, then games against the computer or a friend on the same board.",
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/chessboard/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/chessboard",
    },
    releaseHighlights: {
      version: "v25.0.0",
      items: [
        "Opening several .pgn files at once puts the first on the board and the rest in the library, and on Windows a second double-click hands the file to the window already open.",
        "Retrying a review moment is judged by win chance, as the review itself is, so a move that keeps a clear advantage is no longer called wrong.",
        "The blunder alert now sits at the foot of the board, so it no longer covers your opponent’s name, rating and captures or the Undo and Hint buttons.",
        "In untimed games, opponents answer sooner with only one legal move, a check to meet, a recapture or the first few moves, and take longer in complex positions; their moves are unchanged.",
      ],
    },
    privacy: {
      network: "onRequest",
      networkNote:
        "Sync goes online only after you allow it, and sends only your user name; updates are checked only when you ask.",
      stays: "Games, puzzles, lessons and progress stay on this computer.",
    },
    visual: {
      kind: "screenshot",
      label: "Chessboard",
      frame: "wide",
      image: {
        src: "/assets/chessboard-game-board-en.webp",
        alt: "Chessboard in light appearance with the wood board: the rail with Today, Play, Train, Me and Settings, a finished game at move 17 of 33, the full move list from 1. e4 in the side panel, and Offer draw, Resign, Review and More below it",
        width: 2446,
        height: 1536,
      },
      asOf: "v24.0.0",
    },
    showcases: [
      {
        src: "/assets/chessboard-review-en.webp",
        alt: "Chessboard after a Stockfish review of a 17-move game: a one-line summary and the win-chance curve, stepping through six key moments with the moves 1500-rated players choose under the engine line, then the full report with each side's accuracy",
        width: 2446,
        height: 1536,
        asOf: "v24.0.0",
        // Recorded from the app's own review (scripts/record-board-demos.mjs).
        video: { mp4: "/assets/chessboard-review-en.mp4", webm: "/assets/chessboard-review-en.webm" },
        title: "The review starts with key moments.",
        body: "One pass over the game gives a one-line summary, the win-chance curve, and moments you can try again.",
      },
    ],
    sections: [
      {
        kind: "demo",
        id: "try",
        title: "Solve one here.",
        body: "Tap a piece, then the square to move it to, or use the arrow keys and Enter.",
        caption: "A position from Chessboard’s built-in Lichess puzzle set (puzzle GJsTC).",
        demo: {
          kind: "chessPuzzle",
          ...puzzle,
          label: "Puzzle board",
          prompt: "Black to move. Mate in two.",
          good: "Right.",
          reply: "Right. White plays {move}. Your move.",
          wrong: "Not this one. Try again.",
          solved: "Checkmate. The app has 40,000 more, rated 600–2799.",
          reset: "Reset",
          selected: "{piece} on {square} selected",
          square: "{square}, {piece}",
          piece: "{color} {piece}",
          colors: { w: "white", b: "black" },
          pieces: { k: "king", q: "queen", r: "rook", b: "bishop", n: "knight", p: "pawn" },
        },
      },
      {
        kind: "cards",
        id: "features",
        label: "Practice from your own games",
        items: [
          {
            title: "Your mistakes come back",
            body: "Moves marked ? or ?? return after 1, 3, 7 and 21 days.",
          },
          {
            title: "Opponents that play like people",
            body: "The twelve easiest levels use Maia, a neural network that learned from human games on Lichess.",
          },
          {
            title: "Endgames and classics",
            body: "Play out 90 endgames against full-strength Stockfish, or guess the moves of 40 master games.",
          },
          {
            title: "Your opening book",
            body: "Keep up to 5,000 lines a side, or build it from the built-in openings.",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Can I play online?",
            body: "No. There is no online matchmaking: you play the engine or a friend on the same screen. Optional sync, off until you allow the network in Settings › Data, imports your Lichess or Chess.com games into the library.",
            asOf: "v25.0.0",
          },
          {
            title: "What can I do with a PGN game file?",
            body: "Double-click it to open the game; on Windows, run the bundled register-pgn.cmd once first.",
            steps: [
              "To review one, choose “Review a game” from the ⋯ menu on Today, then paste a PGN, open a file, or paste a Lichess game link.",
              "“Play on from here” continues the game from any move.",
              "To keep a whole PGN, use “Import to library” or “Paste PGN” on the Me page.",
              "The library holds 10,000 games and asks before an import would push older ones out.",
              "Chess.com has no single-game link to fetch, so copy the PGN from its “Share” menu.",
            ],
            asOf: "v25.0.0",
          },
          {
            title: "Does it track my progress?",
            body: "Yes. Games against the engine give you a game rating, kept apart from your puzzle rating.",
            steps: [
              "The game rating starts from your placement score.",
              "The result bar under the board shows each change.",
              "Today shows your streak and one number, “Your level”.",
              "The Me page has both ratings with their curves, a practice calendar, and your strengths and weaknesses.",
            ],
            asOf: "v25.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Chessboard",
    description: "面向 macOS 与 Windows 的桌面国际象棋：Stockfish 19 与 Maia 对手、课程、四万道谜题与可搜索的棋谱库。",
    eyebrow: "桌面国际象棋",
    headline: "下完一局，Stockfish 标出你的失着",
    lead: "在电脑上下国际象棋，由 Stockfish 引擎为你复盘；还有课程和四万道谜题供你练习。",
    summary: "先学棋、解谜题，再和电脑或同屏的朋友下一局。",
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/chessboard/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/chessboard",
    },
    releaseHighlights: {
      version: "v25.0.0",
      items: [
        "一次打开几个 .pgn，第一个上棋盘，其余收进棋谱库；Windows 上应用开着时再双击，文件交给已开的窗口，不再另起一个。",
        "复盘里的“再试一次”改按胜率判，和复盘本身同一把尺子，仍然大优的一步不再被说成不对。",
        "失着提醒挪到棋盘下沿，不再盖住对手的名字、等级分和吃子，也不压着“悔棋”“提示”。",
        "不计时的对局里，只有一步可走、应将、回吃或开局头几步时对手走得快，复杂局面想得久；走哪一步不变。",
      ],
    },
    privacy: {
      network: "onRequest",
      networkNote: "要先在设置里允许联网才会同步，只发送用户名；“检查更新”只在你点它时查询。",
      stays: "对局、谜题、课程与进度都留在这台电脑上。",
    },
    visual: {
      kind: "screenshot",
      label: "Chessboard",
      frame: "wide",
      image: {
        src: "/assets/chessboard-game-board-zh.webp",
        alt: "Chessboard 浅色外观、木色棋盘：左侧是今天、下棋、训练、我的与设置，棋盘停在第 17 回合（共 33 回合），侧栏列出从 1. e4 起的全部着法，下方是提和、认输、复盘与更多",
        width: 2446,
        height: 1536,
      },
      asOf: "v24.0.0",
    },
    showcases: [
      {
        src: "/assets/chessboard-review-zh.webp",
        alt: "Chessboard 用 Stockfish 复盘完一局 17 回合的棋：一句总结和胜率曲线，逐个翻看六个关键时刻，引擎线下列着 1500 分棋手常走的几步，再展开写着双方精准度的完整报告",
        width: 2446,
        height: 1536,
        asOf: "v24.0.0",
        video: { mp4: "/assets/chessboard-review-zh.mp4", webm: "/assets/chessboard-review-zh.webm" },
        title: "复盘先看关键时刻",
        body: "引擎把整局过一遍，给出一句总结、胜率曲线，以及能再试一次的局面。",
      },
    ],
    sections: [
      {
        kind: "demo",
        id: "try",
        title: "在这里解一道",
        body: "先点棋子，再点要走到的格子；也可以用方向键和回车。",
        caption: "取自 Chessboard 内置的 Lichess 题库（谜题 GJsTC）。",
        demo: {
          kind: "chessPuzzle",
          ...puzzle,
          label: "谜题棋盘",
          prompt: "黑方走，两步杀。",
          good: "对了。",
          reply: "对了。白方走 {move}，轮到你。",
          wrong: "不是这步，再想想。",
          solved: "将死。应用里还有四万道，600–2799 分。",
          reset: "重来",
          selected: "已选中{square}的{piece}",
          square: "{square}，{piece}",
          piece: "{color}{piece}",
          colors: { w: "白", b: "黑" },
          pieces: { k: "王", q: "后", r: "车", b: "象", n: "马", p: "兵" },
        },
      },
      {
        kind: "cards",
        id: "features",
        label: "从你自己的对局里练",
        items: [
          { title: "失着会再回来", body: "标了 ? 或 ?? 的着法，会在 1、3、7、21 天后再出现。" },
          { title: "下得像人的对手", body: "最低的十二档用 Maia，一种从 Lichess 真人对局里学出来的神经网络。" },
          { title: "残局与名局", body: "90 个残局和满强度的 Stockfish 下到出结果；40 局名局可以猜着走。" },
          { title: "你的开局书", body: "每方最多 5,000 条线，也可以从内置开局生成。" },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "能在线对战吗？",
            body: "不能，没有在线匹配，对手是引擎或同屏的朋友。可选的同步要先在“设置 › 数据”里允许联网，能把你在 Lichess 或 Chess.com 的对局导入棋谱库。",
            asOf: "v25.0.0",
          },
          {
            title: "PGN 棋谱文件能做什么？",
            body: "双击就能打开这局棋；Windows 上要先运行一次随包的 register-pgn.cmd。",
            steps: [
              "要复盘，在今天页右上角的 ⋯ 里选“复盘一局”，再粘贴 PGN、打开文件，或粘贴 Lichess 对局链接。",
              "任意一手都能“从这里续下”。",
              "要把整份 PGN 收进棋谱库，用“我的”页的“导入到库”或“粘贴 PGN”。",
              "棋谱库最多收 1 万局；导入会挤掉旧对局时，会先问你。",
              "Chess.com 没有单局接口，要去它的“分享”里复制 PGN。",
            ],
            asOf: "v25.0.0",
          },
          {
            title: "能看到自己的进步吗？",
            body: "能。和引擎下的对局有自己的对局等级分，和谜题等级分分开记。",
            steps: [
              "对局等级分从定级的分数起算。",
              "棋盘下沿的结果条显示每次涨跌。",
              "今天页有连续练习的天数和一个数：“你的水平”。",
              "“我的”页有两个等级分和各自的曲线、练习日历，以及强项与弱项。",
            ],
            asOf: "v25.0.0",
          },
        ],
      },
    ],
  },
});
