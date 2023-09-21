const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// colar no beecrowd

let [A, B, C] = lines.shift().split(" "); 

A = parseFloat(A)
B = parseFloat(B)
C = parseFloat(C)

let temp;
if (A < B) {
  temp = A;
  A = B;
  B = temp;
}
if (A < C) {
  temp = A;
  A = C;
  C = temp;
}
if (B < C) {
  temp = B;
  B = C;
  C = temp;
}


let tipo;
if (A >= B + C) {
  tipo = "NAO FORMA TRIANGULO";
} else if (A * A == B * B + C * C) {
  tipo = "TRIANGULO RETANGULO";
} else if (A * A > B * B + C * C) {
  tipo = "TRIANGULO OBTUSANGULO\n";
} else if (A * A < B * B + C * C) {
  tipo = "TRIANGULO ACUTANGULO\n";
} else if (A == B && B == C) {
    tipo = "TRIANGULO EQUILATERO\n";
} else if (A == B || B == C || A == C) {
    tipo += "TRIANGULO ISOSCELES\n";
}




console.log(tipo)