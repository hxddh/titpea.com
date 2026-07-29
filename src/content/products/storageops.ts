import type { AgentPackageProduct } from "../../lib/site";
import { productFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const facts = productFacts.storageops;
const meta = `Python · Pi Coding Agent · S3-compatible · ${facts.licenseLabel ?? "MIT"}`;
const skillPackCount = 16;
const toolCount = 4;

export const storageOpsProduct: AgentPackageProduct = {
  slug: "storageops",
  name: "StorageOps",
  archetype: "agentPackage",
  locales: {
    en: {
      title: "StorageOps",
      description: "A Pi Coding Agent extension and skill pack for diagnosing S3-compatible object storage.",
      eyebrow: "Pi Coding Agent extension",
      headline: "Storage diagnosis for Pi",
      lead: "Skills and tools that help Pi investigate S3-compatible failures from the material you provide.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.storageops },
      secondaryCta: { label: "Quick start", href: siteConfig.externalLinks.storageopsQuickStart },
      meta,
      proof: [
        "Pi extension",
        `${skillPackCount} skill packs`,
        `${toolCount} Pi tools`,
        "No direct cloud account access",
      ],
      workflowLabel: "How a case runs",
      workflow: [
        {
          title: "Bring the material",
          body: "Start with a short description, exact error, `@log` file, configuration excerpt, or a command's debug output.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Let Pi choose the path",
          body: "Pi loads the relevant StorageOps skill, then calls focused tools instead of treating the entire case as plain text.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Inspect the right evidence",
          body: "StorageOps can redact credentials, parse supplied evidence, search prior sessions, or observe one bounded read-only command through httpmon.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Make the change yourself",
          body: "The result distinguishes likely cause, supporting material, and the manual check or change still required from you.",
          intent: "workflow",
          surface: "agent",
        },
      ],
      casesLabel: "Where it helps",
      casesTitle: "Storage problems with a known domain",
      casesBody:
        "The skill packs cover recurring S3-compatible failures. Pi loads only the expertise that fits the material in front of it.",
      cases: [
        "AccessDenied",
        "SignatureDoesNotMatch",
        "SlowDown",
        "checksum mismatches",
        "lifecycle rules",
        "replication",
        "migration",
        "stale reads",
      ],
      finalCta: "Add storage diagnosis skills to Pi",
      finalCtaLabel: "Open repository",
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "What does StorageOps add to Pi?",
          body: "It installs object-storage skills, a Pi extension, and helpers. Pi remains the runtime that loads skills and calls tools during a diagnosis.",
        },
        {
          title: "What are the extension tools for?",
          body: "`scan_secrets` redacts credentials, `detect_domain` ranks likely domains, `search_memory` finds redacted prior-session material, and `capture_http_trace` observes one bounded command through httpmon.",
        },
        {
          title: "Does it access or change my bucket?",
          body: "StorageOps does not take cloud credentials or open its own cloud session. When you choose trace capture, it observes the bounded command you provide through httpmon.",
        },
        {
          title: "When should I use Storage Agent instead?",
          body: "Choose StorageOps when you already use Pi and want storage-specific diagnosis. Choose Storage Agent when you want a complete desktop app with built-in tools, local analysis, and approval flows.",
          link: { label: "Open Storage Agent", href: "/storage-agent-workbench/" },
        },
      ],
    },
    zh: {
      title: "StorageOps",
      description: "面向 S3 兼容对象存储的 Pi Coding Agent 扩展与 skill pack。",
      eyebrow: "Pi Coding Agent 扩展",
      headline: "Pi 的对象存储排查扩展",
      lead: "用你提供的日志、报错、配置和 trace，帮 Pi 排查 S3 兼容存储问题的 skills 和工具。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.storageops },
      secondaryCta: { label: "快速开始", href: siteConfig.externalLinks.storageopsQuickStart },
      meta,
      proof: ["Pi 扩展", `${skillPackCount} 组 skills`, `${toolCount} 个 Pi 工具`, "不连接云账号"],
      workflowLabel: "一次问题怎么处理",
      workflow: [
        {
          title: "带上现场材料",
          body: "先提供问题描述、原始报错、`@日志文件`、相关配置片段，或命令的 debug 输出。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "让 Pi 选择路径",
          body: "Pi 会加载合适的 StorageOps skill，再调用对应工具，不会把整份材料只当作普通文本来猜。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "读取需要的证据",
          body: "StorageOps 可以脱敏凭据、解析输入材料、检索历史会话；需要补充证据时，也能通过 httpmon 观察一条受限的只读命令。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "由你完成修改",
          body: "结果会区分可能原因、依据，以及仍需你手动确认或修改的部分。",
          intent: "workflow",
          surface: "agent",
        },
      ],
      casesLabel: "适用问题",
      casesTitle: "有明确排查领域的对象存储问题",
      casesBody: "每份 skill 对应一类常见的 S3 兼容问题。Pi 会根据材料加载需要的能力，而不是走一套固定套路。",
      cases: [
        "AccessDenied",
        "SignatureDoesNotMatch",
        "SlowDown",
        "校验和不匹配",
        "生命周期规则",
        "复制",
        "迁移",
        "读取结果过期",
      ],
      finalCta: "给 Pi 加上对象存储诊断 skills",
      finalCtaLabel: "打开仓库",
      faqLabel: "常见问题与用法",
      faq: [
        {
          title: "StorageOps 给 Pi 增加了什么？",
          body: "它安装对象存储 skills、Pi 扩展和辅助脚本。Pi 仍是运行时，负责在排查中加载 skill 和调用工具。",
        },
        {
          title: "4 个扩展工具分别做什么？",
          body: "`scan_secrets` 脱敏凭据、`detect_domain` 归类问题、`search_memory` 检索已脱敏历史会话；`capture_http_trace` 通过 httpmon 观察一条受限命令的 HTTP trace。",
        },
        {
          title: "它会访问或修改我的桶吗？",
          body: "不会。StorageOps 不自建云账号会话，也不修改存储资源；若启用 trace，只观察你提供的那条受限命令。",
        },
        {
          title: "什么时候选 Storage Agent？",
          body: "已经使用 Pi、只想增加对象存储排查能力时，选择 StorageOps；需要完整桌面应用、内置工具、本地分析和确认流程时，选择 Storage Agent。",
          link: { label: "打开 Storage Agent", href: "/zh/storage-agent-workbench/" },
        },
      ],
    },
  },
};
