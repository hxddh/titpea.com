// Each live demo's stylesheet loads only on the pages that render that demo.
// One route renders every product, so a static import would put every demo on
// every product page; these are linked in <head> by ProductPage instead.
import bilingual from "../../styles/demo-bilingual.css?url";
import chess from "../../styles/demo-chess.css?url";
import pulse from "../../styles/demo-pulse.css?url";
import readout from "../../styles/demo-readout.css?url";
import replay from "../../styles/demo-replay.css?url";
import worldClock from "../../styles/demo-world-clock.css?url";
import type { ProductCopy } from "../../content/schema";

const byDemo = { bilingual, chessPuzzle: chess, readout, worldClock } as const;

/** The demo stylesheets a product page needs: its hero object, its demo sections, and captured replays. */
export function demoStyles(copy: ProductCopy): string[] {
  const styles = new Set<string>();
  if (copy.visual.kind === "demo") styles.add(byDemo[copy.visual.demo.kind]);
  if (copy.visual.kind === "menuBar") styles.add(pulse);
  for (const section of copy.sections) if (section.kind === "demo") styles.add(byDemo[section.demo.kind]);
  if (copy.commands?.items.some((item) => item.capturedOutput && item.replay)) styles.add(replay);
  return [...styles];
}
