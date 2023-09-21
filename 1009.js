const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let nome = lines.shift();
let valorSalario = lines.shift();
let totalVendas = lines.shift();

valorSalario = parseFloat(valorSalario)
totalVendas = parseFloat(totalVendas)

let comissaoVendas = totalVendas * 0.15
let totalSalario = valorSalario + comissaoVendas


console.log("TOTAL = R$ " + totalSalario.toFixed(2) )

