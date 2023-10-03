
let [x, y] = lines.shift().split(' ')

x = parseInt(x)
y = parseInt(y)

for (let i = 1; i <= y; i++) {
  process.stdout.write(`${i}`)
  if (i % x === 0) {
    process.stdout.write('\n')
  } else {
    process.stdout.write(' ')
  }
}

// process.stdout.write não adiciona uma nova linha ao final da saída