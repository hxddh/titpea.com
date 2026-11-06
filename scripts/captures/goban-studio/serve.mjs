import http from "node:http";
import fs from "node:fs";
import path from "node:path";
const dist = process.env.DIST || "../goban-studio/frontend/dist";
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".json": "application/json",
  ".woff2": "font/woff2",
  ".bin": "application/octet-stream",
  ".webp": "image/webp",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".svg": "image/svg+xml",
  ".gz": "application/gzip",
  ".txt": "text/plain",
  ".cfg": "text/plain",
};
export async function serve() {
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    let file = path.join(dist, url === "/" ? "index.html" : url);
    if (!file.startsWith(dist) || !fs.existsSync(file)) {
      res.writeHead(404);
      return res.end();
    }
    res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  return { server, origin: `http://127.0.0.1:${server.address().port}` };
}
