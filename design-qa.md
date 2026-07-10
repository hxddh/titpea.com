# Titpea Field Notes Studio — Design QA

- Source visual truth: `/Users/rustjia/.codex/generated_images/019f4c0b-1b98-7670-8eaa-3dd7f8bf5d74/exec-b8e0a459-7a48-46b4-a219-a087b89bed29.png`
- Browser-rendered implementation: `/tmp/titpea-home-zh-final-flattened.png`
- Side-by-side comparison: `/tmp/titpea-reference-vs-final.png`
- Desktop viewport: 1488 × 1058, light theme, `/zh/`, default Config finding
- Mobile viewport: 390 × 844, light theme, `/zh/`
- Browser: Codex in-app browser

## Full-view comparison evidence

The final desktop capture was compared with the selected concept at the concept's native viewport. The first viewport preserves the reference hierarchy and sequence: compact header, two-line thesis, principles rail, two CTAs, investigation notebook, recent field notes, and work-index entry. The finding panel begins at the same vertical position and has the same 370px visual height as the reference.

## Focused comparison evidence

Focused inspection covered the hero title wrap, CTA geometry, finding tabs, evidence rows and code surface, handwritten notebook column, source artifact treatment, and both field-note rows. These details were readable at native size, so no additional crop was needed.

## Fidelity ledger

| Surface          | Concept evidence                                                         | Render evidence                                                                                             | Result |
| ---------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------ |
| Copy             | Chinese thesis, local/read-only/evidence-first lead, three principles    | Same information and order; no unapproved hero copy                                                         | Passed |
| Layout           | Two-column hero above a three-column notebook                            | Same composition; 1248px shell and 150px / fluid / 340px notebook grid                                      | Passed |
| Typography       | Heavy two-line CJK display title, restrained body and monospace evidence | Title line break and hierarchy match; UI and evidence type are deliberate                                   | Passed |
| Palette          | Warm paper, black ink, muted rules, evidence green, caution amber        | Tokens map to the same palette without overlays or gradients                                                | Passed |
| Asset treatment  | Product UI is code-native; no photography or illustration assets         | Real semantic HTML interface, Phosphor icons, no placeholder/CSS illustration                               | Passed |
| Spacing          | Finding panel ends before both recent-note rows                          | 370px panel height leaves both rows visible at 1488 × 1058                                                  | Passed |
| Responsive       | Reference implies a clean compact continuation                           | 390px layout has no horizontal overflow; tabs collapse to a horizontal control and content remains readable | Passed |
| Motion and state | Config is selected and other investigation trails are implied            | Config/Logs/Inventory are keyboard- and pointer-operable; reduced-motion is respected                       | Passed |

## Above-the-fold copy diff

No unapproved Chinese copy was added. The implementation localizes desktop navigation (`作品`, `笔记`, `关于`) and the language switch (`English`) because the verified route is the existing Chinese locale. The English hero uses the compact equivalent “Make storage problems verifiable” so it stays within the repository's three-line mobile title contract.

## Comparison history

1. Pass 1 found two P2 differences: the investigation notebook was about 40px too tall, clipping the second field note, and the homepage exposed a theme control not present in the concept. The panel density was tightened, the source column widened, and the homepage-only theme control was removed.
2. Pass 2 found one P2 typography difference: global balanced heading wrapping broke the thesis before `题，`, unlike the selected concept. The homepage heading now uses natural wrapping while preserving the same vertical rhythm.
3. Final pass found no actionable P0, P1, or P2 differences. P3 refinements added caution-value syntax emphasis and the bordered source artifact shown in the concept.

## Functional and browser checks

- Page identity: `Titpea` at `/zh/`
- Blank/error overlay: meaningful content rendered; no framework overlay
- Console: no relevant warnings or errors
- Investigation interaction: selecting `日志` set `aria-selected="true"` and revealed `未完成的分片上传持续占用空间`
- Navigation interaction: `笔记` moved to `#notes` and exposed `Recent field notes`
- Mobile menu: opened successfully and exposed product links
- Mobile overflow: document scroll width 390px at a 390px viewport

## Remaining intentional deviations

- Locale-aware navigation replaces the concept's English nav labels on the Chinese route.
- Exact handwritten font availability is platform-dependent; the notebook uses an ordered system handwriting fallback stack.

## Findings

No actionable P0, P1, or P2 findings remain.

final result: passed
