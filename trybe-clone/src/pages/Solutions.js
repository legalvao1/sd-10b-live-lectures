import React from 'react';
import { Link } from 'react-router-dom';

class Solutions extends React.Component {
  render() {
    // eslint-disable-next-line
    const { solutions } = this.props;

    return (
      <section>
        <ul>
          {/* eslint-disable-next-line */}
          {solutions.map((solution) => (
            <li key={ solution.id }>
              <Link to={ `/solutions/${solution.id}` }>{solution.name}</Link>
            </li>))}
        </ul>
      </section>
    );
  }
}

export default Solutions;
