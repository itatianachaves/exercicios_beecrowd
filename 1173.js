let n = [];
n[0] = parseInt(lines.shift());
console.log(`N[0] = ${n[0]}`);

for (let i = 1; i < 10; i++) {
    n[i] = n[i - 1] * 2;
    console.log(`N[${i}] = ${n[i]}`);
}