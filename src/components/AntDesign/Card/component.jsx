import React from "react";

import { Card } from "antd";
import Badge from "../Badge";

import "./styles.css";

const Card_item = ({ img, title, release_date, genre, popularity }) => (
  <div className="site-card-border-less-wrapper">
    <Card
      bordered={false}
      style={{
        width: 230,
      }}
    >
      <img
        src={img}
        alt={"movie_poster"}
        width={"100%"}
        className={"movie_poster"}
      />
      <div className={"movie_info"}>
        <h3>{title}</h3>
        <p>
          {release_date}, {genre}
        </p>
        <Badge count={popularity} />
      </div>
    </Card>
  </div>
);
export default Card_item;
