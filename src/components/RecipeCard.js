import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <button onClick={handleClick} className="view-recipe-button">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
