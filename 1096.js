
let I = 1;
let J = 7;

while (I <= 9) {
  console.log('I=' + I + ' J=' + J);
  if (J === 5) {
    I += 2;
    J = 7;
  } else {
    J--;
  }
}