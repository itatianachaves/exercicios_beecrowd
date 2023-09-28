
   let N = lines.shift()
   N = parseInt(N)

    let results = [];
    for (let i = 0; i < N; i++) {

       
        let [X, Y] = lines.shift().split(" ")
        X = parseInt(X)
        Y = parseInt(Y)

        let sum = 0;
        for (let j = Math.min(X, Y) + 1; j < Math.max(X, Y); j++) {
            if (j % 2 !== 0) {
                sum += j;
            }
        }
        results.push(sum);
    }
    console.log(results.join('\n'))
