import { GET_EVENTS } from "../action-types/events-action-types";
import { SINGLE_EVENT } from "../action-types/events-action-types";

export const showEvents = (dispatch, all) => {
  return dispatch({ type: GET_EVENTS, payload: all });
};

export const showOneEvent = (dispatch, one) => {
  return dispatch({ type: SINGLE_EVENT, payload: one });
};