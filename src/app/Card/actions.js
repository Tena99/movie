import {
  Trending,
  Popular,
  NowWatching,
  Upcoming,
  TopRated,
  Genres,
} from "./types";

export const trending = (payload) => {
  return {
    type: Trending,
    payload,
  };
};

export const popular = (payload) => {
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
