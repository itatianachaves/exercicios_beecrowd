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
let valor6 = lines.shift();

valor1 = Number(valor1)
valor2 = Number(valor2)
valor3 = Number(valor3)
valor4 = Number(valor4)
valor5 = Number(valor5)
valor6 = Number(valor6)

let contador = 0

// só é usado a condição if, porque o código precisa verificar cada valor separadamente
// se usasse nesse caso o else if, iria dá erro pois caso a primeira condição fosse atendida 
// seria ignorado o resto do código
if(valor1 > 0){
    contador++
}

if(valor2 > 0){
    contador++
}

if(valor3 > 0){
    contador++
}

if(valor4 > 0){
    contador++
}

if(valor5 > 0){
    contador++
}

if(valor6 > 0){
    contador++
}

console.log(`${contador} valores positivos`)
