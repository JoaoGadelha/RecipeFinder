import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({value1}) => {
    let itemVec = [];
    let [searchResult, setSearchResult] = value1;
    let [width, height] = [90, 90];

    const limitString = () => {
        itemVec = [];
        const limit = 20;
        searchResult[0].results.map((item) => {
          if (item.title.length > limit) {
            itemVec.push(...[item.title.slice(0, limit) + "..."]);
          } else {
            itemVec.push(item.title);
          }
        });
      };
  
    limitString();
  return (
    <React.Fragment>
      <div className="mainContainer">
        {searchResult[0].results.map((item, index) => (
          <Link to={`/${item.id}`} className="recipeItem" key={item.id}>
            <div>
              <img
                src={`https://spoonacular.com/recipeImages/${item.id}-${width}x${height}.jpg`}
              />
              <i class="fas fa-utensils"></i>{" "}
              <span className="recipeTitle">{itemVec[index]}</span>
            </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default SearchResult;
