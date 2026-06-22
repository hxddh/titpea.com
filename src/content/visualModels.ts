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
      cards:
        locale === "zh"
          ? [
              { number: "输入", title: "报错、日志或配置", body: "把实际现象交给 Pi，而不是从一串猜测开始。" },
              { number: "判断", title: "收窄故障领域", body: "按鉴权、签名、限流、迁移、网络等方向读取证据。" },
              { number: "报告", title: "留下可执行的结论", body: "说明可能原因、关键依据和需要人工完成的下一步。" },
            ]
          : [
              {
                number: "INPUT",
                title: "Error, log, or configuration",
                body: "Give Pi the real symptom instead of starting from a generic guess.",
              },
              {
                number: "REASON",
                title: "Narrow the failure domain",
                body: "Read evidence through access, signing, throttling, migration, or network context.",
              },
              {
                number: "REPORT",
                title: "Leave an actionable conclusion",
                body: "Separate likely cause, supporting evidence, and the next manual step.",
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
