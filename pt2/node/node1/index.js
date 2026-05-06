const http = require('http');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { createLink } = require('./util');

dotenv.config({ path: `.env.${process.env.NODE_ENV}`, quiet: true });

const PORT = process.env.PORT || 3000;
const dirPath = process.argv[2] || '.';

function main() {

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // console.log(req['url']);

        const url = path.join(dirPath, req['url']);

        fs.readdir(url, (err, files) => {
            if (err) {
                fs.readFile(url, 'utf-8', (err, data) => {
                    res.write(createLink('..', 'Voltar'));
                    if (err) {
                        // res.end('Error reading file');
                        // res.end('Error reading file');
                        return;
                    }
                    res.end(data);
                });
                // res.end('Error reading directory');
                // res.write(createLink('..', 'Voltar'));
                // res.end('Error reading directory');
                return;
            }

            let content = '';
            files.forEach(file => {
                // if (fs.statSync(path.join(dirPath, req['url'], file)).isDirectory()) {
                //     return;
                // }

                // let filePath = path.join(dirPath, file);
                // let fileContent = fs.readFileSync(filePath, 'utf-8');
                // content += `"file": ${file}, "content": ${fileContent}\n`;
                content += createLink(file);
            });

            res.end(content);
        });
    });

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

}

if (require.main === module) {
    main();
}
