import Card from "../AntDesign/Card";
import { upcoming, genres } from "../../app/Card/actions";
import { connect } from "react-redux";
import "./styles.css";
import PageScroll from "../AntDesign/Pagination";
import React from "react";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { movieinfo } from "../../app/Detailed_info/actions";
import useGetData from "../../helpers/getData";

function GetPopular({
  upcoming_state,
  getUpcoming,
  genres_state,
  getGenres,
  getInfo,
}) {
  const base_url = "https://image.tmdb.org/t/p";
  const file_size = "/w500";

  useGetData(`/movie/upcoming`, getUpcoming);
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
      {upcoming_state.results
        ? upcoming_state.results.map(function (item) {
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
        : upcoming_state.map(function () {
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
  upcoming_state: state.card.upcoming,
  genres_state: state.card.genres,
});

const mapDispatchToProps = {
  getUpcoming: upcoming,
  getGenres: genres,
  getInfo: movieinfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(GetPopular);
