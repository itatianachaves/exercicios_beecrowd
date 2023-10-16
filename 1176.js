const T = parseInt(lines.shift());

for (let i = 0; i < T; i++) {
    const N = parseInt(lines.shift());

    let fib = [0, 1];
    for (let j = 2; j <= N; j++) {
        fib[j] = fib[j - 1] + fib[j - 2];
    }

    console.log(`Fib(${N}) = ${fib[N]}`);
}