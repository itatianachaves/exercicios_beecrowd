const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let distanciaPercorrida = lines.shift();
let combustivelGasto = lines.shift();

distanciaPercorrida = parseInt(distanciaPercorrida);
combustivelGasto = parseFloat(combustivelGasto);

let consumoMedio = distanciaPercorrida / combustivelGasto

console.log(consumoMedio.toFixed(3) + " km/l")