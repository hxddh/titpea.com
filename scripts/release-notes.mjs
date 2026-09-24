// Release highlights for product pages: a one-line summary and up to three
// items from a release's own notes. Text is quoted and trimmed, never
// rewritten; a release whose notes yield nothing shows no section.

const MAX_ITEMS = 3;
const cjk = /[　-鿿＀-￯]/;

const plain = (text) =>
  text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/(^|\s)[*_]([^*_]+)[*_](?=\s|$|[.,;:])/g, "$1$2")
    .replace(/\s+/g, " ")
    .trim();

/** Joins wrapped lines; CJK text continues without a space. */
const join = (left, right) => (cjk.test(left.slice(-1)) || cjk.test(right[0]) ? left + right : `${left} ${right}`);

function clip(text, max) {
  if (text.length <= max) return text;
  let cut = text.slice(0, max - 1).trimEnd();
  // Never leave a code span open: drop the half-quoted span instead.
  if ((cut.match(/`/g) ?? []).length % 2 === 1) cut = cut.slice(0, cut.lastIndexOf("`")).trimEnd();
  return `${cut.replace(/[，,、；;:：]$/, "")}…`;
}

const tidy = (text) =>
  plain(text)
    .replace(/\s*[—–:：-]\s*$/, "")
    .replace(/[.。]$/, "");

function item(bullet) {
  const bold = bullet.match(/^\*\*(.+?)\*\*/);
  // A bold lead that is a sentence ("A throttled run says it was throttled.")
  // is the item; a short label ("Prefix —") is not enough on its own.
  if (bold && (bold[1].split(/\s+/).length >= 3 || cjk.test(bold[1]))) return clip(tidy(bold[1]), 110);
  if (bold) return null;
  const text = plain(bullet);
  if (cjk.test(text)) return clip(tidy(text.split(/[：；。]/)[0]), 48);
  return clip(tidy(text.split(/(?<=[.!?])\s/)[0]), 110);
}

/** Top-level bullets, in order, reduced to one line each. */
export function highlightsFrom(markdown = "") {
  const bullets = [];
  let current = null;
  for (const line of markdown.split(/\r?\n/)) {
    const bullet = line.match(/^[-*] (.+)/);
    if (bullet) {
      if (current) bullets.push(current);
      current = bullet[1].trim();
    } else if (current !== null && /^\s{2,}\S/.test(line)) {
      current = join(current, line.trim());
    } else if (current !== null) {
      bullets.push(current);
      current = null;
    }
  }
  if (current) bullets.push(current);
  return bullets
    .map(item)
    .filter((text) => text && text.length > 3)
    .slice(0, MAX_ITEMS);
}

/**
 * One-line summary: the release name without its tag ("11.0.3 — Durable
 * evidence" → "Durable evidence"), else the first prose line of the notes.
 */
export function summaryFrom(name = "", markdown = "", version = "") {
  const bare = version.replace(/^v/, "");
  const fromName = plain(name)
    .replace(new RegExp(`^v?${bare.replaceAll(".", "\\.")}\\s*`), "")
    .replace(/^[—–:\-·\s]+/, "");
  if (fromName && fromName !== plain(name).replace(/^v/, "") && !/^v?\d+\.\d+/.test(fromName))
    return clip(tidy(fromName), 90);
  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s/.test(line)) continue; // continuation of a bullet
    const text = line.trim();
    if (!text || /^(#|[-*] |\||>|```|See )/.test(text)) continue;
    const first = plain(text).split(cjk.test(text) ? /[。；]/ : /(?<=[.!?])\s/)[0];
    return clip(tidy(first), 90);
  }
  return "";
}

/** The section of a changelog for one version, plus its heading text. */
export function changelogSection(changelog, version) {
  const bare = version.replace(/^v/, "");
  const lines = changelog.split(/\r?\n/);
  const start = lines.findIndex((line) =>
    new RegExp(`^##\\s+\\[?v?${bare.replaceAll(".", "\\.")}\\]?(\\s|$)`).test(line),
  );
  if (start < 0) return { heading: "", body: "" };
  const end = lines.findIndex((line, index) => index > start && /^##\s/.test(line));
  return {
    heading: lines[start].replace(/^##\s+/, "").replace(/\s+-\s+\d{4}-\d{2}-\d{2}$/, ""),
    body: lines.slice(start + 1, end < 0 ? undefined : end).join("\n"),
  };
}
