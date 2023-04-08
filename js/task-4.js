//  *? За допомогою циклу for складіть усі парні числа від min до max

const min = 1;
const max = 50;
let sum = 0;

for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);
