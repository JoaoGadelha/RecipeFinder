import React, { useContext, useEffect } from "react";
import { Context } from "../Context.js";
import { Link } from "react-router-dom";
import Spinner from './Spinner.js'

const MainPage = () => {
  /* let { value1, value2 } = useContext(Context);
  let [searchResult, setSearchResult] = value1;
  let [randomResult, setRandomResult] = value2;
 */
  let [searchResult, setSearchResult, setIdTitleVec, apiKey] = useContext(
    Context
  );
  let [width, height] = [90, 90];
  let itemVec = [];
  let idTitleVec = setIdTitleVec();

  const limitString = () => {
    itemVec = [];
    const limit = 20;
    if (idTitleVec.length !== 0) {
      idTitleVec.forEach((item) => {
        if (item.title.length > limit) {
          itemVec.push(...[item.title.slice(0, limit) + "..."]);
        } else {
          itemVec.push(item.title);
        }
      });
    }
  };

  if (!(idTitleVec && idTitleVec.length)) {
    return (
      <Spinner/>
    );
  } else {
    limitString();
    return (
      <React.Fragment>
        <div className="mainContainer">
          {idTitleVec.map((item, index) => (
            <Link to={`/${item.id}`} className="recipeItem" key={item.id}>
              <div>
                <img
                  alt="RecipeImage"
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
