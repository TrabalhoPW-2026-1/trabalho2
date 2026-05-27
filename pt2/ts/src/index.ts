import http from "http";
import fs from "fs";
import path from "path";

const mimeTypes: Record<string, string> = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
};

const server = http.createServer((req, res) => {
  const url = req.url === "/" ? "/index.html" : (req.url ?? "/index.html");
  const filePath = path.join(process.cwd(), url);
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] ?? "application/octet-stream";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
