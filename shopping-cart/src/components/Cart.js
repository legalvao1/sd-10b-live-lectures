import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    return(
      <>
        <h1>Meu Carrinho</h1>
        {cartItems.map((item, index) => <li key={index}>{item.name}</li> )}
      </>
    )
  };
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItem,
});

export default connect(mapStateToProps)(Cart);