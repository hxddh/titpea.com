import { s3EvidenceFacts, storageOpsEvidenceFacts } from "./productEvidenceFacts";
import { visualCopy } from "./i18n/visualCopy";
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
  barsHead: readonly [string, string];
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
  flow: readonly [string, string];
};

export type ScreenshotVisualModel = {
  kind: "worldClockScreenshot" | "doubanScreenshot";
  label: string;
  images: Array<{ src: string; alt: string; className?: string }>;
};

export type ProductVisualModel = S3BenchmarkVisualModel | StorageAgentVisualModel | ScreenshotVisualModel;

export function visualModel(kind: VisualPolicy, locale: Locale, label: string): ProductVisualModel {
  if (kind === "s3Benchmark") {
    const copy = visualCopy.s3Benchmark[locale];
    return {
      kind,
      label,
      kicker: copy.kicker,
      title: copy.title,
      body: copy.body,
      meta: [`${s3EvidenceFacts.objectCount} ${copy.objectUnit}`, s3EvidenceFacts.datasetSize, s3EvidenceFacts.version],
      kpis: s3EvidenceFacts.headlineRuns.map((run) => ({
        label: run.label[locale],
        value: run.value,
        body: run.body[locale],
      })),
      bars: s3EvidenceFacts.parallelRuns,
      maxThroughput: 55000,
      barsLabel: copy.barsLabel,
      barsHead: copy.barsHead,
      pathLabel: copy.pathLabel,
      pathItems: s3EvidenceFacts.defaultPath.map((item) => item[locale]),
      pathBody: copy.pathBody,
      footnotes: [`${copy.outputPrefix}: ${s3EvidenceFacts.outputLine}`, s3EvidenceFacts.runtimeLine],
    };
  }

  if (kind === "storageAgent") {
    const copy = visualCopy.storageAgent[locale];
    return {
      kind,
      label,
      kicker: copy.kicker,
      title: copy.title,
      body: copy.body,
      cards: [
        {
          number: "01",
          title: `${storageOpsEvidenceFacts.skillsCount} ${copy.skillsSuffix}`,
          body: copy.skillsBody,
        },
        {
          number: "02",
          title: `${storageOpsEvidenceFacts.toolsCount} ${copy.toolsSuffix}`,
          body: storageOpsEvidenceFacts.tools.join(" · "),
        },
        {
          number: "03",
          title: copy.helpersTitle,
          body: copy.helpersBody,
        },
        {
          number: "04",
          title: copy.evalsTitle,
          body: copy.evalsBody,
        },
      ],
      flow: copy.flow,
    };
  }

  if (kind === "worldClockScreenshot") {
    const copy = visualCopy.screenshots[locale];
    return {
      kind,
      label,
      images: [
        {
          src: siteConfig.assets.screenshots.worldClockLight,
          className: "clock-shot light",
          alt: copy.worldClockLight,
        },
        {
          src: siteConfig.assets.screenshots.worldClockDark,
          className: "clock-shot dark",
          alt: copy.worldClockDark,
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
        alt: visualCopy.screenshots[locale].douban,
      },
    ],
  };
}
