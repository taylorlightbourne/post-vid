import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types/cart-action-type";

const initialState = { events: [], total: 0 };

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return (state = [...state, action.payload]);
      case REMOVE_FROM_CART:
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};

export default cart;