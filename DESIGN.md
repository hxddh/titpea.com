# Titpea Design Principles

Titpea is a concise personal product site. Its design should make each tool easier to understand, not make the site feel like a generic developer dashboard or a marketing campaign.

## Use Principles, Not Templates

- Cards are valid when they give products or concepts a distinct identity. Avoid only card grids in which every item has the same visual weight and no meaningful difference.
- A layout rule is a prompt for judgment, never a mandate to replace a clearer existing structure.
- Keep the page quiet enough for technical claims, commands, screenshots, and charts to remain the focus.

## Product Hierarchy

- Give the most important product a stronger visual footprint, then make supporting products easy to scan.
- Use actual product screenshots and authentic command-shaped visuals where they explain the product better than prose.
- Do not turn product pages into abstract workflows. Explain the real runtime, boundary, inputs, and outputs.

## Page Composition

- A product page should earn every section. Prefer a short sequence of product-specific evidence over a fixed template with repeated claims.
- For core tools, the usual shape is: what the tool changes, how it works, and what remains after the run. FAQ is for adoption blockers, not a second feature list.
- Keep the section directory for long desktop product pages only. Style it as a text directory, not a row of pills. The directory names the product, then the product's own section kickers — not Overview, Fit and limits, or Questions & how-to. On mobile it is a normal, horizontally scrollable directory rather than a sticky control.
- Use one source of truth for each product fact. Repeating a claim in the hero, proof strip, body, and FAQ weakens the page instead of strengthening it. The section after the hero should not inventory the lead. FAQ asks the extra fact (an Intel Mac build, a first-open warning), not the platforms line already in the meta.

## Typography And Copy

- Load Inter for Latin. CJK falls back to the system face. Do not list a webfont that is never fetched.
- Display headings use weight 600 and tighter negative tracking at large sizes. Do not create hierarchy only by jumping to 700 at default letter-spacing.
- Hero headings should feel editorial: large type, short copy, one or two lines. Shorten copy before shrinking the type. Section titles stay quieter than the hero so the page has one display voice.
- Product descriptions should be compact and factual. Avoid generic phrases that could describe any developer tool.
- Chinese copy should read as natural technical Chinese. Keep command names and established terms such as `skill` and `trace` when translation reduces clarity.
- `mono` is for meta, commands, terminals, and data labels. Navigation, buttons, kickers, eyebrows, footer, menu group titles, catalog roles, and the product section directory use `sans`. Navigation group labels stay short.

## Visual Language

- Preserve a print-neutral stone paper, warm-black ink, and restrained controls. Do not add a decorative body grid, and do not use cool gray-50 / indigo chip leftovers from a generic dashboard palette.
- Product and About heroes are left-aligned. Captions sit below screenshots, not as overlay pills. Screenshots do not scale on hover. The homepage first screen is the featured pair, not a slogan block with duplicate CTAs. The home heading is a quiet index line; the featured heading names the two jobs in the photographs. Featured product names outrank the catalog list. Featured screenshots sit in a shared 3:2 plate so the pair and captions align. Taller shots crop from the bottom rather than leaving a hole above the shorter photograph. Do not crop them to a 16:10 tile. Catalog roles use sans, not uppercase mono. The remaining products are a two-column text list with hairline separators, not a mosaic of equal-weight cards. The catalog heading names what is there; it does not call them leftovers.
- Equal-weight product sections — fit and limits, features, and similar — are two-column hairline lists. Card titles name the actual limit or surface (`Apple Silicon and Windows`, `The tray does not approve`), not CMS labels that could sit on any product (`Current platforms`, `Local by design`, `What it isn't`). Numbered workflows stay as step mosaics; charts, terminals, and the Pulse menu-bar visual keep the box that is the product. The mobile menu is a hairline list, not a 1px tile stack.
- Hairlines should recede: borders use ink or white at low opacity, not a painted gray card frame. Real product screenshots sit on paper with no card fill, no radius, and no drop shadow. Charts, terminals, and CSS product mocks keep the box that is the product, but they sit on paper without a site drop shadow. Window-shaped mocks may keep a modest radius; site chrome, menus, mosaics, and figures are square.
- Product and About hero actions — and the closing CTA — are typographic links with a 44px hit area, not filled capsules. Keep the `.button.primary` class so the href contract still resolves. Kickers and eyebrows are quiet sans bylines, not a second mono heading system.
- The site wordmark is the word Titpea. Do not put a filled mark, app icon, or letter tile in the header. Navigation dropdowns and the mobile menu are hairline lists on paper, not floating rounded panels with tile hover states. Language and theme controls are text, not boxed icon buttons. Theme reads `Dark` / `Light` (and `深色` / `浅色`), the same as the language switch. Section titles after the product hero stay in the featured `h2` band (`clamp(1.65rem, 3vw, 2.05rem)`); the product `h1` is the only display size on the page.
- Proof chips are optional. When they appear, they are sans labels on paper, not bordered pills. Short product pages should omit them when the same facts already live in the hero, workflow, or FAQ. Workflow evidence tags are mono text, not chips.
- Use color sparingly and semantically. Do not add gradients, glow, or decorative effects merely to create visual impact.
- Site radius tokens are zero. Do not reintroduce iOS radii on chrome, mosaics, or photographs. Product-window mocks are the exception.

