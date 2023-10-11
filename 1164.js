for (let i = 1; i <= lines[0]; i++) {
  const X = parseInt(lines[i]);

  let sum = 0;
  for (let j = 1; j < X; j++) {
    if (X % j === 0) {
      sum += j;
    }
  }

  if (sum === X) {
    console.log(`${X} eh perfeito`);
  } else {
    console.log(`${X} nao eh perfeito`);
  }
}