# Agent notes for Titpea

Bilingual (`en` / `zh`) Astro 6 static site for [titpea.com](https://titpea.com/). No React. Cloudflare Pages. CSP `style-src 'self'` — no inline CSS.

## Read first

- [DESIGN.md](DESIGN.md) — the page shape (glass chrome, centered hero, feature cards, showcase, FAQ), measurable floors, and review order.
- `src/styles/tokens.css` — spacing, type, color, depth. Do not invent parallel tokens; shadows, blur, and gradients come only from here.

Stylesheets: `base.css` (type, buttons, photographs, wash), `chrome.css` (header, menus, product local nav, footer), `pages.css` (Home, About, legal), `product.css` (product sections), `visuals.css` (product mocks).

Do not dump whole stylesheets into context. Use the token and class names already on the page. Judgment stays in `DESIGN.md`; repeatable mechanics stay in CSS; anything that can be asserted stays in CI. Eye review follows the order in `DESIGN.md`.

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

After an intentional visual change, refresh the Linux baselines with `VISUAL_BASELINE_PLATFORM=linux npm run visual:approve` on Linux with `fonts-noto-cjk` installed (as CI does), then let CI re-check. If visual CI fails on font rasterization, replace only the failed files from the `visual-baseline-<sha>` artifact.

## Ship

When CI is green, merge to `main`. `facts:external` must match GitHub latest releases (Storage Agent and Pulse tags move). Production smoke runs on the deploy job.
