const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// colar no beecrowd

let [nA, nB, nC] = lines.shift().split(" "); 

nA = parseFloat(nA)
nB = parseFloat(nB)
nC = parseFloat(nC)

if(nA + nB > nC && nA + nC > nB && nB + nC > nA){
    let perimetro = nA + nB + nC

    console.log(`Perimetro = ${perimetro.toFixed(1)}`)

}else{
    let area = ((nA + nB) * nC) / 2

    console.log(`Area = ${area.toFixed(1)}`)
}

