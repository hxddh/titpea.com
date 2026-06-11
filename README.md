# Titpea Personal Site

Astro static site for `titpea.com`: a personal profile page, Chrome extension product pages, and highlighted GitHub projects.

## Commands

```sh
npm install
npm run dev
npm run build
```

## Cloudflare Pages

Create a Pages project and use:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`

After the preview domain works, add custom domains in the Pages project:

- `titpea.com`
- `www.titpea.com`

Keep the existing Cloudflare Email Routing records (`MX`, `SPF`, `DKIM`, `DMARC`) unchanged.
