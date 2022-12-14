import { Popular, NowWatching, Upcoming, TopRated, Genres } from "./types";

export const popular = (payload) => {
  console.log("action");
  return {
    type: Popular,
    payload,
  };
};

export const nowwatching = (payload) => {
  return {
    type: NowWatching,
    payload,
  };
};

export const upcoming = (payload) => {
  return {
    type: Upcoming,
    payload,
  };
};

export const toprated = (payload) => {
  return {
    type: TopRated,
    payload,
  };
};

export const genres = (payload) => {
  return {
    type: Genres,
    payload,
  };
};
