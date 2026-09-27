# Titpea Design Principles

Titpea is a personal product site. Each product page reads like a product launch page: one clear claim, the product itself shown large, then a short run of evidence. The home page is a directory built from the same pieces. The reference is the Omni page (hanxiao.io/omni): centered heroes, glass chrome, large photographs, feature cards, and a FAQ you can open.

## When Rules Compete

Protect them in this order:

1. Facts and CI floors: contrast, 44px targets, CSP, headline length and line count, external release tags.
2. The reader's job on that page: what the tool changes, how it runs, what remains.
3. The page shape below: centered hero → product object → sections → closing action.
4. Craft: type, spacing, depth, bilingual density.

When a principle and a constraint disagree, satisfy the constraint and rework the design.

## Page Shape

Every page uses the same few parts. Build new content from them before inventing a new part.

- **Chrome.** A glass pill header (`.site-header-bar.glass`) holds the wordmark Titpea, the four product lines as dropdowns, About, GitHub, language, and theme. On product pages the header scrolls away and the **local nav** pins instead: a glass pill with the product name, at most four section links (the first sections, then `Get started` and `FAQ`), and one filled primary action. On narrow screens the section links collapse behind a `Sections` / `目录` disclosure and the action hides only when that disclosure is present.
- **Hero.** Centered, over a soft color wash (`.wash`). Eyebrow, then `h1`, then a balanced lede, then actions, then a mono meta line. Product heroes put the product object below the copy, centered.
- **Product object.** Real screenshots sit in the wide frame (1040px) as photographs: rounded (`--radius-shot`), lifted (`--shadow-shot`). CSS mocks, terminals, and charts stay in the narrow frame (820px) so their type keeps product scale. They keep their own window contour (`--radius-window`).
- **Section.** A centered section head (`h2` at `--title-section`, optional `.sub`), then one object: a feature grid, a showcase photograph, a numbered flow, a panel, or the FAQ. No kicker above section headings: the heading carries the section alone. A section's `label` / `kicker` is only its name in the local nav. On product pages a small label above text survives only as the hero eyebrow, the label on a captured object (`httpmon v1.2.1 · captured output`), and the release date over What's new.
- **Feature cards.** `--paper-raised` fill, `--radius-card`, no border, no shadow. The grid picks its columns from the item count: 1 is a narrow single column, 2 and 4 are two columns, anything else is three. A `primary` card spans the row. Numbered flows use an accent step badge. **A page carries at most six cards, feature cards and numbered steps together**; a card body adds to its title and never repeats it (`npm run check` enforces both). On phones plain feature cards pair up in two columns, as Omni does; numbered flows and panels stay one column.
- **Stats band.** A short sentence heading and 2–4 large figures, each with a few words of label. Only figures traceable to the product's README, docs, or tests; never derived or rounded into a bigger claim. Omit the band when the hero object already shows the numbers (s3-turbo-list's chart).
- **Showcase.** A compact head (`--title-show` heading, sub) above a full-width photograph. A showcase may carry a short muted recording (`video`) with the photograph as its poster; it plays only in view, never under reduced motion, and has a Pause / Play button. Screenshots and recordings come from the real app with real output: never a scripted model, staged answer text, or a mock presented as a capture. Recordings are made per language from the app's own UI (`scripts/record-board-demos.mjs` drives Goban's replay); the poster is the recording's last frame.
- **Commands.** `Get started` / `开始使用`: the install and first-run commands, each with a Copy button, sitting just before the FAQ. Only commands that appear verbatim in the product's README; a desktop app whose install is a download gets no command block. A command may carry `capturedOutput`: the real output of that exact command at a named version, behind `Show real output` / `查看实际输出`. Never hand-written.
- **FAQ.** A disclosure list (`details.faq-item`) on hairlines, first answer open. Only adoption blockers not already on the page.
- **Release tag.** When the primary action downloads a GitHub release, the button carries the current tag (`Download v1.17.3`). The hero meta line ends with the release date (`Released Sep 4, 2026` / `2026年9月4日发布`), and catalog cards show tag and date. Tags and publish dates come from `releases.json`, which CI refreshes before every build and checks daily, redeploying only when one changed; nobody edits a version or date by hand. Dates are absolute, never "3 days ago", because the site does not rebuild every day.
- **What's new.** When a release's notes yield a summary or highlights, the page shows `What’s new in v1.17.3.` / `v1.17.3 更新了什么` before the commands and FAQ: the release date, a one-line summary, up to three items quoted from the notes (bold leads or first clauses, never rewritten), and a link to the full notes. Only lines in the page's language are quoted; with none left, the section is one line: `v12.0.0 · 2026年9月5日 · 发布说明 ›`. `scripts/sync-releases.mjs` refreshes them with the tag and lists every quoted line in the CI run summary for the owner to read. A product may set `releaseHighlights` (per language, pinned to one tag) to replace the quoted lines with hand-written ones; it applies only while that tag is the latest release.
- **Terminal objects.** A CLI hero that shows a terminal uses real captured output from a named version, said in its kicker (`httpmon v1.2.1 · captured output`); otherwise it is labeled illustrative.
- **Closing action.** Every product page ends on it: the app icon when there is one, the product name, and the hero's two actions again (the download keeps its release tag). `finalCta` only renames the filled button. It never restates the hero headline.
- **Where next.** After the closing action, one quiet row: `More in {line}` / `更多{line}工具` in small type, three products as icon and name (no cards, one-liners, or tags), taken from the rest of the product's line in site order after it, then from the other lines (the label becomes `More tools` / `更多工具`), and an `All tools` link. A product page never dead-ends, and its ending stays one band.
- **Footer.** On desktop (except 404, whose page already lists every product), a map of the site: one column per product line with every product, then a Titpea column (Home, About, the releases feed, GitHub, the other language). Phones skip the map (the menu already lists every product). Then copyright on the left and email on the right.
- **Code in copy.** Product copy writes code as `` `code` ``; `Prose.astro` renders it as an inline code chip and structured data drops the backticks. `check:dist` fails if a raw backtick reaches page text.

