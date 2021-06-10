import { GET_EVENTS } from "../action-types/events-action-types";


export const showEvents = (dispatch, all) => {
  return dispatch({ type: GET_EVENTS, payload: all });
};

