import React from "react";
import FoodListSwiper from "./FoodListSwiper";
import "./HomePage.css"; 

export default function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">BestBefore</h1>
      <FoodListSwiper />
    </div>
  );
}