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
      lead: "Not a news site, crawler framework, or vector store. Agent Radar runs collect → screen → synthesize → validate → commit as a Git-backed research loop for the AI-agent industry.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.agentRadar },
      secondaryCta: { label: "Quick start", href: siteConfig.externalLinks.agentRadarQuickStart },
      meta,
      proof: [
        "Free-source collection",
        "Explicit promote funnel",
        "Deterministic gates",
        "Dual-model routing",
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
          body: "The runner scores items by lane reliability, relevance, adoption evidence, and novelty against `source-cache.jsonl` before any model sees them.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Screen, then write narrowly",
          body: "Discovery stays wide (`source-sweep`); promotion into watchlist, radar, or storage angle is bounded (`promote-candidates`). The model may only update allowed files.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Gate, then commit",
          body: "Citation, quota, bilingual, and freshness checks run before commit. Failures stay visible in telemetry, collector state, and issues — Git remains the audit trail.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "Ops and cadence",
      automation: [
        {
          title: "Scheduled cloud runs",
          body: "GitHub Actions dispatches `cloud_agent_runner.py` for daily, weekly, monthly, source-sweep, and promote tasks with bilingual report output.",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "Cheap screen, strong draft",
          body: "A lighter model handles attention sharding and screening; a stronger model writes the final synthesis — so cost stays bounded while judgment stays sharp.",
          intent: "automation",
          surface: "agent",
        },
        {
          title: "Model proposes, runner disposes",
          body: "Broad discovery, narrow promotion: the model may suggest JSON updates; the runner scores, bounds writes, runs gates, and commits. Labels failures without blocking the whole loop.",
          intent: "automation",
          surface: "agent",
        },
        {
          title: "Ops that stay visible",
          body: "Collector state, lane health, telemetry, union merge, and partial commit keep long runs recoverable when a source or model call fails.",
          intent: "automation",
          surface: "artifact",
        },
      ],
      finalCta: "Run the radar as a GitHub-hosted research loop",
      finalCtaLabel: "Open repository",
      faqLabel: "Questions & use",
      faq: [
        {
          title: "Who is this for?",
          body: "People who want an auditable, scheduled research loop on the AI-agent industry — not a news feed and not a private note vault with no promotion rules.",
        },
        {
          title: "Do I run it only on GitHub Actions?",
          body: "Actions is the intended unattended host. The same runner scripts can be invoked locally for debugging; the durable state remains the Markdown repo.",
        },
        {
          title: "Do I need paid models or paid search?",
          body: "Collection uses free public source lanes — no paid search. Models are BYOK: a lighter model can screen, a stronger one can draft, so spend stays intentional.",
        },
        {
          title: "How is this different from a Markdown notebook?",
          body: "A notebook stores notes. Agent Radar runs collect → screen → synthesize → validate → commit with promote boundaries and gates, so Git history is the audit API.",
        },
      ],
    },
    zh: {
      title: "Agent Radar",
      description:
        "Markdown 优先的 AI Agent 趋势雷达：跑在 GitHub Actions 上的无人值守研究流水线——采集、筛选、合成、校验、提交。",
      eyebrow: "Markdown 优先 · GitHub Actions",
      headline: "跑在 Markdown 里的无人值守研究流水线",
      lead: "不是新闻站、爬虫框架或向量知识库。Agent Radar 把「采集 → 筛选 → 合成 → 校验 → 提交」做成以 Git 为载体的 Agent 产业研究循环。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.agentRadar },
      secondaryCta: { label: "快速开始", href: siteConfig.externalLinks.agentRadarQuickStart },
      meta,
      proof: ["免费源采集", "显式升格漏斗", "确定性闸门", "双模型路由", "Git 即审计日志"],
      workflowLabel: "流水线怎么跑",
      workflow: [
        {
          title: "宽源发现",
          body: "源通道拉取公开信号——官网、GitHub、Release、HN、订阅源、包市场、论文——不调用付费搜索。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "记分去重",
          body: "Runner 按通道可信度、相关性、采用证据，以及相对 `source-cache.jsonl` 的新颖度打分，再决定哪些条目进入模型上下文。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "宽发现、窄写入",
          body: "`source-sweep` 负责发现候选；`promote-candidates` 才把条目有界地升格进观察名单、雷达或存储视角。模型只能改允许的文件。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "闸门后提交",
          body: "引用、配额、双语与新鲜度检查通过后才提交。失败留在遥测、采集状态与 issue 里——Git 始终是审计轨迹。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "运行与节奏",
      automation: [
        {
          title: "定时云端运行",
          body: "GitHub Actions 调度 `cloud_agent_runner.py`，覆盖日更、周更、月更、source-sweep 与 promote，并输出双语报告。",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "轻量初筛，强模型终稿",
          body: "较轻的模型负责注意力分片与初筛，较强的模型写最终综合——成本可控，判断力留给终稿。",
          intent: "automation",
          surface: "agent",
        },
        {
          title: "模型提议，runner 裁定",
          body: "宽发现、窄升格：模型可提议 JSON 更新；runner 负责记分、限制写入、跑闸门并提交。失败可贴标签，不必整次卡住。",
          intent: "automation",
          surface: "agent",
        },
        {
          title: "失败仍可见、可恢复",
          body: "采集状态、通道健康、遥测、合并保留与部分提交，让长任务在源或模型失败时仍能留下进度。",
          intent: "automation",
          surface: "artifact",
        },
      ],
      finalCta: "把雷达当成 GitHub 托管的研究循环来跑",
      finalCtaLabel: "打开仓库",
      faqLabel: "常见问题与用法",
      faq: [
        {
          title: "适合谁用",
          body: "想要可审计、可定时的 Agent 产业研究循环的人——不是新闻流，也不是没有升格规则的私人笔记库。",
        },
        {
          title: "只能跑在 GitHub Actions 吗",
          body: "Actions 是无人值守的主场景。同一套 runner 脚本也可本地调试；持久状态仍是这个 Markdown 仓库。",
        },
        {
          title: "一定要付费模型或付费搜索吗",
          body: "采集走免费公开源，不用付费搜索。模型自带密钥：轻量模型可初筛，强模型写终稿，花费可主动控制。",
        },
        {
          title: "和 Markdown 笔记本有何不同",
          body: "笔记本只存笔记。Agent Radar 跑采集 → 筛选 → 合成 → 校验 → 提交，带升格边界与闸门，Git 历史就是审计接口。",
        },
      ],
    },
  },
};
