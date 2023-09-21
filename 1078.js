const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);


//para ler linhas com um unico valor na mesma linha use o comando a seguir
let N = lines.shift();
N = parseInt(N)

for (let i = 1; i <= 10; i++) {
    const resultado = i * N;
    console.log(i + ' x ' + N + ' = ' + resultado);
  }

 