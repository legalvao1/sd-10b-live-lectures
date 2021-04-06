const assert = require('assert');

const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far far', 'away...'];

// Concatenando os itens do array

const epicPhrase = epic.reduce((acc, curr) => `${acc} ${curr}`);


console.log(epicPhrase);


//Teste

const expectedValue = 'A long time ago, in a galaxy far far away...';

assert.strictEqual(epicPhrase, expectedValue);