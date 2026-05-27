// const fs = require("fs");
// const promise = new Promise((resolve, reject) => {
//   fs.readFile("1.txt", "utf-8", (error, data) => {
//     resolve(parseInt(data));
//   });
// });
// promise.then((data) => {
//   console.log(data)
// });



// const fs = require("fs");
// function readFile (filename) {
//    return new Promise(function (resolve, reject) {
//       fs.readFile(filename, function(error, data) {
//           resolve(parseInt(data));
//       });
//    });
// }
// readFile("1.txt")
// .then(function(data1) {
//    console.log(data1);
//    return readFile("2.txt")
// })
// .then(function(data2) {
//    console.log(data2);
// })



// const fs = require("fs");
// const p1 = new Promise(function (resolve, reject) {
//    fs.readFile("./1.txt", function(error, data) {
//        resolve(parseInt(data));
//    });
// })
// const p2 = new Promise(function (resolve, reject) {
//    fs.readFile("./2.txt", function(error, data) {
//        resolve(parseInt(data));
//    });
// })
// Promise.all([p1, p2]).then(function([data1, data2]) {
//    console.log(data1 + data2);
// });



const request = require("request");

function getUrl(url) {
    return new Promise((resolve, reject) => {
        request(url, (err, res, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });
}

getUrl("http://google.com")
    .then((body) => { console.log(body); })
    .catch((err) => { console.log(err); });
