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
} as const;
