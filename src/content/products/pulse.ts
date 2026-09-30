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
          // One list in lamp order, no group headings; only waiting, stalled and
          // running rows have a second line (Pulse 28 tray).
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
              meta: "titpea · 1m ago",
              state: "recent",
              chip: "Your turn",
            },
            {
              title: "Terminal session running · Pi",
              meta: "Started before Pulse — details after its next step",
              state: "process",
            },
          ],
        },
      ],
      footnotes: ["hook events · processes", "Click a row to go · › for details"],
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
          { title: "Click to go", body: "Its terminal when known, else the app; › shows details." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "State comes only from each agent's own hooks; Pulse reads no session files, transcripts or protected app data.",
          "The event log keeps each prompt redacted and cut to 200 characters, in a file only you can read, on this Mac.",
          "Update checks ask GitHub anonymously for the latest public release and open its page.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Which agents show waiting?",
            body: "Five: Claude Code, Gemini CLI, Copilot CLI, OpenCode and Pi, through the hook, plugin or extension each vendor documents. Codex and Cursor show running and your turn only, and say they do not report waiting. Install them from the setup card on first open or in Settings → Hooks; for Codex, Pulse writes only `~/.codex/hooks.json`, then you run `/hooks` in Codex to trust it. Only observe-only events are added, and removing them restores each file byte for byte; a file changed since then loses only Pulse's entries. A session that started before Pulse shows as process only until its next step.",
          },
          {
            title: "Why is an agent not turning red?",
            body: "Open Settings → Hooks. Each agent on this Mac has a row: whether its hook is installed (or why it failed) and how long ago its last event arrived, with its own Install or Remove button. Copy report gives the same as plain text, without paths, prompts or sessions.",
          },
          {
            title: "Does Dismiss answer the agent?",
            body: "No. Dismiss on the banner, like ⌘D in the tray, only stops Pulse reminding you of that wait and withdraws the banner. The prompt still waits in the agent's own window, and Pulse stays in the background.",
          },
          {
            title: "Why does macOS block the first open?",
            body: "Current builds are ad-hoc signed and not notarized. Click Open Anyway in System Settings → Privacy & Security, or clear quarantine with `xattr -dr com.apple.quarantine /Applications/Pulse.app`. Since macOS 15, Control-click Open no longer lets it through.",
          },
          {
            title: "How do I remove Pulse?",
            body: "Settings → Uninstall Pulse… lists what it will remove, then takes out every agent's Pulse hooks, the login item and `~/Library/Application Support/Pulse`, quits, and shows Pulse.app in Finder for you to drag to the Trash. If a hook cannot be removed, it stops and deletes nothing.",
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
              meta: "titpea · 1 分钟前",
              state: "recent",
              chip: "轮到你",
            },
            {
              title: "终端会话正在运行 · Pi",
              meta: "在 Pulse 之前启动——下一步之后显示详情",
              state: "process",
            },
          ],
        },
      ],
      footnotes: ["hook 事件 · 进程", "点一行前往 · 点「›」看详情"],
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
          { title: "点一下就去", body: "能精确落点就去终端，否则打开应用；点「›」看详情。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "状态只来自各 Agent 自己的 hook；Pulse 不读取会话文件、transcript 或受 macOS 保护的应用数据。",
          "事件日志里的提示已脱敏、至多 200 字，文件只有你能读，只在本机。",
          "更新检查以匿名请求向 GitHub 询问最新的公开版本，有新版本时打开发布页。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "哪些 Agent 能显示等待？",
            body: "五个：Claude Code、Gemini CLI、Copilot CLI、OpenCode 和 Pi，走各家文档里的 hook、插件或扩展。Codex 与 Cursor 只显示运行中和轮到你，并注明不会报告它在等你。首次打开时在托盘的设置卡里连接，或在「设置 → Hooks」安装；Codex 只写入 `~/.codex/hooks.json`，之后在 Codex 里运行 `/hooks` 信任 Pulse。只装观察型事件，移除时逐字节还原每个文件；之后改过的文件只删掉 Pulse 的条目。Pulse 启动前就在跑的会话，在它的下一步之前只显示为「仅进程」。",
          },
          {
            title: "Agent 为什么没亮红灯？",
            body: "打开「设置 → Hooks」。这台 Mac 上的每个 Agent 一行：hook 装没装（装失败会写原因）、最近一次事件是多久前，各带自己的「安装」或「移除」。「复制报告」给出同样内容的纯文本，不含路径、提示或会话。",
          },
          {
            title: "横幅上的「忽略」会替我回答吗？",
            body: "不会。横幅上的「忽略」和托盘里的 ⌘D 一样，只让 Pulse 不再提醒这个等待，并撤回横幅。提示仍在 Agent 自己的窗口里等着，Pulse 也不会跳到前台。",
          },
          {
            title: "为什么首次打开被 macOS 拦下？",
            body: "当前构建是 ad-hoc 签名、未公证。在「系统设置 → 隐私与安全性」里点「仍要打开」，或用 `xattr -dr com.apple.quarantine /Applications/Pulse.app` 清掉隔离属性。macOS 15 起，右键选「打开」已不能放行。",
          },
          {
            title: "怎样卸载 Pulse？",
            body: "「设置 → 卸载 Pulse…」先列出要移除的东西。确认后，它移除每个 Agent 的 Pulse hook、登录项和 `~/Library/Application Support/Pulse`。然后它退出，并在访达里显示 Pulse.app，由你拖进废纸篓。有 hook 移除不了时，它会停下，什么都不删。",
          },
        ],
      },
    ],
  },
});
