import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { TopRated, Upcoming } from "../../../app/Card/types";

import "./styles.css";

const Navigation = () => (
  <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
    <Menu.Item key="1" icon={<MailOutlined />}>
      <Link to={"/popular"}>Popular </Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<MailOutlined />}>
      <Link to={"/now_watching"}>Now Watching </Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<MailOutlined />}>
      <Link to={"/upcoming"}>Upcoming </Link>
    </Menu.Item>
    <Menu.Item key="4" icon={<MailOutlined />}>
      <Link to={"/top_rated"}>Top Rated </Link>
    </Menu.Item>
  </Menu>
);

export default Navigation;
