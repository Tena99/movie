import React from "react";
import { Badge, Space } from "antd";

import "./styles.css";

const Tag = ({ count }) => (
  <Space className={"tag"} size="middle">
    <Badge className={"tag"} count={count}></Badge>
  </Space>
);
export default Tag;
