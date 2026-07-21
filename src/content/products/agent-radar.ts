import type { MarkdownRadarProduct } from "../../lib/site";
import { agentRadarFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const meta = `Python · Markdown-first · GitHub Actions · ${agentRadarFacts.licenseLabel ?? "MIT"} · ${agentRadarFacts.latestRelease ?? "current release"}`;

export const agentRadarProduct: MarkdownRadarProduct = {
  slug: "agent-radar",
  name: "Agent Radar",
  archetype: "markdownRadar",
  locales: {
    en: {
      title: "Agent Radar",
      description:
        "A Markdown-first AI Agent trend radar: an unattended research pipeline on GitHub Actions — collect, screen, synthesize, validate, and commit.",
      eyebrow: "Markdown-first · GitHub Actions",
      headline: "Unattended research in Markdown",
      lead: "A Git-backed research loop for the AI-agent industry: collect public signals, screen candidates, and commit bounded Markdown updates with checks.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.agentRadar },
      secondaryCta: { label: "Quick start", href: siteConfig.externalLinks.agentRadarQuickStart },
      meta,
      proof: [
        "Free public sources",
        "Wide find, narrow write",
        "Checks before commit",
        "Light screen, strong draft",
        "Git as audit log",
      ],
      workflowLabel: "How the pipeline runs",
      workflow: [
        {
          title: "Broad discovery",
          body: "Source lanes pull public signals — official pages, GitHub, releases, HN, feeds, packages, papers — without paid search calls.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Score and dedupe",
          body: "The runner scores items by lane reliability, relevance, adoption evidence, and novelty against the source cache before any model sees them.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Screen, then write narrowly",
          body: "Discovery stays wide; promotion into the watchlist, weekly brief, or storage notes is bounded. The model may only update allowed files.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Check, then commit",
          body: "Citation, quota, bilingual, and freshness checks run before commit. Failures stay visible in telemetry and issues — Git remains the audit log.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "Ops and cadence",
      automation: [
        {
          title: "Scheduled on GitHub Actions",
          body: "Daily, weekly, and monthly jobs run the same research loop unattended, with bilingual report output. Local runs are for debugging; Actions is the intended host.",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "Model suggests; runner decides",
          body: "A lighter model screens; a stronger model drafts. The model may suggest updates; the runner scores, bounds writes, runs checks, and commits — labeling failures without blocking the whole loop.",
          intent: "automation",
          surface: "agent",
        },
      ],
      finalCta: "Open the research loop on GitHub",
      finalCtaLabel: "Open repository",
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "Who is this for?",
          body: "People who want an auditable, scheduled research loop on the AI-agent industry — not a news feed and not a private note vault with no promotion rules.",
        },
        {
          title: "Do I run it only on GitHub Actions?",
          body: "Actions is the intended unattended host. The same runner can be invoked locally for debugging; the durable state remains the Markdown repo.",
        },
        {
          title: "Do I need paid models or paid search?",
          body: "Collection uses free public source lanes — no paid search. Bring your own model keys: a lighter model can screen, a stronger one can draft, so spend stays intentional.",
        },
        {
          title: "How is this different from a Markdown notebook?",
          body: "A notebook stores notes. Agent Radar runs collect → screen → synthesize → validate → commit with promote boundaries and checks, so Git history is the audit log.",
        },
      ],
    },
    zh: {
      title: "Agent Radar",
      description:
        "Markdown 优先的 AI Agent 趋势雷达：跑在 GitHub Actions 上的无人值守研究流水线——采集、筛选、合成、校验、提交。",
      eyebrow: "Markdown 优先 · GitHub Actions",
      headline: "跑在 Markdown 里的无人值守研究",
      lead: "面向 Agent 产业的 Git 研究循环：采集公开信号、筛选候选、窄范围写入并校验提交，最后更新每周论点、观察名单、现场笔记和存储影响。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.agentRadar },
      secondaryCta: { label: "快速开始", href: siteConfig.externalLinks.agentRadarQuickStart },
      meta,
      proof: ["免费公开源", "宽发现、窄写入", "提交前校验", "轻量初筛、强模型起草", "Git 即审计"],
      workflowLabel: "流水线怎么跑",
      workflow: [
        {
          title: "多源发现",
          body: "源通道拉取公开信号——官网、GitHub、Release、HN、订阅源、包市场、论文——不调用付费搜索。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "记分去重",
          body: "Runner 按通道可信度、相关性、采用证据，以及相对源缓存的新颖度打分，再决定哪些条目进入模型。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "宽发现、窄写入",
          body: "发现可以很宽；写入观察名单、周报或存储笔记时有边界。模型只能改允许的文件。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "校验后提交",
          body: "引用、配额、双语与新鲜度检查通过后才提交。失败留在遥测与 issue 里——Git 始终是审计日志。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "运行与节奏",
      automation: [
        {
          title: "定时跑在 GitHub Actions",
          body: "日更、周更、月更任务无人值守跑同一条研究循环，并输出双语报告。本地运行用于调试；无人值守主场景是 Actions。",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "模型提议，Runner 裁定",
          body: "轻量模型初筛，强模型起草。模型可提议更新；Runner 负责记分、限制写入、跑校验并提交——失败会被标记出来，但不会阻塞整轮运行。",
          intent: "automation",
          surface: "agent",
        },
      ],
      finalCta: "在 GitHub 打开这条研究循环",
      finalCtaLabel: "打开仓库",
      faqLabel: "常见问题与用法",
      faq: [
        {
          title: "适合谁用？",
          body: "想要可审计、可定时的 Agent 产业研究循环的人——不是新闻流，也不是没有升格规则的私人笔记库。",
        },
        {
          title: "只能跑在 GitHub Actions 吗？",
          body: "Actions 是无人值守的主场景。同一套 runner 也可本地调试；持久状态仍是这个 Markdown 仓库。",
        },
        {
          title: "一定要付费模型或付费搜索吗？",
          body: "采集走免费公开源，不用付费搜索。你自备模型密钥：轻量模型可初筛，强模型起草，花费可主动控制。",
        },
        {
          title: "和 Markdown 笔记本有何不同？",
          body: "笔记本只存笔记。Agent Radar 跑采集 → 筛选 → 合成 → 校验 → 提交，带升格边界与校验，Git 历史就是审计日志。",
        },
      ],
    },
  },
};
