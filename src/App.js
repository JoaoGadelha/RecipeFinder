import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Components/MainPage.js";
import SearchResult from "./Components/SearchResult";
import Recipe from "./Components/Recipe";
import { Provider } from "./Context.js";
import Navbar from './Components/Navbar';
import Search from './Components/Search';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App"> 
        <Navbar/> 
        <Search/>  
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
