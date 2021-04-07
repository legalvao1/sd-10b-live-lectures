const assert = require('assert');

const multiply = (a, b = 1) => a * b;

assert.strictEqual(multiply(8), 8);
assert.strictEqual(multiply(8, 2), 16);
assert.strictEqual(multiply(8, 3), 24);
assert.strictEqual(multiply(8, -1), -8);