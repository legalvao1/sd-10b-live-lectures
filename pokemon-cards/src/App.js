import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      pokemon: '',
    };
  }

  handleChange(e) {
    this.setState({
      pokemon: e.target.value,
    });
  }

  handleClick(pokemon) {
    fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
      .then((resolve) => resolve.json())
      .then((data) => this.setState({ data: data.cards[0] }));
  }

  render() {
    const { data, pokemon } = this.state;
    return (
      <main className="App-header">
        <div>
          <h1>Pokémon Cards</h1> 
        </div>
        <section>
          <input 
            type="text" 
            onChange={ (e) => this.handleChange(e) } 
            data-testid="input-text" 
          />
          <button onClick={ () => this.handleClick(pokemon) }>
            Pesquisar
          </button>
        </section>
        <div>
          {data && (
            <div>
              <h3>{data.name}</h3>
              {data.types.map((type) => (
                <p key={type}>{type}</p>
              ))}
              <img src={data.imageUrl} alt={`${data.name}-card`} />
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default App;