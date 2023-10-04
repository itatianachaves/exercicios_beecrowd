let a = parseInt(lines[0]);
let n = parseInt(lines[1]);

while (n <= 0) {
  n = parseInt(lines.shift());
}

let soma = 0;
for (let i = 0; i < n; i++) {
  soma += a + i;
}

console.log(soma)

// tentando