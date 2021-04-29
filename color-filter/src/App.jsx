import React from 'react';
import './App.css';
import data from './data'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      compras: []
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnChange({ target: { value } }) {
    this.setState((oldState) => {
      return { ...oldState, search: value }
    })
  }

  handleOnClick() {
    console.log(this.state.search)
  }

  render() {
    console.log(this)
    return (
      <main className="App">
        <label htmlFor='search'>
          search
          <input type="text" id="search" onChange={this.handleOnChange} />
        </label>
        <button onClick={this.handleOnClick}>Click</button>
        <ol>
          {
            data.map(color => <li>{color.value}</li>)
          }
        </ol>
      </main>
    );
  }
}

export default App;
