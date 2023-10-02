let X = lines.shift()
let Y = lines.shift()

X = parseInt(X)
Y = parseInt(Y)



if (X > Y) {
    [X, Y] = [Y, X];
}
for (let i = X; i <= Y; i++) {

    if(X <= 0 || Y <= 0){
        break;
        }
        
    if (i % 5 === 2 || i % 5 === 3) {
        console.log(i);
    }
}