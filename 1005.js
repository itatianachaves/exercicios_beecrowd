const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let notaA = lines.shift();
let notaB = lines.shift();

notaA = parseFloat(notaA);
notaB = parseFloat(notaB);

let pesoNotaA = 3.5
let pesoNotaB = 7.5

let somaPesos = pesoNotaA + pesoNotaB

let calculaMedia = (notaA * pesoNotaA + notaB * pesoNotaB ) / somaPesos

console.log("MEDIA = " + calculaMedia.toFixed(5))