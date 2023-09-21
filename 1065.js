const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);


//para ler linhas com um unico valor na mesma linha use o comando a seguir
let valor1 = lines.shift();
let valor2 = lines.shift();
let valor3 = lines.shift();
let valor4 = lines.shift();
let valor5 = lines.shift();

valor1 = parseInt(valor1)
valor2 = parseInt(valor2)
valor3 = parseInt(valor3)
valor4 = parseInt(valor4)
valor5 = parseInt(valor5)


let contador = 0

if(valor1 % 2 === 0){
    contador++
}

if(valor2  % 2 === 0){
    contador++
}

if(valor3  % 2 === 0){
    contador++
}

if(valor4  % 2 === 0){
    contador++
}

if(valor5  % 2 === 0){
    contador++
}


console.log(`${contador} valores pares`)
