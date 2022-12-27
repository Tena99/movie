import React, { useEffect } from "react";
import { Layout } from "antd";

import "./styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import { genres } from "../../app/Card/actions";
import { connect } from "react-redux";
import { movieinfo } from "../../app/Detailed_info/actions";
import dateFormat from "dateformat";
import { useParams } from "react-router-dom";
import useGetData from "../../helpers/getData";
import Skeleton from "react-loading-skeleton";

const { Sider, Content } = Layout;

const Description_card = ({ info_state, genre_state, getInfo, getGenres }) => {
  const base_url = "https://image.tmdb.org/t/p";
  const file_size = "/w500";

  let { itemID } = useParams();

  useGetData(`/movie/${itemID}`, getInfo);
  useGetData("/genre/movie/list", getGenres);

  function mapper(data) {
    return data.map(function (item) {
      return item.name;
    });
  }

  function compareGenreIds(data) {
    let i = 0;

    return data.map(function (item) {
      if (genre_state.length !== 0) {
        for (let genre of genre_state.genres) {
          if (genre.id === item.id) {
            if (info_state.genres.length - 1 !== i) {
              i = i + 1;
              return <span>{genre.name}, </span>;
            } else {
              return <span>{genre.name} </span>;
            }
          }
        }
      }
    });
  }

  return (
    <div className={"movie_container"}>
      <Layout>
        <Sider>
          <div className={"movie_poster"}>
            {info_state.poster_path ? (
              <img
                src={base_url + file_size + info_state.poster_path}
                alt={"poster"}
              />
            ) : (
              <Skeleton count={1} height={310} />
            )}
          </div>
        </Sider>

        <Content>
          <article className={"movie_description"}>
            <div className={"movie_description_title"}>
              <h3>
                {info_state.title || (
                  <Skeleton count={1} height={35} width={335} />
                )}
              </h3>
              <span>
                {info_state.vote_average ? (
                  info_state.vote_average.toPrecision(2)
                ) : (
                  <Skeleton count={1} height={35} width={40} />
                )}
              </span>
            </div>

            <p className={"movie_description_tagline"}>
              {info_state.tagline ? (
                info_state.tagline
              ) : (
                <Skeleton count={1} width={150} />
              )}
            </p>

            <ul>
              <li>
                <span> Original language: </span>
                {info_state.original_language ? (
                  info_state.original_language.toUpperCase()
                ) : (
                  <Skeleton count={1} width={50} />
                )}
              </li>
              <li>
                <span> Status: </span>
                {info_state.status ? (
                  info_state.status
                ) : (
                  <Skeleton count={1} width={60} />
                )}
              </li>
              <li>
                <span> Release date: </span>
                {info_state.release_date ? (
                  dateFormat(info_state.release_date, "yyyy")
                ) : (
                  <Skeleton count={1} width={35} />
                )}
              </li>
              <li>
                <span> Country: </span>{" "}
                {info_state.production_countries ? (
                  mapper(info_state.production_countries)
                ) : (
                  <Skeleton count={1} width={180} />
                )}
              </li>
              <li>
                <span> Genre: </span>
                {info_state.genres ? (
                  compareGenreIds(info_state.genres)
                ) : (
                  <Skeleton count={1} width={220} />
                )}
              </li>
            </ul>

            <p className={"movie_description_overview"}>
              {info_state.overview ? (
                info_state.overview
              ) : (
                <Skeleton count={1} height={85} />
              )}
            </p>
          </article>

          {info_state.video ? (
            <div className={"movie_trailer"}>{info_state.video}</div>
          ) : null}
        </Content>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info_state: state.info.movie_info,
  genre_state: state.card.genres,
});

const mapDispatchToProps = {
  getInfo: movieinfo,
  getGenres: genres,
};

export default connect(mapStateToProps, mapDispatchToProps)(Description_card);
