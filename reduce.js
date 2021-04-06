const reduce = (array, callbackfn, initialValue) => {
  let accumulator;
  let initialIndex;
  if (initialValue === undefined) {
    accumulator = array[0];
    initialIndex = 1;
  } else {
    accumulator = initialValue;
    initialIndex = 0;
  }

  for (let index = initialIndex; index < array.length; index += 1) {
    const currentValue = array[index];
    console.table(accumulator)
    console.table(currentValue);
    console.log('---------------------------');
    accumulator = callbackfn(accumulator, currentValue);
  }
  return accumulator;
}

const players = [
  { fullName: 'Cristiane Rozeira de Souza Silva', email: 'criscris@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
  { fullName: 'Ronaldo de Assis Moreira', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Luís Nazário de Lima', email: 'cortedocascao@futebol.br' },
];

console.log(reduce(players, (playersAcc, player) => {
  playersAcc[player.fullName] = player.email;
  return playersAcc;
}, {}));