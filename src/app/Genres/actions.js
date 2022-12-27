import { MoviesByGenre } from "./types";
import { Genres } from "../Card/types";

export const getMovieByGenre = (payload) => {
  return {
    type: MoviesByGenre,
    payload,
  };
};

// export const genres = (payload) => {
//   return {
//     type: Genres,
//     payload,
//   };
// };
