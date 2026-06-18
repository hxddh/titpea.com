import { s3EvidenceFacts, storageOpsEvidenceFacts } from "./productEvidenceFacts";
import { siteConfig } from "./siteConfig";
import type { VisualPolicy } from "./productArchetypes";
import type { Locale } from "../lib/site";

export type S3BenchmarkVisualModel = {
  kind: "s3Benchmark";
  label: string;
  kicker: string;
  title: string;
  body: string;
  meta: string[];
  kpis: Array<{ label: string; value: string; body: string }>;
  bars: Array<{ label: string; throughput: number; seconds: number }>;
  maxThroughput: number;
  barsLabel: string;
  barsHead: [string, string];
  pathLabel: string;
  pathItems: string[];
  pathBody: string;
  footnotes: string[];
};

export type StorageAgentVisualModel = {
  kind: "storageAgent";
  label: string;
  kicker: string;
  title: string;
  body: string;
  cards: Array<{ number: string; title: string; body: string }>;
  flow: [string, string];
};

export type ScreenshotVisualModel = {
  kind: "worldClockScreenshot" | "doubanScreenshot";
  label: string;
  images: Array<{ src: string; alt: string; className?: string }>;
};

export type ProductVisualModel = S3BenchmarkVisualModel | StorageAgentVisualModel | ScreenshotVisualModel;

export function visualModel(kind: VisualPolicy, locale: Locale, label: string): ProductVisualModel {
  if (kind === "s3Benchmark") {
    const isZh = locale === "zh";
    return {
      kind,
      label,
      kicker: isZh ? "当前证据" : "Current evidence",
      title: isZh ? "1M 对象，-c 8 约 19s" : "1M objects, ~19s at -c 8",
      body: isZh
        ? "README 引用的第三方 Alibaba Cloud OSS 测试。页面只把可复查的测试结果放进图表，产品能力则放回自动化路径。"
        : "The README cites a third-party Alibaba Cloud OSS benchmark. The chart stays on checkable measurements; product behavior lives in the automation path.",
      meta: [
        isZh ? `${s3EvidenceFacts.objectCount} 对象` : `${s3EvidenceFacts.objectCount} objects`,
        s3EvidenceFacts.datasetSize,
        s3EvidenceFacts.version,
      ],
      kpis: s3EvidenceFacts.headlineRuns.map((run) => ({
        label: run.label[locale],
        value: run.value,
        body: run.body[locale],
      })),
      bars: s3EvidenceFacts.parallelRuns,
      maxThroughput: 55000,
      barsLabel: isZh ? "并发扫描吞吐量" : "Parallel scan throughput",
      barsHead: [isZh ? "测试路径" : "Benchmark path", isZh ? "约 objects/s" : "approx objects/s"],
      pathLabel: isZh ? "默认自动化路径" : "Default automation path",
      pathItems: s3EvidenceFacts.defaultPath.map((item) => item[locale]),
      pathBody: isZh
        ? "自动发现、运行时拆分、dry-run plan 和运行记录，是同一条默认路径。"
        : "Startup discovery, runtime splitting, dry-run plans, and manifests sit on one default path.",
      footnotes: [
        isZh ? `输出：${s3EvidenceFacts.outputLine}` : `Output: ${s3EvidenceFacts.outputLine}`,
        s3EvidenceFacts.runtimeLine,
      ],
    };
  }

  if (kind === "storageAgent") {
    const isZh = locale === "zh";
    return {
      kind,
      label,
      kicker: "Pi Agent package",
      title: isZh ? "诊断能力由 skills 和 tools 定义" : "Skills and tools define the diagnosis",
      body: isZh
        ? "StorageOps 给 Pi 安装一套对象存储诊断能力：领域技能负责判断路径，扩展工具和脚本负责有边界地取证。"
        : "StorageOps installs object-storage diagnosis into Pi: domain skills choose the path, while tools and helpers collect bounded evidence.",
      cards: [
        {
          number: "01",
          title: isZh
            ? `${storageOpsEvidenceFacts.skillsCount} 个诊断技能`
            : `${storageOpsEvidenceFacts.skillsCount} diagnostic skills`,
          body: isZh
            ? "覆盖安全、协议兼容、CLI/SDK、性能、网络、生命周期、迁移、一致性、日志、通知和初步分诊。"
            : "Security, protocol compatibility, CLI/SDK behavior, performance, networking, lifecycle, migration, consistency, logs, notifications, and triage.",
        },
        {
          number: "02",
          title: isZh
            ? `${storageOpsEvidenceFacts.toolsCount} 个 Pi 扩展工具`
            : `${storageOpsEvidenceFacts.toolsCount} Pi extension tools`,
          body: storageOpsEvidenceFacts.tools.join(" · "),
        },
        {
          number: "03",
          title: isZh ? "确定性脚本" : "deterministic helper scripts",
          body: isZh
            ? "检查 policy、SigV4、payload hash、ETag、限流、访问日志、迁移估算和端点可达性。"
            : "Inspect policy, SigV4, payload hashes, ETags, throttling, access logs, migration estimates, and endpoint reachability.",
        },
        {
          number: "04",
          title: isZh ? "回归用例" : "golden-case evals",
          body: isZh
            ? "用可复现 case 约束 agent 输出，避免诊断口径漂移。"
            : "Regression cases keep agent output stable as skills and tools evolve.",
        },
      ],
      flow: [
        isZh ? "输入：错误、命令、配置、脱敏日志" : "input: error, command, config, redacted log",
        isZh ? "输出：原因、证据、置信度、下一步检查" : "output: cause, evidence, confidence, next checks",
      ],
    };
  }

  if (kind === "worldClockScreenshot") {
    return {
      kind,
      label,
      images: [
        {
          src: siteConfig.assets.screenshots.worldClockLight,
          className: "clock-shot light",
          alt: "World Clock light theme timezone feed screenshot",
        },
        {
          src: siteConfig.assets.screenshots.worldClockDark,
          className: "clock-shot dark",
          alt: "World Clock dark theme timezone feed screenshot",
        },
      ],
    };
  }

  return {
    kind,
    label,
    images: [
      {
        src: siteConfig.assets.screenshots.doubanRatingAssistant,
        alt: "Douban Movie Rating Assistant showing IMDb, Rotten Tomatoes, and Metacritic inside a Douban movie page",
      },
    ],
  };
}
