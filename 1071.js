const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);


//para ler linhas com um unico valor na mesma linha use o comando a seguir
let x = lines.shift();
let y = lines.shift();

x = parseInt(x)
y = parseInt(y)

let soma = 0;

if (x > y) {
    let temp = x;
    x = y;
    y = temp;
}

for (let i = x + 1; i < y; i++) {
    if (i % 2 !== 0) {
        soma += i;
    }
}

console.log(soma)

