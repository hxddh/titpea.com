import { defineProduct } from "../schema";

export default defineProduct({
  slug: "pulse",
  line: "agents",
  repo: "hxddh/Pulse",
  icon: "/assets/icons/pulse.webp",
  og: "/assets/og-pulse.png",
  schema: {
    category: "DeveloperApplication",
    os: "macOS",
  },
  sectionIndex: false,
  en: {
    title: "Pulse",
    description:
      "Check local coding-agent sessions in the macOS menu bar: red when one is blocked, a quiet count when it is your turn. Seven agents, through their own hooks.",
    eyebrow: "Waiting lamp for agent sessions",
    headline: "Which agent needs you.",
    lead: "Red means blocked. Your turn stays quiet. Every lamp says why.",
    catalog: {
      role: "",
      text: "The menu-bar lamp for coding agents that need you.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/Pulse/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/Pulse",
    },
    meta: "macOS 14+ · MIT · {version} · Menu bar",
    visual: {
      kind: "menuBar",
      label: "Pulse",
      menubarLabel: "Illustrative session list",
      glanceTitle: "1 · 4m",
      headerStatus: "1 needs you · 1 running · 1 your turn",
      sections: [
        {
          // One list in lamp order, no group headings (Pulse 26 tray).
          rows: [
            {
              title: "Add a package · Claude",
              meta: "Bash: npm install",
              state: "waiting",
              chip: "4m",
            },
            {
              title: "Fix the flaky test · Claude",
              meta: "Bash · swift test · 12m ago",
              state: "running",
              chip: "14m",
            },
            {
              title: "Review failing CI · Codex",
              meta: "~/code/titpea · 1m ago",
              state: "recent",
              chip: "Your turn",
            },
            {
              title: "Pi",
              meta: "Process only · no hook event yet",
              state: "process",
            },
          ],
        },
      ],
      footnotes: ["hook events · processes", "↩ Go to terminal, or Open app"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Know which session needs you.",
        items: [
          { title: "Red means blocked", body: "A permission or question waits; its banner leaves once answered." },
          { title: "Your turn, quietly", body: "Finished turns are counted in the header; no banner, no sound." },
          { title: "Last step, turn time", body: "Running rows show the latest tool step and the turn's length." },
          { title: "Orange means stalled", body: "Twenty minutes without news; the row names the last step." },
          { title: "Seven agents, own hooks", body: "Five turn red; Codex and Cursor show running and your turn." },
          { title: "Back to the session", body: "Go to terminal when the pane is known; otherwise Open app." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "State comes only from each agent's own hooks; Pulse reads no session files, transcripts or protected app data.",
          "The event log keeps each prompt redacted and cut to 200 characters, in a file only you can read, on this Mac.",
          "Update checks read the public GitHub releases anonymously and open the release page.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Which agents show waiting?",
            body: "Five: Claude Code, Gemini CLI, Copilot CLI, OpenCode and Pi, through the hook, plugin or extension each vendor documents. Codex and Cursor show running and your turn only, and say they do not report waiting. Install them from the setup card on first open or in Settings → Hooks; for Codex, Pulse writes only `~/.codex/hooks.json`, then you run `/hooks` in Codex to trust it. Only observe-only events are added, and removing them restores each file byte for byte. A session that started before Pulse shows as process only until its next step.",
          },
          {
            title: "Why is an agent not turning red?",
            body: "Open Settings → Hooks. Each agent on this Mac has a row: whether its hook is installed (or why it failed) and how long ago its last event arrived. Copy report gives the same as plain text, without paths, prompts or sessions.",
          },
          {
            title: "Why does macOS block the first open?",
            body: "Current builds are ad-hoc signed, so the first open may need Open from the context menu, or clearing quarantine with xattr.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Pulse",
    description:
      "本机编码 Agent 会话的 macOS 菜单栏状态灯：阻塞时亮红灯，轮到你时只安静计数。支持七个 Agent，走它们自己的 hook。",
    eyebrow: "编码 Agent 的状态灯",
    headline: "看看哪个 Agent 需要你",
    lead: "红灯只给阻塞。轮到你只安静计数。每盏灯都说出原因。",
    catalog: {
      role: "",
      text: "菜单栏上看哪个编码 Agent 需要你。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/Pulse/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/Pulse",
    },
    meta: "macOS 14+ · MIT · {version} · 菜单栏",
    visual: {
      kind: "menuBar",
      label: "Pulse",
      menubarLabel: "会话列表示意",
      glanceTitle: "1 · 4 分",
      headerStatus: "1 需要你 · 1 运行中 · 1 轮到你",
      sections: [
        {
          rows: [
            {
              title: "添加依赖 · Claude",
              meta: "Bash: npm install",
              state: "waiting",
              chip: "4 分",
            },
            {
              title: "修好不稳定的测试 · Claude",
              meta: "Bash · swift test · 12 分钟前",
              state: "running",
              chip: "14 分",
            },
            {
              title: "查看失败的 CI · Codex",
              meta: "~/code/titpea · 1 分钟前",
              state: "recent",
              chip: "轮到你",
            },
            {
              title: "Pi",
              meta: "仅进程 · 还没有 hook 事件",
              state: "process",
            },
          ],
        },
      ],
      footnotes: ["hook 事件 · 进程", "↩ 前往终端，或打开应用"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "哪个会话需要你，一眼可见",
        items: [
          { title: "红灯只给阻塞", body: "授权或提问在等你；回答后横幅自动撤回。" },
          { title: "轮到你不报警", body: "做完的回合只在头部计数，不弹通知、不响。" },
          { title: "上一步与本回合", body: "运行中的行写出最近一步工具，和这一回合跑了多久。" },
          { title: "橙色表示停滞", body: "二十分钟没有新动静，行上点名上一步。" },
          { title: "七个 Agent", body: "五个会亮红；Codex 与 Cursor 只报运行和轮到你。" },
          { title: "回到原会话", body: "能精确落点时「前往终端」，否则「打开应用」。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "状态只来自各 Agent 自己的 hook；Pulse 不读取会话文件、transcript 或受 macOS 保护的应用数据。",
          "事件日志里的提示已脱敏、至多 200 字，文件只有你能读，只在本机。",
          "更新检查以匿名请求读取公开的 GitHub Release，有新版本时打开发布页。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "哪些 Agent 能显示等待？",
            body: "五个：Claude Code、Gemini CLI、Copilot CLI、OpenCode 和 Pi，走各家文档里的 hook、插件或扩展。Codex 与 Cursor 只显示运行中和轮到你，并注明不会报告它在等你。首次打开时在托盘的设置卡里连接，或在「设置 → Hooks」安装；Codex 只写入 `~/.codex/hooks.json`，之后在 Codex 里运行 `/hooks` 信任 Pulse。只装观察型事件，移除时逐字节还原每个文件。Pulse 启动前就在跑的会话，在它的下一步之前只显示为「仅进程」。",
          },
          {
            title: "Agent 为什么没亮红灯？",
            body: "打开「设置 → Hooks」。这台 Mac 上的每个 Agent 一行：hook 装没装（装失败会写原因）、最近一次事件是多久前。「复制报告」给出同样内容的纯文本，不含路径、提示或会话。",
          },
          {
            title: "为什么首次打开被 macOS 拦下？",
            body: "当前构建是 ad-hoc 签名，首次打开可能要右键选「打开」，或用 xattr 清掉隔离属性。",
          },
        ],
      },
    ],
  },
});
