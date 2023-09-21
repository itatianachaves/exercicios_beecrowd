const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let raio = lines.shift();

raio = parseFloat(raio);

let volumeEsfera =  (4/3.0) * 3.14159 * (raio * raio * raio) 

console.log("VOLUME = " + volumeEsfera.toFixed(3))