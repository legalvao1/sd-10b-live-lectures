const { expect } = require('@jest/globals');
const { menorPopulacao, mediaDePopulacao } = require('./countries');

describe('countries.js tests', () => {
  test('menorPopulacao', () => {
    expect(menorPopulacao()).toEqual('Bahamas');
  });

  test('maiorPopulacao', () => {}); // implementar

  test('mediaDePopulacao', () => {
    expect(mediaDePopulacao()).toEqual(17412305.166666668);
  })
});

// entenderem o que o comando jest --coverage faz