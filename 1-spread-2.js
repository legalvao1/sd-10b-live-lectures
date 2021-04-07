const assert = require('assert');

const onlineGames = ['Dota', 'Lol', 'CS:GO', 'Tibia'];
const offlineGames = ['Simcity', 'San Andreas', 'Mario', 'Stardew Valley'];

const awesomeGames = [...onlineGames, ...offlineGames];

assert.deepEqual(
  awesomeGames,
  ['Dota', 'Lol', 'CS:GO', 'Tibia', 'Simcity', 'San Andreas', 'Mario', 'Stardew Valley'],
);