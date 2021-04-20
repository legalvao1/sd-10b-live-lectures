const starterPokemons = [
  { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
  { name: 'Charmander', type: 'Fire', speed: 65 },
  { name: 'Squirtle', type: 'Water', speed: 43 },
  { name: 'Pikachu', type: 'Electric', speed: 90 },
];

const filterBySpeed = (minimumSpeed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bySpeed = starterPokemons
        .filter(pokemons => pokemons.speed >= minimumSpeed)
        .map(pokemon => pokemon.name);
      if (bySpeed.length > 0) resolve(bySpeed);
      return reject('No pokémons found');
    }, 1500);
  })
};

