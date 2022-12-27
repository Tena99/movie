import { MovieId, MovieInfo } from "./types";

export const movieinfo = (payload) => {
  return {
    type: MovieInfo,
    payload,
  };
};
