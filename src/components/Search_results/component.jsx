import React from "react";
import useGetData from "../../helpers/getData";
import Card from "../AntDesign/Card";
import { genres } from "../../app/Card/actions";
import { connect } from "react-redux";
import "./styles.css";
import PageScroll from "../AntDesign/Pagination";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { movieinfo } from "../../app/Detailed_info/actions";
import { search_results } from "../../app/Search/actions";
import Skeleton from "react-loading-skeleton";

function Search_Results({
  search,
  updateSearch,
  search_query,
  genres_state,
  getGenres,
  getInfo,
}) {
  const base_url = "https://image.tmdb.org/t/p";
  const file_size = "/w500";

  useGetData(`/search/movie`, updateSearch, `&query=${search_query.search}`, [
    search_query,
  ]);
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
    <>
      {search.results ? (
        <h3 className={"search_title"}>
          Search result for "{search_query.search}"
        </h3>
      ) : (
        <Skeleton className={"genre_title"} count={1} height={50} />
      )}

      <div className={"card_container"}>
        {search.results
          ? search.results.map(function (item) {
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
          : search.map(function () {
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
    </>
  );
}

const mapStateToProps = (state) => ({
  search: state.search.search_results,
  search_query: state.search.search_query,
  genres_state: state.card.genres,
});

const mapDispatchToProps = {
  updateSearch: search_results,
  getGenres: genres,
  getInfo: movieinfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search_Results);
