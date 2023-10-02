let N = Number(lines.shift())

for(let i = 1; i <= N; i++){
    console.log(i + " " + (i*i) + " " + (i*i*i))
}

//   if (N > 1 && N < 1000) {
//         let contagem = 0;
//         let saida = '';
//         for (let i = 1; contagem < N; i += 4) {
//             if (i > 0) {
//                 saida += `${i} ${i + 1} ${i + 2}\n`;
//                 contagem++;
//             }
//         }
//         console.log(saida);
//     }