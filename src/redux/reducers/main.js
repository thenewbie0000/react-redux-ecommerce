// space for keeping bundle of reducer in one place and then passing to it to the main system later

import { combineReducers } from "redux";
import { cartReducer } from "./reducer";

const rootReducer = combineReducers({
  cartReducer
});

export default rootReducer;