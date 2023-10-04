
for (let i = 0; i < input.length; i++) {

    let n = parseInt(lines[i])

    if (n === 0) break;
    let sequencia = '';
    for (let j = 1; j <= n; j++) {
      sequencia += j + ' ';
    }
    console.log(sequencia.trim());
  }