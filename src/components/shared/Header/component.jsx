import React from "react";
import { Link } from "react-router-dom";

import Dropdown_menu from "../../AntDesign/Dropdown";
import logo from "../../../assets/images/logo.svg";
import Formik_Search from "../../Formik_Search";

import "./styles.css";

function Header() {
  return (
    <>
      <div className={"dropdown"}>
        <Dropdown_menu />

        <div className={"logo"}>
          <Link to={"/"}>
            <img src={logo} alt={"logo"} />
          </Link>
        </div>
      </div>
      <Formik_Search />
    </>
  );
}

export default Header;
