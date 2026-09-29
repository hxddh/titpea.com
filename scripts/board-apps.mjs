/**
 * Shared by capture-board-screenshots.mjs and record-board-demos.mjs: where the
 * Goban and Chessboard checkouts live, the release each capture is pinned to,
 * and the games both scripts load. A checkout at any other commit is refused,
 * so a capture always shows a released UI, never unreleased work on main.
 *
 *   git clone https://github.com/hxddh/goban /tmp/board-apps/goban
 *   git clone https://github.com/hxddh/chessboard /tmp/board-apps/chessboard
 *   git -C /tmp/board-apps/goban checkout v1.69.0
 *   git -C /tmp/board-apps/chessboard checkout v7.9.0
 *   (chessboard) node scripts/gen-engine-src.mjs && node scripts/bundle.mjs
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";

export const appsRoot = process.env.BOARD_APPS ?? "/tmp/board-apps";

/** Bump these, re-check out, and re-run both scripts when a new release ships. */
export const pinned = { goban: "v1.69.0", chessboard: "v7.9.0" };

export function assertPinned(app) {
  const dir = path.join(appsRoot, app);
  let tag = "";
  try {
    tag = execFileSync("git", ["-C", dir, "describe", "--tags", "--exact-match"], {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
  } catch {
    // Not on a tag.
  }
  if (tag !== pinned[app]) {
    throw new Error(`${dir} must be checked out at ${pinned[app]} (found ${tag || "an untagged commit"})`);
  }
  return path.join(dir, "src/web");
}

// Black completes five down the g file on move 11; the record ends there.
export const GOMOKU_SGF = `(;GM[1]FF[4]SZ[15]AP[Goban:capture]
;B[hh];W[ih];B[gh];W[hg];B[gi];W[ig];B[gj];W[jh];B[gk];W[kh]
;B[gl]
)`;

// Short decisive miniature with enough moves for a review curve.
export const CHESS_PGN = `[Event "Site capture"]
[Site "titpea.com"]
[Date "2026.07.23"]
[White "Player"]
[Black "Stockfish"]
[Result "1-0"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5
6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nb4 9. Qe4 c6 10. a3 Na6
11. d4 Kd6 12. Bf4+ Ke7 13. Bxd5 cxd5 14. Nxd5+ Ke8
15. Nf6+ gxf6 16. Qxe5+ Be7 17. Qxe7# 1-0`;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".wasm": "application/wasm",
  ".svg": "image/svg+xml",
  ".png": "image/png",
};

/** Serve an app's src/web on a random local port. */
export async function serveDir(root) {
  const server = http.createServer(async (req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const filePath = path.join(root, urlPath === "/" ? "/index.html" : urlPath);
    try {
      if (!filePath.startsWith(root)) throw new Error("outside");
      const body = await fs.readFile(filePath);
      res.writeHead(200, { "Content-Type": types[path.extname(filePath)] ?? "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end();
    }
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  return { origin: `http://127.0.0.1:${server.address().port}`, close: () => new Promise((r) => server.close(r)) };
}
