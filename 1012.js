const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar no beecrowd a partir daqui
let [valorA, valorB, valorC ] = lines.shift().split(" ");

valorA = parseFloat(valorA);
valorB = parseFloat(valorB);
valorC = parseFloat(valorC);

let areaTrianguloRetangulo = (valorA * valorC) / 2

let areaCirculo =  3.14159 * (valorC * valorC)

let areaTrapezio = (valorA + valorB) * (valorC /2)

let areaQuadrado = valorB * valorB

let areaRetangulo = valorA * valorB

console.log("TRIANGULO: " + areaTrianguloRetangulo.toFixed(3))
console.log("CIRCULO: " + areaCirculo.toFixed(3))
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3))
console.log("QUADRADO: " + areaQuadrado.toFixed(3))
console.log("RETANGULO: " + areaRetangulo.toFixed(3))
