const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// colar no beecrowd

let [codigo, quantidade] = lines.shift().split(" "); 

codigo = parseInt(codigo)
quantidade = parseInt(quantidade)

if(codigo ==1 ){
    console.log(`Total: R$ ${(quantidade * 4.00).toFixed(2)}`)
}else if(codigo == 2){
    console.log(`Total: R$ ${(quantidade * 4.50).toFixed(2)}`)
}else if(codigo == 3){
    console.log(`Total: R$ ${(quantidade * 5.00).toFixed(2)}`)
}else if(codigo == 4 ){
    console.log(`Total: R$ ${(quantidade * 2.00).toFixed(2)}`)
}else if(codigo == 5){
    console.log(`Total: R$ ${(quantidade * 1.50).toFixed(2)}`)
}