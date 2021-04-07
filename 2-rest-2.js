const assert = require('assert');

const formatDate = () => {};

assert.strictEqual(
  formatDate('1981', '7', '31', '22', '47', '12'), '31/7/1981',
);