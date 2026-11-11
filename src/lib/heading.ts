/**
 * A section heading as the page sets it (design v4): a label, not a sentence,
 * so an English heading's closing period is dropped. The copy keeps its
 * period, so a heading still reads as a sentence where it is quoted.
 * Chinese headings carry no closing punctuation already.
 */
export const headingText = (text: string) => text.replace(/\.$/, "");
