/**
 * A release history that contains the latest release: one entry per tag,
 * newest first, at most `limit` long. An empty history stays empty.
 */
export function withLatest(history, latest, limit) {
  if (history.length === 0) return history;
  return [latest, ...history.filter((release) => release.version !== latest.version)]
    .sort((a, b) => b.published.localeCompare(a.published))
    .slice(0, limit);
}
