let somaIdades = 0;
let contador = 0;

for (let i = 0; i < lines.length; i++) {
  let idade = parseInt(lines[i]);
  
  if (idade < 0) {
    break;
  }
  
  somaIdades += idade;
  contador++;
}

let mediaIdades = somaIdades / contador;
console.log(mediaIdades.toFixed(2));