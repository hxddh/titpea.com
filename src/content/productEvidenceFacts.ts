import type { Locale } from "../lib/site";
import { s3TurboListFacts } from "./productFacts";

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
  objectCount: "1,000,413",
  datasetSize: "Alibaba Cloud OSS · Beijing",
  environment: "2 vCPU · 3.4 GiB · same-region ECS → OSS · default list QPS",
  // Keep the measured release fixed; do not track latestRelease as it drifts.
  version: "v0.21.0",
  license: s3TurboListFacts.licenseLabel ?? "current license",
  benchmarkDate: "2026-06-18",
  parallelRuns: [
    { label: "c=1", throughput: 23990, seconds: 41.7 },
    { label: "c=2", throughput: 48459, seconds: 20.6 },
    { label: "c=4", throughput: 53753, seconds: 18.6 },
    { label: "c=8", throughput: 53252, seconds: 18.8 },
    { label: "c=16", throughput: 50364, seconds: 19.9 },
    { label: "c=24", throughput: 39894, seconds: 25.1 },
    { label: "c=32", throughput: 49104, seconds: 20.4 },
    { label: "c=64", throughput: 44854, seconds: 22.3 },
  ] satisfies S3BenchmarkRun[],
  headlineRuns: [
    {
      label: { en: "dataset", zh: "测试规模" },
      value: "1,000,413",
      body: { en: "objects · 3.07 GiB", zh: "对象 · 3.07 GiB" },
    },
    {
      label: { en: "observed run", zh: "本次实测" },
      value: "18.8s",
      body: { en: "c=8 · 53,252 objects/s", zh: "c=8 · 53,252 对象/s" },
    },
    {
      label: { en: "single segment", zh: "单段扫描" },
      value: "+27.3%",
      body: {
        en: "v0.21.0 vs v0.20.0",
        zh: "对比 v0.20.0",
      },
    },
    {
      label: { en: "HTTP errors", zh: "HTTP 错误" },
      value: "0",
      body: { en: "6/6 compat checks passed", zh: "兼容性检查 6/6 通过" },
    },
  ] satisfies EvidenceCard[],
  formatRuns: [
    { label: "Parquet", throughput: 53252, seconds: 18.8, size: "3.5 MB", detail: "Snappy · 1,000,413 rows" },
    { label: "NDJSON", throughput: 52264, seconds: 19.1, size: "79 MB", detail: "stdout · 1,000,413 rows" },
    { label: "TSV", throughput: 51477, seconds: 19.4, size: "63 MB", detail: "stdout · 1,000,413 rows" },
  ],
  versionRuns: [
    { label: "v0.20.0 single", throughput: 18841, seconds: 53.1 },
    { label: "v0.21.0 single", throughput: 23990, seconds: 41.7 },
  ] satisfies S3BenchmarkRun[],
  outputLine: "Parquet · key-space CSV · NDJSON · TSV · run manifest",
  runtimeLine: "Auto discovery + runtime splitting use available capacity; this run is not a throughput ceiling.",
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
        en: "Runtime splitting fans out long-tail segments while useful capacity remains; a fixed concurrency value is not the product's limit.",
        zh: "运行时会在仍有可用性能时继续拆分长尾片段；固定并发数不是工具的能力边界。",
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
      value: "18.8s",
      body: { en: "1,000,413 objects at c=8", zh: "c=8 列举 1,000,413 个对象" },
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
