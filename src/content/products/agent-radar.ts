import { defineProduct } from "../schema";

export default defineProduct({
  slug: "agent-radar",
  line: "agents",
  repo: "hxddh/agent-radar",
  og: "/assets/og-agent-radar.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "Agent Radar",
    description: "Scheduled research on the agent industry, with sourced Markdown briefs and watchlists saved in Git.",
    eyebrow: "Scheduled Markdown research",
    headline: "Agent news, with sources",
    lead: "Collect public agent news on GitHub Actions and save sourced Markdown briefs and watchlists. Relevance and citation checks run before each commit.",
    catalog: {
      role: "Weekly briefs",
      text: "Sourced Markdown briefs, on a GitHub Actions timer.",
    },
    primaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/agent-radar",
    },
    secondaryCta: {
      label: "Quick start",
      href: "https://github.com/hxddh/agent-radar#cli-usage",
    },
    meta: "Python · Markdown-first · GitHub Actions · MIT · {version}",
    commands: {
      title: "Get started",
      sub: "Python 3.10+ and only the standard library. Run it from a clone of the repository.",
      items: [
        {
          comment: "Create the Markdown files",
          command: "python scripts/agent_radar.py init",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "Agent Radar",
      kicker: "agent-radar · brief",
      status: "ok",
      command: "python scripts/agent_radar.py brief",
      filesLabel: "CORE FILES",
      files: ["radar.md", "agent-watchlist.md", "user-field-notes.md", "playbook.md", "storage-angle.md"],
      briefLabel: "radar.md",
      brief: "Thesis: local agents win on evidence · Changed: sandbox snapshot noise · Open: who owns artifact storage",
      footnotes: ["Markdown-first · GitHub Actions", "checks before commit · Git as audit"],
    },
    sections: [
      {
        kind: "panel",
        id: "inside",
        kicker: "One research loop",
        title: "Research you can review in Git",
        body: "Markdown files hold the research. A lightweight model screens sources and another drafts the report; the runner checks proposed changes before committing them.",
        panel: {
          kind: "excerpt",
          label: "radar.md excerpt",
          eyebrow: "Illustrative sample",
          title: "radar.md · sample week",
          items: [
            {
              label: "Current thesis",
              value: "Local agents win on evidence",
              body: "Coding agents that keep workspace artifacts local are easier to audit than chat-only hosted flows.",
            },
            {
              label: "Changed",
              value: "Sandbox + snapshot noise",
              body: "More products advertise sandboxes; few document snapshot retention or replay cost.",
            },
            {
              label: "Open questions",
              value: "Who owns the artifact store?",
              body: "When agents write logs, checkpoints, and playbooks, which storage path is intentional vs incidental?",
            },
          ],
        },
      },
      {
        kind: "flow",
        id: "evidence",
        kicker: "Auditable state",
        title: "What the pipeline leaves in Git",
        body: "The runner updates weekly theses, the agent watchlist, field notes, and storage implications within fixed write bounds. When a candidate enters the watchlist or brief, the change remains reviewable in repository history.",
        steps: [
          {
            label: "Weekly thesis",
            body: "Current judgment, what changed, and open questions for the Agent industry.",
          },
          {
            label: "Watchlist",
            body: "Mainstream and emerging agents with evidence labels — not a raw link dump.",
          },
          {
            label: "Field notes",
            body: "Real workflows and reusable patterns captured as they show up in the wild.",
          },
          {
            label: "Storage implications",
            body: "Where agents keep workspace state, sandboxes, logs, and replay — a side lens, not the whole product.",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "From sources to a commit",
        items: [
          {
            title: "Collect public sources",
            body: "Read official pages, GitHub releases, feeds, packages, and papers. Collection does not require paid search.",
          },
          {
            title: "Select and draft",
            body: "Score relevance and remove duplicates before model screening and drafting. The model can update only designated research files.",
          },
          {
            title: "Check before committing",
            body: "Check citations, quota, language coverage, and freshness. Failed checks remain visible in telemetry and issues. Git records accepted changes.",
          },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "automation",
        label: "Actions runs the loop",
        items: [
          {
            title: "Run on a schedule",
            body: "Daily, weekly, and monthly jobs run on GitHub Actions and produce bilingual reports. Local runs are available for debugging.",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "Actions and cost",
        items: [
          {
            title: "No paid search required",
            body: "Collection uses free public source lanes. Bring your own model keys: a lighter model can screen, a stronger one can draft, so spend stays intentional.",
          },
        ],
      },
    ],
    finalCta: "Open repository",
  },
  zh: {
    title: "Agent Radar",
    description: "定时整理 Agent 产业动态，把带来源的 Markdown 周报与观察名单保存在 Git 中。",
    eyebrow: "Markdown 优先 · GitHub Actions",
    headline: "Agent 动态，按周整理",
    lead: "在 GitHub Actions 上采集公开 Agent 动态，整理成带来源的 Markdown 周报与观察名单。相关性与引用检查通过后提交到 Git。",
    catalog: {
      role: "每周简报",
      text: "GitHub Actions 定时跑，生成带来源的 Markdown 周报。",
    },
    primaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/agent-radar",
    },
    secondaryCta: {
      label: "快速开始",
      href: "https://github.com/hxddh/agent-radar#cli-usage",
    },
    meta: "Python · Markdown-first · GitHub Actions · MIT · {version}",
    commands: {
      title: "开始使用",
      sub: "只需要 Python 3.10+ 和标准库。在仓库目录里运行。",
      items: [
        {
          comment: "生成 Markdown 文件",
          command: "python scripts/agent_radar.py init",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "Agent Radar",
      kicker: "agent-radar · 简报",
      status: "通过",
      command: "python scripts/agent_radar.py brief",
      filesLabel: "核心文件",
      files: ["radar.md", "agent-watchlist.md", "user-field-notes.md", "playbook.md", "storage-angle.md"],
      briefLabel: "radar.md",
      brief: "判断：本地 agent 更易审计 · 已变：沙箱快照噪声 · 待答：产物存在哪个存储里",
      footnotes: ["Markdown 优先 · GitHub Actions", "提交前校验 · Git 即审计"],
    },
    sections: [
      {
        kind: "panel",
        id: "inside",
        kicker: "一条研究循环",
        title: "在 Git 里查看研究记录",
        body: "Markdown 文件保存研究内容。轻量模型筛选来源，另一模型起草报告；程序校验修改后提交到 Git。",
        panel: {
          kind: "excerpt",
          label: "radar.md 摘录",
          eyebrow: "示例摘录",
          title: "radar.md · 示例周",
          items: [
            {
              label: "当前判断",
              value: "本地 agent 更易审计",
              body: "把工作区产物留在本地的 coding agent，比纯托管聊天流更容易核对证据。",
            },
            {
              label: "已变化",
              value: "沙箱与快照噪声",
              body: "更多产品宣传 sandbox；很少写清快照保留期或回放成本。",
            },
            {
              label: "开放问题",
              value: "产物存在谁的存储里",
              body: "当 agent 写日志、checkpoint 和 playbook 时，哪条存储路径是有意设计、哪条只是附带？",
            },
          ],
        },
      },
      {
        kind: "flow",
        id: "evidence",
        kicker: "可审计状态",
        title: "流水线留在 Git 里的结果",
        body: "Runner 在写入边界内更新每周论点、观察名单、现场笔记与存储影响。候选被纳入观察名单或周报后，每次变化都能在仓库历史里核对。",
        steps: [
          {
            label: "每周论点",
            body: "当前判断、已变化点，以及对 Agent 产业的开放问题。",
          },
          {
            label: "观察名单",
            body: "主流与新兴 agent，并标注证据强度——不是原始链接堆。",
          },
          {
            label: "现场笔记",
            body: "记录真实工作流和可复用模式，随公开信号积累。",
          },
          {
            label: "存储影响",
            body: "Agent 把工作区、沙箱、日志与回放放在哪里——侧重视角，不是产品全部。",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "从信源到提交",
        items: [
          {
            title: "采集公开来源",
            body: "读取官网、GitHub Release、订阅源、软件包和论文。采集不需要付费搜索。",
          },
          {
            title: "筛选并起草",
            body: "先按相关性筛选、去除重复，再交给模型初筛和起草。模型只能修改指定研究文件。",
          },
          {
            title: "校验后提交",
            body: "检查引用、配额、双语与时效。失败记录保留在遥测和 issue 中，通过的修改提交到 Git。",
          },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "automation",
        label: "Actions 跑这条循环",
        items: [
          {
            title: "按计划运行",
            body: "日更、周更、月更任务在 GitHub Actions 上运行，输出双语报告。本地运行可用于调试。",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "Actions 与花费",
        items: [
          {
            title: "不必付费搜索",
            body: "采集走免费公开源。你自备模型密钥：轻量模型可初筛，强模型起草，花费可主动控制。",
          },
        ],
      },
    ],
    finalCta: "打开仓库",
  },
});
