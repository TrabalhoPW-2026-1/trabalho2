const fs = require("fs"); 

function readFile(filename) {
   return new Promise((resolve, reject) => {
      fs.readFile(filename, (error, data) => { 
          resolve(parseInt(data));
      });
   });
} 

async function calcularValor() { 
   let valor1 = await readFile("1.txt");
   let valor2 = await readFile("2.txt");
   return valor1 + valor2;
}; 

console.log("a");
calcularValor().then(resultado => {
   console.log(resultado);
});
console.log("b");
console.log("c");
