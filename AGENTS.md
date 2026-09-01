# Agent notes for Titpea

Bilingual (`en` / `zh`) Astro 6 static site for [titpea.com](https://titpea.com/). No React. Cloudflare Pages. CSP `style-src 'self'` — no inline CSS.

## Read first

- [DESIGN.md](DESIGN.md) — judgment, named refusals, measurable floors, and settled page shape.
- `src/styles/tokens.css` — spacing, type, color. Do not invent parallel tokens.

Do not dump whole stylesheets into context. Use the token and class names already on the page. Judgment stays in `DESIGN.md`; repeatable mechanics stay in CSS; anything that can be asserted stays in CI.

## After copy, layout, or style changes

```sh
npm run content:check
npm run architecture:check
npm run build
npm run copy:lint
npm run a11y:check
```

For layout or rendered copy, also run preview and:

```sh
npm run qa:pages
```

After an intentional visual change, `npm run visual:approve`, then let CI re-check. If visual CI fails on font rasterization, replace only the failed files from the `visual-baseline-<sha>` artifact.

## Ship

When CI is green, merge to `main`. `facts:external` must match GitHub latest releases (Storage Agent and Pulse tags move). Production smoke runs on the deploy job.
