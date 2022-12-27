import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.svg";

import "./styles.css";

function Header() {
  return (
    <>
      <div className={"logo"}>
        <Link to={"/"}>
          <img src={logo} alt={"logo"} />
        </Link>
      </div>
      <p>
        @ 2022 MovieDB. Лучшая коллекция фильмов и сериалов онлайн. Все права
        защищены.
      </p>
    </>
  );
}

export default Header;
