const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let numeroDoFuncionario = lines.shift();
let qtdeHorasTrabalhadas = lines.shift();
let valorHora = lines.shift();

numeroDoFuncionario = parseInt(numeroDoFuncionario);
qtdeHorasTrabalhadas = parseInt(qtdeHorasTrabalhadas);
valorHora = parseFloat(valorHora);

let calculaSalario = qtdeHorasTrabalhadas * valorHora

console.log("NUMBER = " + numeroDoFuncionario + "\nSALARY = U$ " + calculaSalario.toFixed(2))