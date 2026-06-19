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
  images: Array<{ src: string; alt: string; className?: string }>;
};

export type ProductVisualModel =
  | S3BenchmarkVisualModel
  | StorageAgentVisualModel
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

  if (kind === "httpmonTerminal") {
    const copy = {
      en: {
        kicker: "httpmon · local proxy",
        status: "capturing",
        requestLabel: "REQUEST #1",
        requestMeta: "Host: api.github.com · Accept: */*",
        responseLabel: "RESPONSE",
        response: "HTTP/1.1 200 OK",
        responseMeta: "Content-Type: application/json · 245ms",
        body: '{"login":"octocat","id":583231,...}',
        footnotes: ["HTTPS intercepted locally", "original stream forwarded unchanged"],
      },
      zh: {
        kicker: "httpmon · 本地代理",
        status: "正在捕获",
        requestLabel: "请求 #1",
        requestMeta: "Host: api.github.com · Accept: */*",
        responseLabel: "响应",
        response: "HTTP/1.1 200 OK",
        responseMeta: "Content-Type: application/json · 245ms",
        body: '{"login":"octocat","id":583231,...}',
        footnotes: ["HTTPS 仅在本地解密查看", "原始流量继续转发给命令"],
      },
    }[locale];
    return {
      kind,
      label,
      ...copy,
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
