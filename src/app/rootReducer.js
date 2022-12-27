import { combineReducers } from "redux";

import card from "./Card/reducer";
import info from "./Detailed_info/reducer";
import genre from "./Genres/reducer";
import search from "./Search/reducer";

export const rootReducer = combineReducers({
  card,
  info,
  genre,
  search,
});
