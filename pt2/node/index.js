// // const http = require("http");
// import { createServer } from "http";

// const server = createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
// //   res.writeHead(200, { c });
// //   res.write("Hello from Module 2!");
// //   res.end();
//   res.end("Hello from Module 2!");
// });

// // server.listen(5000)
// server.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });
// export default server;

// require("./fs");
// console.log("0", icomp);

// // global.icomp = "Instituto de Computação";
// const strHelper = require(__dirname + "/utils/strings")
// // const icomp = "Instituto de Computação";
// // console.log(strHelper.upper(icomp));
// // console.log(strHelper.lower(icomp));
// console.log("1", global.icomp);

// (() => {
//     console.log("2", global.icomp);
// })();

// (() => {
//     (() => {
//         console.log("3", global.icomp);
//     })();
// })();

// // console.log(process.cwd())
// // console.log(__dirname)


// const c1 = require("./counter");
// const c2 = require("./counter");
// console.log(c1.inc())
// console.log(c2.inc())
// console.log(c1.inc())
// console.log(c2.inc())


const cluster = require("cluster");
const http = require("http");
const { cpus } = require("os");
const BASE_PORT = 3000;
if (cluster.isPrimary) {
  for (let i = 0; i < cpus().length; i++) {
    cluster.fork({ PORT: BASE_PORT + i });
  }
} else {
  const port = process.env.PORT;
  http.createServer((req, res) => {
    res.end(`Worker ${cluster.worker.id} - porta ${port}`);
  }).listen(port);
}
// console.log(`Worker ${cluster.worker.id} started on port ${process.env.PORT}`);
console.log(`https://localhost:${process.env.PORT}`);
