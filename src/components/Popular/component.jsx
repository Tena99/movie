import React from "react";
import useGetData from "../../helpers/getData";
import Card from "../AntDesign/Card";
import { popular, genres } from "../../app/Card/actions";
import { connect } from "react-redux";
import "./styles.css";
import PageScroll from "../AntDesign/Pagination";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { movieinfo } from "../../app/Detailed_info/actions";

function GetPopular({
  popular_state,
  getPopular,
  genres_state,
  getGenres,
  getInfo,
}) {
  const base_url = "https://image.tmdb.org/t/p";
  const file_size = "/w500";

  useGetData(`/movie/popular`, getPopular);
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
      {popular_state.results
        ? popular_state.results.map(function (item) {
            return (
              <div key={item.id} className={"card_item"}>
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
        : popular_state.map(function () {
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
  popular_state: state.card.popular_movies,
  genres_state: state.card.genres,
});

const mapDispatchToProps = {
  getPopular: popular,
  getGenres: genres,
  getInfo: movieinfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(GetPopular);
