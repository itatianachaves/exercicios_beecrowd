const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let tempoGasto = lines.shift();
let velocidadeMedia = lines.shift();

tempoGasto = parseInt(tempoGasto);
velocidadeMedia = parseInt(velocidadeMedia);

let qtdeKmPorLitro = 12

let distancia = velocidadeMedia * tempoGasto

let qtdeLitrosGastos = distancia / qtdeKmPorLitro

console.log(qtdeLitrosGastos.toFixed(3))

