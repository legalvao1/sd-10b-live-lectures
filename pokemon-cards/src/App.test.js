import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('Testar o App.js', () => {
  test('Verifica se o titulo aparece na aplicação', () => {
    render(<App />);

    expect(screen.getByRole('heading', {
      level: 1,
      name: /Pokémon Cards/i //regex
    })).toBeInTheDocument();
  });

  test('O input e o botão de busca estão disponíves', () => {
    render(<App />);

    const inputText = screen.getByRole('textbox');
    const buttonSearch = screen.getByRole('button', {
      name: /pesquisar/i
    })

    expect(inputText).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
  });

  test('Verifica a digitação no input', () => {
    render(<App />);

    const inputText = screen.getByRole('textbox');

    // fireEvent.change(inputText, { target: { value: 'pikachu' } });
    userEvent.type(inputText, 'pikachu');
    expect(inputText).toHaveValue('pikachu');
  });

const pokemonMock = {
  cards: [
    {
      id: "swshp-SWSH052",
      name: "Gengar",
      nationalPokedexNumber: 94,
      imageUrl: "https://images.pokemontcg.io/swshp/SWSH052.png",
      imageUrlHiRes: "https://images.pokemontcg.io/swshp/SWSH052_hires.png",
      types: [
        "Psychic"
      ],
    },
  ],
}


  test('Verifica se o card aparece na tela', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => pokemonMock
    });

    render(<App />);

    const inputText = screen.getByRole('textbox');
    const buttonSearch = screen.getByRole('button', {
      name: /pesquisar/i
    });

    userEvent.type(inputText, 'Gengar');
    userEvent.click(buttonSearch);

    const pokemonName = await screen.findByRole('heading', {
      level: 3,
      name: /Gengar/i 
    });

    expect(pokemonName).toBeInTheDocument();

  })
});