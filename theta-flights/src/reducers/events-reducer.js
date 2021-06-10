import { GET_EVENTS } from "../action-types/events-action-types";
import { SINGLE_EVENT } from "../action-types/events-action-types";

const initialState = { allEvents: [{}], oneEvent: [{}] };

const events = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, allEvents: action.payload };
      case SINGLE_EVENT:
        return { ...state, oneEvent: action.payload };
    default:
      return state;
  }
};

export default events;