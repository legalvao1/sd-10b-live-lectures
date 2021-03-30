const pizzas = ['Frango com Catupiry', 'Marguerita', 'Gratinada', '4 Queijos'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// comparar e ordernar // compare

console.log(pizzas.sort());

const compare = (a, b) => {
  return b - a;
  // if (a < b) {
  //   return -1;
  // }
  // if (a > b) {
  //   return 1;
  // }
  // return 0;
}

console.log(numbers.sort((a, b) => {
  return b - a;
}));

console.log(numbers);

