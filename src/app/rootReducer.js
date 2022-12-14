import { combineReducers } from "redux";

import card from "./Card/reducer";

export const rootReducer = combineReducers({
  card,
});
