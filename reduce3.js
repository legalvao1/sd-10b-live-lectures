const assert = require('assert');

const players = [
  { fullName: 'Cristiane Rozeira de Souza Silva', email: 'criscris@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
  { fullName: 'Ronaldo de Assis Moreira', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Luís Nazário de Lima', email: 'cortedocascao@futebol.br' },
];

// Gerando um objeto com nome como chave e email como valor

const newPlayers = players.reduce(() => { });

//Teste

const expectedValues = {
  'Cristiane Rozeira de Souza Silva': 'criscris@futebol.br',
  'Marta Vieira da Silva': 'rainhamarta@futebol.br',
  'Ronaldo de Assis Moreira': 'bruxo@futebol.br',
  'Ronaldo Luís Nazário de Lima': 'cortedocascao@futebol.br',
};

assert.deepStrictEqual(newPlayers, expectedValues);