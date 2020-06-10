import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context.js";

const Recipe = ({ match }) => {
  /* 
  const {value1,value2} = useContext(Context);
  let [searchResult,setSearchResult] = value1;
  let [randomResult, setSearchResult] = value2;
  let [width, height] = [312, 150];
  if (searchResult.length === 0 || searchResult === undefined) {
    return (
      <div className="recipeContainer">
        <h2>Recipe List is empty</h2>
        <Link to="/">Home</Link>
      </div>
    );
  } else {
    return (
      <div className="recipeContainer">
        <h2>Recipe: {match.params.id}</h2>
            <img
              src={`https://spoonacular.com/recipeImages/${match.params.id}-${width}x${height}.jpg`}
            />
          <Link to="/">Home</Link>
      </div>
    );
  } */
  return (
  <h2>Recipe</h2>
  )
};

export default Recipe;
