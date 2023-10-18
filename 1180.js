let N = parseInt(lines[0]);
let X = lines[1].split(' ').map(Number);
let menorValor = X[0];
let posicao = 0;

for (let i = 1; i < N; i++) {
    if (X[i] < menorValor) {
        menorValor = X[i];
        posicao = i;
    }
}

console.log(`Menor valor: ${menorValor}`);
console.log(`Posicao: ${posicao}`);