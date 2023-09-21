const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

//colar daqui para baixo no beecrowd

let caracteristica1 = lines.shift();
let caracteristica2 = lines.shift();
let caracteristica3 = lines.shift();

if (caracteristica1 === "vertebrado") {
    if (caracteristica2 === "ave") {
      if (caracteristica3 === "carnivoro") {
        console.log("aguia")
      } else if (caracteristica3 === "onivoro") {
        console.log("pomba")
      }
    } else if (caracteristica2 === "mamifero") {
      if (caracteristica3 === "onivoro") {
        console.log( "homem")
      } else if (caracteristica3 === "herbivoro") {
        console.log( "vaca")
      }
    }
  } else if (caracteristica1 === "invertebrado") {
    if (caracteristica2 === "inseto") {
      if (caracteristica3 === "hematofago") {
        console.log( "pulga")
      } else if (caracteristica3 === "herbivoro") {
        console.log( "lagarta")
      }
    } else if (caracteristica2 === "anelideo") {
      if (caracteristica3 === "hematofago") {
        console.log( "sanguessuga") ;
      } else if (caracteristica3 === "onivoro") {
        console.log( "minhoca")
      }
    }
  }
