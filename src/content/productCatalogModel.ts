import { productPageModel } from "./productPageModel";
import { products } from "./products";
import { s3EvidenceFacts, storageOpsEvidenceFacts } from "./productEvidenceFacts";
import { s3TurboListFacts } from "./productFacts";
import { siteConfig } from "./siteConfig";
import { pathFor, type Locale, type ProductSlug } from "../lib/site";

export type ProductCatalogItem = {
  id: string;
  number?: string;
  verb?: string;
  name: string;
  href: string;
  text: string;
  tagline: string;
  displayRole: string;
  isPrimary?: boolean;
  slug?: ProductSlug;
  group: "storage" | "browser" | "external";
};

export type EvidenceSummary = {
  label: string;
  title: string;
  body: string;
  href: string;
  stats: string[];
};

const externalProjects = {
  en: {
    httpmon:
      "Capture the real HTTP request and response when signing, retries, redirects, or provider behavior hide the clue.",
  },
  zh: {
    httpmon: "当签名、重试、跳转或服务商行为藏在 SDK 下面时，直接看真实 HTTP 请求和响应。",
  },
} as const;

export function productCatalogModel(locale: Locale) {
  const s3 = productPageModel(products["s3-turbo-list"], locale);
  const storageops = productPageModel(products.storageops, locale);
  const worldClock = productPageModel(products["world-clock"], locale);
  const douban = productPageModel(products["douban-movie-rating"], locale);

  const storage: ProductCatalogItem[] = [
    {
      id: "s3-turbo-list",
      number: "01",
      verb: "List / Diff",
      name: products["s3-turbo-list"].name,
      href: s3.path,
      text:
        locale === "zh"
          ? "自动列举或对比大型 S3 兼容存储桶，留下 Parquet、JSON plan 和运行记录。"
          : "Run automatic inventory or diff on large S3-compatible buckets, then keep Parquet, JSON plans, and run manifests.",
      tagline: locale === "zh" ? "自动化对象存储 list / diff CLI" : "Automatic object storage list / diff CLI",
      displayRole: locale === "zh" ? "对象清单 / Diff" : "Inventory / Diff",
      slug: "s3-turbo-list",
      isPrimary: true,
      group: "storage",
    },
    {
      id: "storageops",
      number: "02",
      verb: "Diagnose",
      name: products.storageops.name,
      href: storageops.path,
      text:
        locale === "zh"
          ? "给 Pi 一层对象存储诊断能力：领域技能、有边界的工具、确定性脚本和回归用例。"
          : "Give Pi a storage diagnosis layer: domain skills, bounded tools, deterministic helpers, and eval-backed routing.",
      tagline: locale === "zh" ? "Pi 的对象存储诊断 agent" : "Pi-based object storage diagnosis agent",
      displayRole: locale === "zh" ? "诊断 Agent" : "Diagnosis agent",
      slug: "storageops",
      isPrimary: true,
      group: "storage",
    },
    {
      id: "https-traffic-inspector",
      number: "03",
      verb: "Inspect",
      name: "https-traffic-inspector",
      href: siteConfig.externalLinks.httpmon,
      text: externalProjects[locale].httpmon,
      tagline: locale === "zh" ? "命令行 HTTP / HTTPS 流量检查" : "Command-line HTTP / HTTPS inspection",
      displayRole: locale === "zh" ? "流量检查" : "Traffic inspection",
      group: "external",
    },
  ];

  const browser: ProductCatalogItem[] = [
    {
      id: "world-clock",
      name: worldClock.title,
      href: worldClock.path,
      text:
        locale === "zh"
          ? "快速查看几个城市的当前时间，适合远程协作、旅行和临时确认时区。"
          : "A fast city-time popup for remote work, travel, and quick context checks.",
      tagline: locale === "zh" ? "轻量 Chrome 扩展" : "Lightweight Chrome extension",
      displayRole: locale === "zh" ? "时区工具" : "Timezone utility",
      slug: "world-clock",
      group: "browser",
    },
    {
      id: "douban-movie-rating",
      name: douban.title,
      href: douban.path,
      text:
        locale === "zh"
          ? "把 IMDb、Rotten Tomatoes 和 Metacritic 参考评分补到豆瓣电影页里。"
          : "Adds IMDb, Rotten Tomatoes, and Metacritic context inside Douban movie pages.",
      tagline: locale === "zh" ? "轻量 Chrome 扩展" : "Lightweight Chrome extension",
      displayRole: locale === "zh" ? "评分辅助" : "Rating context",
      slug: "douban-movie-rating",
      group: "browser",
    },
  ];

  const evidence: EvidenceSummary[] = [
    {
      label: "s3-turbo-list benchmark",
      title: locale === "zh" ? "1M 对象，~55s 到 ~19s" : "1M objects, ~55s to ~19s",
      body:
        locale === "zh"
          ? "最新 README 引用的第三方 Alibaba Cloud OSS 测试：1M 对象单流约 55s，`-c 8` 约 19s。默认路径会自动发现和并发。"
          : "The current README cites a third-party Alibaba Cloud OSS benchmark: 1M objects in ~55s single-stream and ~19s with `-c 8`.",
      href: s3.path,
      stats: [s3EvidenceFacts.version, s3TurboListFacts.licenseLabel ?? "current license", "agent-safe JSON"],
    },
    {
      label: "StorageOps agent package",
      title: locale === "zh" ? "Pi 的对象存储诊断层" : "The storage diagnosis layer for Pi",
      body:
        locale === "zh"
          ? "StorageOps 不是提示词集合。它把诊断技能、取证工具、确定性脚本和回归用例装进 Pi，让诊断路径和证据边界更清楚。"
          : "StorageOps is not a prompt pack. It gives Pi skills, tools, helpers, and evals that constrain the diagnostic path and evidence boundary.",
      href: storageops.path,
      stats: [
        `${storageOpsEvidenceFacts.skillsCount} diagnostic skills`,
        `${storageOpsEvidenceFacts.toolsCount} Pi tools`,
        "golden-case evals",
      ],
    },
  ];

  return {
    storage,
    browser,
    evidence,
    all: [...storage, ...browser],
    groups: [
      {
        title: locale === "zh" ? "对象存储" : "Object storage",
        text:
          locale === "zh"
            ? "围绕对象清单、差异对比、诊断和请求级证据，做一条能接起来的工具线。"
            : "One path for inventory, diff, diagnosis, and request-level evidence.",
      },
      {
        title: locale === "zh" ? "浏览器工具" : "Browser utilities",
        text:
          locale === "zh"
            ? "只补当前页面缺的一点上下文，不把小工具做成平台。"
            : "Small extensions that add missing context without taking over the page.",
      },
      {
        title: locale === "zh" ? "做事方式" : "Working style",
        text:
          locale === "zh"
            ? "命令要清楚，输出要能检查，产物要能继续进入 CI、DuckDB、日志或下一步排查。"
            : "Clear commands, inspectable output, and artifacts that can move into CI, DuckDB, logs, or the next diagnostic step.",
      },
    ],
    featuredProductPath: pathFor(locale, "s3-turbo-list"),
    secondaryProductPath: pathFor(locale, "storageops"),
  };
}
