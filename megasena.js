let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let turma10Play = [20, 40, 35, 9, 17, 52];

let numberOfHits = 0;

for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
  for (let indexPlay = 0; indexPlay < turma10Play.length; indexPlay += 1) {
    if (megaSenaNumbers[indexMega] === turma10Play[indexPlay]) {
      numberOfHits += 1;
    }
  }
}

console.log(`Mega-Sena: ${megaSenaNumbers}`);
console.log(`Jogo da Turma 10: ${turma10Play}`);
console.log("Acertos: " + numberOfHits);
