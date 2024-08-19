import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: { apiKey: "7bd728d41bbf4776986505b19ef05c66" },
          }
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching the recipe details", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  // @ts-ignore
  if (!recipe) return <div style={styles.loading}>Loading...</div>;

  return (
    <div style={styles.container}>
      <h1
        // @ts-ignore
        style={styles.title}
      >
        {
          // @ts-ignore
          recipe.title
        }
      </h1>
      <img
        src={
          // @ts-ignore
          recipe.image
        }
        // @ts-ignore
        alt={recipe.title}
        style={styles.image}
      />
      <div style={styles.section}>
        <h2 style={styles.subTitle}>Ingredients</h2>
        <ul style={styles.list}>
          {recipe// @ts-ignore
          .extendedIngredients // @ts-ignore // @ts-ignore // @ts-ignore // @ts-ignore
            .map((ingredient) => (
              <li key={ingredient.id} style={styles.listItem}>
                {ingredient.original}
              </li>
            ))}
        </ul>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subTitle}>Instructions</h2>
        <p style={styles.text}>
          {
            // @ts-ignore
            recipe.instructions
          }
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subTitle}>Nutrition</h2>
        {/* Check if nutrition and nutrients exist before mapping */}
        {
          // @ts-ignore
          recipe.nutrition && recipe.nutrition.nutrients ? (
            <ul style={styles.list}>
              {recipe// @ts-ignore
              .nutrition.nutrients // @ts-ignore // @ts-ignore // @ts-ignore // @ts-ignore
                .map((nutrient) => (
                  <li key={nutrient.title} style={styles.listItem}>
                    {nutrient.title}: {nutrient.amount} {nutrient.unit}
                  </li>
                ))}
            </ul>
          ) : (
            <p style={styles.text}>Nutrition information not available</p>
          )
        }
      </div>
    </div>
  );
};

// Define your styles here (or import them)
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  loading: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "1.5rem",
    color: "#333",
  },
  title: {
    textAlign: "center",
    color: "#333",
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  button: {
    display: "block",
    margin: "0 auto 20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  subTitle: {
    fontSize: "1.75rem",
    color: "#555",
    marginBottom: "10px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    padding: "8px 0",
    borderBottom: "1px solid #ddd",
    fontSize: "1rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555",
  },
};

export default RecipeDetails;
