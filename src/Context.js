import React, { useEffect } from "react";
import { useState } from "react";

export const Context = React.createContext();

export const Provider = (props) => {
  let [searchResult, setSearchResult] = useState([]);
  let [random, setRandom] = useState(true);
  let apiKey = "9222b90548444604b170a5fe8cc9ecfb";
  useEffect(() => {
    fetch(
      /* `https://api.spoonacular.com/recipes/search?query=cheese&number=12&apiKey=${apiKey}`
       */
      `https://api.spoonacular.com/recipes/random?number=12&instructionsRequired=true&apiKey=9222b90548444604b170a5fe8cc9ecfb`
    )
      .then((resp) => resp.json())
      .then((resp) => {        
        setSearchResult([resp]);
      });
  }, []);
  return (
    <Context.Provider
      value={{
        value1: [searchResult, setSearchResult],
        value2: [random, setRandom],
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
