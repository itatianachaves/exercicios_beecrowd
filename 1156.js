
let s = 0
let denominador = 1

for (let numerador = 1; numerador <= 39; numerador += 2) {
    s += numerador / denominador
    denominador *= 2
}

console.log(s.toFixed(2))