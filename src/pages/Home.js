import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import Pagination from "../components/Pagination";
import axios from "axios";
import "../styles/Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");

  const handleSearch = async (filters, page = 1) => {
    const { query, diet, cuisine, mealType } = filters;

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query,
            diet,
            cuisine,
            type: mealType,
            number: 10,
            offset: (page - 1) * 10,
            apiKey: "7bd728d41bbf4776986505b19ef05c66",
          },
        }
      );

      setRecipes(response.data.results);
      setTotalPages(Math.ceil(response.data.totalResults / 10));
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching the recipes", error);
    }
  };

  const handleSearchSubmit = (filters) => {
    setQuery(filters.query);
    setDiet(filters.diet);
    setCuisine(filters.cuisine);
    setMealType(filters.mealType);

    handleSearch(filters, 1);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the world of recipes!</h1>
      <SearchBar onSearch={handleSearchSubmit} />
      <RecipeList recipes={recipes} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) =>
          handleSearch({ query, diet, cuisine, mealType }, page)
        }
      />
    </div>
  );
};

export default Home;
