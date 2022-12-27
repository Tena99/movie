//Global
import React, { useState } from "react";

//Methods
import useGetData from "../../../helpers/getData";
import { genres } from "../../../app/Card/actions";
import { connect } from "react-redux";

//Components
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

//Styles
import "./styles.css";

const Dropdown_menu = ({ genres, getGenres }) => {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  useGetData("/genre/movie/list", getGenres);

  function GetContent() {
    if (genres) {
      if (genres.genres) {
        let array = genres.genres;
        let size = 5;
        let subarray = [];
        for (let i = 0; i < Math.ceil(array.length / size); i++) {
          subarray[i] = array.slice(i * size, i * size + size);
        }

        return subarray.map(function (item) {
          return (
            <ul>
              {item.map(function (sub_item) {
                return (
                  <li key={sub_item.id} onClick={hide}>
                    <Link to={`/genre/${sub_item.id}`}>{sub_item.name}</Link>
                  </li>
                );
              })}
            </ul>
          );
        });
      }
    }
  }

  const content = <div className={"dropdown_container"}>{GetContent()}</div>;

  return (
    <Dropdown
      className={"dropdown_item"}
      trigger={["click"]}
      open={open}
      onOpenChange={handleOpenChange}
      dropdownRender={() => (
        <div className="dropdown-content">
          {content}
          <Space
            style={{
              padding: 8,
            }}
          ></Space>
        </div>
      )}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <MenuOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

const mapStateToProps = (state) => ({
  genres: state.card.genres,
});

const mapDispatchToProps = {
  getGenres: genres,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown_menu);
