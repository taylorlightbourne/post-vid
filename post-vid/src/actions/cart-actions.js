import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types/cart-action-type";

export const addToCart = (dispatch, event) => {
  return dispatch({
    type: ADD_TO_CART,
    payload: event,
  });
  
};
export const removeFromCart = (dispatch, eventID) => {
  return dispatch ({
      type: REMOVE_FROM_CART,
      payload: eventID,
  })
}