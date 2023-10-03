
let n = lines.shift()

n = parseInt(n)

for (let i = 1; i <= n; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`);
    console.log(`${i} ${i ** 2 + 1} ${i ** 3 + 1}`);
  }