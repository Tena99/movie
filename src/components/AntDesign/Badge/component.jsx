import React from "react";
import { Avatar, Badge, Space } from "antd";

import "./styles.css";

const Tag = ({ count }) => (
  <Space className={"tag"} size="middle" color={"blue"}>
    <Badge className={"tag"} count={count}></Badge>
  </Space>
);
export default Tag;
