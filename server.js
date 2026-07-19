const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4174);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

const hallPath = "/world-recruitment-prototype.html";

const server = http.createServer((req, res) => {
  const rawUrl = req.url || "/";
  const urlPath = decodeURIComponent(rawUrl.split("?")[0]);

  // 根路径直接进入「世界征召令」；index.html 由页面脚本决定是否留下（支持检验中刷新）
  if (urlPath === "/") {
    res.writeHead(302, { Location: hallPath, "Cache-Control": "no-store" });
    res.end();
    return;
  }

  const target = path.resolve(root, urlPath === "/index.html" ? "index.html" : `.${urlPath}`);

  if (!target.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(target, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[path.extname(target)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Ability prototype running at http://127.0.0.1:${port}/`);
  console.log(`Recruitment hall at http://127.0.0.1:${port}${hallPath}`);
});
