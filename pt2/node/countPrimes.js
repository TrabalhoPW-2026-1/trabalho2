const http = require("http");

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

let counter = 0;

http.createServer((req, res) => {
    console.log(`Counter #${++counter}`);
    let number = 0;
    let qtdPrimes = 0;

    while (qtdPrimes < 1_000_000) {
        if (isPrime(++number)) {
            qtdPrimes++;
        }
    }

    res.end(`Primo ${number}`)
}).listen(3000);

console.log("Server running at http://localhost:3000/");