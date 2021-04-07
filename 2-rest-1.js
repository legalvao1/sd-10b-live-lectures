const assert = require('assert');

const sumAll = (...numbers) =>
  numbers.reduce((a, b) => a + b, 0);

assert.strictEqual(sumAll(1, 2), 3);
assert.strictEqual(sumAll(1, 2, 3), 6);
assert.strictEqual(sumAll(1, 2, 3, 4, 5), 15);