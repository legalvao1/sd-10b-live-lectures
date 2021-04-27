import React from 'react';
import XMen from './XMen';

class XMenList extends React.Component {
  render() {
    const { xMenList } = this.props;
    return (
      <section className="x-men-list">
        {xMenList.map((xmen) => (
          <XMen key={ xmen.id } xMenInfo={ xmen } />))}
      </section>
    );
  }
}

export default XMenList;
