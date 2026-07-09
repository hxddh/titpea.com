# Titpea Personal Site

Astro static site for `titpea.com`: a personal profile page plus product pages for hxddh's independent products and utilities.

## Products

**Object storage**

- [s3-turbo-list](https://github.com/hxddh/s3-turbo-list) — automatic, high-speed S3-compatible list / diff
- [Storage Agent](https://github.com/hxddh/storage-agent-workbench) — local desktop agent for read-only storage investigation
- [StorageOps](https://github.com/hxddh/storageops) — Pi Coding Agent skills for S3-compatible diagnosis
- [httpmon](https://github.com/hxddh/https-traffic-inspector) — terminal HTTP/HTTPS inspection for one command

**Reading & media**

- [PageWise](https://github.com/hxddh/pagewise) — local desktop document agent (PDF, OCR, page-wise Q&A)
- [World Clock](https://chromewebstore.google.com/detail/mghphbjnicggehnhbjbpjddfidkepnfp) — multi-city timezone Chrome extension
- [Douban Movie Rating Assistant](https://chromewebstore.google.com/detail/alhcfchcficmeggkhcpkojoipdkkgoif) — IMDb / RT / Metacritic context on Douban
- [Agent Radar](https://github.com/hxddh/agent-radar) — Markdown-first AI agent trend radar

## Commands

```sh
npm install
npm run dev
npm run build
```

## Quality Checks

```sh
npm run format:check
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
npm run qa:pages
```

`qa:pages` checks desktop, tablet, and mobile layouts for page overflow, navigation breakpoints, product anchor links, key copy, and the mobile menu open state.

See [DESIGN.md](DESIGN.md) for the site's design principles and review rules.

## Cloudflare Pages

The site is deployed to the existing Cloudflare Pages project `titpea`.

GitHub Actions builds and deploys on every push to `main`. Configure this repository secret before running the deployment workflow:

- `CLOUDFLARE_API_TOKEN`: a Cloudflare API token with Cloudflare Pages edit access for the account.

Build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`

After the preview domain works, add custom domains in the Pages project:

- `titpea.com`
- `www.titpea.com`

Keep the existing Cloudflare Email Routing records (`MX`, `SPF`, `DKIM`, `DMARC`) unchanged.
