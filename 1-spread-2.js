const assert = require('assert');

const onlineGames = ['Dota', 'Lol', 'CS:GO', 'Tibia'];
const offlineGames = ['Simcity', 'San Andreas', 'Mario', 'Stardew Valley'];

const awesomeGames = [...onlineGames, ...offlineGames];

// const awesomeGames = onlineGames.concat(offlineGames);

// onlineGames.forEach((game) => {
//   awesomeGames.push(game);
// }

// offlineGames.forEach((game) => {
//   awesomeGames.push(game);
// }

assert.deepEqual(
  awesomeGames,
  ['Dota', 'Lol', 'CS:GO', 'Tibia', 'Simcity', 'San Andreas', 'Mario', 'Stardew Valley'],
);