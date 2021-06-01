
const INITIAL_STATE = {
  cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        cartItem: [ ...state.cartItem, action.payload.item ],
      };
    default:
      return state;
  }
}

export default cartReducer;