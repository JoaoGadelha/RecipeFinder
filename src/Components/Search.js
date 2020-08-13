import React, { useState, useContext } from "react";
import logo from "../logo.jpg";
import { Context } from "../Context.js";
import { useHistory } from "react-router-dom";

const Search = () => {
  let [searchResult, setSearchResult, setIdTitleVec, apiKey, numberRecipes] = useContext(Context);
  const [state, setState] = useState("");
  const history = useHistory();

  const onChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); 
    setSearchResult({});   
    fetch(
      `https://api.spoonacular.com/recipes/search?query=${state}&number=${numberRecipes}&instructionsRequired=true&apiKey=${apiKey}`
    )
      .then((resp) => resp.json())
      .then((resp) => setSearchResult(resp));
    history.push("/");
  };

  const randButton = (e) => {
    e.preventDefault();
    setSearchResult({});
    fetch(
      `https://api.spoonacular.com/recipes/random?number=${numberRecipes}&instructionsRequired=true&apiKey=${apiKey}`
    )
      .then((resp) => resp.json())
      .then((resp) => setSearchResult(resp));
    history.push("/");
  }

  return (
    <div className="searchContainer">
      <div className="divLogo">
        <img src={logo} alt="logo" className="searchLogo"></img>
      </div>
      <form onSubmit={onSubmit}>
        <input placeholder="Search here..." value={state} onChange={onChange}/>
        <div className="buttonContainer">
          <button>Search</button>
          <button onClick={randButton}>Random</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
