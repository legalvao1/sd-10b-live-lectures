const person = {
  name: 'Rafael',
  lastName: 'Epaminondas'
};

// console.log(`Olá querido ${person.name}!`);
// console.log(`Olá querido ${person['lastName']}!`);

// console.log(`Olá querido ${person.name} ${person.lastName}!`);

person.age = 39;
person['isBeautiful'] = true;

// console.log(person);

// console.log(typeof(person));

// const array = [1, 2, 3, 4, 5];

// console.log(typeof(array));


// console.log(Object.keys(person));

// console.log(`Existe sobrenome? ${Object.keys(person).includes('lastName')}`);

console.log(`Pessoa: ${Object.values(person)}`);
console.log(`Pessoa: ${Object.entries(person)}`);