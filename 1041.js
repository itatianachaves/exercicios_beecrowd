const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// colar no beecrowd

let [x, y] = lines.shift().split(" "); 

x = parseFloat(x)
y = parseFloat(y)

if(x=== 0 && y ===0){
    console.log("Origem")

} else if(x===0){
    console.log("Eixo Y")

}else if(y===0){
    console.log("Eixo X")

}else if(x > 0 && y > 0){
    console.log("Q1")

}else if(x < 0 && y > 0){
    console.log("Q2")

}else if(x < 0 && y < 0){
    console.log("Q3")

}else{
    console.log("Q4")
}

