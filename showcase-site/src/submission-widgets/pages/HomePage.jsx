// HomePage.jsx
import React from "react";
import FoodListSwiper from "./FoodListSwiper";
import "./HomePage.css";

export default function HomePage() {
    return (
      <div className="homepage-container">
        <img
          src="/title.png"
          alt="BestBefore"
          className="homepage-title-image"
        />
        <FoodListSwiper />
      </div>
    );
  }