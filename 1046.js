const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// colar no beecrowd

let [horaInicial, horaFinal] = lines.shift().split(" "); 

horaInicial = parseInt(horaInicial)
horaFinal = parseInt(horaFinal)

let resultado = horaInicial;

let cont = 0;

while(true){
    if(horaInicial === horaFinal){
        cont = 24;
        break;
    } else if (horaInicial < horaFinal){
        cont++;
        resultado++;
        if(resultado === horaFinal){
            break;
        }
    } else if (horaInicial > horaFinal) {
        cont++;
        resultado++;
        if(resultado === 24){
            cont += horaFinal;
            break;
        }
    }
}

console.log(`O JOGO DUROU ${cont} HORA(S)`);