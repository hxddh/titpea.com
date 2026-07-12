import type { MarkdownRadarProduct } from "../../lib/site";
import { agentRadarFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const meta = `Python 3.10+ · stdlib only · Markdown-first · ${agentRadarFacts.licenseLabel ?? "MIT"} · ${agentRadarFacts.latestRelease ?? "current release"}`;

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
      headline: "Unattended research pipeline in Markdown",
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
          title: "Does it use paid search?",
          body: "No. Collection uses free public source lanes. Models only judge and write after scoring trims the prompt.",
        },
        {
          title: "What does the model decide vs the runner?",
          body: "The model proposes JSON updates for allowed files. The runner scores, bounds writes, validates gates, and commits — model proposes, runner disposes.",
        },
        {
          title: "How does promotion stay narrow?",
          body: "`source-sweep` captures candidates; `promote-candidates` promotes only within explicit boundaries into watchlist, radar, storage angle, or research log.",
        },
        {
          title: "What happens when something fails?",
          body: "Collector auto-disable, telemetry, source health, and failure issues keep the loop operable. Partial commits preserve progress instead of discarding a whole run.",
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
          body: "Source lanes 拉取公开信号——官网、GitHub、Release、HN、订阅源、包市场、论文——不调用付费搜索。",
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
          body: "引用、配额、双语与新鲜度检查通过后才提交。失败留在遥测、collector state 与 issue 里——Git 始终是审计轨迹。",
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
          title: "失败仍可见、可恢复",
          body: "Collector state、通道健康、遥测、union merge 与 partial commit，让长任务在源或模型失败时仍能留下进度。",
          intent: "automation",
          surface: "artifact",
        },
      ],
      finalCta: "把雷达当成 GitHub 托管的研究循环来跑",
      finalCtaLabel: "打开仓库",
      faqLabel: "常见问题与用法",
      faq: [
        {
          title: "要用付费搜索吗",
          body: "不用。采集走免费公开源。模型只在记分裁剪之后做判断与写作。",
        },
        {
          title: "模型和 runner 各自做什么",
          body: "模型提议对允许文件的 JSON 更新；runner 负责记分、限制写入、跑闸门并提交——模型提议，runner 裁定。",
        },
        {
          title: "升格如何保持严格",
          body: "`source-sweep` 只收候选；`promote-candidates` 才按明确边界升格进观察名单、雷达、存储视角或研究日志。",
        },
        {
          title: "失败了怎么办",
          body: "Collector 自动停用、遥测、源健康与 failure issue 让循环可运维；partial commit 保留进度，而不是整次作废。",
        },
      ],
    },
  },
};
