for (let i = 1; i <= lines[0]; i++) {
    const X = parseInt(lines[i]);
  
    let ePrimo = true;
    for (let j = 2; j < X; j++) {
      if (X % j === 0) {
        ePrimo = false;
        break;
      }
    }
  
    if (ePrimo) {
      console.log(`${X} eh primo`);
    } else {
      console.log(`${X} nao eh primo`);
    }
  }