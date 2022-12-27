import React from "react";
import { Pagination } from "antd";

import "./styles.css";

const PageScroll = () => (
  <Pagination defaultCurrent={1} total={20000} showSizeChanger={false} />
);
export default PageScroll;
