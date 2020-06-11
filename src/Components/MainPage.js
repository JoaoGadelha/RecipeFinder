import React, { useContext, useEffect } from "react";
import { Context } from "../Context.js";
import { Link } from "react-router-dom";

const MainPage = () => {
  /* let { value1, value2 } = useContext(Context);
  let [searchResult, setSearchResult] = value1;
  let [randomResult, setRandomResult] = value2;
 */
  let { value1, value2 } = useContext(Context);
  let [searchResult, setSearchResult] = value1;
  let [random, setRandom] = value2;
  let tag;
  let [width, height] = [90, 90];
  let itemVec = [];

  if (random) {
    tag = "recipes";
  } else {
    tag = "results";
  }

  const limitString = () => {
    console.log("tag " + tag);
    console.log(searchResult);
    itemVec = [];
    const limit = 20;
    searchResult[0][tag].forEach((item) => {
      if (item.title.length > limit) {
        itemVec.push(...[item.title.slice(0, limit) + "..."]);
      } else {
        itemVec.push(item.title);
      }
    });
  };

  if (searchResult.length === 0 || searchResult === undefined) {
    return (
      <React.Fragment>
        <h2>Botar Spinner</h2>
      </React.Fragment>
    );
  } else {
    limitString();
    return (
      <React.Fragment>
        <div className="mainContainer">
          {searchResult[0][tag].map((item, index) => (
            <Link to={`/${item.id}`} className="recipeItem" key={item.id}>
              <div>
                <img alt='RecipeImage'
                  src={`https://spoonacular.com/recipeImages/${item.id}-${width}x${height}.jpg`}
                />
                <i className="fas fa-utensils"></i>{" "}
                <span className="recipeTitle">{itemVec[index]}</span>
              </div>
            </Link>
          ))}
        </div>
      </React.Fragment>
    );
  }
};

export default MainPage;
