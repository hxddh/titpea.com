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
    installNote: "Not notarized: allow each new build once with Open Anyway in System Settings → Privacy & Security.",
    privacy: {
      network: "none",
      networkNote: "No network connection: no update check, nothing reported.",
      stays: "The event log stays on this Mac, readable only by you.",
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
        label: "Four lamp colours, in the menu bar.",
        items: [
          { title: "One banner per wait", body: "Names the request, like `Bash: npm run build`; gone once answered." },
          { title: "Only lamps", body: "It never answers prompts, dispatches work, or shows tokens or cost." },
          { title: "This turn, in details", body: "› lists the turn's tools, changed files, plan and subagents." },
          { title: "Orange means stalled", body: "Pi and OpenCode only: twenty minutes without news." },
          { title: "Six agents, own hooks", body: "Four turn red; Codex and Cursor show running and your turn." },
          { title: "Click to go", body: "Its terminal when known, else the app; › opens details and timeline." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "State comes only from each agent's own hooks; Pulse reads no session files, transcripts or protected app data.",
          "The event log, readable only by you, keeps prompts cut to 200 characters with credentials redacted, on this Mac.",
          "Pulse makes no network connection: no update check, nothing reported. Releases… in Settings only opens the releases page in your browser.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Which agents show waiting?",
            body: "Four: Claude Code, Copilot CLI, OpenCode and Pi, through the hook, plugin or extension each vendor documents. Codex and Cursor show running and your turn only, and say they do not report waiting. A session that started before Pulse shows as process only until its next step.",
          },
          {
            title: "What does installing the hooks change?",
            body: "Install them from the setup card on first open or with Install all in Settings → Hooks; for Codex, Pulse writes only `~/.codex/hooks.json`, then you run `/hooks` in Codex to trust it. Only observe-only events are added, and removing them restores each file byte for byte; a file changed since then loses only Pulse's entries.",
          },
          {
            title: "Why is an agent not turning red?",
            body: "Open Settings → Hooks. Each agent on this Mac has a row: installed, needs update, failed with its reason, or not installed; the last event Pulse heard from it and when; the last event it ignored and why; and whether the agent reports waiting. Install all brings every row that needs an update up to date. Copy report gives the same as plain text, plus each session's last three events, without paths, prompts, sessions or projects.",
          },
          {
            title: "Does Ignore answer the agent?",
            body: "No. Ignore on the banner, like ⌘D in the tray, only stops Pulse reminding you of that wait and withdraws its banner. The prompt still waits in the agent's own window, and Pulse stays in the background.",
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
    installNote: "未公证：每个新版本都要在“系统设置 → 隐私与安全性”里点一次“仍要打开”。",
    privacy: {
      network: "none",
      networkNote: "不连网络：不检查更新，不上报任何东西。",
      stays: "事件日志只在本机，只有你能读。",
    },
    meta: "macOS 14+ · MIT · {version} · 菜单栏",
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
        label: "菜单栏里的四种灯色",
        items: [
          { title: "每次等待一条横幅", body: "直接写出请求，如 `Bash: npm run build`；回答后撤回。" },
          { title: "只做灯", body: "不替你回答授权，不派活，不显示 token 或费用。" },
          { title: "详情里的本轮", body: "点“›”看这一轮用的工具、改过的文件、计划和子 Agent。" },
          { title: "橙色表示停滞", body: "只用于 Pi 与 OpenCode：二十分钟没有新动静。" },
          { title: "六个 Agent", body: "四个会亮红；Codex 与 Cursor 只报运行和轮到你。" },
          { title: "点一下就去", body: "能精确落点就去终端，否则打开应用；点“›”看详情和时间线。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "状态只来自各 Agent 自己的 hook；Pulse 不读取会话文件、transcript 或受 macOS 保护的应用数据。",
          "事件日志只在本机，只有你能读；其中的提示最多保留 200 字，凭据已抹掉。",
          "Pulse 不连网络：不检查更新，不上报任何东西。设置里的“版本发布…”只在浏览器里打开发布页。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "哪些 Agent 能显示等待？",
            body: "四个：Claude Code、Copilot CLI、OpenCode 和 Pi，走各家文档里的 hook、插件或扩展。Codex 与 Cursor 只显示运行中和轮到你，并注明不会报告它在等你。Pulse 启动前就在跑的会话，在它的下一步之前只显示为“仅进程”。",
          },
          {
            title: "安装 hook 会改动什么？",
            body: "首次打开时在托盘的设置卡里连接，或在“设置 → Hooks”点“全部安装”；Codex 只写入 `~/.codex/hooks.json`，之后在 Codex 里运行 `/hooks` 信任 Pulse。只装观察型事件，移除时逐字节还原每个文件；之后改过的文件只删掉 Pulse 的条目。",
          },
          {
            title: "Agent 为什么没亮红灯？",
            body: "打开“设置 → Hooks”。这台 Mac 上的每个 Agent 一行：已安装、需要更新、安装失败及原因，或未安装；最近听到它的哪个事件、多久前；最近未采用的事件及原因；它会不会报告在等你。“全部安装”会更新所有需要更新的 Agent。“复制报告”给出同样内容的纯文本，另加每个会话最近 3 个事件，不含路径、提示、会话或项目。",
          },
          {
            title: "横幅上的“忽略”会替我回答吗？",
            body: "不会。横幅上的“忽略”和托盘里的 ⌘D 一样，只让 Pulse 不再提醒这个等待，并撤回横幅。提示仍在 Agent 自己的窗口里等着，Pulse 也不会跳到前台。",
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
