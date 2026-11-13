import { defineProduct } from "../schema";

export default defineProduct({
  slug: "pulse",
  line: "agents",
  type: "mac",
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
      "Check local coding-agent sessions in the macOS menu bar: red when one is blocked, a quiet count when it is your turn. Six agents, through their own hooks.",
    eyebrow: "Menu-bar status for coding agents",
    headline: "Which agent needs you.",
    lead: "A lamp in the menu bar for your coding agents. It turns red when one is blocked on you, and tells you why.",
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
    installNote: "Not notarized: allow each new build once with Open Anyway in System Settings → Privacy & Security.",
    privacy: {
      network: "none",
      networkNote: "No network connection: no update check, nothing reported.",
      stays: "The event log stays on this Mac, readable only by you.",
    },
    meta: "macOS 14+ · MIT · {version}",
    releaseHighlights: {
      version: "v33.0.0",
      summary:
        "This release shows what happened in a session. Upgrading clears the old event log, so earlier timelines are lost; hooks are unaffected.",
      items: [
        "A new “Now” part of the details lists each tool still running, with its own time, and any subagents still alive.",
        "A new “This turn” part sums up the turn: your prompt, time and steps, tools, changed files, Skills, MCP servers, subagents and plan progress, whenever the agent reports them.",
        "“Copy this turn's summary” puts the turn into plain text, prompt and file paths included, to paste into a pull request or a chat.",
      ],
    },
    visual: {
      kind: "menuBar",
      label: "Pulse",
      menubarLabel: "Illustrative session list",
      glanceTitle: "1 · 4m",
      headerStatus: "1 needs you · 1 running · 1 your turn",
      sections: [
        {
          // One list in lamp order, no group headings; only waiting, stalled and
          // running rows have a second line (Pulse 30 tray).
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
              state: "recent",
              chip: "Your turn",
            },
            {
              title: "Terminal session running · Pi",
              state: "process",
            },
          ],
        },
      ],
      footnotes: ["hook events · processes", "Click a row to go · › for details"],
      // The still above is the third scene. Strings and rules from Pulse 30:
      // L10n.swift (counts, lamp sentences, "now"), TrayState.swift (the title
      // only while something waits; the count alone under a minute) and
      // EXPERIENCE.md §3–4 (one lamp, frozen row order, second lines).
      lampSentence: "Red: an agent is waiting on you.",
      scenes: [
        {
          lamp: "running",
          headerStatus: "2 running · 1 your turn",
          lampSentence: "Green: agents are working and nothing needs you.",
          rows: [
            { title: "Add a package · Claude", meta: "Read · package.json · now", state: "running", chip: "1m" },
            {
              title: "Fix the flaky test · Claude",
              meta: "Bash · swift test · 12m ago",
              state: "running",
              chip: "14m",
            },
            { title: "Review failing CI · Codex", state: "recent", chip: "Your turn" },
            { title: "Terminal session running · Pi", state: "process" },
          ],
        },
        {
          lamp: "waiting",
          glanceTitle: "1",
          headerStatus: "1 needs you · 1 running · 1 your turn",
          lampSentence: "Red: an agent is waiting on you.",
          rows: [
            { title: "Add a package · Claude", meta: "Bash: npm install", state: "waiting", chip: "now" },
            {
              title: "Fix the flaky test · Claude",
              meta: "Bash · swift test · 12m ago",
              state: "running",
              chip: "14m",
            },
            { title: "Review failing CI · Codex", state: "recent", chip: "Your turn" },
            { title: "Terminal session running · Pi", state: "process" },
          ],
        },
        {
          lamp: "waiting",
          glanceTitle: "1 · 4m",
          headerStatus: "1 needs you · 1 running · 1 your turn",
          lampSentence: "Red: an agent is waiting on you.",
          rows: [
            { title: "Add a package · Claude", meta: "Bash: npm install", state: "waiting", chip: "4m" },
            {
              title: "Fix the flaky test · Claude",
              meta: "Bash · swift test · 12m ago",
              state: "running",
              chip: "14m",
            },
            { title: "Review failing CI · Codex", state: "recent", chip: "Your turn" },
            { title: "Terminal session running · Pi", state: "process" },
          ],
        },
        {
          lamp: "running",
          headerStatus: "2 running · 1 your turn",
          lampSentence: "Green: agents are working and nothing needs you.",
          rows: [
            { title: "Add a package · Claude", meta: "Bash · npm install · now", state: "running", chip: "5m" },
            {
              title: "Fix the flaky test · Claude",
              meta: "Bash · swift test · 12m ago",
              state: "running",
              chip: "14m",
            },
            { title: "Review failing CI · Codex", state: "recent", chip: "Your turn" },
            { title: "Terminal session running · Pi", state: "process" },
          ],
        },
      ],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "One lamp: red, green, orange or grey.",
        items: [
          { title: "One banner per wait", body: "Names the request, like `Bash: npm run build`; gone once answered." },
          { title: "Only lamps", body: "It never answers prompts, dispatches work, or shows tokens or cost." },
          {
            title: "This turn, in details",
            body: "The › button on a row lists this turn's tools, changed files, plan and subagents.",
          },
          {
            title: "Orange means stalled",
            body: "Pi and OpenCode only: twenty minutes with no new events and no tool running.",
          },
          { title: "Six agents, own hooks", body: "Four turn red; Codex and Cursor show running and your turn." },
          {
            title: "Click to go",
            body: "A click opens the session's terminal when Pulse can find it, else its app or details.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "State comes only from each agent's own hooks; Pulse reads no session files, transcripts or protected app data.",
          "The event log, readable only by you, keeps prompts cut to 200 characters with credentials redacted, on this Mac.",
          "Pulse never goes online: no update check, nothing reported. The Releases… link in Settings just opens the releases page in your browser.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "What does installing the hooks change?",
            body: "Install them from the setup card on first open or with Install all in Settings → Hooks; for Codex, Pulse writes only `~/.codex/hooks.json`, then you run `/hooks` in Codex to trust it. Only observe-only events are added, and removing them restores each file byte for byte; a file changed since then loses only Pulse's entries.",
          },
          {
            title: "Why is an agent not turning red?",
            body: "Open Settings → Hooks. Each agent on this Mac has a row: installed, needs update, failed with its reason, or not installed; the last event Pulse heard from it and when; the last event it ignored and why; and whether the agent reports waiting. Install all brings every row that needs an update up to date. Copy report gives the same as plain text, plus each session's last three events, without paths, prompts, sessions or projects.",
          },
          {
            title: "How do I remove Pulse?",
            body: "In Settings → Hooks, Remove all restores each agent's untouched files byte for byte; a file you edited since loses only Pulse's entries. Then choose Quit Pulse from the menu-bar icon's right-click menu, drag Pulse.app to the Trash, and delete `~/Library/Application Support/Pulse`. If you turned on Open at login, also remove Pulse in System Settings → General → Login Items.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Pulse",
    description:
      "本机编码 Agent 会话的 macOS 菜单栏状态灯：阻塞时亮红灯，轮到你时只安静计数。支持六个 Agent，走它们自己的 hook。",
    eyebrow: "编码 Agent 的菜单栏状态灯",
    headline: "看看哪个 Agent 需要你",
    lead: "菜单栏里的一盏灯，看着你的编码 Agent。有 Agent 卡住等你时亮红灯，并说明原因。",
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
    installNote: "未公证：每个新版本都要在“系统设置 → 隐私与安全性”里点一次“仍要打开”。",
    privacy: {
      network: "none",
      networkNote: "不连网络：不检查更新，不上报任何东西。",
      stays: "事件日志只在本机，只有你能读。",
    },
    meta: "macOS 14+ · MIT · {version}",
    releaseHighlights: {
      version: "v33.0.0",
      summary: "这一版把会话里发生了什么讲清楚。升级后旧的事件日志会清空，以前的时间线随之丢失，hook 不受影响。",
      items: [
        "详情页新增“正在进行”：列出每个还在跑的工具和各自的用时，以及还在运行的子 Agent。",
        "详情页新增“本轮”：你的提示、用时和步数、用到的工具、改过的文件、Skill、MCP 服务、子 Agent 和计划进度，Agent 报了才显示。",
        "新增“复制本轮摘要”：把这一轮整理成一段纯文本，带上提示和文件路径，方便贴进 PR 或聊天。",
      ],
    },
    visual: {
      kind: "menuBar",
      label: "Pulse",
      menubarLabel: "会话列表示意",
      glanceTitle: "1·4分钟",
      headerStatus: "1 需要你 · 1 运行中 · 1 轮到你",
      sections: [
        {
          rows: [
            {
              title: "添加依赖 · Claude",
              meta: "Bash: npm install",
              state: "waiting",
              chip: "4分钟",
            },
            {
              title: "修好不稳定的测试 · Claude",
              meta: "Bash · swift test · 12分钟前",
              state: "running",
              chip: "14分钟",
            },
            {
              title: "查看失败的 CI · Codex",
              state: "recent",
              chip: "轮到你",
            },
            {
              title: "终端会话正在运行 · Pi",
              state: "process",
            },
          ],
        },
      ],
      footnotes: ["hook 事件 · 进程", "点一行前往 · 点“›”看详情"],
      lampSentence: "红：有 Agent 在等你。",
      scenes: [
        {
          lamp: "running",
          headerStatus: "2 运行中 · 1 轮到你",
          lampSentence: "绿：Agent 在工作，没有需要你的事。",
          rows: [
            { title: "添加依赖 · Claude", meta: "Read · package.json · 刚刚", state: "running", chip: "1分钟" },
            {
              title: "修好不稳定的测试 · Claude",
              meta: "Bash · swift test · 12分钟前",
              state: "running",
              chip: "14分钟",
            },
            { title: "查看失败的 CI · Codex", state: "recent", chip: "轮到你" },
            { title: "终端会话正在运行 · Pi", state: "process" },
          ],
        },
        {
          lamp: "waiting",
          glanceTitle: "1",
          headerStatus: "1 需要你 · 1 运行中 · 1 轮到你",
          lampSentence: "红：有 Agent 在等你。",
          rows: [
            { title: "添加依赖 · Claude", meta: "Bash: npm install", state: "waiting", chip: "刚刚" },
            {
              title: "修好不稳定的测试 · Claude",
              meta: "Bash · swift test · 12分钟前",
              state: "running",
              chip: "14分钟",
            },
            { title: "查看失败的 CI · Codex", state: "recent", chip: "轮到你" },
            { title: "终端会话正在运行 · Pi", state: "process" },
          ],
        },
        {
          lamp: "waiting",
          glanceTitle: "1·4分钟",
          headerStatus: "1 需要你 · 1 运行中 · 1 轮到你",
          lampSentence: "红：有 Agent 在等你。",
          rows: [
            { title: "添加依赖 · Claude", meta: "Bash: npm install", state: "waiting", chip: "4分钟" },
            {
              title: "修好不稳定的测试 · Claude",
              meta: "Bash · swift test · 12分钟前",
              state: "running",
              chip: "14分钟",
            },
            { title: "查看失败的 CI · Codex", state: "recent", chip: "轮到你" },
            { title: "终端会话正在运行 · Pi", state: "process" },
          ],
        },
        {
          lamp: "running",
          headerStatus: "2 运行中 · 1 轮到你",
          lampSentence: "绿：Agent 在工作，没有需要你的事。",
          rows: [
            { title: "添加依赖 · Claude", meta: "Bash · npm install · 刚刚", state: "running", chip: "5分钟" },
            {
              title: "修好不稳定的测试 · Claude",
              meta: "Bash · swift test · 12分钟前",
              state: "running",
              chip: "14分钟",
            },
            { title: "查看失败的 CI · Codex", state: "recent", chip: "轮到你" },
            { title: "终端会话正在运行 · Pi", state: "process" },
          ],
        },
      ],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "一盏灯：红、绿、橙、灰",
        items: [
          { title: "每次等待一条横幅", body: "直接写出请求，如 `Bash: npm run build`；回答后撤回。" },
          { title: "只做灯", body: "不替你回答授权，不派活，不显示 token 或费用。" },
          { title: "详情里的本轮", body: "点每行末尾的“›”，看这一轮用的工具、改过的文件、计划和子 Agent。" },
          { title: "橙色表示停滞", body: "只用于 Pi 与 OpenCode：没有工具在跑，却二十分钟没有新事件。" },
          { title: "六个 Agent", body: "四个会亮红；Codex 与 Cursor 只报运行和轮到你。" },
          { title: "点一下就去", body: "点一行就打开会话所在的终端；找不到终端时，打开它的应用或详情。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "状态只来自各 Agent 自己的 hook；Pulse 不读取会话文件、transcript 或受 macOS 保护的应用数据。",
          "事件日志只在本机，只有你能读；其中的提示最多保留 200 字，凭据已抹掉。",
          "Pulse 不连网络：不检查更新，不上报任何东西。设置里的“版本发布…”只是在浏览器里打开 GitHub 上的发布页。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "安装 hook 会改动什么？",
            body: "首次打开时在托盘的设置卡里连接，或在“设置 → Hooks”点“全部安装”；Codex 只写入 `~/.codex/hooks.json`，之后在 Codex 里运行 `/hooks` 信任 Pulse。只装观察型事件，移除时逐字节还原每个文件；之后改过的文件只删掉 Pulse 的条目。",
          },
          {
            title: "Agent 为什么没亮红灯？",
            body: "打开“设置 → Hooks”。这台 Mac 上的每个 Agent 一行：已安装、需要更新、安装失败及原因，或未安装；最近听到它的哪个事件、多久前；最近未采用的事件及原因；它会不会报告在等你。“全部安装”会更新所有需要更新的 Agent。“复制报告”给出同样内容的纯文本，另加每个会话最近 3 个事件，不含路径、提示、会话或项目。",
          },
          {
            title: "怎样卸载 Pulse？",
            body: "在“设置 → Hooks”点“全部移除”：没改过的配置逐字节还原，之后改过的只删掉 Pulse 的条目。然后右键菜单栏图标选“退出 Pulse”，把 Pulse.app 拖进废纸篓，再删除 `~/Library/Application Support/Pulse`。开过“登录时打开”的话，也在“系统设置 → 通用 → 登录项”里移除 Pulse。",
          },
        ],
      },
    ],
  },
});
