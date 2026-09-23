import { defineProduct } from "../schema";

export default defineProduct({
  slug: "pulse",
  line: "agents",
  repo: "hxddh/Pulse",
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
    headline: "See which agent waits",
    lead: "Check coding-agent session status from the Mac menu bar while you work in another app. Open the list to return to the corresponding terminal or application.",
    catalog: {
      role: "",
      text: "The menu-bar lamp for coding agents that are waiting.",
    },
    primaryCta: {
      label: "Download latest release",
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
        id: "positioning",
        label: "Signals and sessions",
        items: [
          {
            title: "Waiting signals depend on the agent",
            body: "Install hooks in Preferences → Waiting Signal for more complete Claude Code and Codex waiting states. Other agents rely on process and session detection; waiting support varies.",
          },
          {
            title: "Return to the session",
            body: "Handle requests in the original terminal or app. Pulse’s menu does not approve or deny them.",
          },
          {
            title: "Detection on this Mac",
            body: "Session detection, collection, and hooks run locally. Update checks access public GitHub releases.",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "macOS, hooks, privacy",
        items: [
          {
            title: "First open may need an OS exception",
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
    lead: "编码会话还在运行时，可以先去做别的事。Pulse 在 Mac 菜单栏显示会话状态，打开列表后可回到对应终端或应用。",
    catalog: {
      role: "",
      text: "菜单栏上看哪个编码 Agent 在等你。",
    },
    primaryCta: {
      label: "下载最新版本",
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
        id: "positioning",
        label: "等待信号与会话",
        items: [
          {
            title: "不同 Agent 的等待信号",
            body: "在「偏好设置 → 等待信号」安装 hooks 后，Claude Code 与 Codex 可获得更完整的等待状态。其他 Agent 使用进程探测和会话采集，等待状态的支持程度不同。",
          },
          {
            title: "回到原会话处理",
            body: "在对应终端或应用里继续处理请求。Pulse 的菜单不执行批准或拒绝。",
          },
          {
            title: "在这台 Mac 上检测",
            body: "会话探测、采集和 hooks 都在本机进行。更新检查访问公开的 GitHub Release。",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "系统、hooks 与隐私",
        items: [
          {
            title: "首次打开可能要系统例外",
            body: "当前构建是 ad-hoc 签名，首次打开可能要右键选「打开」，或用 xattr 清掉隔离属性。",
          },
        ],
      },
    ],
  },
});
