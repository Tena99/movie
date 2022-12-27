import Card from "../AntDesign/Card";
import { Link } from "react-router-dom";

import {
  popular,
  nowwatching,
  upcoming,
  toprated,
  genres,
} from "../../app/Card/actions";

import { connect } from "react-redux";

import "./styles.css";
import PageScroll from "../AntDesign/Pagination";
import React, { useEffect } from "react";
import dateFormat from "dateformat";
import useGetData from "../../helpers/getData";
import { movieinfo } from "../../app/Detailed_info/actions";

function GetPopular({
  nowWatching_state,
  getNowWatching,
  genres_state,
  getGenres,
  getInfo,
}) {
  const base_url = "https://image.tmdb.org/t/p";
  const file_size = "/w500";

  useGetData(`/movie/now_playing`, getNowWatching);
  useGetData("/genre/movie/list", getGenres);
  getInfo({});

  function mapper(data) {
    if (genres_state && genres_state.genres) {
      for (let genre of genres_state.genres) {
        if (genre.id === data) {
          return genre.name;
        }
      }
    }
  }

  return (
    <div className={"card_container"}>
      {nowWatching_state.results
        ? nowWatching_state.results.map(function (item) {
            return (
              <div key={item.id} className={"card_item"} itemID={item.id}>
                <Link to={`/movie/${item.id}`}>
                  <Card
                    title={item.title}
                    img={base_url + file_size + item.poster_path}
                    release_date={dateFormat(item.release_date, "yyyy")}
                    genre={mapper(item.genre_ids[0])}
                    popularity={item.vote_average.toPrecision(2)}
                  />
                </Link>
              </div>
            );
          })
        : nowWatching_state.map(function () {
            return (
              <div className={"card_item"}>
                <Card
                  title={undefined}
                  img={undefined}
                  release_date={undefined}
                  genre={undefined}
                  popularity={undefined}
                />
              </div>
            );
          })}

      <PageScroll />
    </div>
  );
}

const mapStateToProps = (state) => ({
  nowWatching_state: state.card.now_watching,
  genres_state: state.card.genres,
});

const mapDispatchToProps = {
  getNowWatching: nowwatching,
  getGenres: genres,
  getInfo: movieinfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(GetPopular);
