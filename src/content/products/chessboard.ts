import { defineProduct } from "../schema";

// The demo puzzle: Lichess puzzle GJsTC (lichess.org/training/GJsTC, CC0),
// one of the 40,000 Chessboard ships, row "GJsTC" in src/web/js/lichess/band-0600.js
// (line 18 at hxddh/chessboard v14.0.0, unchanged since v10.0.0; rated 600, themes
// "sacrifice m2"). The FEN is the
// puzzle position (puzzle-db.js decodeRow; Black to move, so the app turns the
// board). Checked with python-chess: no mate in one, Qxf2+ is Black's only mate
// in two, Bxf2 is White's only legal reply, and Rxf2# is the only mate after it.
// (The earlier demo, 6kxUl, left the shipped set with the 8.4 puzzle refresh.)
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
        en: "Chessboard after a full-game Stockfish review: the final position, a one-line summary, the win-chance curve with marked mistakes, and the key moments",
        zh: "Chessboard 用 Stockfish 复盘完整局：终局局面、一句总结、标出失着的胜率曲线，以及关键时刻",
      },
    },
  },
  repo: "hxddh/chessboard",
  icon: "/assets/icons/chessboard.webp",
  og: "/assets/og-chessboard.png",
  schema: {
    category: "GameApplication",
    os: "macOS, Windows",
  },
  sectionIndex: false,
  en: {
    title: "Chessboard",
    description:
      "A desktop chess app for macOS and Windows, with Stockfish 19 and Maia opponents, lessons, 40,000 puzzles, and a searchable game library.",
    eyebrow: "Desktop chess",
    headline: "Chess you can review.",
    lead: "A Stockfish review marks the mistakes. Lessons. 40,000 puzzles.",
    catalog: {
      role: "Stockfish + lessons",
      text: "Learn, solve puzzles, then play the computer or a friend on the same board.",
    },
    primaryCta: {
      label: "Download",
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
          value: "120",
          label: "lessons from zero to advanced",
        },
        {
          value: "40,000",
          label: "Lichess puzzles, rated 600–2799",
        },
        {
          value: "3,815",
          label: "named opening positions",
        },
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Chessboard",
      frame: "wide",
      image: {
        src: "/assets/chessboard-game-board-en.webp",
        alt: "Chessboard in light appearance with the wood board: the rail with Today, Play, Train, Games, Me and Settings, a finished game, and the move list in the side panel",
        width: 2446,
        height: 1536,
      },
    },
    showcases: [
      {
        src: "/assets/chessboard-review-en.webp",
        alt: "Chessboard after a Stockfish review of a 17-move game: a one-line summary and the win-chance curve, stepping through six key moments with the moves 1500-rated players choose under the engine line, then the full report with each side's accuracy",
        width: 1222,
        height: 768,
        // Recorded from the app's own review (scripts/record-board-demos.mjs).
        video: { mp4: "/assets/chessboard-review-en.mp4", webm: "/assets/chessboard-review-en.webm" },
        title: "Key moments first.",
        body: "A Stockfish pass gives a one-line summary, the win-chance curve, and key moments you can try again; in a game against the engine, your own mistakes come first. From the result bar, Review this game stops at your first ?? move, or at your first ? if there is none. Under the engine line, Human moves lists what players at your rating most often play there. Accuracy and every graded move wait in the full report.",
      },
      {
        src: "/assets/chessboard-theme-en.webp",
        alt: "Chessboard in dark appearance with the green board on the final position of the reviewed game",
        width: 2446,
        height: 1536,
        title: "Five boards, light or dark.",
        body: "Wood, green, blue, paper, or marble, and seven piece sets, all on one Settings page.",
      },
    ],
    sections: [
      {
        kind: "demo",
        id: "try",
        title: "Solve one here.",
        body: "Tap a piece, then its square, or use the arrow keys and Enter.",
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
        label: "Five places, one Settings page.",
        items: [
          { title: "Five places", body: "Today, Play, Train, Games and Me, plus one Settings page." },
          { title: "What to do next", body: "Today lists up to three tasks, each saying where it came from." },
          { title: "Your own mistakes", body: "Your ? and ?? moves come back on a 1-3-7-21-day schedule." },
          {
            title: "Endgames and classics",
            body: "90 endgames against full-strength Stockfish; 40 master games to guess.",
          },
          { title: "Your opening book", body: "Up to 5,000 lines a side; start from the built-in openings." },
          { title: "Opponents like people", body: "Seven middle levels are Maia, trained on human Lichess games." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "Games, puzzles, lessons, and progress stay on this computer, in the app's storage and its data folder.",
          "Sync goes online only after you allow it in Settings · Data, and sends Lichess or Chess.com only your user name.",
          "A pasted Lichess link fetches that one game by its ID; Check for updates asks GitHub only when you press it.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Can I play online?",
            body: "No. Online matchmaking is not included; play the engine or a friend on the same screen. Optional sync, off until you allow the network in Settings · Data, imports your games from Lichess or Chess.com into the library.",
          },
          {
            title: "Who plays the other side?",
            body: "A ladder of 21 opponents, each with a name, a portrait, and a rating. The seven from Solid (1191) to Advanced− (1908) are Maia, networks trained on human games from Lichess, so they pick moves the way players at that level do. The rest are Stockfish 19, weakened at the bottom of the ladder and at full strength at the top. Maia runs on this computer from networks that ship with the app; if one cannot answer, that level plays its Stockfish settings instead.",
          },
          {
            title: "Will my saves from an older version carry over?",
            body: "From 9.0 or later, yes: versions 9.0 to 14.0 share one save format, and each release reads the saves of the one before it, so 14.0 reads 13.0 saves. From 8.x, no: version 9.0 changed the save format and where saves are kept, and it does not read 8.x data or a file saved with 8.x Export all data. After upgrading from 8.x, your ratings and records, puzzle and lesson progress, game library, opening book, and review queue start from zero.",
          },
          {
            title: "What can I do with a PGN?",
            body: "Use Analyse a game on Today or Games: paste a PGN, open a file, or paste a Lichess game link, and the game opens in the review. Play on from here continues from any move. To keep a whole PGN, use Import to library or Paste PGN on Games. Chess.com has no single-game link to fetch, so copy the PGN from its Share menu.",
          },
          {
            title: "Does it track my progress?",
            body: "Yes. Games against the engine give you a game rating, kept apart from your puzzle rating, and the result bar under the board shows each change. Today shows your streak and both ratings; the Me page adds the rating curve, a practice calendar, and your strengths and weaknesses.",
          },
          {
            title: "How do Look ahead and Blind mate work?",
            body: "Both are under Train, Puzzles, More ways to practise, Focus. Look ahead stops the board at a puzzle and writes the next 2–6 half-moves as text; play them in your head, then say which piece can capture or give check, or whether there is a mate. Once the puzzle’s own line runs out, Stockfish plays on. Blind mate shows a mate in one or two for 3 seconds, then hides the pieces. Both pick puzzles from the built-in Lichess set at your rating in that mode.",
          },
          {
            title: "How many games can the library hold?",
            body: "Up to 10,000. Filter them, find every game that reached a position, and explore their openings. Once twenty games are analysed, the library’s diagnosis picks two or three things to practise each week. Games are stored in the app's database with a mirror in its data folder; after a restart, a 10,000-game library lists again in about 0.2 seconds.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "国际象棋 Chessboard",
    description: "面向 macOS 与 Windows 的桌面国际象棋：Stockfish 19 与 Maia 对手、课程、四万道谜题与可搜索的棋谱库。",
    eyebrow: "桌面国际象棋",
    headline: "下完一局，复盘失着",
    lead: "Stockfish 复盘标出失着。课程。四万道谜题。",
    catalog: {
      role: "Stockfish 与课程",
      text: "学棋、解谜题，再与电脑或同屏好友下一局。",
    },
    primaryCta: {
      label: "下载",
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
          value: "120",
          label: "课，从零基础到进阶",
        },
        {
          value: "40,000",
          label: "道 Lichess 谜题，600–2799 分",
        },
        {
          value: "3,815",
          label: "个开局局面可识别",
        },
      ],
    },
    visual: {
      kind: "screenshot",
      label: "国际象棋 Chessboard",
      frame: "wide",
      image: {
        src: "/assets/chessboard-game-board-zh.webp",
        alt: "Chessboard 浅色外观、木色棋盘上的终局：左侧是今天、下棋、训练、棋谱、我的与设置，侧栏显示着法列表",
        width: 2446,
        height: 1536,
      },
    },
    showcases: [
      {
        src: "/assets/chessboard-review-zh.webp",
        alt: "Chessboard 用 Stockfish 复盘完一局 17 回合的棋：一句总结和胜率曲线，逐个翻看六个关键时刻，引擎线下列着 1500 分棋手常走的几步，再展开写着双方精准度的完整报告",
        width: 1222,
        height: 768,
        video: { mp4: "/assets/chessboard-review-zh.mp4", webm: "/assets/chessboard-review-zh.webm" },
        title: "先看关键时刻",
        body: "Stockfish 跑完整局，先给一句总结、胜率曲线和关键时刻，每个都能再试一次；和引擎下的棋，先列你自己的失误。从结果条点“复盘这局”，分析完停在你的第一个 ??，没有就停在第一个 ?。引擎线下面的“人会怎么走”，列出你这个等级分的人在这里最常走的几步。精准度和每一手的分级收在完整报告里。",
      },
      {
        src: "/assets/chessboard-theme-zh.webp",
        alt: "Chessboard 深色外观、绿色棋盘，复盘后的终局局面",
        width: 2446,
        height: 1536,
        title: "五种棋盘，浅色或深色",
        body: "木、绿、蓝、纸墨、大理石，另有七套棋子，都在同一个设置页里。",
      },
    ],
    sections: [
      {
        kind: "demo",
        id: "try",
        title: "在这里解一道",
        body: "先点棋子，再点目标格；也可以用方向键和回车。",
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
        label: "五个去处，一处设置",
        items: [
          { title: "五个去处", body: "今天、下棋、训练、棋谱、我的，外加一个设置页。" },
          { title: "接下来练什么", body: "今天页最多列三项，每项写明从哪来。" },
          { title: "自己的失误", body: "你走出的 ? 和 ?? 进复习，按 1、3、7、21 天再问。" },
          { title: "残局与名局", body: "90 个残局对满强度 Stockfish；40 局名局猜着。" },
          { title: "你的开局书", body: "每方最多 5,000 条线，可从内置开局生成。" },
          { title: "像人的对手", body: "中间七档是 Maia，用 Lichess 真人对局训练。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "对局、谜题、课程与进度都留在这台电脑上，存在应用自己的存储和本机数据文件夹里。",
          "要先在“设置 · 数据”里允许联网，才能从 Lichess 或 Chess.com 同步，只发送用户名。",
          "粘贴的 Lichess 链接只按编号取那一局；“检查更新”只在你点它时向 GitHub 查询。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "能在线对战吗？",
            body: "不能，不提供在线匹配。可以与引擎或同屏好友下棋。可选的同步要先在“设置 · 数据”里允许联网，能把你在 Lichess 或 Chess.com 的对局导入棋谱库。",
          },
          {
            title: "对面是谁在下？",
            body: "一条 21 档的阶梯，每档有名字、头像和等级分。扎实（1191）到高级−（1908）这七档是 Maia：用 Lichess 真人对局训练的网络，按这个分段的人会怎么走来选着。其余各档是 Stockfish 19，阶梯下端故意削弱，上端满强度。Maia 在这台电脑上运行，网络随应用附带；它答不上来时，这一档改用原来的 Stockfish 设置。",
          },
          {
            title: "旧版本的存档能带过来吗？",
            body: "9.0 及以后的可以：9.0 到 14.0 用同一种存档格式，每一版都读得了上一版的存档，14.0 读得了 13.0 的。8.x 的不能：9.0 换了存档格式和存储位置，不读 8.x 的档案，也不认 8.x“导出全部数据”存下的文件。从 8.x 升级后，战绩、谜题与课程进度、棋谱库、开局书、复习队列都从零开始。",
          },
          {
            title: "PGN 能做什么？",
            body: "在今天页或棋谱页点“分析一局”：粘贴 PGN、打开文件，或粘贴 Lichess 对局链接，直接进到复盘。任意一手都能“从这里续下”。要把整份 PGN 收进棋谱库，用棋谱页的“导入到库”或“粘贴 PGN”。Chess.com 没有单局接口，要去它的“分享”里复制 PGN。",
          },
          {
            title: "能看到自己的进步吗？",
            body: "能。与引擎对局有自己的对局等级分，和谜题等级分分开记，棋盘下沿的结果条显示每次涨跌。今天页有连续练习的天数和两个等级分；“我的”页还有等级分曲线、练习日历，以及强项与弱项。",
          },
          {
            title: "“看 N 步”和“盲走”怎么练？",
            body: "两种都在“训练 · 谜题 · 更多练法 · 专项”里。“看 N 步”让棋盘停在题面，接下来的 2–6 个半回合只写成文字，你在脑子里走完，再回答哪个子能吃子、哪个子能将军、有没有一步杀；题目自带的线走完后，由 Stockfish 接着走。“盲走”把一步杀或两步杀的局面亮 3 秒，然后藏起棋子，凭记忆走出杀着。两种都从内置的 Lichess 题库里按你在这个模式的评级出题。",
          },
          {
            title: "棋谱库能存多少局？",
            body: "最多一万局。可以按条件筛选、找出经过某个局面的所有对局，并浏览它们的开局。攒够二十局分析后，每周从诊断里排出两三项重点练习。对局存在应用的数据库里，并在本机数据文件夹中另存一份镜像。重启后，一万局的棋谱库约 0.2 秒就能列出来。",
          },
        ],
      },
    ],
  },
});
