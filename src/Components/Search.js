import React, { useState, useContext } from "react";
import logo from "../logo.jpg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Context } from "../Context.js";
import { useHistory } from "react-router-dom";

const Search = () => {
  let { value1, value2 } = useContext(Context);
  let [searchResult, setSearchResult] = value1;
  let [random, setRandom] = value2;
  const [state, setState] = useState("");
  let apiKey = "9222b90548444604b170a5fe8cc9ecfb";
  const history = useHistory();
  const onChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchResult([]);
    setRandom(false);
    fetch(
      `https://api.spoonacular.com/recipes/search?query=${state}&number=12&apiKey=${apiKey}`
    )
      .then((resp) => resp.json())
      .then((resp) => setSearchResult([resp]));
    history.push("/");
  };

  const randButton = (e) => {
    e.preventDefault();
    setSearchResult([]);
    setRandom(true);
    fetch(
      `https://api.spoonacular.com/recipes/random?number=12&apiKey=9222b90548444604b170a5fe8cc9ecfb`
    )
      .then((resp) => resp.json())
      .then((resp) => setSearchResult([resp]));
    history.push("/");
  }

  return (
    <div className="searchContainer">
      <div className="divLogo">
        <img src={logo} alt="logo" className="searchLogo"></img>
      </div>
      <form onSubmit={onSubmit}>
        <input placeholder="Search here..." value={state} onChange={onChange} />
        <div className="buttonContainer">
          <button>Search</button>
          <button onClick={randButton}>Random</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
