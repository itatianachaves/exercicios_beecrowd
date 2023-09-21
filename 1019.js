const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let segundos = lines.shift();

segundos = parseInt(segundos)

const horas = Math.floor(segundos / 3600)
const minutos = Math.floor((segundos % 3600) / 60)
const segundosRestantes = segundos % 60

console.log(`${horas}:${minutos}:${segundosRestantes}`)

