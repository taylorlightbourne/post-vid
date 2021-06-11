import { GET_EVENTS } from "../action-types/events-action-types";


const initialState = { allEvents: [{}] };

const events = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, allEvents: action.payload };
    default:
      return state;
  }
};

export default events;