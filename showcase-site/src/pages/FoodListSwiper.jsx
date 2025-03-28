import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const mockData = [
  { name: "milk", daysLeft: 0 },
  { name: "cake", daysLeft: 1 },
  { name: "egg", daysLeft: 2 },
  { name: "salad", daysLeft: 3 },
  { name: "dumpling", daysLeft: 5 },
  { name: "beef", daysLeft: 7 },
];

const groupByDaysLeft = (items) => ({
  red: items.filter((i) => i.daysLeft <= 1),
  yellow: items.filter((i) => i.daysLeft > 1 && i.daysLeft <= 3),
  green: items.filter((i) => i.daysLeft > 3),
});

const FoodListGroup = ({ title, items, color }) => (
  <div className="food-group" style={{ backgroundColor: color }}>
    <h2>{title}</h2>
    {items.map((item, index) => (
      <div key={index} className="food-card">
        <strong>{item.name}</strong> - {item.daysLeft} days left
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
    onSwipedRight: () => setActiveIndex((activeIndex + 2) % 3), // +2 % 3 == -1
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // 滑鼠也可測試
  });

  return (
    <div {...handlers}>
      <div className="swipe-title" style={{ color: "white", marginBottom: "1rem" }}>
      </div>
      <FoodListGroup
        title={current.title}
        items={grouped[current.key]}
        color={current.color}
      />
    </div>
  );
}