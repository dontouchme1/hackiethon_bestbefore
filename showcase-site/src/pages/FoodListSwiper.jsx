import React, { useState } from "react";

const mockData = [
  { name: "牛奶", daysLeft: 0 },
  { name: "優格", daysLeft: 1 },
  { name: "雞蛋", daysLeft: 2 },
  { name: "沙拉", daysLeft: 3 },
  { name: "冷凍餃子", daysLeft: 5 },
  { name: "鮮奶油", daysLeft: 7 },
];

const groupByDaysLeft = (items) => {
  return {
    red: items.filter((i) => i.daysLeft <= 1),
    yellow: items.filter((i) => i.daysLeft > 1 && i.daysLeft <= 3),
    green: items.filter((i) => i.daysLeft > 3),
  };
};

const FoodListGroup = ({ title, items, color }) => (
  <div className="food-group" style={{ backgroundColor: color }}>
    <h2>{title}</h2>
    {items.map((item, index) => (
      <div key={index} className="food-card">
        <strong>{item.name}</strong> - 還有 {item.daysLeft} 天
      </div>
    ))}
  </div>
);

export default function FoodListSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const grouped = groupByDaysLeft(mockData);
  const categories = [
    { title: "🔴 即將過期", key: "red", color: "#ffcccc" },
    { title: "🟡 快過期", key: "yellow", color: "#fff3cd" },
    { title: "🟢 安全", key: "green", color: "#d4edda" },
  ];
  const current = categories[activeIndex];

  return (
    <>
      <div className="nav-buttons">
        <button onClick={() => setActiveIndex((activeIndex + 2) % 3)}>←</button>
        <span>{current.title}</span>
        <button onClick={() => setActiveIndex((activeIndex + 1) % 3)}>→</button>
      </div>
      <FoodListGroup
        title={current.title}
        items={grouped[current.key]}
        color={current.color}
      />
    </>
  );
}
