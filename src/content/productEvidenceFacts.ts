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
      label: { en: "benchmark", zh: "benchmark" },
      value: "1M objects",
      body: { en: "Alibaba Cloud OSS third-party run", zh: "Alibaba Cloud OSS 第三方测试" },
    },
    {
      label: { en: "speedup", zh: "speedup" },
      value: "~55s to ~19s",
      body: { en: "single stream vs -c 8", zh: "single stream vs -c 8" },
    },
    {
      label: { en: "release", zh: "release" },
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
        zh: "少量 delimiter probe 找真实前缀边界，第一次递归 list 也能并发。",
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
        zh: "Parquet、运行记录、hash、行数和 schema 元数据让结果能被 CI 和 agent 复查。",
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
      label: { en: "OSS benchmark", zh: "OSS benchmark" },
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
  toolsCount: 4,
  evalLabel: "golden",
  tools: ["detect_domain", "scan_secrets", "search_memory", "capture_http_trace"],
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
      value: "4",
      body: {
        en: "detect_domain, scan_secrets, search_memory, and capture_http_trace.",
        zh: "detect_domain、scan_secrets、search_memory、capture_http_trace。",
      },
    },
    {
      label: { en: "Evals", zh: "约束" },
      value: "golden",
      body: {
        en: "Golden cases and size gates keep the agent package compact and repeatable.",
        zh: "Golden cases 和 size gates 限制输出口径，避免 agent 漂移。",
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
      value: "4 Pi tools",
      body: {
        en: "detect_domain, scan_secrets, search_memory, and capture_http_trace route and gather evidence.",
        zh: "detect_domain、scan_secrets、search_memory、capture_http_trace 负责路由和取证。",
      },
    },
    {
      label: { en: "03", zh: "03" },
      value: "deterministic helpers",
      body: {
        en: "Inspect SigV4, ETags, payload hashes, throttling, access logs, and endpoint reachability.",
        zh: "检查 SigV4、ETag、payload hash、限流、访问日志和端点可达性。",
      },
    },
    {
      label: { en: "04", zh: "04" },
      value: "eval cases",
      body: {
        en: "Golden cases keep agent behavior stable as skills and tools change.",
        zh: "用 golden cases 约束 agent 行为，避免每次修改后诊断口径漂移。",
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
