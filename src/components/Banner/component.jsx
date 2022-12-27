//Global
import React from "react";
import dateFormat from "dateformat";

//Constants
import { base_url, file_size } from "../../helpers/constants";

//Methods
import useGetData from "../../helpers/getData";
import { genres, trending } from "../../app/Card/actions";
import { connect } from "react-redux";
import compare from "../../helpers/compare";

//Components
import Skeleton from "react-loading-skeleton";
import { StarFilled } from "@ant-design/icons";

//Styles
import "./styles.css";

const RenderBanner = ({ trending, getTrending, genres, getGenres }) => {
  useGetData(`/trending/movie/week`, getTrending);
  useGetData("/genre/movie/list", getGenres);

  return (
    <>
      {trending.results ? (
        <div className={"main_banner"} key={trending.results[0].id}>
          <div className={"banner_img"}>
            {trending.results[0].backdrop_path ? (
              <img
                src={base_url + file_size + trending.results[0].backdrop_path}
                alt={"poster"}
              />
            ) : (
              <Skeleton count={1} />
            )}
          </div>

          <div className={"banner_info"}>
            <div className={"banner_info_item"}>
              <h3>
                {trending.results[0].title ? (
                  trending.results[0].title
                ) : (
                  <Skeleton count={1} />
                )}
              </h3>
              <p>
                {<StarFilled />}
                {trending.results[0].vote_average ? (
                  `${trending.results[0].vote_average.toPrecision(2)} `
                ) : (
                  <Skeleton count={1} />
                )}
              </p>
            </div>

            <p className={"banner_info_genres"}>
              {trending.results[0].release_date ? (
                `${dateFormat(
                  trending.results[0].release_date,
                  "yyyy"
                )}, ${compare(
                  trending.results[0].genre_ids[0],
                  genres.genres
                )} `
              ) : (
                <Skeleton count={1} />
              )}
            </p>
            <p className={"banner_info_description"}>
              {trending.results[0].overview ? (
                trending.results[0].overview
              ) : (
                <Skeleton count={1} />
              )}
            </p>
          </div>
        </div>
      ) : (
        <div className={"main_banner"}>
          <div className={"banner_img"}>
            <Skeleton count={1} width={530} height={300} />
          </div>

          <div className={"banner_info"}>
            <div className={"banner_info_item"}>
              <h3>
                <Skeleton count={1} width={290} height={30} />
              </h3>
              <p>
                <StarFilled />
                <Skeleton count={1} width={30} height={30} />
              </p>
            </div>

            <p className={"banner_info_genres"}>
              <Skeleton count={1} />
            </p>
            <p className={"banner_info_description"}>
              <Skeleton count={1} width={425} height={150} />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  trending: state.card.trending,
  genres: state.card.genres,
});

const mapDispatchToProps = {
  getTrending: trending,
  getGenres: genres,
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderBanner);
