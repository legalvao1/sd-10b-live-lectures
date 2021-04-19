const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanSymbols = [
  'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I',
];

const convertToRoman = integer => {
  let romanNumeral = '';

  romanValues.forEach((romanValue, index) => {
    while (integer >= romanValue) {
      integer -= romanValue;
      romanNumeral += romanSymbols[index];
    }
  });

  return romanNumeral;
}

module.exports = convertToRoman;