const convertToRoman = require('./roman-numerals');
const assert = require('assert');
const { test, expect } = require('@jest/globals');

describe('Testa a função convertToRoman', () => {
  test('Converte os números de 1 a 4', () => {
    expect(convertToRoman(1)).toBe('I'); // matchers
    expect(convertToRoman(2)).toBe('II');
    expect(convertToRoman(3)).toBe('III');
    expect(convertToRoman(4)).toBe('IV');
  });
  
  test('Converte os números de 5 a 9', () => {
    expect(convertToRoman(5)).toBe('V');
    expect(convertToRoman(6)).toBe('VI');
    expect(convertToRoman(7)).toBe('VII');
    expect(convertToRoman(8)).toBe('VIII');
    expect(convertToRoman(9)).toBe('IX');
  });

  test('Exibe uma mensagem de erro quando o número é negativo', () => {
    expect(() => convertToRoman(-1)).toThrow('Informe um número maior do que 0');
  });
});

// assert.equal(convertToRoman(5), 'V');
// assert.equal(convertToRoman(6), 'VI');
// assert.equal(convertToRoman(7), 'VII');
// assert.equal(convertToRoman(8), 'VIII');
// assert.equal(convertToRoman(9), 'IX');

// assert.equal(convertToRoman(10), 'X');
// assert.equal(convertToRoman(11), 'XI');
// assert.equal(convertToRoman(12), 'XII');
// assert.equal(convertToRoman(13), 'XIII');
// assert.equal(convertToRoman(14), 'XIV');
// assert.equal(convertToRoman(15), 'XV');
// assert.equal(convertToRoman(26), 'XXVI');
// assert.equal(convertToRoman(43), 'XLIII');

// assert.equal(convertToRoman(50), 'L');
// assert.equal(convertToRoman(55), 'LV');
// assert.equal(convertToRoman(76), 'LXXVI');

// assert.equal(convertToRoman(100), 'C');
// assert.equal(convertToRoman(200), 'CC');
// assert.equal(convertToRoman(227), 'CCXXVII');

// assert.equal(convertToRoman(500), 'D');
// assert.equal(convertToRoman(576), 'DLXXVI');
// assert.equal(convertToRoman(981), 'CMLXXXI');

// assert.equal(convertToRoman(1000), 'M');
// assert.equal(convertToRoman(2999), 'MMCMXCIX');
// assert.equal(convertToRoman(3000), 'MMM');