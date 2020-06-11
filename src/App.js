import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Components/MainPage.js";
import Recipe from "./Components/Recipe";
import { Provider } from "./Context.js";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { Link } from "react-router-dom";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Link to="/" className="navbarLink">
            <Navbar />
          </Link>
          <Search />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/:id" component={Recipe} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
