const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let mes = lines.shift();

mes = parseFloat(mes)

const MESES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log(MESES[mes -1])

