import { defineProduct } from "../schema";

export default defineProduct({
  slug: "celagent",
  line: "agents",
  repo: "hxddh/celagent",
  og: "/assets/og-celagent.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "celagent",
    description: "Pi’s terminal interface with sessions saved on BOS and restored by ID on another configured machine.",
    eyebrow: "Pi terminal agent",
    headline: "Resume on another device",
    lead: "Use Pi’s terminal interface with sessions saved on BOS. Restore the history by session ID on another machine configured for the same storage.",
    catalog: {
      role: "Session recovery",
      text: "Park the Pi session on BOS, resume it on another machine.",
    },
    primaryCta: {
      label: "Install / View releases",
      href: "https://github.com/hxddh/celagent/releases/latest",
    },
    secondaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/celagent",
    },
    meta: "Pi Coding Agent TUI · Celld/BOS · MIT · {version}",
    commands: {
      title: "Get started",
      sub: "The installer fetches the GitHub Release binary with the celld runtime.",
      items: [
        {
          comment: "Install",
          command: "curl -fsSL https://github.com/hxddh/celagent/releases/latest/download/install.sh | sh",
        },
        {
          comment: "Check configuration, credentials, and BOS access",
          command: "celagent doctor",
        },
        {
          comment: "Start the TUI",
          command: "celagent",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "celagent",
      kicker: "celagent · BOS session",
      status: "command reference",
      command: "celagent",
      filesLabel: "COMMANDS",
      files: ["celagent", "celagent list", "celagent <id>  # restore from BOS", "celagent task ledger"],
      briefLabel: "persistence",
      brief: "Completed turns → BOS write queue → restore by session ID after a successful write",
      footnotes: ["Configure both machines", "Conditional writes detect conflicts"],
    },
    sections: [
      {
        kind: "flow",
        id: "evidence",
        kicker: "Persistence model",
        title: "Successful writes can be recovered",
        body: "Completed turns are queued for BOS with conditional writes. A successful write makes the session recoverable on another configured machine.",
        steps: [
          {
            label: "Native session history",
            body: "sessions/<id>.jsonl stores Pi history, including tool calls and branches. Older JSON sessions use a legacy text recovery path.",
          },
          {
            label: "Conflicts and failures",
            body: "Conditional writes detect conflicting updates. Retryable write failures remain queued; a BOS timeout or permission error does not silently fall back to truncated cache.",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "Configure, save, resume",
        items: [
          {
            title: "Configure storage first",
            body: "Install the release, configure the BOS bucket and credentials, then run `celagent doctor` and `celagent cas-probe` before relying on recovery.",
          },
          {
            title: "Save at the end of a turn",
            body: "Completed turns enter the BOS write queue with conditional writes for conflict handling. Retryable network failures remain queued; cross-machine recovery requires a successful write.",
          },
          {
            title: "Resume a saved session",
            body: "Run `celagent list`, then `celagent <id>` on another configured machine. Recovery reads BOS first; only a missing object falls back to the worker cache.",
          },
        ],
        numbered: true,
      },
      {
        kind: "cases",
        id: "cases",
        label: "Beyond conversation history",
        title: "Distributed tasks",
        items: ["celagent task submit", "celagent task status", "celagent task ledger"],
        body: "Celld tasks have checkpoint recovery and an idempotent task ledger. See the repository for setup and command details.",
      },
      {
        kind: "faq",
        id: "faq",
        label: "Recovery and Pi",
        items: [
          {
            title: "A saved conversation is not a synced workspace",
            body: "Session recovery does not set up the project files or environment on the other machine. Wait for the BOS write to succeed before relying on remote recovery.",
          },
          {
            title: "Pi engine and installation",
            body: "celagent reuses the Pi engine and its tools. Install from the GitHub release with install.sh, or install.ps1 on Windows; upstream Celld has no Windows package.",
          },
        ],
      },
    ],
    finalCta: "View releases",
  },
  zh: {
    title: "celagent",
    description: "使用 Pi 的终端界面，把会话保存在 BOS，通过 ID 在另一台已配置的机器上恢复。",
    eyebrow: "Pi 终端 Agent",
    headline: "换台机器，接着聊",
    lead: "使用 Pi 的终端界面，会话保存在 BOS。通过会话 ID，在另一台已配置相同存储的机器上恢复历史。",
    catalog: {
      role: "会话恢复",
      text: "把 Pi 会话停在 BOS，换一台机器继续。",
    },
    primaryCta: {
      label: "安装 / 查看 Release",
      href: "https://github.com/hxddh/celagent/releases/latest",
    },
    secondaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/celagent",
    },
    meta: "Pi Coding Agent TUI · Celld/BOS · MIT · {version}",
    commands: {
      title: "开始使用",
      sub: "安装脚本从 GitHub Release 下载二进制，含 celld 运行时。",
      items: [
        {
          comment: "一键安装",
          command: "curl -fsSL https://github.com/hxddh/celagent/releases/latest/download/install.sh | sh",
        },
        {
          comment: "自检：配置、凭证、节点、BOS 连通",
          command: "celagent doctor",
        },
        {
          comment: "启动 TUI",
          command: "celagent",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "celagent",
      kicker: "celagent · BOS 会话",
      status: "命令参考",
      command: "celagent",
      filesLabel: "命令",
      files: ["celagent", "celagent list", "celagent <id>  # 从 BOS 恢复", "celagent task ledger"],
      briefLabel: "持久化",
      brief: "完成回合 → BOS 写入队列 → 写入成功后按会话 ID 恢复",
      footnotes: ["两台机器均需配置", "条件写入检测冲突"],
    },
    sections: [
      {
        kind: "flow",
        id: "evidence",
        kicker: "持久化模型",
        title: "写入成功后，可以跨机恢复",
        body: "完成的回合进入 BOS 条件写入队列。写入成功后，另一台已配置的机器可以恢复该会话。",
        steps: [
          {
            label: "原生会话历史",
            body: "sessions/<id>.jsonl 保存 Pi 历史，包含工具调用和分支。旧 JSON 会话使用兼容的文本恢复路径。",
          },
          {
            label: "冲突与失败",
            body: "条件写入检测并发冲突，可重试的写入失败会留队。BOS 超时或权限失败时，不会静默退回截断缓存。",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "配置、保存、恢复",
        items: [
          {
            title: "先配置存储",
            body: "安装发布版本，配置 BOS 桶和凭证。启动会话前，用 `celagent doctor` 检查访问，再用 `celagent cas-probe` 检查条件写入。",
          },
          {
            title: "每轮结束后保存",
            body: "完成的回合进入 BOS 写入队列，通过条件写入处理冲突。可重试的网络失败会留队；跨机恢复需要等待写入成功。",
          },
          {
            title: "恢复已保存的会话",
            body: "在另一台已配置的机器上运行 `celagent list`，再用 `celagent <id>` 恢复。先读 BOS，仅对象不存在时才回退到 worker 缓存。",
          },
        ],
        numbered: true,
      },
      {
        kind: "cases",
        id: "cases",
        label: "对话之外",
        title: "分布式任务",
        items: ["celagent task submit", "celagent task status", "celagent task ledger"],
        body: "Celld 任务支持断点恢复和幂等任务记录。配置与命令细节见仓库文档。",
      },
      {
        kind: "faq",
        id: "faq",
        label: "恢复条件与 Pi",
        items: [
          {
            title: "恢复会话不等于同步工作区",
            body: "另一台机器仍需准备项目文件和运行环境。依赖跨机恢复前，先确认 BOS 写入成功。",
          },
          {
            title: "Pi 引擎与安装",
            body: "celagent 复用 Pi 引擎及其工具。从 GitHub Release 用 install.sh 安装，Windows 使用 install.ps1；上游 Celld 没有 Windows 包。",
          },
        ],
      },
    ],
    finalCta: "查看 Release",
  },
});
