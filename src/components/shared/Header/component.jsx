import Search_field from "../../AntDesign/Search";
import logo from "../../../assets/images/logo.svg";

import "./styles.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className={"container"}>
        <div className={"logo"}>
          <Link to={"/"}>
            <img src={logo} alt={"logo"} />
          </Link>
        </div>
        <Search_field />
      </div>
    </header>
  );
}

export default Header;
