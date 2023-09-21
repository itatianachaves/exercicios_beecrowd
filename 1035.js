const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// colar no beecrowd

let [valorA, valorB, valorC, valorD] = lines.shift().split(" "); 

valorA = parseInt(valorA)
valorB = parseInt(valorB)
valorC = parseInt(valorC)
valorD = parseInt(valorD)

if (valorB > valorC && valorD > valorA && valorC + valorD > valorA + valorB && valorC > 0 && valorD > 0 && valorA % 2 === 0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}