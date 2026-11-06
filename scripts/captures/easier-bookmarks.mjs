// Capture Easier Bookmarks 5.0.0 side panel (store/release/easier-bookmarks-5.0.0-chrome.zip at hxddh/easier-bookmarks 13ef070, unzipped).
// Fresh profile; sample bookmarks created through chrome.bookmarks; favicons cached by
// visiting local demo sites (repo's store/tools/demo-server.mjs). No API stubs, no font swaps.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const sharp = require("sharp");
const REPO = path.resolve(process.env.APP_REPO || "../easier-bookmarks");
process.chdir(REPO);
const { startDemoServer } = await import(path.join(REPO, "store/tools/demo-server.mjs"));

const OUT = path.resolve(process.env.OUT || "captures-out/easier-bookmarks");
const ext = path.resolve(process.env.EXT_DIR || "captures-out/easier-bookmarks-ext");
const PORT = 8765;
const DATA = {
  en: {
    locale: "en-US",
    env: "en_US",
    folders: { work: "Work", reading: "Reading", travel: "Travel" },
    items: [
      ["work", "handbook", "Team Handbook"],
      ["work", "board", "Sprint Board"],
      ["work", "design", "Design System"],
      ["work", "roadmap", "Q4 Product Plan"],
      ["work", "budget", "Budget 2027"],
      ["reading", "longread", "The Long Read"],
      ["reading", "notes", "Weekly Notes"],
      ["reading", "lang", "Learn Japanese"],
      ["travel", "kyoto", "Kyoto Trip Plan"],
      ["travel", "rail", "Rail Pass Guide"],
      ["travel", "trails", "Autumn Leaves Map"],
      ["bar", "recipes", "Weekly Meal Plan"],
      ["bar", "photos", "Family Photos"],
      ["bar", "music", "Focus Playlist"],
    ],
    query: "plan",
  },
  zh: {
    locale: "zh-CN",
    env: "zh_CN",
    folders: { work: "工作", reading: "阅读", travel: "旅行" },
    items: [
      ["work", "handbook", "团队手册"],
      ["work", "board", "迭代看板"],
      ["work", "design", "设计规范"],
      ["work", "roadmap", "Q4 产品规划"],
      ["work", "budget", "2027 年预算"],
      ["reading", "longread", "深度长文精选"],
      ["reading", "notes", "每周笔记"],
      ["reading", "lang", "日语学习"],
      ["travel", "kyoto", "京都行程规划"],
      ["travel", "rail", "铁路通票指南"],
      ["travel", "trails", "京都赏枫地图"],
      ["bar", "recipes", "一周菜单"],
      ["bar", "photos", "家庭相册"],
      ["bar", "music", "专注歌单"],
    ],
    query: "jingdu",
  },
};

async function save(buf, name) {
  fs.writeFileSync(path.join(OUT, name + ".png"), buf);
  await sharp(buf)
    .webp({ quality: 90 })
    .toFile(path.join(OUT, name + ".webp"));
  const m = await sharp(buf).metadata();
  console.log(name, `${m.width}x${m.height}`);
}

const server = await startDemoServer(PORT);
for (const [key, d] of Object.entries(DATA)) {
  for (const scheme of ["light", "dark"]) {
    for (const scale of scheme === "light" ? [2, 3] : [2]) {
      const profile = fs.mkdtempSync(path.join(os.tmpdir(), "eb-"));
      const ctx = await chromium.launchPersistentContext(profile, {
        channel: "chromium",
        headless: true,
        viewport: { width: 380, height: 660 },
        deviceScaleFactor: scale,
        locale: d.locale,
        colorScheme: scheme,
        env: { ...process.env, LANGUAGE: d.env, LANG: `${d.env}.UTF-8` },
        args: [
          `--lang=${d.locale}`,
          `--disable-extensions-except=${ext}`,
          `--load-extension=${ext}`,
          "--no-proxy-server",
          `--host-resolver-rules=MAP *.example.com 127.0.0.1:${PORT}`,
        ],
      });
      let [worker] = ctx.serviceWorkers();
      if (!worker) worker = await ctx.waitForEvent("serviceworker");
      const id = new URL(worker.url()).host;
      const visitor = await ctx.newPage();
      for (const [, k] of d.items) {
        await visitor.goto(`http://${k}.example.com/${k}`);
        await visitor.waitForTimeout(120);
      }
      await visitor.close();
      const page = await ctx.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto(`chrome-extension://${id}/sidepanel.html`);
      await page.evaluate(async ({ folders, items }) => {
        const ids = { bar: "1" };
        for (const [k, name] of Object.entries(folders))
          ids[k] = (await chrome.bookmarks.create({ parentId: "1", title: name })).id;
        for (const [folder, k, name] of items)
          await chrome.bookmarks.create({ parentId: ids[folder], title: name, url: `http://${k}.example.com/${k}` });
      }, d);
      await page.reload();
      await page.waitForTimeout(800);
      const row = (name) =>
        page.locator(".bookmark-row", { has: page.locator(".row-title", { hasText: new RegExp(`^${name}$`) }) });
      const rest = async () => {
        await page.evaluate(() => document.activeElement?.blur());
        await page.mouse.move(6, 655);
        await page.waitForTimeout(300);
      };
      const tag = `${key}-${scheme}@${scale}x`;
      await row(d.folders.work).locator(".bookmark-main").click();
      await rest();
      await save(await page.screenshot(), `easier-bookmarks-panel-${tag}`);
      await row(d.folders.work).locator(".bookmark-main").click();
      await page.fill(".search-input", d.query);
      await page.waitForTimeout(400);
      await rest();
      await save(await page.screenshot(), `easier-bookmarks-search-${tag}`);
      if (errors.length) console.log("  errors", errors);
      await ctx.close();
      fs.rmSync(profile, { recursive: true, force: true });
    }
  }
}
server.close();
