import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./FoodListSwiper.css"; // 確保有這個 CSS 檔案

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
  { name: "Yogurt", daysLeft: 3 },
  { name: "chicken", daysLeft: 15 },
  { name: "sandwich", daysLeft: 2 },
  { name: "butter", daysLeft: 20 },
  { name: "ham", daysLeft: 31 },
  { name: "Meatballs", daysLeft: 2 },
  { name: "tofu", daysLeft: 7 },
  { name: "cabbage", daysLeft: 4 },
  { name: "rice ball", daysLeft: 5 },
  { name: "juice", daysLeft: 15 },
  { name: "fries", daysLeft: 40 },
];

const groupByDaysLeft = (items) => ({
  red: items.filter((i) => i.daysLeft <= 7),
  yellow: items.filter((i) => i.daysLeft > 7 && i.daysLeft <= 30),
  green: items.filter((i) => i.daysLeft > 30),
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

export default function FoodListSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const grouped = groupByDaysLeft(mockData);
  const categories = [
    { title: "🔴 emergency", key: "red", color: "#ffcccc" },
    { title: "🟡 attention", key: "yellow", color: "#fff3cd" },
    { title: "🟢 safe", key: "green", color: "#d4edda" },
  ];
  const current = categories[activeIndex];

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((activeIndex + 1) % 3),
    onSwipedRight: () => setActiveIndex((activeIndex + 2) % 3),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="swiper-container">
      <FoodListGroup
        title={current.title}
        items={grouped[current.key]}
        color={current.color}
      />
    </div>
  );
}
