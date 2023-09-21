const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let salario = lines.shift();

salario = parseFloat(salario)

let novoSalario
let percentual

if (salario <= 400) {
    percentual = 15;
} else if (salario <= 800) {
    percentual = 12;
} else if (salario <= 1200) {
    percentual = 10;
} else if (salario <= 2000) {
    percentual = 7;
} else {
    percentual = 4;
}

let valorReajuste = salario * percentual /100

novoSalario = salario + valorReajuste

console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${valorReajuste.toFixed(2)}\nEm percentual: ${percentual} %`)