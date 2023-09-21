const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// colar no beecrowd

let [valorA, valorB] = lines.shift().split(" "); 

valorA = parseInt(valorA)
valorB = parseInt(valorB)

let multiplos = (valorA %  valorB == 0) || (valorB % valorA == 0);

 if(multiplos){
    console.log("Sao Multiplos")
 }else{
    console.log("Nao sao Multiplos")
 }