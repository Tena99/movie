import Banner from "../Banner/component";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <>
      <div className={"app_welcome"}>
        <h1>Welcome to Movie App!</h1>
        <p>
          Movies - scary, funny, dramatic, romantic - make us experience a whole
          range of emotions. A lot of movies - a lot of experiences!
        </p>
      </div>
      <Banner />
      <Navigation />
      <Outlet />
    </>
  );
}

export default Home;
