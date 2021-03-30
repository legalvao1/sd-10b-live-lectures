const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// exibir um valor por vez

// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }
// numbers.forEach((value, index, array) => console.log(value));
// const multiply3 = [];
// numbers.forEach((_, xablau) => multiply3.push(xablau * 3));

// console.log(multiply3);

const forEach = (array, callbackfn) => {
  for (let index = 0; index < array.length; index += 1) {
    const value = array[index];
    callbackfn(value, index, array);
  }
}

forEach(numbers, (value) => console.log(value));
