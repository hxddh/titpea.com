import { s3EvidenceFacts } from "./productEvidenceFacts";
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
  points: Array<{ label: string; seconds: number; state?: "reference" | "caution" }>;
  chartLabel: string;
  chartCaption: string;
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

export type StorageWorkbenchVisualModel = {
  kind: "storageWorkbench";
  label: string;
  brand: string;
  newChat: string;
  sessions: string[];
  connected: string;
  model: string;
  prompt: string;
  steps: string[];
  diagnosisLabel: string;
  diagnosis: Array<{ dim: string; verdict: string }>;
  footnotes: string[];
};

export type HttpmonTerminalVisualModel = {
  kind: "httpmonTerminal";
  label: string;
  kicker: string;
  status: string;
  command: string;
  requestLabel: string;
  method: string;
  url: string;
  requestMeta: string;
  responseLabel: string;
  response: string;
  responseMeta: string;
  body: string;
  footnotes: string[];
};

export type ScreenshotVisualModel = {
  kind: "worldClockScreenshot" | "doubanScreenshot";
  label: string;
  images: Array<{ src: string; alt: string; className?: string; width: number; height: number }>;
};

export type ProductVisualModel =
  | S3BenchmarkVisualModel
  | StorageAgentVisualModel
  | StorageWorkbenchVisualModel
  | HttpmonTerminalVisualModel
  | ScreenshotVisualModel;

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
      points: s3EvidenceFacts.parallelRuns.map((run) => ({
        label: run.label,
        seconds: run.seconds,
        state: run.label === "c=8" ? "reference" : run.label === "c=24" ? "caution" : undefined,
      })),
      chartLabel: copy.chartLabel,
      chartCaption: copy.chartCaption,
      footnotes: [`${s3EvidenceFacts.environment} · ${s3EvidenceFacts.benchmarkDate}`],
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
      cards: [...copy.cards],
      flow: copy.flow,
    };
  }

  if (kind === "storageWorkbench") {
    const copy = visualCopy.storageWorkbench[locale];
    return {
      kind,
      label,
      brand: copy.brand,
      newChat: copy.newChat,
      sessions: [...copy.sessions],
      connected: copy.connected,
      model: copy.model,
      prompt: copy.prompt,
      steps: [...copy.steps],
      diagnosisLabel: copy.diagnosisLabel,
      diagnosis: copy.diagnosis.map((row) => ({ ...row })),
      footnotes: [...copy.footnotes],
    };
  }

  if (kind === "httpmonTerminal") {
    const copy = visualCopy.httpmonTerminal[locale];
    return {
      kind,
      label,
      ...copy,
      footnotes: [...copy.footnotes],
      command: "httpmon curl https://api.github.com/users/octocat",
      method: "GET",
      url: "https://api.github.com/users/octocat",
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
          width: 716,
          height: 776,
        },
        {
          src: siteConfig.assets.screenshots.worldClockDark,
          className: "clock-shot dark",
          alt: copy.worldClockDark,
          width: 702,
          height: 778,
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
        width: 1442,
        height: 886,
      },
    ],
  };
}
