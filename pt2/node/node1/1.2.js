const http = require('http');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '..', '.env.example'), quiet: true });

const PORT = process.env.PORT || 5678;

function main() {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        // res.end('testando env var: ' + JSON.stringify(process.env));
        res.end('testando env var: ' + JSON.stringify(process.env, null, 2));
    });

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

if (require.main === module) {
    main();
}
