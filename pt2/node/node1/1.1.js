const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5678;

function main() {

    // let dirs = [];

    // process.argv.slice(2).forEach(dir => {
    //     dirs.push(dir);
    // });

    // const content = dirs.map(_ => fs.readdirSync(_));
    // console.log(content);
    

    // function readDirectory(dir) {
    //     let content;
    //     let stk = [dir];
    //     while (stk.length > 0) {
    //         const currentDir = stk.pop();
    //         const files = fs.readdirSync(currentDir);
    //         content = content ? content.concat(files) : files;
    //         for (const file of files) {
    //             const filePath = path.join(currentDir, file);
    //             if (fs.statSync(filePath).isDirectory()) {
    //                 stk.push(filePath);
    //             }
    //         }
    //     }
    //     return content;
    // }

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        fs.readdir(process.argv[2], (err, files) => {
            if (err) {
                res.end('Error reading directory');
                return;
            }
            let content = '';
            files.forEach(file => {
                if (fs.statSync(path.join(process.argv[2], file)).isDirectory()) {
                    // content += `"dir": ${file}\n`;
                    return;
                }
                const filePath = path.join(process.argv[2], file);
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                content += `"file": ${file}, "content": ${fileContent}\n`;
            });
            res.end(content);
            // res.end(files.join('\n'));
        });
    });

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

}

if (require.main === module) {
    main();
}
