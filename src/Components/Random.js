import React from "react";
import { Link } from "react-router-dom";

const Random = ({ value2 }) => {
  let itemVec = [];
  let [randomResult, setRandomResult] = value2;
  let [width, height] = [90, 90];

  const limitString = () => {
    itemVec = [];
    const limit = 20;
    randomResult[0].recipes.map((item) => {
      if (item.title.length > limit) {
        itemVec.push(...[item.title.slice(0, limit) + "..."]);
      } else {
        itemVec.push(item.title);
      }
    });
  };

  if (randomResult.length === 0 || randomResult === undefined) {
    return <h2>Random empty</h2>
  } else {
      console.log(randomResult);
    limitString();
    return (
      <React.Fragment>
        <div className="mainContainer">
          {randomResult[0].recipes.map((item, index) => (
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
  }
};

export default Random;
