import React from 'react';

import xmenData from './data';

import './App.css';
import XMenList from './components/XMenList';

class App extends React.Component {
  render() {
    return (
      <main className="main-container">
        <XMenList xMenList={ xmenData } />
      </main>
    );
  }
}

export default App;
