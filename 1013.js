const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar no beecrowd a partir daqui

let [valorA, valorB, valorC ] = lines.shift().split(" ");

valorA = parseInt(valorA);
valorB = parseInt(valorB);
valorC = parseInt(valorC);

let calculaMaiorAB = Math.max(valorA, valorB)

let calculaMaiorABC = Math.max(calculaMaiorAB, valorC)

console.log(calculaMaiorABC  +  " eh o maior")