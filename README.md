# Titpea Personal Site

Astro static site for `titpea.com`: a bilingual personal product catalog for hxddh's two lines — S3 storage ecosystem tools (Storage Agent, s3-turbo-list, StorageOps, httpmon) and personal/everyday products (PageWise, Pulse, Agent Radar, World Clock, Douban Movie Rating Assistant, Goban, Chessboard, Easier Bookmarks).

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

See [DESIGN.md](DESIGN.md) for design principles and review rules, and [AGENTS.md](AGENTS.md) for how agents should load that guidance.

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
