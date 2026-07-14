import type { ProductSlug } from "../lib/site";
import { productOgImages } from "./productManifest";

export const siteConfig = {
  brand: "Titpea",
  baseUrl: "https://titpea.com",
  email: "info@titpea.com",
  githubProfile: "https://github.com/hxddh",
  externalLinks: {
    github: "https://github.com/hxddh",
    s3TurboList: "https://github.com/hxddh/s3-turbo-list",
    s3TurboListQuickStart: "https://github.com/hxddh/s3-turbo-list#quick-start",
    storageAgentWorkbench: "https://github.com/hxddh/storage-agent-workbench",
    storageAgentWorkbenchReleases: "https://github.com/hxddh/storage-agent-workbench/releases",
    storageops: "https://github.com/hxddh/storageops",
    storageopsQuickStart: "https://github.com/hxddh/storageops#quick-start",
    httpmon: "https://github.com/hxddh/https-traffic-inspector",
    pagewise: "https://github.com/hxddh/pagewise",
    pagewiseReleases: "https://github.com/hxddh/pagewise/releases",
    agentRadar: "https://github.com/hxddh/agent-radar",
    agentRadarQuickStart: "https://github.com/hxddh/agent-radar#cli-usage",
    httpmonQuickStart: "https://github.com/hxddh/https-traffic-inspector#usage",
    worldClockChrome: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp",
    worldClockPrivacy: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp#privacy",
    doubanChrome:
      "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif",
  },
  assets: {
    favicon: "/favicon.svg",
    og: {
      home: "/assets/og-home.png",
      about: "/assets/og-about.png",
      ...productOgImages,
    } satisfies Record<ProductSlug | "home" | "about", string>,
    screenshots: {
      worldClockLight: "/assets/world-clock-light.png",
      worldClockDark: "/assets/world-clock-dark.png",
      doubanRatingAssistant: "/assets/douban-rating-assistant.png",
      pagewiseWelcome: "/assets/pagewise-welcome.webp",
      pagewiseAnalysis: "/assets/pagewise-analysis.webp",
      storageAgentWelcome: "/assets/storage-agent-welcome.webp",
      storageAgentInvestigation: "/assets/storage-agent-investigation.webp",
    },
  },
} as const;

export const absoluteUrl = (path: string) => `${siteConfig.baseUrl}${path}`;
