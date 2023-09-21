const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let notaA = lines.shift();
let notaB = lines.shift();
let notaC = lines.shift();

notaA = parseFloat(notaA);
notaB = parseFloat(notaB);
notaC = parseFloat(notaC);

let pesoNotaA = 2
let pesoNotaB = 3
let pesoNotaC = 5

let somaPesos = pesoNotaA + pesoNotaB + pesoNotaC

calculaMedia = ((notaA * pesoNotaA) + ( notaB * pesoNotaB )  + (notaC * pesoNotaC)) / somaPesos

console.log("MEDIA = " + calculaMedia.toFixed(1))


