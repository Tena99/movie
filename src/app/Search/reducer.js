import { Search_Results, Search_Query } from "./types";

const initialState = {
  search_query: "some",
  search_results: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
};

const makeSearch = (state = initialState, action) => {
  switch (action.type) {
    case Search_Results:
      return {
        ...state,
        search_results: action.payload,
      };

    case Search_Query:
      return {
        ...state,
        search_query: action.payload,
      };

    default:
      return state;
  }
};

export default makeSearch;
