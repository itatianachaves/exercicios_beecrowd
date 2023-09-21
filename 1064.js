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
let soma = 0

// implemento nesse código  outra variável contadora para fazer a soma dos valores positivos
// caso atendam essa condição, e com isso fazer o cálculo da média
if(valor1 > 0){
    contador++
    soma+= valor1
}

if(valor2 > 0){
    contador++
    soma+= valor2
}

if(valor3 > 0){
    contador++
    soma+= valor3
}

if(valor4 > 0){
    contador++
    soma+= valor4
}

if(valor5 > 0){
    contador++
    soma+= valor5
}

if(valor6 > 0){
    contador++
    soma+= valor6
}


console.log(`${contador} valores positivos`)

if (contador > 0){
    let media = soma / contador
    console.log(`${media.toFixed(1)}`)
}





