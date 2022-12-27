import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import store from "./app/store";
import Popular from "./components/Popular";
import NowWatching from "./components/NowWatching";
import Upcoming from "./components/Upcoming";
import TopRated from "./components/TopRated";
import Genre from "./components/Genre_page";
import Home from "./components/Home";
import Detailed from "./components/Detailed_info";
import SearchResults from "./components/Search_results";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={"/"} element={<Home />}>
            <Route path="popular" element={<Popular />}></Route>
            <Route path="now_watching" element={<NowWatching />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="top_rated" element={<TopRated />} />
          </Route>

          <Route path={"/movie/:itemID"} element={<Detailed />}></Route>
          <Route path={"/genre/:genreID"} element={<Genre />}></Route>
          <Route path={"/search/results"} element={<SearchResults />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
