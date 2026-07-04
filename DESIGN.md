# Titpea Design Principles

Titpea is a concise personal product site. Its design should make each tool easier to understand, not make the site feel like a generic developer dashboard or a marketing campaign.

Visual direction uses a warm editorial surface: cream paper, orange accent, flat backgrounds, and one demo per product page.

## Use Principles, Not Templates

- Cards are valid when they give products or concepts a distinct identity. Avoid repeating the same product in multiple list styles on one page.
- A layout rule is a prompt for judgment, never a mandate to replace a clearer existing structure.
- Keep the page quiet enough for technical claims, commands, screenshots, and charts to remain the focus.

## Product Hierarchy

- Give the most important product a stronger visual footprint, then make supporting products easy to scan.
- Use actual product screenshots and authentic command-shaped visuals where they explain the product better than prose.
- Do not turn product pages into abstract workflows. Explain the real runtime, boundary, inputs, and outputs.

## Page Composition

- Home uses three layers: centered hero, storage catalog grid, personal catalog grid.
- About uses hero, compact tool index, and contact actions.
- Product pages group content into chapters. The hero holds the only full-size demo.
- Section titles inside chapters are h3. Chapter titles are h2. Page titles are h1.
- A product page should earn every section. FAQ is for adoption blockers, not a second feature list.
- Keep the chapter directory for long desktop product pages only. On mobile it is a normal, horizontally scrollable directory.
- Use one source of truth for each product fact.

## Typography And Copy

- Hero headings should normally fit in one or two lines. Shorten copy before shrinking the type.
- Product descriptions should be compact and factual.
- Chinese copy should read as natural technical Chinese. Keep command names and established terms when translation reduces clarity.

## Visual Language

- Use the warm editorial surface: cream paper, dark ink, restrained borders, and demo frames with soft shadow.
- Orange accent (`--accent`) marks primary actions, active nav, and hover emphasis.
- Home and About heroes are centered. Product heroes are two-column with the demo on the right.

## Constraints (Measurable Floors)

- Accessibility: body and labels at least 4.5:1; interactive targets at least 44x44px; motion respects `prefers-reduced-motion`.
- Performance: every `<img>` declares intrinsic `width`/`height`; CSS stays in external stylesheets.
- Tokens are the single source of truth in `tokens.css`.
- Responsive breakpoints: 900px and 640px.

## Color Semantics

| Role   | Token        | Meaning                               |
| ------ | ------------ | ------------------------------------- |
| Paper  | `--paper`    | Page background                       |
| Panel  | `--panel`    | Cards, demo frames                    |
| Ink    | `--ink`      | Primary text                          |
| Muted  | `--muted`    | Secondary text                        |
| Label  | `--label`    | Meta, eyebrows                        |
| Accent | `--accent`   | Primary buttons, active nav, emphasis |
| Green  | data-ref     | Baseline or recommended data point    |
| Orange | data-caution | Outlier or attention data point       |

## Review Before Release

- Run `visual:check`, `qa:pages`, `a11y:check`, and `copy:lint` before release.
- After intentional visual change, refresh baselines with `npm run visual:approve`.
- Every product claim must be traceable to documentation, a screenshot, a test result, or source code.
