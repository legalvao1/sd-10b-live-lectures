import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Content from './components/Content';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
