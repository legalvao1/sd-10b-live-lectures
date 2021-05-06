import React from 'react';

class Solution extends React.Component {
  render() {
    // eslint-disable-next-line
    const { match: { params: { exerciseId } } } = this.props;
    return (
      <h1>{ exerciseId }</h1>
    );
  }
}

export default Solution;
