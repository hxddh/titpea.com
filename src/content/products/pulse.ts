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
      "Check local coding-agent sessions in the macOS menu bar. Waiting support depends on the agent and its configured hooks.",
    eyebrow: "Waiting lamp for agent sessions",
    headline: "See which agent waits.",
    lead: "Agent status in the menu bar. The list leads back to the session.",
    catalog: {
      role: "",
      text: "The menu-bar lamp for coding agents that are waiting.",
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
      glanceTitle: "2 · 4m",
      headerStatus: "Waiting · 2",
      headerAgents: "Claude · Codex",
      sections: [
        {
          title: "Waiting · 2",
          rows: [
            {
              title: "Approve package install",
              meta: "~/code/pulse · Bash · 4m ago",
              state: "waiting",
              chip: "4m",
            },
            {
              title: "Review failing CI",
              meta: "~/code/titpea · 1m ago",
              state: "waiting",
              chip: "1m",
            },
          ],
        },
        {
          title: "Running · 1",
          rows: [
            {
              title: "Draft release notes",
              meta: "~/code/pulse · 2m ago",
              state: "running",
            },
          ],
        },
      ],
      footnotes: ["local probe · harvest · hooks", "click a row to focus the terminal"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Know which session needs you.",
        items: [
          { title: "Session states", body: "Waiting, running, idle, stalled, or probe error." },
          { title: "Hooks add detail", body: "Fuller waiting states for Claude Code and Codex." },
          { title: "Other agents vary", body: "Process and session detection; waiting support varies." },
          { title: "Back to the session", body: "Answer in the original terminal or app." },
          { title: "No approvals here", body: "The menu does not approve or deny." },
          { title: "On this Mac", body: "Detection, collection, and hooks run locally." },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Which agents show waiting?",
            body: "Waiting support depends on the agent and its configured hooks. Install hooks in Preferences → Waiting Signal for more complete Claude Code and Codex waiting states. Other agents rely on process and session detection.",
          },
          {
            title: "Does anything leave my Mac?",
            body: "Session detection, collection, and hooks run locally. Update checks access public GitHub releases.",
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
    description: "本机编码 Agent 会话的 macOS 菜单栏状态灯：等待、运行、空闲，或停滞 / 探测异常。",
    eyebrow: "编码 Agent 的状态灯",
    headline: "看看哪个 Agent 在等你",
    lead: "菜单栏上看会话状态。打开列表，回到对应终端或应用。",
    catalog: {
      role: "",
      text: "菜单栏上看哪个编码 Agent 在等你。",
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
      glanceTitle: "2 · 4m",
      headerStatus: "等待 · 2",
      headerAgents: "Claude · Codex",
      sections: [
        {
          title: "等待 · 2",
          rows: [
            {
              title: "批准安装依赖",
              meta: "~/code/pulse · Bash · 4 分钟前",
              state: "waiting",
              chip: "4m",
            },
            {
              title: "查看失败的 CI",
              meta: "~/code/titpea · 1 分钟前",
              state: "waiting",
              chip: "1m",
            },
          ],
        },
        {
          title: "运行中 · 1",
          rows: [
            {
              title: "起草 Release 说明",
              meta: "~/code/pulse · 2 分钟前",
              state: "running",
            },
          ],
        },
      ],
      footnotes: ["本地探测 · 采集 · hooks", "点击一行聚焦对应终端"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "哪个会话在等你，一眼可见",
        items: [
          { title: "会话状态", body: "等待、运行、空闲、停滞或探测异常。" },
          { title: "hooks 补全等待", body: "Claude Code 与 Codex 等待状态更完整。" },
          { title: "其他 Agent 各不同", body: "进程探测与会话采集，等待支持不一。" },
          { title: "回到原会话", body: "在对应终端或应用里处理请求。" },
          { title: "菜单不做批准", body: "不在菜单里批准或拒绝。" },
          { title: "在这台 Mac 上", body: "探测、采集和 hooks 都在本机。" },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "哪些 Agent 能显示等待？",
            body: "等待状态取决于 Agent 本身和已配置的 hooks。在「偏好设置 → 等待信号」安装 hooks 后，Claude Code 与 Codex 的等待状态更完整；其他 Agent 靠进程探测和会话采集。",
          },
          {
            title: "数据会离开这台 Mac 吗？",
            body: "会话探测、采集和 hooks 都在本机进行。更新检查访问公开的 GitHub Release。",
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
