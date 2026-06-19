import type { Locale } from "../lib/site";
import { doubanMovieRatingFacts, s3TurboListFacts, storageOpsFacts, worldClockFacts } from "./productFacts";

export type LocalizedText = Record<Locale, string>;

export type EvidenceCard = {
  label: LocalizedText;
  value: string;
  body: LocalizedText;
};

export type S3BenchmarkRun = {
  label: string;
  throughput: number;
  seconds: number;
};

export const s3EvidenceFacts = {
  objectCount: "1M",
  datasetSize: "Alibaba Cloud OSS",
  environment: "Third-party OSS benchmark · 1M objects",
  version: s3TurboListFacts.latestRelease ?? "current release",
  license: s3TurboListFacts.licenseLabel ?? "current license",
  peak: { label: "-c 8", throughput: 52632, seconds: 19 } satisfies S3BenchmarkRun,
  parallelRuns: [
    { label: "single stream", throughput: 18182, seconds: 55 },
    { label: "-c 8 automatic", throughput: 52632, seconds: 19 },
  ] satisfies S3BenchmarkRun[],
  headlineRuns: [
    {
      label: { en: "benchmark", zh: "测试规模" },
      value: "1M objects",
      body: { en: "Alibaba Cloud OSS third-party run", zh: "Alibaba Cloud OSS 第三方测试" },
    },
    {
      label: { en: "speedup", zh: "用时对比" },
      value: "~55s to ~19s",
      body: { en: "single stream vs -c 8", zh: "单线程与 -c 8 对比" },
    },
    {
      label: { en: "release", zh: "版本" },
      value: s3TurboListFacts.licenseLabel ?? "current license",
      body: {
        en: `${s3TurboListFacts.latestRelease ?? "current release"} and later`,
        zh: `${s3TurboListFacts.latestRelease ?? "current release"} 起`,
      },
    },
  ] satisfies EvidenceCard[],
  outputLine: "Parquet · key-space CSV · NDJSON · TSV · run manifest",
  runtimeLine: "Startup discovery + throughput-aware runtime splitting",
  defaultPath: [
    { en: "Discover real prefix boundaries", zh: "启动发现真实前缀边界" },
    { en: "Split long-tail segments while throughput improves", zh: "运行时按吞吐拆分长尾片段" },
    { en: "Write Parquet, plans, manifests, and traces", zh: "写出 Parquet、plan、运行记录和 trace" },
  ] satisfies LocalizedText[],
  deepDiveCards: [
    {
      label: { en: "Startup discovery", zh: "启动发现" },
      body: {
        en: "Delimiter probes find real prefix boundaries before a first recursive list fans out.",
        zh: "通过少量 delimiter probe 找到真实前缀边界，让第一次递归 list 就能并发。",
      },
    },
    {
      label: { en: "Throughput splitting", zh: "吞吐拆分" },
      body: {
        en: "Runtime splitting fans out long-tail segments only while throughput is still improving.",
        zh: "运行时只在吞吐继续上升时拆分长尾片段，把并发当上限。",
      },
    },
    {
      label: { en: "Artifact checks", zh: "产物校验" },
      body: {
        en: "Parquet, manifests, hashes, row counts, and schema metadata keep CI and agents honest.",
        zh: "Parquet、运行记录、哈希、行数和 schema 元数据，让 CI 和 Agent 可以复查结果。",
      },
    },
  ],
  insideMetrics: [
    {
      label: { en: "startup discovery", zh: "自动发现" },
      value: "zero hints",
      body: { en: "first recursive list can run in parallel", zh: "第一次递归 list 就能并发" },
    },
    {
      label: { en: "OSS benchmark", zh: "OSS 测试" },
      value: "~19s",
      body: { en: "1M objects at -c 8", zh: "1M 对象，-c 8" },
    },
    {
      label: { en: "license", zh: "协议" },
      value: s3TurboListFacts.licenseLabel ?? "current license",
      body: { en: `from ${s3TurboListFacts.latestRelease} onward`, zh: `${s3TurboListFacts.latestRelease} 起` },
    },
  ] satisfies EvidenceCard[],
  artifactRows: [
    ["preflight", "doctor --json · --dry-run --agent · --plan-json"],
    ["artifacts", "Parquet · key-space CSV · run manifest · trace JSONL"],
    ["verify", "manifest-summary --check · hashes · row counts · schema"],
    ["provider logs", "app/s3-turbo-list User-Agent · compat-probe"],
  ] as const,
} as const;

export const storageOpsEvidenceFacts = {
  repository: storageOpsFacts.repository,
  skillsCount: 15,
  toolsCount: 21,
  evalLabel: "golden",
  tools: ["scan_secrets", "parse_httpmon_log", "analyze_policy", "detect_throttling", "search_memory"],
  capabilityCards: [
    {
      label: { en: "Skills", zh: "技能" },
      value: "15",
      body: {
        en: "Auth, signing, throttling, consistency, migration, logs, notifications, and more.",
        zh: "鉴权、签名、限流、一致性、迁移、日志、通知等领域。",
      },
    },
    {
      label: { en: "Tools", zh: "工具" },
      value: "21",
      body: {
        en: "Parsers, analyzers, generators, secret scanning, and memory search.",
        zh: "解析器、分析器、修复生成、密钥扫描和历史搜索。",
      },
    },
    {
      label: { en: "Evals", zh: "约束" },
      value: "golden",
      body: {
        en: "Golden cases and size gates keep the agent package compact and repeatable.",
        zh: "Golden cases 和 size gates 约束输出，避免 Agent 的行为漂移。",
      },
    },
  ] satisfies EvidenceCard[],
  insideMetrics: [
    {
      label: { en: "01", zh: "01" },
      value: "15 diagnostic skills",
      body: {
        en: "Organized around auth, signing, throttling, consistency, migration, logs, and other storage domains.",
        zh: "按鉴权、签名、限流、一致性、迁移、日志等对象存储领域组织。",
      },
    },
    {
      label: { en: "02", zh: "02" },
      value: "21 tools",
      body: {
        en: "Parse logs, analyze failures, redact secrets, generate fixes, and search memory.",
        zh: "解析日志、分析故障、脱敏凭据、生成修复建议，并搜索历史记录。",
      },
    },
    {
      label: { en: "03", zh: "03" },
      value: "Web API + MCP",
      body: {
        en: "Serve a Web UI / HTTP API or expose StorageOps as an MCP stdio server.",
        zh: "可以启动 Web UI / HTTP API，也可以作为 MCP stdio server 使用。",
      },
    },
    {
      label: { en: "04", zh: "04" },
      value: "safe reports",
      body: {
        en: "Reports separate category, root cause, confidence, evidence, and manual remediation.",
        zh: "报告区分分类、根因、置信度、证据和手动修复步骤。",
      },
    },
  ] satisfies EvidenceCard[],
} as const;

export const browserEvidenceFacts = {
  "world-clock": {
    category: worldClockFacts.category,
    privacy: {
      en: "No data collection disclosed",
      zh: "声明不收集数据",
    },
    screenshots: [
      { src: "/assets/world-clock-light.png", width: 716, height: 777 },
      { src: "/assets/world-clock-dark.png", width: 702, height: 778 },
    ],
  },
  "douban-movie-rating": {
    category: doubanMovieRatingFacts.category,
    privacy: {
      en: "No data collection disclosed",
      zh: "声明不收集数据",
    },
    screenshots: [{ src: "/assets/douban-rating-assistant.png", width: 1454, height: 886 }],
  },
} as const;
