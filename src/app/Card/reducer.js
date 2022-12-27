import {
  Trending,
  Popular,
  NowWatching,
  Upcoming,
  TopRated,
  Genres,
} from "./types";

const initialState = {
  trending: {},
  popular_movies: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  now_watching: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  upcoming: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  top_rated: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  genres: [],
};

const getMovie = (state = initialState, action) => {
  switch (action.type) {
    case Trending:
      return {
        ...state,
        trending: action.payload,
      };

    case Popular:
      return {
        ...state,
        popular_movies: action.payload,
      };

    case NowWatching:
      return {
        ...state,
        now_watching: action.payload,
      };

    case Upcoming:
      return {
        ...state,
        upcoming: action.payload,
      };

    case TopRated:
      return {
        ...state,
        top_rated: action.payload,
      };

    case Genres:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
};

export default getMovie;
