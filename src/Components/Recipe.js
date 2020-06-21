import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context.js";
import Spinner from './Spinner.js';

const Recipe = ({ match }) => {
  let [searchResult, setSearchResult, setIdTitleVec, apiKey] = useContext(Context);
  let [item, setItem] = useState({});
  let [width, height] = [312, 150];
  let id = match.params.id;
  let idTitleVec = setIdTitleVec();

  /* function createMarkup() {
    return {__html: item.instructions};
  } */

  if (!(idTitleVec && idTitleVec.length)) {
    return (
      <div className="recipeContainer">
        <h2>Recipe List is empty</h2>
        <Link to="/">Home</Link>
      </div>
    );
  } else {
    idTitleVec.forEach((i) => {
      if (i.id.toString() === id) {
        fetch(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`
        )
          .then((resp) => resp.json())
          .then((resp) => {      
            setItem(resp);
          });
      }
    });
    if (Object.entries(item).length === 0) {
      return (
        <div className="recipeContainer">
          <Spinner/>
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
            {item.analyzedInstructions.map((iter, index) => {
              return (
                <div key={Math.random()} className="recipeStepContainer">
                  {iter.steps.map((iter2, index2) => {
                    return (
                      <div key={Math.random()}>
                        <li key={Math.random()} className="IDK">
                          <h2 key={Math.random()}>Step {index2 + 1}</h2>
                          {iter2.step}
                        </li>
                      </div>
                    );
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