## Home

**Settled direction — the owner decided this twice (PR #150, PR #153).** Home follows Omni: the icon hero with two actions, then stacked showcase rows with lifted, rounded screenshots, then the catalog. Do not bring back the side-by-side hairline pair, a compact hero with no actions, or flat unshadowed screenshots, even to fit both captures on the first screen. Propose a change to this direction in a pull request for the owner to decide; never push it straight to `main`.

- The hero opens on the shelf of app icons (two rows of seven, every product), each a link to its product whose name appears in a small glass label when pointed at or focused (above the top row, below the bottom row), then `Independent software by hxddh`, the contents line (`Agents and tools.` / `Agent 和工具`), and a lede that names the range in three fragments. Two actions: `Browse all tools` jumps to the catalog; `About hxddh ›` is the text link.
- `Selected work` / `主要作品` introduces two showcase rows: role kicker, product name, one-liner, `Learn more ›`, then the full captured screenshot. The whole row is one link. On phones the screenshot becomes `featured.detail`, a crop of the same real capture where its text is legible (the reading, the cited answer), its cut edge fading out; `npm run assets:images` writes it.
- `More tools` / `更多工具` groups the rest into Storage, Agents, Everyday, and Experimental. Each product is a raised card, all of it one link: role kicker (the catalog role, or the product eyebrow when there is none), name, one-liner, then the release tag chip and an arrow. A product without GitHub releases shows a chip saying where it lives instead (`Chrome Web Store`, `Python`; `catalog.badge`, or the first part of its meta line), so every card ends on the same row. Every card shows its app icon in the top right. A product belongs to one line, and the header dropdowns use the same four lines.

## About

The page answers, in order: what Titpea is, what it holds, how the tools behave, what shipped lately, and how to reach the person behind it.

- Hero: `About Titpea` / `关于 Titpea`, the claim `One person. {count} tools.` / `一个人，{count} 个工具` with the live product count, and one lede naming the range. No actions in the hero.
- Stats in the hero: products, product lines, products with GitHub releases, and total GitHub releases published. Every figure is computed at build from the product files and `releases.json`; the release total appears only when every repository reported its count.
- `Four lines of work.`: one raised card per line, listing its products with icons, each a link.
- `How the tools work.`: four cards. Three habits, each restating facts already on product pages, and `Source in the open` with the open-source count and licenses read from each product's meta line.
- `Latest releases.`: the six newest, with icon, tag, date (on phones too), and the first quoted highlight in the page's language, or none; the rest fold under `All releases (n)`.
- Closing band: `Say hello.` with GitHub, Email, and the Atom feed.
- No personal details beyond what the owner has published; nothing about the person is inferred.

## Releases Feed

- `sitemap.xml` gives each product page a `lastmod` of its latest release date, and Home and About the newest release anywhere; pages without such a date carry none (never the build date).
- `/releases.xml` is an Atom feed of every product's latest release, newest first, built from `releases.json`. Every page links it in `<head>`; About links it under `Latest releases.`

## 404

- Home, the Chinese home, and a two-column directory of every product with its icon.

## App Icons

- Every product has an icon, and every list of products shows them (the home shelf, catalog cards, About, the release list, 404, share images). `npm run check` fails without one.
- Official artwork is used where it exists, clipped to the site tile (radius 22.5%). Otherwise the icon is site-designed from `design/icons/<slug>.svg`: a 1024 tile with a top sheen and one image that says what the product does — a turbine for s3-turbo-list, a prism for httpmon, a phosphor radar for Agent Radar. Each has its own colour so no two read alike, the mark survives 28 px, and no third-party logo appears.
- `npm run assets:icons` renders `public/assets/icons/<slug>.webp`. `design/icons/README.md` records which icons are official and which are site-designed.

## Analytics

- Cloudflare Web Analytics, cookieless. The zone's "automatic setup" site injects the beacon at the edge (`site.analyticsAutoInjected`), so pages carry no token; the CSP allows only that script (`static.cloudflareinsights.com`) and its endpoint (`cloudflareinsights.com`). Before the CSP allowed them, the injected beacon was blocked and the dashboard read 0.
- `site.analyticsToken` is only for the JS-snippet method with automatic setup turned off; never both, or every view counts twice.
- Whenever either is on, About shows the one-line disclosure.

## Share Images

- `npm run assets:og` renders every 1200×630 card from the page copy. A product with a screenshot gets the split card (icon, name, headline, catalog line on the left, the screenshot bleeding off the right edge); other products get the centered card with their icon; Home shows the icon row.

## Product Pages

- `h1` is the claim (`copy.headline`), not the product name: a short declarative sentence. English ≤ 24 characters plus a closing period; Chinese ≤ 18 characters, no closing punctuation. It stacks into two lines at most at every breakpoint. Shorten copy before shrinking type.
- The eyebrow is `{title} · {eyebrow}`. Products with an app icon show it above the eyebrow and in the local nav.
- Hero actions: one filled `.button.primary.large` and one `.button.ghost` text link with a chevron. Keep 2–3.
- Earn every section. Short products may be hero, one showcase, and one card grid. A panel section needs a real object, not copy restating the hero.
- One source of truth per fact. The section after the hero does not inventory the lead, and FAQ asks the extra fact, not the platforms line already in the meta.
- Label schematic interface examples explicitly; they are not captured execution evidence.

## Voice

Omni says each thing once, in as few words as the fact allows. The figures and the photographs carry the claim; the words label them.

- **Lead**: 2–3 fragments, each ending in a period ("Read-only checks. Local keys. Evidence in the session."). Chinese uses 2–3 短句 with 。.
- **Section headings** are one declarative sentence ("Every check leaves evidence."). English ends with a period; Chinese has no closing punctuation. On pages with a local nav, each section also sets a 1–4 word `nav` label.
- **Cards**: a 2–4 word title and a 3–12 word fragment. One idea per card. At most six per page: the main grid holds 3 or 6 equal-weight cards, and a numbered flow is kept only when order matters (a grid plus a flow share the six).
- **Showcases**: a short sentence over the photograph ("Scans become Markdown.").
- **FAQ**: headed `FAQ` / `常见问题`. Questions are questions. Answers are full sentences and carry the conditions that do not fit a card.
- Shortening never drops a qualifier: support that depends on the agent, pre-alpha status, "after a successful write", "only when the match is reliable", data posture. A condition that does not fit a card moves to the FAQ.
- No new claims in the name of brevity: no "fast", "only", "seamless", or numbers that are not in the product's docs.

## Type

- System face first (`-apple-system`, SF Pro), then Inter for Latin elsewhere, then the system CJK face. Do not load a CJK webfont.
- Display weight is 700 with tight tracking (`-0.035em` on the hero, `-0.03em` on section heads). Chinese (`:lang(zh)`) uses `-0.005em` on headings and no tracking at all on reading text, which is 16px (`--text-card-body` steps up) at line-height `1.75` and wraps with `text-wrap: pretty` so no character is stranded on a last line. At the same pixel size CJK reads smaller than Latin.
- Sizes come from tokens: `--title-hero`, `--title-display`, `--title-section`, `--title-show`, `--text-lede`, `--text-sub`, `--text-kicker`, `--text-card-title`, `--text-card-body`, `--text-list-body`, `--text-catalog-name`, and the floor `--text-small` (14px) / `--text-meta` (13px). Nothing outside a hero product mock is smaller than 13px; mocks keep at least 12px. Reading text is at least 15px on phones too; FAQ answers are `--text-list-body` (16px).
- Reading text (card bodies, FAQ answers, catalog one-liners, panel copy) is `--ink-2`, at least 7:1. `--muted` is for labels, dates, chips, captions, the lede and subs. Headings, names, and About body are `--ink`.
- `mono` is for release tags, commands, terminals, evidence labels, and data. The hero meta line is `sans` at 14px with only its tag in mono.
- `npm run a11y:check` holds both floors on every page, theme, and viewport: reading text 7:1, no text under 13px outside hero mocks.

## Color and Depth

| Role                | Token                                  | Meaning                                            |
| ------------------- | -------------------------------------- | -------------------------------------------------- |
| Canvas              | `--paper`                              | Page background                                    |
| Raised              | `--paper-raised`                       | Feature cards, catalog cards, panels               |
| Ink / ink-2 / muted | `--ink` / `--ink-2` / `--muted`        | Headings; reading text (7:1); labels (AA)          |
| Faint               | `--faint`                              | Decoration only, never text                        |
| Accent              | `--accent-fill`, `--link`, `--accent`  | The filled primary action, links, and focus rings  |
| Glass               | `--glass`, `--glass-blur`, `--menu-bg` | Header and local nav bars; near-opaque menu panels |
| Wash                | `--wash-1..3`                          | Hero background only                               |
| Reference / caution | `--data-ref` / `--data-caution`        | A baseline or recommended data point / an outlier  |

- One accent. Do not use green or orange decoratively.
- Depth is a token decision: shadows, blur, and gradients in page stylesheets come only from `tokens.css`. `architecture:check` enforces this.
- Glass is for chrome. Content never floats. Menu panels use `--menu-bg`, because a glass panel nested in a glass bar cannot blur the page behind it.
- Dark mode is a first-class theme (OS preference or the header toggle), with pure black canvas and a `#161617` raised tone.

## Interaction

- The header dropdowns and mobile menu are `<details>` with outside-click and Escape close.
- The local nav highlights the section in view, scrolls to the exact offset on click, and closes its narrow-screen disclosure on outside click, Escape, or selection.
- Copy buttons appear only where the Clipboard API exists and read `Copied` / `已复制` for a moment after a write.
- Capsules press to `scale(0.98)`; catalog cards lift 4px with `--shadow-card-hover` and their arrow nudges right; hero icons rise on hover.
- Product screenshots are buttons: a click opens the full image in a `<dialog>` over a blurred backdrop (`zoom.js`). Esc, Close, or any click closes it. On phones the image opens 960px wide and pans sideways.
- Cards, showcase photographs, and stats below the fold rise into place once as they scroll in, a beat apart within a row (`reveal.js`). Anything already on screen at load never hides.
- `prefers-reduced-motion` turns off smooth scroll, the lift, the reveal, and transitions.
- No script is inline; CSP stays `script-src 'self'; style-src 'self'`.

## Constraints (Measurable Floors)

- Accessibility
  - Text contrast: at least 4.5:1 for body and labels, and 3:1 for text 18px+ or non-text. White on `--accent-fill` passes in both themes.
  - Interactive targets are at least 44×44px. Compact capsules extend their hit area with a pseudo-element.
  - Every image has an `alt`; decorative images use `alt=""`.
- Performance
  - Every `<img>` declares intrinsic `width` and `height`. Heroes use `fetchpriority="high"`; later photographs lazy-load.
  - Screenshots are WebP. Any screenshot 1400px or wider gets `-900w.webp` and `-1200w.webp` siblings (`npm run assets:images`), offered through `srcset`, so phones and tablets fetch a smaller file. The Inter font is preloaded. Zoom always opens the original.
  - CSS stays in external stylesheets so the strict CSP never blocks an inlined `<style>`.
- Responsive
  - Breakpoints are 1000px (feature grids go to two columns), 900px (header nav → menu; local nav links → disclosure), and 640px (16px gutter; feature cards two columns, everything else one).
  - Chinese headings break at punctuation and spaces, never inside a word (`word-break: keep-all`).
  - For bilingual layouts, size shared cards for the longer language.

## Review Before Release

- The pipeline enforces most of this:
  - `check` (source): headline and lead lengths, English/Chinese structure parity, generic headings, Chinese copy rules, release entries, share images, token-only depth, zh optics.
  - `check:dist` (build output): CSP and headers, one h1, landmarks, image sizes and alt text, valid structured data, Chinese headings, sitemap.
  - `qa:pages`: overflow, headline and lede lines, CTAs, sticky local nav, anchors, mobile menu.
  - `a11y:check`: axe-core (WCAG 2.1 A/AA and best practices) on every page, light and dark, desktop and phone; any violation fails.
  - `visual:check`: seven screens compared loosely: the page tops, the zh menu, an FAQ, About's principles and product lines, and 404. Section targets crop to their own section so release data synced at build never moves them.
  - Browser QA and the visual check run on pull requests and on every push to `main`; a push that fails them does not deploy.
- Still review by eye, in this order:
  1. First read: from the first viewport alone, does the reader know what the product changes?
  2. Language: did simplification keep every qualifier?
  3. Composition: one dominant object per section, and a grid whose geometry matches the argument.
  4. Rhythm: one owner per gap. Sections use padding-top only.
  5. Restraint: if a card, section, or line can go without losing meaning, remove it.
- Every product claim, figure, and command must be traceable to project documentation, a screenshot, a test result, or source code.

## Content release, September 2026

- Home groups are Storage, Agents, Everyday, and Experimental. Keep experimental maturity visible.
- Storage Agent leads with the existing investigation result screenshot. The welcome image is a secondary starting-point illustration.
- Product copy starts with an action and result. Preserve conditions on model data, waiting signals, and successfully persisted sessions. Do not promise zero data loss from a recovery feature.
- Keep each metadata segment together when wrapping, including license names.
