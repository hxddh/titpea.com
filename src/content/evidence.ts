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
  stressRuns: Array<{ label: string; throughput: number }>;
  baselineRuns: Array<{ label: string; throughput: number }>;
  outputs: string;
  runtimeSplits: string;
};

export const s3BenchmarkEvidence: S3BenchmarkEvidence = {
  objectCount: "1,000,078",
  datasetSize: "680.0 MiB",
  environment: "ECS 2 vCPU / 3.4 GiB RAM · Ubuntu 24.04",
  version: "v0.5.0",
  peak: { label: "c4 T2", throughput: 54667, seconds: 18.29 },
  parallelRuns: [
    { label: "c4 T2", throughput: 54667, seconds: 18.29 },
    { label: "c8 T4", throughput: 54422, seconds: 18.38 },
    { label: "c16 T6", throughput: 53961, seconds: 18.53 },
    { label: "c24 T8", throughput: 49658, seconds: 20.14 },
    { label: "c32 T10", throughput: 49686, seconds: 20.13 },
    { label: "c48 T12", throughput: 48511, seconds: 20.61 },
    { label: "c64 T16", throughput: 47906, seconds: 20.88 },
  ],
  stressRuns: [
    { label: "R1", throughput: 50243 },
    { label: "R2", throughput: 49367 },
    { label: "R3", throughput: 51854 },
  ],
  baselineRuns: [
    { label: "v0.4.0", throughput: 19602 },
    { label: "v0.5.0", throughput: 23277 },
  ],
  outputs: "Parquet zstd 3.0 MB · NDJSON 76M · TSV 61M",
  runtimeSplits: "0 across all parallel configurations",
};

export const productEvidence = (locale: Locale): ProductEvidence[] => {
  const isZh = locale === "zh";

  return [
    {
      label: "s3-turbo-list benchmark",
      title: isZh ? "100 万对象，54,667 objects/s" : "1M objects, 54,667 objects/s",
      body: isZh
        ? "v0.5.0 在 2 vCPU / 3.4 GiB ECS 上测试。并发扫描稳定在 48k-55k objects/s，结果直接写成 Parquet。"
        : "v0.5.0 on a 2 vCPU / 3.4 GiB ECS instance. Parallel scans hold 48k-55k objects/s and write analysis-ready Parquet.",
      href: pathFor(locale, "s3-turbo-list"),
      stats: [s3BenchmarkEvidence.objectCount, "Parquet zstd 3.0 MB", "checkpoint / resume"],
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
