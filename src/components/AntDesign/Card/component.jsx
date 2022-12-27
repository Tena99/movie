import React from "react";

import { Card } from "antd";
import Badge from "../Badge";
import Skeleton from "react-loading-skeleton";

import "./styles.css";
import "react-loading-skeleton/dist/skeleton.css";

const Card_item = ({ img, title, release_date, genre, popularity }) => (
  <div className="site-card-border-less-wrapper">
    <Card bordered={false} style={{ width: 230 }}>
      {img ? (
        <img
          src={img}
          alt={"movie_poster"}
          width={"100%"}
          className={"movie_poster"}
        />
      ) : (
        <Skeleton count={1} height={325} width={220} />
      )}
      <div className={"movie_info"}>
        <h3>{title ? title : <Skeleton count={1} />}</h3>
        <p>
          {release_date && genre ? (
            `${release_date}, ${genre}`
          ) : (
            <Skeleton count={1} />
          )}
        </p>

        <Badge count={popularity}></Badge>
      </div>
    </Card>
  </div>
);
export default Card_item;
