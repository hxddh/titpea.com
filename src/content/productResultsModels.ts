import type { ProductResultsModel } from "./productPageTypes";
import type { Locale } from "../lib/site";

export const s3ResultsModels: Record<Locale, ProductResultsModel> = {
  en: {
    id: "results",
    kind: "results",
    kicker: "What remains",
    title: "List and diff leave different answers",
    body: "Both paths write results for downstream work. They are deliberately not the same operation.",
    paths: [
      {
        label: "LIST",
        title: "A usable object list",
        input: "One bucket",
        output: "Parquet object list",
        detail:
          "Checkpoint and resume keep a long list recoverable; optional trace and manifest files preserve how it ran. Downstream tools can read the Parquet in DuckDB, pandas, or pyarrow.",
      },
      {
        label: "DIFF",
        title: "An ordered difference set",
        input: "Source bucket + target bucket",
        output: "Parquet with DiffFlag",
        detail:
          "Both sides are listed in parallel and merged in key order, so downstream tools can filter equal, missing, or changed objects via DiffFlag.",
      },
    ],
  },
  zh: {
    id: "results",
    kind: "results",
    kicker: "最后留下什么",
    title: "list 和 diff 给出不同的答案",
    body: "两条路径都会留下可继续处理的结果，但它们不是同一种操作。",
    paths: [
      {
        label: "LIST",
        title: "一份可用的对象 list",
        input: "一个存储桶",
        output: "Parquet list",
        detail:
          "长任务可以从 checkpoint 继续；需要复查时，再查看可选的 trace 和运行记录。结果可直接用 DuckDB 读 Parquet 做分组统计。",
      },
      {
        label: "DIFF",
        title: "一份有序的差异结果",
        input: "源端桶 + 目标端桶",
        output: "带 DiffFlag 的 Parquet",
        detail: "两端会并行列举，再按 key 合并；下游可按 DiffFlag 筛出相同、缺失和变化的对象。",
      },
    ],
  },
};
