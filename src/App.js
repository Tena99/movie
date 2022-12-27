import React from "react";

import Header_Component from "./components/shared/Header";
import Footer_Component from "./components/shared/Footer";

import { Layout } from "antd";

import "./App.css";
import { Outlet } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <SkeletonTheme baseColor="#949191" highlightColor="#444">
      <Layout>
        <div className={"container"}>
          <Header>
            <Header_Component />
          </Header>
          <Content>
            <Outlet />
          </Content>
          <Footer>
            <Footer_Component />
          </Footer>
        </div>
      </Layout>
    </SkeletonTheme>
  );
}

export default App;
