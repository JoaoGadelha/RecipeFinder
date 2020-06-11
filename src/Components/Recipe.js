import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context.js";

const Recipe = ({ match }) => {
  let { value1, value2 } = useContext(Context);
  let [searchResult, setSearchResult] = value1;
  let [random, setRandom] = value2;
  let [width, height] = [312, 150];
  let tag;
  let id = match.params.id;
  let idTitle = "";

  if (searchResult.length === 0 || searchResult === undefined) {
    return (
      <div className="recipeContainer">
        <h2>Recipe List is empty</h2>
        <Link to="/">Home</Link>
      </div>
    );
  } else {
    if (random) {
      tag = "recipes";
    } else {
      tag = "results";
    }

    searchResult[0][tag].map((item) => {
      if ((item.id).toString() === id) {
        idTitle = item.title;
      }
    });

    return (
      <div className="recipeContainer">
        <h2 className="recipeTitle">{idTitle}</h2>
        <img
          src={`https://spoonacular.com/recipeImages/${id}-${width}x${height}.jpg`}
        />
        <p></p>

        <Link to="/">Home</Link>
      </div>
    );
  }
};

export default Recipe;
