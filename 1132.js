
let X = lines.shift()
let Y = lines.shift()

X = parseInt(X)
Y = parseInt(Y)

let soma = 0

    if (X > Y) {
        [X, Y] = [Y, X];
    }
    for (let i = X; i <= Y; i++) {
        if (i % 13 !== 0) {
            soma += i;
        }
    }
    console.log(soma)