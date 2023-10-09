
let n = lines.shift()

let fatorial = 1;

for (let i = 1; i <= n; i++) {
  fatorial *= i;
}

console.log(fatorial)