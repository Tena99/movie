import { Link, Outlet } from "react-router-dom";

import Navigation from "./components/Navigation";

import Header from "./components/shared/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={"container"}>
        <Header />
        <h1>Welcome to Movie App!</h1>
        <p>
          Movies - scary, funny, dramatic, romantic - make us experience a whole
          range of emotions. A lot of movies - a lot of experiences!
        </p>
        <Navigation></Navigation>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
