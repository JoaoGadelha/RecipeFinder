import React, { useEffect } from "react";
import { useState } from "react";

export const Context = React.createContext();

export const Provider = (props) => {
  let [searchResult, setSearchResult] = useState({});
  let apiKey = "b2a5298928f34afcba0d69eac20faedb";
  let numberRecipes = 12;
  /* 1ac572967e9f4ccfb15e43d732b239b9 */
  /* ddf9c8f7ce9244c2b9c4114d1238c9ff */
  /* fdf8595ef8b84cc1bee09aeddd3b3675 */
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?number=${numberRecipes}&instructionsRequired=true&apiKey=${apiKey}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setSearchResult(resp);
      });
  }, []);

  const setIdTitleVec = () => {
    for (var key in searchResult) {
      if (searchResult.hasOwnProperty(key))
        return searchResult[Object.keys(searchResult)[0]];
    }
    return [];
  };

  return (
    <Context.Provider value={[searchResult, setSearchResult, setIdTitleVec,apiKey, numberRecipes]}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
