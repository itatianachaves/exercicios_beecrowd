
const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let idadeEmDias = lines.shift();

idadeEmDias = parseInt(idadeEmDias)

const anos = Math.floor(idadeEmDias / 365);
idadeEmDias -= anos * 365;
const meses = Math.floor(idadeEmDias  / 30);
idadeEmDias -= meses * 30;


console.log(`${anos} ano(s)`)
console.log(`${meses} mes(es)`)
console.log(`${idadeEmDias} dia(s)`)