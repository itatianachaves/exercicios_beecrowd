
let N = lines.shift()
   N = parseInt(N)

    for (let i = 0; i < N; i++) {
      let [x, y] = lines.shift().split(" ")
      x = parseInt(x)
      y = parseInt(y)
        
        if (y === 0) {
            console.log("divisao impossivel");
        } else {
          const resultado = (x / y).toFixed(1);
          console.log(resultado);
        }
    }


   
