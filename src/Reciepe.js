import React from "react";
import "./Reciepe.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="main">
      <div className="recipe">

        <h4>{title}</h4>
        <img className="image" src={image} alt="" />
        <i><h6>Calories:{calories}</h6></i>
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </div>

  );
};

export default Recipe;