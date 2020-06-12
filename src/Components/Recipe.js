import React from "react";
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
  let item = undefined;

  /* function createMarkup() {
    return {__html: item.instructions};
  } */

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

    searchResult[0][tag].forEach((i) => {
      if (i.id.toString() === id) {
        /*         idTitle = i.title;
         */ item = i;
      }
    });
    if (item === undefined) {
      return (
        <div className="recipeContainer">
          <h2>Item not found</h2>
          <Link to="/">Home</Link>
        </div>
      );
    } else {
      return (
        <div className="recipeContainer">
          <h2 className="recipeTitle">{item.title}</h2>
          <img
            alt="RecipeImage"
            src={`https://spoonacular.com/recipeImages/${id}-${width}x${height}.jpg`}
          />
          {/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
          <ul>
            {item.analyzedInstructions.map((iter) => {
              return (
                <div>
                  <h2>---------------</h2>
                  {iter.steps.map((iter2) => {
                    return <li key={item.id}>{iter2.step}</li>;
                  })}
                </div>
              );
            })}
          </ul>

          <Link to="/">Home</Link>
        </div>
      );
    }
  }
};

export default Recipe;
