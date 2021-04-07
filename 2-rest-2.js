const assert = require('assert');

const formatDate = (year, month, day, ..._rest) => 
  `${day}/${month}/${year}`;

assert.strictEqual(
  formatDate('1981', '7', '31', '22', '47', '12'), '31/7/1981',
);