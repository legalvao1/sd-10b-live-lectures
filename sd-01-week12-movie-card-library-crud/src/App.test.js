import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import App from './App';

describe('Movie List', () => {
  test("Renderiza 'Carregando...' quando iniciar a aplicação", () => {
    const { getByText } = render(<App />);

    expect(getByText('Carregando...')).toBeDefined();
  });

  test('Exibe o primeiro filme corretamente', async () => {
    const { queryByText } = render(<App />);

    await waitForElementToBeRemoved(
      () => screen.getByText('Carregando...'),
      { timeout: 3000 },
    );

    expect(queryByText('Kingsglaive')).not.toBeNull();
    expect(queryByText('Final Fantasy')).not.toBeNull();
  });

  test("Renderiza a página de detalhes quando clicado em 'Ver detalhes'", async () => {
    render(<App />);

    await waitForElementToBeRemoved(
      () => screen.getByText('Carregando...'),
      { timeout: 3000 },
    );

    const loading = screen.getByTestId('KingsglaiveDetails');
    fireEvent.click(loading);

    await waitForElementToBeRemoved(
      () => screen.getByText('Carregando...'),
      { timeout: 3000 },
    );
    
    expect(screen.queryByText(/genre/i)).not.toBeNull();
    expect(screen.queryByText(/rating/i)).not.toBeNull();

  });
});