## Constraints (Measurable Floors)

Principles above are prompts for judgment. The rules below are not — they are hard
floors that a change either meets or fails, and several are enforced in CI. When a
principle and a constraint seem to disagree, satisfy the constraint and rework the design.

- Accessibility
  - Text contrast: body and labels at least 4.5:1; text 18px+ or non-text at least 3:1.
    `--faint` is a border/decoration token and must not be used for text.
  - Interactive targets are at least 44x44px.
  - Motion respects `prefers-reduced-motion`.
  - Every image has an `alt`; decorative images use `alt=""`.
- Performance
  - No layout shift: every `<img>` declares intrinsic `width`/`height`.
  - Keep CSS in external stylesheets so the strict CSP never blocks an inlined `<style>`.
- Tokens are the single source of truth
  - Spacing, radius, type size, and color come from `tokens.css`; components avoid magic numbers.
  - `mono` is for meta, commands, terminals, and data labels; `sans` is for headings, prose, navigation, buttons, kickers, eyebrows, footer, menu group titles, catalog roles, and the product section directory.
  - Hero headings stay within two lines.
- Responsive
  - Breakpoints are 900px (tablet to single column) and 640px (phone).
  - For bilingual layouts, size shared cards for the longer language so the Chinese page
    does not leave large gaps.

## Color Semantics

Color is used sparingly and always carries meaning. The palette lives in `tokens.css`.

| Role             | Token / value            | Meaning                                        |
| ---------------- | ------------------------ | ---------------------------------------------- |
| Ink              | `--ink`                  | Primary text, primary actions, active state    |
| Muted            | `--muted`                | Secondary text and quiet labels (AA compliant) |
| Faint            | `--faint`                | Hairlines and decoration only — never text     |
| Line / soft line | `--line` / `--soft-line` | Card dividers and borders                      |
| Reference green  | `#16a56c` family         | A baseline or recommended data point           |
| Caution orange   | `#d97706` family         | An outlier or value that needs attention       |

Do not introduce a third accent color or use green/orange decoratively.

## Review Before Release

- The pipeline enforces most of this automatically: `visual:check` compares desktop and
  mobile baselines, `qa:pages` checks overflow, navigation, anchors, and the mobile menu,
  `a11y:check` runs structural checks, and `facts:external` keeps external claims fresh.
  After an intentional visual change, refresh the baselines with `npm run visual:approve`.
- Still review by eye: title line count, text density, image cropping, and horizontal overflow.
- Every product claim must be traceable to project documentation, a screenshot, a test result, or source code.
