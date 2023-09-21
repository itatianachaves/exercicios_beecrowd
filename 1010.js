const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar no beecrowd a partir daqui
let [codigoPeca1, qtdepeca1, valorPeca1 ] = lines.shift().split(" ");
let [codigoPeca2, qtdepeca2, valorPeca2 ] = lines.shift().split(" ");

codigoPeca1 = parseInt(codigoPeca1);
qtdepeca1Peca1 = parseInt(qtdepeca1);
valorPeca1 = parseFloat(valorPeca1);

codigoPeca2 = parseInt(codigoPeca2);
qtdepeca2 = parseInt(qtdepeca2);
valorPeca2 = parseFloat(valorPeca2);

let totalPeca1 = qtdepeca1 * valorPeca1
let totalPeca2 = qtdepeca2 * valorPeca2

let totalAPagar = totalPeca1 + totalPeca2

console.log("VALOR A PAGAR: R$ " + totalAPagar.toFixed(2))
