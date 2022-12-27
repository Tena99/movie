import { Search_Results, Search_Query } from "./types";

export const search_results = (payload) => {
  return {
    type: Search_Results,
    payload,
  };
};

export const search_query = (payload) => {
  return {
    type: Search_Query,
    payload,
  };
};
