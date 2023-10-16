let a = [];
for (let i = 0; i < 100; i++) {
    a[i] = parseFloat(lines.shift());
    if (a[i] <= 10) {
        console.log(`A[${i}] = ${a[i].toFixed(1)}`);
    }
}