let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let turma10Play = [20, 40, 35, 9, 17, 52];
let turma10Play2 = [13, 15, 22, 30, 48, 50];
let turma10Play3 = [27, 48, 36, 12, 3, 22];
let turma10Play4 = [25, 45, 35, 15, 5, 25];

let megaSenaGames = [turma10Play, turma10Play2, turma10Play3, turma10Play4];

for (let games = 0; games < megaSenaGames.length; games += 1) {
  let numberOfHits = 0;
  for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
    for (let indexPlay = 0; indexPlay < megaSenaGames[games].length; indexPlay += 1) {
      if (megaSenaNumbers[indexMega] === megaSenaGames[games][indexPlay]) {
        numberOfHits += 1;
      }
    }
  }
  console.log("Jogada " + (games + 1));
  console.log(`Mega-Sena: ${megaSenaNumbers}`);
  console.log(`Jogo: ${megaSenaGames[games]}`);
  console.log("Acertos: " + numberOfHits);
  console.log("-----------------------------------");
}


