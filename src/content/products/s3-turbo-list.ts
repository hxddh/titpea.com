import type { S3TurboListProduct } from "../../lib/site";
import { s3MetaLine } from "../productFacts";
import { siteConfig } from "../siteConfig";

export const s3TurboListProduct: S3TurboListProduct = {
  slug: "s3-turbo-list",
  name: "s3-turbo-list",
  archetype: "s3TurboList",
  locales: {
    en: {
      title: "s3-turbo-list",
      description: "Automatic S3-compatible list / diff with analysis-ready Parquet output.",
      eyebrow: "Rust CLI",
      headline: "List / diff, no scanner to build",
      lead: "Discovers parallel work for large S3-compatible list / diff runs.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.s3TurboList },
      secondaryCta: { label: "Quick start", href: siteConfig.externalLinks.s3TurboListQuickStart },
      meta: s3MetaLine(),
      proof: [],
      rationaleLabel: "Why it exists",
      rationaleTitle: "The useful work starts after the scan",
      rationaleBody: [
        "A large-bucket scan is rarely the end of the task. You need an object list for analysis, or a difference set to decide whether a migration is complete.",
        "s3-turbo-list makes those answers its default output. It keeps the command surface small and exposes planning, recovery, and evidence only when the run needs them.",
      ],
      casesLabel: "Compatibility",
      casesTitle: "Check the endpoint before scaling up",
      casesBody:
        "AWS S3, MinIO, and Baidu BOS are covered by the project’s verified compatibility path. R2, OSS, and B2 have presets; run `compat-probe` before trusting a long job on any endpoint.",
      cases: [
        "Verified: AWS S3",
        "Verified: MinIO",
        "Verified: Baidu BOS",
        "Preset: Cloudflare R2",
        "Preset: OSS",
        "Preset: B2",
      ],
      finalCtaLabel: "Open repository",
      faqLabel: "Before a long run",
      faq: [
        {
          title: "When aws s3 ls is enough",
          body: "For a quick, small inspection, `aws s3 ls` is often enough. s3-turbo-list is for large inventories and repeatable comparisons where output and recovery matter.",
        },
        {
          title: "Hints are optional",
          body: "List mode probes real `CommonPrefixes` boundaries on the first run. Hints files remain an optional control for repeated inventories.",
        },
        {
          title: "Startup discovery pre-partitions",
          body: "Startup discovery pre-partitions flat namespaces at list startup with parallel single-key probes, so the first run can open parallel work earlier instead of relying only on runtime splits.",
        },
      ],
    },
    zh: {
      title: "s3-turbo-list",
      description: "自动分段的 S3 兼容 list / diff，输出可直接分析的 Parquet 结果。",
      eyebrow: "Rust CLI",
      headline: "大桶 list / diff，不用自己搭扫描器",
      lead: "面向大规模 S3 兼容存储，自动发现可并行的 list / diff 工作。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.s3TurboList },
      secondaryCta: { label: "快速开始", href: siteConfig.externalLinks.s3TurboListQuickStart },
      meta: s3MetaLine(),
      proof: [],
      rationaleLabel: "为什么做",
      rationaleTitle: "扫描之后，才是真正要做的事",
      rationaleBody: [
        "大规模扫描通常不是终点。你需要一份 list 结果继续分析，或需要差异结果判断一次迁移是否完成。",
        "s3-turbo-list 默认留下这两种结果。计划、恢复和证据能力只在任务需要时出现，命令本身保持克制。",
      ],
      casesLabel: "兼容性",
      casesTitle: "扩大扫描前，先确认端点行为",
      casesBody:
        "AWS S3、MinIO 和百度 BOS 走过项目的兼容性验证。R2、OSS、B2 提供 preset；无论哪种端点，都建议先运行 `compat-probe`。",
      cases: [
        "已验证：AWS S3",
        "已验证：MinIO",
        "已验证：百度 BOS",
        "Preset：Cloudflare R2",
        "Preset：OSS",
        "Preset：B2",
      ],
      finalCtaLabel: "打开仓库",
      faqLabel: "开跑之前",
      faq: [
        {
          title: "小规模仍可用 aws s3 ls",
          body: "小规模、临时查看当然可以。s3-turbo-list 面向大规模盘点和可重复对比，结果输出和恢复能力更重要。",
        },
        {
          title: "hints 不是前置条件",
          body: "list 首次运行会探测真实的 `CommonPrefixes` 边界。hints 文件只是反复盘点时的额外控制。",
        },
        {
          title: "启动发现会预分区",
          body: "启动发现会在 list 启动阶段用并行 single-key 探测为扁平命名空间预分区，让首次运行更早展开并发，而不必只靠运行时拆分逐步提升。",
        },
      ],
    },
  },
};
