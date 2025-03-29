import React from "react";
import "./FoodListSwiper.css";

const mockData = [
  { name: "milk", daysLeft: 3 },
  { name: "cake", daysLeft: 1 },
  { name: "egg", daysLeft: 7 },
  { name: "salad", daysLeft: 3 },
  { name: "dumpling", daysLeft: 60 },
  { name: "beef", daysLeft: 14 },
  { name: "rice", daysLeft: 100 },
  { name: "toast", daysLeft: 6 },
  { name: "instant noodles", daysLeft: 60 },
  { name: "yogurt", daysLeft: 3 },
  { name: "chicken", daysLeft: 15 },
  { name: "sandwich", daysLeft: 2 },
  { name: "butter", daysLeft: 20 },
  { name: "ham", daysLeft: 31 },
  { name: "meatballs", daysLeft: 2 },
  { name: "tofu", daysLeft: 7 },
  { name: "cabbage", daysLeft: 4 },
  { name: "rice ball", daysLeft: 5 },
  { name: "juice", daysLeft: 15 },
  { name: "fries", daysLeft: 40 },
];

const groupByDaysLeft = (items) => ({
  emergency: items.filter((i) => i.daysLeft <= 7).sort((a, b) => a.daysLeft - b.daysLeft),
  attention: items.filter((i) => i.daysLeft > 7 && i.daysLeft <= 30).sort((a, b) => a.daysLeft - b.daysLeft),
  safe: items.filter((i) => i.daysLeft > 30).sort((a, b) => a.daysLeft - b.daysLeft),
});


const FoodListGroup = ({ title, items, color }) => (
  <div className="food-group" style={{ backgroundColor: color }}>
    <div className="group-title">{title}</div>
    {items.map((item, index) => (
      <div key={index} className="food-card">
        <span>{item.name}</span>
        <span>{item.daysLeft} days left</span>
      </div>
    ))}
  </div>
);

export default function FoodListSwiper({ category }) {
  const grouped = groupByDaysLeft(mockData);
  const colorMap = {
    emergency: "#ffcccc",
    attention: "#fff3cd",
    safe: "#d4edda",
  };

  return (
    <div className="swiper-container">
      <FoodListGroup
        title={
          category === "emergency"
            ? "🔴 emergency"
            : category === "attention"
            ? "🟡 attention"
            : "🟢 safe"
        }
        items={grouped[category]}
        color={colorMap[category]}
      />
    </div>
  );
}
