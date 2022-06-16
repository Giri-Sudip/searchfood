import "./App.css";
import React, { useEffect, useState } from "react";
import Reciepe from "./Reciepe";
const App = () => {
  // const App_ID = "67a8813e";
  // const APP_KEY = "c7d8c034837fdca06993b8878bb69e8c";
  // const Request = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=$(App_ID)&app_key=$(APP_KEY)`;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]
  );
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=67a8813e&app_key=c7d8c034837fdca06993b8878bb69e8c`,

    );

    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <div className="App">
        <h2 className="App_Name"> Food Recipe</h2>

        <form className="search-form" onSubmit={getSearch}>
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="recipes">
          {recipes.map((recipe) => (
            <Reciepe
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>

      </div>
    </>
  );
};

export default App;
