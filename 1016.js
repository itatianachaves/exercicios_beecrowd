const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let distancia = lines.shift();

distancia = parseInt(distancia);

let velocidadeCarroY = 90
let velocidadeCarroX = 60

let tempo = distancia /(velocidadeCarroY - velocidadeCarroX) * 60

tempo.toFixed(4)

console.log(tempo + " minutos")

