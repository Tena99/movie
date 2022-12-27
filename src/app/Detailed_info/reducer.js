import { MovieInfo, MovieId } from "./types";

const initialState = {
  movie_info: {},
};

const getInfo = (state = initialState, action) => {
  switch (action.type) {
    case MovieInfo:
      return {
        ...state,
        movie_info: action.payload,
      };

    default:
      return state;
  }
};

export default getInfo;
