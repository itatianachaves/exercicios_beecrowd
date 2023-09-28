
while (true) {
  let [x, y] = lines. shift().split(' ');

  x = parseInt(x)
  y = parseInt(y)
  
  if (x === null || y === null) {
    console.log("")
      break;
  }

  if (x > 0 && y > 0) {
    console.log("primeiro");
} else if (x < 0 && y > 0) {
    console.log("segundo");
} else if (x < 0 && y < 0) {
    console.log("terceiro");
} else if (x > 0 && y < 0) {
    console.log("quarto");
} else {
    break;
}
}




  