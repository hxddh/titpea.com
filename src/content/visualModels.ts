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
  windowTitle: string;
  brand: string;
  newChat: string;
  search: string;
  pinnedLabel: string;
  pinned: { title: string; time: string };
  recentLabel: string;
  recent: Array<{ title: string; time: string }>;
  connected: string;
  model: string;
  question: string;
  subtitle: string;
  inputPlaceholder: string;
  chips: string[];
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
  kind:
    | "worldClockScreenshot"
    | "doubanScreenshot"
    | "gobanScreenshot"
    | "chessboardScreenshot"
    | "easierBookmarksScreenshot";
  label: string;
  images: Array<{ src: string; alt: string; className?: string; width: number; height: number }>;
  showcases?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
    kicker: string;
    title: string;
    body: string;
  }>;
};

export type PagewiseWorkbenchVisualModel = {
  kind: "pagewiseWorkbench";
  label: string;
  windowTitle: string;
  recentLabel: string;
  recent: Array<{ title: string; pages: string }>;
  activeDoc: string;
  pageLabel: string;
  currentPage: string;
  totalPages: string;
  pageExcerpt: string;
  question: string;
  subtitle: string;
  inputPlaceholder: string;
  model: string;
  chips: string[];
};

export type AgentWorkbenchScreenshotVisualModel = {
  kind: "agentWorkbenchScreenshot";
  label: string;
  hero: { src: string; alt: string; width: number; height: number };
  supporting: {
    src: string;
    alt: string;
    width: number;
    height: number;
    kicker: string;
    title: string;
    body: string;
    beside?: "workflow";
  };
};

export type AgentRadarTerminalVisualModel = {
  kind: "agentRadarTerminal";
  label: string;
  kicker: string;
  status: string;
  command: string;
  filesLabel: string;
  files: string[];
  briefLabel: string;
  brief: string;
  footnotes: string[];
};

export type CelagentTerminalVisualModel = {
  kind: "celagentTerminal";
  label: string;
  kicker: string;
  status: string;
  command: string;
  filesLabel: string;
  files: string[];
  briefLabel: string;
  brief: string;
  footnotes: string[];
};

export type PulseMenuBarVisualModel = {
  kind: "pulseMenuBar";
  label: string;
  menubarLabel: string;
  glanceTitle: string;
  headerStatus: string;
  headerAgents: string;
  sections: Array<{
    title: string;
    rows: Array<{
      title: string;
      meta: string;
      state: "waiting" | "running" | "recent";
      chip?: string;
    }>;
  }>;
  footnotes: string[];
};

export type WorldMachineProjectionVisualModel = {
  kind: "worldMachineProjection";
  label: string;
  kicker: string;
  status: string;
  briefingLabel: string;
  briefing: string;
  commandsLabel: string;
  commands: string[];
  collectionLabel: string;
  collection: string[];
  timelineLabel: string;
  timeline: string[];
  footnotes: string[];
};

export type ProductVisualModel =
  | S3BenchmarkVisualModel
  | StorageAgentVisualModel
  | StorageWorkbenchVisualModel
  | PagewiseWorkbenchVisualModel
  | AgentWorkbenchScreenshotVisualModel
  | HttpmonTerminalVisualModel
  | AgentRadarTerminalVisualModel
  | CelagentTerminalVisualModel
  | PulseMenuBarVisualModel
  | WorldMachineProjectionVisualModel
  | ScreenshotVisualModel;

export type ProductShowcaseFigure = AgentWorkbenchScreenshotVisualModel["supporting"];

export function visualShowcases(visual: ProductVisualModel): ProductShowcaseFigure[] {
  if (visual.kind === "agentWorkbenchScreenshot") return [visual.supporting];
  if (visual.kind === "gobanScreenshot" || visual.kind === "chessboardScreenshot") {
    return visual.showcases ?? [];
  }
  return [];
}

