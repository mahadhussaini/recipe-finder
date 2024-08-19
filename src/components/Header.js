// Header.js
import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">RecipeRadar</Link>
      </div>
    </header>
  );
};

export default Header;
