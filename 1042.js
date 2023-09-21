const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// colar no beecrowd

let [n1, n2, n3] = lines.shift().split(" "); 

n1 = parseInt(n1)
n2 = parseInt(n2)
n3 = parseInt(n3)

let array = [n1, n2, n3];
array.sort(function(n1, n2) {
    return n1 - n2;
})

console.log(array.join("\n")) 
//retorno todos os elementos de um array concatenados em um string usuando o separador \n
console.log()
console.log(`${n1}\n${n2}\n${n3}`)