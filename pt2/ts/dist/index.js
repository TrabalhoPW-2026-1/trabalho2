import http from "http";
import fs from "fs";
import path from "path";
// const __dirname = process.cwd();
// console.log(__dirname);
const html = path.join(process.cwd(), "index.html");
console.log(html);
const server = http.createServer((req, res) => {
    fs.readFile(html, (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        console.log(!data);
        res.end(data);
    });
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