export function visualModel(kind: VisualPolicy, locale: Locale, label: string, slug?: string): ProductVisualModel {
  if (kind === "s3Benchmark") {
    const copy = visualCopy.s3Benchmark[locale];
    return {
      kind,
      label,
      kicker: `${s3EvidenceFacts.version} ${copy.kickerSuffix}`,
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
      windowTitle: copy.windowTitle,
      brand: copy.brand,
      newChat: copy.newChat,
      search: copy.search,
      pinnedLabel: copy.pinnedLabel,
      pinned: { ...copy.pinned },
      recentLabel: copy.recentLabel,
      recent: copy.recent.map((item) => ({ ...item })),
      connected: copy.connected,
      model: copy.model,
      question: copy.question,
      subtitle: copy.subtitle,
      inputPlaceholder: copy.inputPlaceholder,
      chips: [...copy.chips],
    };
  }

  if (kind === "pagewiseWorkbench") {
    const copy = visualCopy.pagewiseWorkbench[locale];
    return {
      kind,
      label,
      windowTitle: copy.windowTitle,
      recentLabel: copy.recentLabel,
      recent: copy.recent.map((item) => ({ ...item })),
      activeDoc: copy.activeDoc,
      pageLabel: copy.pageLabel,
      currentPage: copy.currentPage,
      totalPages: copy.totalPages,
      pageExcerpt: copy.pageExcerpt,
      question: copy.question,
      subtitle: copy.subtitle,
      inputPlaceholder: copy.inputPlaceholder,
      model: copy.model,
      chips: [...copy.chips],
    };
  }

  if (kind === "agentWorkbenchScreenshot") {
    const isPagewise = slug === "pagewise";
    const copy = isPagewise
      ? visualCopy.productScreenshots.pagewise[locale]
      : visualCopy.productScreenshots.storageAgent[locale];
    return {
      kind,
      label,
      hero: isPagewise
        ? {
            src: siteConfig.assets.screenshots.pagewiseAnalysis,
            width: 1800,
            height: 1200,
            alt: copy.heroAlt,
          }
        : {
            src: siteConfig.assets.screenshots.storageAgentInvestigation,
            width: 1800,
            height: 1290,
            alt: copy.heroAlt,
          },
      supporting: isPagewise
        ? {
            src: siteConfig.assets.screenshots.pagewiseWelcome,
            width: 1800,
            height: 1200,
            alt: copy.supportingAlt,
            kicker: copy.supportingKicker,
            title: copy.supportingTitle,
            body: copy.supportingBody,
          }
        : {
            src: siteConfig.assets.screenshots.storageAgentWelcome,
            width: 1800,
            height: 1290,
            alt: copy.supportingAlt,
            kicker: copy.supportingKicker,
            title: copy.supportingTitle,
            body: copy.supportingBody,
            beside: "workflow" as const,
          },
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

  if (kind === "agentRadarTerminal") {
    const copy = visualCopy.agentRadarTerminal[locale];
    return {
      kind,
      label,
      ...copy,
      files: [...copy.files],
      footnotes: [...copy.footnotes],
    };
  }

  if (kind === "celagentTerminal") {
    const copy = visualCopy.celagentTerminal[locale];
    return {
      kind,
      label,
      ...copy,
      files: [...copy.files],
      footnotes: [...copy.footnotes],
    };
  }

  if (kind === "pulseMenuBar") {
    const copy = visualCopy.pulseMenuBar[locale];
    return {
      kind,
      label,
      menubarLabel: copy.menubarLabel,
      glanceTitle: copy.glanceTitle,
      headerStatus: copy.headerStatus,
      headerAgents: copy.headerAgents,
      sections: copy.sections.map((section) => ({
        title: section.title,
        rows: section.rows.map((row) => ({ ...row })),
      })),
      footnotes: [...copy.footnotes],
    };
  }

  if (kind === "worldMachineProjection") {
    const copy = visualCopy.worldMachineProjection[locale];
    return {
      kind,
      label,
      ...copy,
      commands: [...copy.commands],
      collection: [...copy.collection],
      timeline: [...copy.timeline],
      footnotes: [...copy.footnotes],
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

  if (kind === "gobanScreenshot") {
    const copy = visualCopy.productScreenshots.goban[locale];
    return {
      kind,
      label,
      images: [
        {
          src: siteConfig.assets.screenshots.gobanBoard,
          alt: copy.heroAlt,
          width: 1223,
          height: 768,
        },
      ],
      showcases: [
        {
          src: siteConfig.assets.screenshots.gobanReview,
          alt: copy.supportingAlt,
          width: 1223,
          height: 768,
          kicker: copy.supportingKicker,
          title: copy.supportingTitle,
          body: copy.supportingBody,
        },
        {
          src: siteConfig.assets.screenshots.gobanNotebook,
          alt: copy.notebookAlt,
          width: 1223,
          height: 768,
          kicker: copy.notebookKicker,
          title: copy.notebookTitle,
          body: copy.notebookBody,
        },
      ],
    };
  }

  if (kind === "chessboardScreenshot") {
    const copy = visualCopy.productScreenshots.chessboard[locale];
    return {
      kind,
      label,
      images: [
        {
          src: siteConfig.assets.screenshots.chessboardBoard,
          alt: copy.heroAlt,
          width: 1223,
          height: 768,
        },
      ],
      showcases: [
        {
          src: siteConfig.assets.screenshots.chessboardReview,
          alt: copy.supportingAlt,
          width: 1223,
          height: 768,
          kicker: copy.supportingKicker,
          title: copy.supportingTitle,
          body: copy.supportingBody,
        },
        {
          src: siteConfig.assets.screenshots.chessboardTheme,
          alt: copy.themeAlt,
          width: 1223,
          height: 768,
          kicker: copy.themeKicker,
          title: copy.themeTitle,
          body: copy.themeBody,
        },
      ],
    };
  }

  if (kind === "easierBookmarksScreenshot") {
    return {
      kind,
      label,
      images: [
        {
          src: siteConfig.assets.screenshots.easierBookmarks,
          alt: visualCopy.screenshots[locale].easierBookmarks,
          width: 1280,
          height: 800,
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
