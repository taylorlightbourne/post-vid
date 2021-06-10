import { combineReducers } from "redux";
import events from "./events-reducer";
import cart from "./cart-reducer";

const rootReducer = combineReducers({ events, cart });

export default rootReducer;