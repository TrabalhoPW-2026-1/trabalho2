// // const http = require('http');
// import { createServer } from 'http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
// //   res.writeHead(200, { c });
// //   res.write('Hello from Module 2!');
// //   res.end();
//   res.end('Hello from Module 2!');
// });

// // server.listen(5000)
// server.listen(5000, () => {
//   console.log('Server is running on http://localhost:5000');
// });
// export default server;


const strHelper = require(__dirname + '/utils/strings')
let icomp = "Instituto de Computação";
console.log(strHelper.upper(icomp));
console.log(strHelper.lower(icomp));

// console.log(process.cwd())
// console.log(__dirname)
