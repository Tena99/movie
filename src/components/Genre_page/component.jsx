//Global
import React from "react";
import dateFormat from "dateformat";

//Constants
import { base_url, file_size } from "../../helpers/constants";

//Methods
import { useParams } from "react-router-dom";
import useGetData from "../../helpers/getData";
import { getMovieByGenre } from "../../app/Genres/actions";
import { connect } from "react-redux";
import { genres } from "../../app/Card/actions";
import compare from "../../helpers/compare";

//Components
import { Link } from "react-router-dom";
import Card from "../AntDesign/Card/component";
import PageScroll from "../AntDesign/Pagination";
import Skeleton from "react-loading-skeleton";

//Styles
import "./styles.css";

function RenderCollectionbyGenre({
  movieByGenre,
  getMovies,
  genres,
  getGenres,
}) {
  let { genreID } = useParams();

  useGetData(`/discover/movie`, getMovies, `&with_genres=${genreID}`, [
    genreID,
  ]);
  useGetData("/genre/movie/list", getGenres);

  return (
    <>
      {movieByGenre.results ? (
        <h3 className={"genre_title"}>
          {compare(Number(genreID), genres.genres)}
        </h3>
      ) : (
        <Skeleton className={"genre_title"} count={1} height={50} />
      )}

      <div className={"card_container"}>
        {movieByGenre.results
          ? movieByGenre.results.map(function (item) {
              return (
                <div key={item.id} className={"card_item"}>
                  <Link to={`/movie/${item.id}`}>
                    <Card
                      title={item.title}
                      img={base_url + file_size + item.poster_path}
                      release_date={dateFormat(item.release_date, "yyyy")}
                      genre={compare(item.genre_ids[0], genres.genres)}
                      popularity={item.vote_average.toPrecision(2)}
                    />
                  </Link>
                </div>
              );
            })
          : movieByGenre.map(function () {
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
  genres: state.card.genres,
  movieByGenre: state.genre.movieByGenre,
});

const mapDispatchToProps = {
  getMovies: getMovieByGenre,
  getGenres: genres,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderCollectionbyGenre);
