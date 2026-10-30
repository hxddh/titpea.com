export const sectionIndexPolicy = {
  stickyTopPx: 0,
  desktopScrollMarginPx: 56,
  mobileScrollMarginPx: 56,
  activationViewportRatio: 0.18,
  minimumActivationOffsetPx: 44,
  /** After a click, the index re-reads the active section this much later; QA waits past it, then for a steady state. */
  clickStabilizeDelayMs: 80,
} as const;
