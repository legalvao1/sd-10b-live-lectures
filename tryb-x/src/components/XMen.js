import React from 'react';

class XMen extends React.Component {
  render() {
    const { xMenInfo: { name, alias, img } } = this.props;
    return (
      <section className="x-men-card">
        <h3>
          { name }
        </h3>
        <p>
          Apelido:
          { alias }
        </p>
        <img src={ img } alt={ alias } />
      </section>
    );
  }
}

export default XMen;
