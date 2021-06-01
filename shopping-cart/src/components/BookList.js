import React from 'react';
import { connect } from 'react-redux';

import books from '../products';
import addItemToCart from '../actions';

class BookList extends React.Component {
  render() {
    const { addToCart } = this.props;
    return (
      <>
        <h1>Lista de Livros</h1>
        {books.map((book) => (
          <li key={ book.name }>
            {book.name}
            {' '}
            - 
            {' R$ '}
            {book.price}
            <button 
              type='button'
              onClick={() => addToCart(book)}
            >
              Adicionar
            </button>
          </li>
        ))}
      </>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(BookList);