
let senha = 0

while (senha !== 2002) {
 
    let conteudoLines = lines.shift()
    conteudoLines = parseInt(conteudoLines)

    senha = conteudoLines

  if (senha !== 2002) {
    console.log("Senha Invalida");
  }
}
console.log("Acesso Permitido")