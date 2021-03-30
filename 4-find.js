const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

// encontrar a primeira pessoa que não é motorista // findANonDriver

// const findANonDriver = (array) => {
//   return array.find(person => person.isDriver === 'xablau');
// }

// console.log(users.find(person => person.isDriver === 'xablau'));

const find = (array, callbackFn) => {
  for (let index = 0; index < array.length; index += 1) {
    const value = array[index];
    if (callbackFn(value, index, array) === true) {
      return value;
    }
  }
  return undefined;
}

console.log(find(users, (user) => user.isDriver === false));

