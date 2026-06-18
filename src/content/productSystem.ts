import { pathFor, type Locale, type ProductSlug } from "../lib/site";
import { products } from "./products";

export type ProductSystemItem = {
  id: string;
  number?: string;
  verb?: string;
  name: string;
  href: string;
  text: string;
  slug?: ProductSlug;
  kind: "primary" | "utility" | "external";
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

export function storageWorkflow(locale: Locale): ProductSystemItem[] {
  return [
    {
      id: "s3-turbo-list",
      number: "01",
      verb: "List / Diff",
      name: products["s3-turbo-list"].name,
      href: pathFor(locale, "s3-turbo-list"),
      text:
        locale === "zh"
          ? "自动列举或对比大型 S3 兼容存储桶，留下 Parquet、JSON plan 和运行记录。"
          : "Run automatic inventory or diff on large S3-compatible buckets, then keep Parquet, JSON plans, and run manifests.",
      slug: "s3-turbo-list",
      kind: "primary",
    },
    {
      id: "storageops",
      number: "02",
      verb: "Diagnose",
      name: products.storageops.name,
      href: pathFor(locale, "storageops"),
      text:
        locale === "zh"
          ? "给 Pi 一层对象存储诊断能力：领域技能、有边界的工具、确定性脚本和回归用例。"
          : "Give Pi a storage diagnosis layer: domain skills, bounded tools, deterministic helpers, and eval-backed routing.",
      slug: "storageops",
      kind: "primary",
    },
    {
      id: "https-traffic-inspector",
      number: "03",
      verb: "Inspect",
      name: "https-traffic-inspector",
      href: "https://github.com/hxddh/https-traffic-inspector",
      text: externalProjects[locale].httpmon,
      kind: "external",
    },
  ];
}

export function browserUtilities(locale: Locale): ProductSystemItem[] {
  return [
    {
      id: "world-clock",
      name: products["world-clock"].locales[locale].title,
      href: pathFor(locale, "world-clock"),
      text:
        locale === "zh"
          ? "快速查看几个城市的当前时间，适合远程协作、旅行和临时确认时区。"
          : "A fast city-time popup for remote work, travel, and quick context checks.",
      slug: "world-clock",
      kind: "utility",
    },
    {
      id: "douban-movie-rating",
      name: products["douban-movie-rating"].locales[locale].title,
      href: pathFor(locale, "douban-movie-rating"),
      text:
        locale === "zh"
          ? "把 IMDb、Rotten Tomatoes 和 Metacritic 参考评分补到豆瓣电影页里。"
          : "Adds IMDb, Rotten Tomatoes, and Metacritic context inside Douban movie pages.",
      slug: "douban-movie-rating",
      kind: "utility",
    },
  ];
}

export function productSystem(locale: Locale) {
  return {
    storage: storageWorkflow(locale),
    browser: browserUtilities(locale),
    all: [...storageWorkflow(locale), ...browserUtilities(locale)],
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
  };
}
