// MÉDIA
function media (num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(media(10, 20, 30));

// ----------------------------------------------------

// NOME COMPLETO
function fullName (nome, sobrenome) {
  return (nome + ' ' + sobrenome);
}

console.log(fullName('Gustavo', 'Caetano'));
console.log(fullName('Lucas', 'Ribeiro'));

// ----------------------------------------------------

// ARRAY COM 100 CARACTERES IGUAIS

function geraArray(caracter) {
  let array = [];
  for (let index = 0; index < 100; index += 1) {
    array.push(caracter);
  }
  return array;
}

console.log(geraArray('Trybe'));

// ----------------------------------------------------

//MEGA-SENA <3
let firstNumber = randomNumber(60);
let secondNumber = randomNumber(60);
let thirdNumber = randomNumber(60);
let fourthNumber = randomNumber(60);
let fifthNumber = randomNumber(60);
let sixthNumber = randomNumber(60);

function randomNumber(maxValue) {
  return Math.ceil(Math.random() * maxValue);
}

function generateNumbers() {
  let numbers = [];
  for (let index = 0; index < 6; index += 1) {
    numbers.push(randomNumber(60));
  }
  return numbers;
}

let megaSenaNumbers = generateNumbers();

console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);
console.log(megaSenaNumbers);
