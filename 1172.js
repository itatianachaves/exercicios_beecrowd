let x = [];
for (let i = 0; i < 10; i++) {
    x[i] = parseInt(lines.shift());
    if (x[i] <= 0) {
        x[i] = 1;
    }
    console.log(`X[${i}] = ${x[i]}`);
}