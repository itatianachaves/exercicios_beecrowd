const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let calculaRaio = lines.shift();

calculaRaio = parseFloat(calculaRaio)

let calculaArea = 3.14159 * calculaRaio * calculaRaio

console.log("A="+ calculaArea.toFixed(4))