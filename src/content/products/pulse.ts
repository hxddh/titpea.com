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
      headerStatus: "1 needs you · 2 running · 1 your turn",
      headerAgents: "updated 3s ago",
      sections: [
        {
          title: "Needs you · 1",
          rows: [
            {
              title: "Add a package · Claude",
              meta: "Bash: npm install",
              state: "waiting",
              chip: "4m",
            },
          ],
        },
        {
          title: "Your turn · 1",
          rows: [
            {
              title: "Review failing CI · Codex",
              meta: "~/code/titpea · 1m ago",
              state: "recent",
              chip: "Your turn",
            },
          ],
        },
        {
          title: "Running · 2",
          rows: [
            {
              title: "Draft release notes · Gemini",
              meta: "~/code/pulse · 2m",
              state: "running",
            },
            {
              title: "Pi",
              meta: "Process only · no hook event yet",
              state: "process",
            },
          ],
        },
      ],
      footnotes: ["hooks · process · session file", "↩ Go to terminal, or Open app"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Know which session needs you.",
        items: [
          { title: "Red means blocked", body: "A permission request or a question is waiting." },
          { title: "Your turn, quietly", body: "Finished turns are counted in the header; no banner, no sound." },
          { title: "Every lamp says why", body: "Hover the menu-bar lamp for the rule behind its colour." },
          { title: "Seven agents, own hooks", body: "Five turn red; Codex and Cursor show running and your turn." },
          { title: "Back to the session", body: "Go to terminal when the pane is known; otherwise Open app." },
          { title: "Answers stay in the agent", body: "Pulse never answers; reply in the agent's own prompt." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "State comes only from each agent's own hooks on this Mac; Pulse reads no protected app data.",
          "Hooks add only observe-only events, and removing them restores each file byte for byte.",
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
            body: "Five: Claude Code, Gemini CLI, Copilot CLI, OpenCode and Pi, through the hook, plugin or extension each vendor documents. Codex and Cursor show running and your turn only, and say they do not report waiting. Install them in Settings → Hooks. A session that started before Pulse shows as a process until its next event.",
          },
          {
            title: "Why is an agent not turning red?",
            body: "Open ⋯ → Diagnostics… → Run self-check. It reads each agent's hook file and the events Pulse has seen, runs no agent CLI, writes nothing, and says which contracts are proven on this Mac.",
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
      glanceTitle: "1 · 4 分钟",
      headerStatus: "1 个需要你 · 2 个运行中 · 1 个轮到你",
      headerAgents: "3 秒前更新",
      sections: [
        {
          title: "需要你 · 1",
          rows: [
            {
              title: "添加依赖 · Claude",
              meta: "Bash: npm install",
              state: "waiting",
              chip: "4m",
            },
          ],
        },
        {
          title: "轮到你 · 1",
          rows: [
            {
              title: "查看失败的 CI · Codex",
              meta: "~/code/titpea · 1 分钟前",
              state: "recent",
              chip: "轮到你",
            },
          ],
        },
        {
          title: "运行中 · 2",
          rows: [
            {
              title: "起草 Release 说明 · Gemini",
              meta: "~/code/pulse · 2 分钟",
              state: "running",
            },
            {
              title: "Pi",
              meta: "仅进程 · 还没有 hook 事件",
              state: "process",
            },
          ],
        },
      ],
      footnotes: ["hooks · 进程 · 会话文件", "↩ 前往终端，或打开应用"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "哪个会话需要你，一眼可见",
        items: [
          { title: "红灯只给阻塞", body: "授权请求或提问正在等你。" },
          { title: "轮到你不报警", body: "做完的回合只在头部计数，不弹通知、不响。" },
          { title: "每盏灯说原因", body: "悬停菜单栏图标，看决定颜色的规则。" },
          { title: "七个 Agent", body: "五个会亮红；Codex 与 Cursor 只报运行和轮到你。" },
          { title: "回到原会话", body: "能精确落点时「前往终端」，否则「打开应用」。" },
          { title: "回答留在 Agent 里", body: "Pulse 不回答请求，在 Agent 自己的提示里作答。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "状态只来自各 Agent 在本机的官方 hook；Pulse 不读取受 macOS 保护的应用数据。",
          "hook 只装观察型事件，移除时逐字节还原每个文件。",
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
            body: "五个：Claude Code、Gemini CLI、Copilot CLI、OpenCode 和 Pi，走各家文档里的 hook、插件或扩展。Codex 与 Cursor 只显示运行中和轮到你，并注明不会报告它在等你。在「偏好设置 → Hooks」安装。Pulse 启动前就在跑的会话，要等它的下一个事件，之前只显示为进程。",
          },
          {
            title: "Agent 为什么没亮红灯？",
            body: "打开「⋯ → 诊断… → 运行自检」。自检读取各 Agent 的 hook 文件和 Pulse 收到的事件，不运行任何 Agent 命令、不写入任何东西，逐条说明哪些约定在这台 Mac 上已被证实。",
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
