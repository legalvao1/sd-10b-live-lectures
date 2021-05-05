import React, { Component } from 'react';

class Cronometer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  render() {
    const { seconds } = this.state;

    return (
      <h2>
        {seconds}
      </h2>
    );
  }
}

export default Cronometer;
