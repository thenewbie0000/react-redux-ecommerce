import { createStore } from "redux";
import rootReducer from "./redux/reducers/main";

export const store = createStore(
  rootReducer
);
