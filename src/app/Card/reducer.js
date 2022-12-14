import {Popular, NowWatching, Upcoming, TopRated, Genres} from "./types";
import {genres} from "./actions";

const initialState = {
  popular_movies: {},
  now_watching: {},
  upcoming: {},
  top_rated: {},
  genres: [],
};

const getMovie = (state = initialState, action) => {
  switch (action.type) {
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
