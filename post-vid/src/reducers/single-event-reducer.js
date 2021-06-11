import { SINGLE_EVENT } from "../action-types/events-action-types";

const initialState = {};

const singleEvent = (state = initialState, action) => {
    switch (action.type) {
        case SINGLE_EVENT:
            return (state = action.payload);
            default:
                return state;
    }
};
export default singleEvent;