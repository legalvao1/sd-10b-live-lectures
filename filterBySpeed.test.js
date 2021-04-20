let starterPokemons = [
  { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
  { name: 'Charmander', type: 'Fire', speed: 65 },
  { name: 'Squirtle', type: 'Water', speed: 43 },
  { name: 'Pikachu', type: 'Electric', speed: 90 },
];

// É UMA FUNÇÃO ASSÍNCRONA 
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

describe('Testing filterBySpeed function', () => {
  beforeEach(() => {
    starterPokemons = [
      { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
      { name: 'Charmander', type: 'Fire', speed: 65 },
      { name: 'Squirtle', type: 'Water', speed: 43 },
      { name: 'Pikachu', type: 'Electric', speed: 90 },
    ];
  });

  it('returns the correct pokemons when passing minimumSpeed 60', () => {
    expect.assertions(1);
    starterPokemons.push({ name: 'Charizard', speed: 100 });
    return filterBySpeed(60).then((pokemons) => {
      expect(pokemons).toStrictEqual([ 'Charmander', 'Pikachu', 'Charizard' ]);
    });
  });

  it('returns an error when passing an invalid minimumSpeed', () => {
    expect.assertions(1);
    return filterBySpeed(99).catch((error) => {
      expect(error).toBe('No pokémons found');
    });
  });
});

describe('Testing filterBySpeed function with async/await', () => {
  it('returns the correct pokemons when passing minimumSpeed 60', async () => {
    expect.assertions(1);
    const pokemons = await filterBySpeed(60);

    expect(pokemons).toStrictEqual([ 'Charmander', 'Pikachu' ]);
  });

  it('returns an error when passing an invalid minimumSpeed', async () => {
    expect.assertions(1);
    try {
      await filterBySpeed(99);
    } catch(error) {
      expect(error).toBe('No pokémons found');
    }
  });
});