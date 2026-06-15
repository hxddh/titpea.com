import { pathFor, type Locale } from "../lib/site";

export type ProductEvidence = {
  label: string;
  title: string;
  body: string;
  href: string;
  stats: string[];
};

export type S3BenchmarkRun = {
  label: string;
  throughput: number;
  seconds: number;
};

export type S3BenchmarkEvidence = {
  objectCount: string;
  datasetSize: string;
  environment: string;
  version: string;
  peak: S3BenchmarkRun;
  parallelRuns: S3BenchmarkRun[];
  headlineRuns: Array<{ label: string; value: string; detail: string }>;
  outputs: string;
  runtimeSplits: string;
};

export const s3BenchmarkEvidence: S3BenchmarkEvidence = {
  objectCount: "1M",
  datasetSize: "Alibaba Cloud OSS",
  environment: "Third-party OSS benchmark · 1M objects",
  version: "v0.18.0",
  peak: { label: "-c 8", throughput: 52632, seconds: 19 },
  parallelRuns: [
    { label: "single stream", throughput: 18182, seconds: 55 },
    { label: "-c 8 automatic", throughput: 52632, seconds: 19 },
  ],
  headlineRuns: [
    { label: "benchmark", value: "1M objects", detail: "Alibaba Cloud OSS third-party run" },
    { label: "speedup", value: "~55s to ~19s", detail: "single stream vs -c 8" },
    { label: "release", value: "Apache-2.0", detail: "v0.18.0 and later" },
  ],
  outputs: "Parquet · key-space CSV · NDJSON · TSV · run manifest",
  runtimeSplits: "Startup discovery + throughput-aware runtime splitting",
};

export const productEvidence = (locale: Locale): ProductEvidence[] => {
  const isZh = locale === "zh";

  return [
    {
      label: "s3-turbo-list benchmark",
      title: isZh ? "1M 对象，~55s 到 ~19s" : "1M objects, ~55s to ~19s",
      body: isZh
        ? "最新 README 引用的第三方 Alibaba Cloud OSS 测试：1M 对象单流约 55s，`-c 8` 约 19s。默认路径会自动发现和并发。"
        : "The current README cites a third-party Alibaba Cloud OSS benchmark: 1M objects in ~55s single-stream and ~19s with `-c 8`.",
      href: pathFor(locale, "s3-turbo-list"),
      stats: [s3BenchmarkEvidence.version, "Apache-2.0", "agent-safe JSON"],
    },
    {
      label: "StorageOps agent package",
      title: isZh ? "Pi 的对象存储诊断层" : "The storage diagnosis layer for Pi",
      body: isZh
        ? "StorageOps 不是提示词集合。它把诊断技能、取证工具、确定性脚本和回归用例装进 Pi，让诊断路径和证据边界更清楚。"
        : "StorageOps is not a prompt pack. It gives Pi skills, tools, helpers, and evals that constrain the diagnostic path and evidence boundary.",
      href: pathFor(locale, "storageops"),
      stats: ["15 diagnostic skills", "4 Pi tools", "golden-case evals"],
    },
  ];
};
