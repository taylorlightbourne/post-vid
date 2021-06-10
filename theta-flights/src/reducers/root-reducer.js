import { combineReducers } from "redux";
import events from "./events-reducer";
import cart from "./cart-reducer";
import singleEvent from './single-event-reducer';

const rootReducer = combineReducers({ events, cart, singleEvent });

export default rootReducer;