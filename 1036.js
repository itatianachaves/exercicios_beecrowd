const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// colar no beecrowd

let [valorA, valorB, valorC] = lines.shift().split(" "); 

valorA = parseFloat(valorA)
valorB = parseFloat(valorB)
valorC = parseFloat(valorC)


let delta =  (valorB * valorB) - 4 * (valorA * valorC);


if (delta < 0 || valorA === 0 ) {
   
  console.log("Impossivel calcular");

  } else {

    let R1 = (-valorB + Math.sqrt(delta)) / (2 * valorA); 
    let R2 = (-valorB - Math.sqrt(delta)) / (2 * valorA); 

    console.log("R1 = " + R1.toFixed(5));
    console.log("R2 = " + R2.toFixed(5));

   
  }