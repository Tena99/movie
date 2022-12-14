import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

import "./styles.css";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = (value) => console.log(value);

const Search_field = () => (
  <Space direction="vertical">
    <Search
      placeholder="Find movie"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
      className={"search"}
    />
  </Space>
);
export default Search_field;
