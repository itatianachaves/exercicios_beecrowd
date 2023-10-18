let T = parseInt(lines[0]);
let N = new Array(1000);

for (let i = 0; i < 1000; i++) {
  N[i] = i % T;
  console.log(`N[${i}] = ${N[i]}`);
}