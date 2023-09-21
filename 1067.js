const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);


//para ler linhas com um unico valor na mesma linha use o comando a seguir
let valor = lines.shift();
valor = parseInt(valor)

for (let i = 1; i <= valor; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}