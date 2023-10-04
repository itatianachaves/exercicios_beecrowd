
let n = lines.shift()
n = parseInt(n)

let a = 0, b = 1, c

let sequencia = '';
for (let i = 0; i < n; i++) {
  sequencia += a + ' ';
  c = a + b;
  a = b;
  b = c;
}
console.log(sequencia.trim())