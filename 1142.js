
let n = lines.shift()
n = parseInt(N)


let cont = 1;

for (let i = 0; i < n; i++) {
  let saida = "";
  for (let j = 0; j < 3; j++) {
    saida += cont + " ";
    cont++;
  }
  saida += "PUM";
  console.log(saida);
  cont++;
}
    