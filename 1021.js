const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let valorMonentario = lines.shift();

valorMonentario = parseFloat(valorMonentario)

let notas = [100, 50, 20, 10, 5, 2]
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log("NOTAS:");
for (let i = 0; i < notas.length; i++) {
    let quantidade = Math.floor(valorMonentario / notas[i]); 
    console.log(quantidade + " nota(s) de R$ " + notas[i].toFixed(2)); 
    valorMonentario = valorMonentario % notas[i]
}

console.log("MOEDAS:");
for (let i = 0; i < moedas.length; i++) {
    let quantidade = Math.floor(valorMonentario / moedas[i]); 
    console.log(quantidade + " moeda(s) de R$ " + moedas[i].toFixed(2));
    valorMonentario = (valorMonentario % moedas[i]).toFixed(2)
}

