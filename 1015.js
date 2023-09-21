const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar no beecrowd a partir daqui
let [valorX1, valorY1 ] = lines.shift().split(" ");
let [valorX2, valorY2 ] = lines.shift().split(" ");

valorX1 = parseFloat(valorX1);
valorX2 = parseFloat(valorX2);
valorY1 = parseFloat(valorY1);
valorY2 = parseFloat(valorY2);

let distancia = Math.sqrt(Math.pow( valorX2 - valorX1, 2) + Math.pow( valorY2 - valorY1, 2)).toFixed(4)

console.log(distancia)