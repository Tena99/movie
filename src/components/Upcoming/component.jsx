import GetData from "../../helpers/helpers";
import Card from "../AntDesign/Card";

import { upcoming, genres } from "../../app/Card/actions";

import { connect } from "react-redux";

import "./styles.css";
import PageScroll from "../AntDesign/Pagination";
import { useEffect } from "react";
import dateFormat from "dateformat";

function GetPopular({ upcoming_state, getUpcoming, genres_state, getGenres }) {
  const base_url = "https://image.tmdb.org/t/p";
  const file_size = "/w500";

  useEffect(() => {
    GetData(`/movie/upcoming`, getUpcoming);
    GetData("/genre/movie/list", getGenres);
  }, []);

  if (upcoming_state.results !== undefined) {
    function mapper(data) {
      let i = 0;

      return data.map(function (item) {
        if (genres_state.length !== 0) {
          for (let genre of genres_state.genres) {
            if (genre.id === item && i === 0) {
              i = i + 1;
              return genre.name;
            }
          }
        }
      });
    }

    return (
      <div className={"card_container"}>
        {upcoming_state.results.map(function (item) {
          return (
            <div key={item.id} className={"card_item"}>
              <Card
                title={item.title}
                img={base_url + file_size + item.poster_path}
                release_date={dateFormat(item.release_date, "yyyy")}
                genre={mapper(item.genre_ids)}
                popularity={item.vote_average}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  upcoming_state: state.card.upcoming,
  genres_state: state.card.genres,
});

const mapDispatchToProps = {
  getUpcoming: upcoming,
  getGenres: genres,
};

export default connect(mapStateToProps, mapDispatchToProps)(GetPopular);
