const assert = require('assert');

const point = [1.0, 2.2, -6.6, 1, 2];
const otherPoint = [0.1, 3.5, -99.6];

const printPointCoordinates = (x, y, z) =>
  `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;

const result = printPointCoordinates(...point);
assert.strictEqual(
  result,
  'Point coordinates are x = 1, y = 2.2 and z = -6.6',
);
assert.strictEqual(
  printPointCoordinates(...otherPoint),
  'Point coordinates are x = 0.1, y = 3.5 and z = -99.6',
);