import { SINGLE_EVENT } from "../action-types/events-action-types";

export const singleEvent = ( dispatch, event ) => {
    event.onClick(true)
    console.log(event)
    return dispatch({
        type: SINGLE_EVENT,
        payload: event,
    });
};