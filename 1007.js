const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let valor1 = lines.shift();
let valor2 = lines.shift();
let valor3 = lines.shift();
let valor4 = lines.shift();

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);
valor3 = parseInt(valor3);
valor4 = parseInt(valor4);

let produtoDiferenca = ((valor1 * valor2 ) - (valor3 *valor4))

console.log("DIFERENCA = " + produtoDiferenca)