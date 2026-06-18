import type { ProductSlug } from "../lib/site";

export const siteConfig = {
  brand: "Titpea",
  baseUrl: "https://titpea.com",
  email: "info@titpea.com",
  githubProfile: "https://github.com/hxddh",
  externalLinks: {
    github: "https://github.com/hxddh",
    s3TurboList: "https://github.com/hxddh/s3-turbo-list",
    s3TurboListQuickStart: "https://github.com/hxddh/s3-turbo-list#quick-start",
    storageops: "https://github.com/hxddh/storageops",
    storageopsQuickStart: "https://github.com/hxddh/storageops#quick-start",
    httpmon: "https://github.com/hxddh/https-traffic-inspector",
    worldClockChrome: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp",
    doubanChrome:
      "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif",
  },
  assets: {
    favicon: "/favicon.svg",
    og: {
      home: "/assets/og-home.png",
      about: "/assets/og-about.png",
      "s3-turbo-list": "/assets/og-s3-turbo-list.png",
      storageops: "/assets/og-storageops.png",
      "world-clock": "/assets/og-world-clock.png",
      "douban-movie-rating": "/assets/og-douban-movie-rating.png",
    } satisfies Record<ProductSlug | "home" | "about", string>,
    screenshots: {
      worldClockLight: "/assets/world-clock-light.png",
      worldClockDark: "/assets/world-clock-dark.png",
      doubanRatingAssistant: "/assets/douban-rating-assistant.png",
    },
  },
} as const;

export const absoluteUrl = (path: string) => `${siteConfig.baseUrl}${path}`;
