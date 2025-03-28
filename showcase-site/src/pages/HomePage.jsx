import React from "react";
import FoodListSwiper from "./FoodListSwiper";
import "./HomePage.css"; // 確保有掛 CSS

export default function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">🍱 到期食物清單</h1>
      <FoodListSwiper />
    </div>
  );
}