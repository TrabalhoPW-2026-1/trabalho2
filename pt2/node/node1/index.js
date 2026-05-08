const http = require('http');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const util = require('./util');

dotenv.config({ path: `.env.${process.env.NODE_ENV}`, quiet: true });

const PORT = process.env.PORT || 3000;
const dirPath = [process.argv[2] || '.'];

function main() {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write(`req.url: ${req.url}<br>\n`);


        if (dirPath.length > 0) {
            res.write('<a href="/">Voltar</a><br>\n');
            // res.write('dirPath: ' + curPath + '<br>');
        }

        const curPath = path.join(...dirPath, req.url);

        fs.readdir(curPath, (err, files) => {
            if (err) {
                fs.readFile(curPath, 'utf-8', (err, data) => {
                    if (!err) {
                        res.end(data);
                    }
                });
                return;
            }

            files.forEach(file => {
                res.write(util.createLink(file));
            });

            res.end();
        });
    });

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

if (require.main === module) {
    main();
}
