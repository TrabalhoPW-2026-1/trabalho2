import http from "http";
import fs from "fs";
import path from "path";

import dotenv from "dotenv";

import { createLink } from "./util.js";

dotenv.config({ path: `.env.${process.env.NODE_ENV}`, quiet: true });

const PORT = process.env.PORT || 3000;


function main() {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });

        const url = new URL(req.url, `http://localhost:${PORT}`);

        if (url.pathname !== "/") {
            res.write(createLink(path.dirname(url.pathname), "Voltar"));
        }

        const curPath = url.pathname.slice(1) || ".";

        fs.readdir(curPath, (err, files) => {
            if (err) {
                fs.readFile(curPath, "utf-8", (err, data) => {
                    if (!err) {
                        res.end(data);
                    }
                });
                return;
            }

            files.forEach(file => {
                res.write(createLink(path.join(curPath, file), file));
            });

            res.end();
        });
    });

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}


main();
