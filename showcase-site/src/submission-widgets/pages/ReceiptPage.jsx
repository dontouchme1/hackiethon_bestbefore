// ReceiptPage.jsx
import React, { useState } from "react";
import "./ReceiptPage.css"; 

export default function ReceiptPage() {
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const mockReceipts = [
    {
      id: 1,
      date: "2024/03/28",
      store: "Coles",
      amount: 123,
      items: [
        { name: "milk", expiry: "2024-03-30", storage: "Refrigerate" },
        { name: "cake", expiry: "2024-04-02", storage: "Refrigerate" }
      ]
    },
    {
      id: 2,
      date: "2024/03/27",
      store: "Aldi",
      amount: 256,
      items: [
        { name: "egg", expiry: "2024-04-01", storage: "Refrigerate" },
        { name: "cheese", expiry: "2024-04-05", storage: "Refrigerate" }
      ]
    },
    {
      id: 3,
      date: "2024/03/26",
      store: "Costco",
      amount: 89,
      items: [
        { name: "salad", expiry: "2024-03-27", storage: "Refrigerate" },
        { name: "sandwich", expiry: "2024-03-27", storage: "Refrigerate" },
        { name: "chicken", expiry: "2024-05-01", storage: "Freeze" },
        { name: "Toast", expiry: "2024-04-05", storage: "Normal temperature" },
        { name: "instant noodles", expiry: "2025-04-01", storage: "Normal temperature" },
        { name: "fish", expiry: "2024-04-05", storage: "Freeze" },
        { name: "rice", expiry: "2024-04-01", storage: "Normal temperature" },
        { name: "beef", expiry: "2024-04-05", storage: "Freeze" }
      ]
    },
    {
      id: 4,
      date: "2024/03/25",
      store: "Woolworths",
      amount: 145,
      items: [
        { name: "yogurt", expiry: "2024-03-29", storage: "Refrigerate" }
      ]
    },
    {
      id: 5,
      date: "2024/03/24",
      store: "Woolworths",
      amount: 340,
      items: [
        { name: "dumpling", expiry: "2024-06-01", storage: "Freeze" },
        { name: "pork", expiry: "2024-04-15", storage: "Freeze" }
      ]
    },
    {
      id: 6,
      date: "2024/03/23",
      store: "Costco",
      amount: 679,
      items: [
        { name: "butter", expiry: "2024-04-03", storage: "Refrigerate" },
        { name: "ham", expiry: "2024-04-01", storage: "Refrigerate" }
      ]
    },
    {
      id: 7,
      date: "2024/03/22",
      store: "IKEA",
      amount: 218,
      items: [
        { name: "Swedish Meatballs", expiry: "2024-05-01", storage: "Freeze" }
      ]
    },
    {
      id: 8,
      date: "2024/03/21",
      store: "Coles",
      amount: 110,
      items: [
        { name: "tofu", expiry: "2024-03-25", storage: "Refrigerate" },
        { name: "cabbage", expiry: "2024-03-24", storage: "Refrigerate" }
      ]
    },
    {
      id: 9,
      date: "2024/03/20",
      store: "7-11",
      amount: 99,
      items: [
        { name: "rice ball", expiry: "2024-03-20", storage: "Normal temperature" }
      ]
    },
    {
      id: 10,
      date: "2024/03/19",
      store: "Aldi",
      amount: 280,
      items: [
        { name: "juice", expiry: "2024-04-01", storage: "Refrigerate" },
        { name: "fries ", expiry: "2024-05-01", storage: "Freeze" }
      ]
    }
  ];

  const openModal = (receipt) => setSelectedReceipt(receipt);
  const closeModal = () => setSelectedReceipt(null);

  return (
    <div className="receipt-page">
      <h2 className="receipt-title">Invoice Record</h2>
      <div className="receipt-list">
        {mockReceipts.map((r) => (
          <div
            className="receipt-card"
            key={r.id}
            onClick={() => openModal(r)}
            style={{ cursor: "pointer" }}
          >
            <div className="store-name">🧾 {r.store}</div>
            <p>📅 {r.date}</p>
            <p>💵 NT$ {r.amount}</p>
          </div>
        ))}
      </div>

      {selectedReceipt && (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">{selectedReceipt.store}</h3>
            <div className="line-container">
              <div className="modal-line"></div>
              <span className="date-text">{selectedReceipt.date}</span>
              <div className="modal-line"></div>
            </div>
            <div className="receipt-container">
              {selectedReceipt.items.map((item, index) => (
                <div key={index} className="receipt-item">
                  <div className="item-header">
                    <span className="item-name">{item.name}</span>
                  </div>
                  <div className="item-detail">
                    <label>Expiry:</label>
                    <input type="date" defaultValue={item.expiry} />
                  </div>
                  <div className="item-detail">
                    <label>Preservation:</label>
                    <select defaultValue={item.storage}>
                      <option>Refrigerate</option>
                      <option>Freeze</option>
                      <option>Normal temperature</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
            <button className="confirm-button" onClick={closeModal}>save</button>
            </div>
        </div>
        )}
    </div>
  );
}
