import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, diet, cuisine, mealType });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a recipe..."
        className="search-input"
      />
      <select
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        className="search-select"
      >
        <option value="">Select Diet</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten free">Gluten Free</option>
      </select>
      <select
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        className="search-select"
      >
        <option value="">Select Cuisine</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        <option value="american">American</option>
      </select>
      <select
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
        className="search-select"
      >
        <option value="">Select Meal Type</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
