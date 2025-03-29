// ReceiptPage.jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 引入日期選擇器的 CSS
import "./ReceiptPage.css"; 

export default function ReceiptPage() {
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const [mockReceipts, setMockReceipts] = useState([
    {
      id: 1,
      date: "28/03/2024",
      store: "Coles",
      amount: 123,
      items: [
        {name: "milk", expiry: "30/03/2024", storage: "Refrigerate"},
        {name: "cake", expiry: "02/04/2024", storage: "Refrigerate"}
      ]
    },
    {
      id: 2,
      date: "27/03/2024",
      store: "Aldi",
      amount: 256,
      items: [
        {name: "egg", expiry: "01/04/2024", storage: "Refrigerate"},
        {name: "cheese", expiry: "05/04/2024", storage: "Refrigerate"}
      ]
    },
    {
      id: 3,
      date: "26/03/2024",
      store: "Costco",
      amount: 89,
      items: [
        {name: "salad", expiry: "27/03/2024", storage: "Refrigerate"},
        {name: "sandwich", expiry: "27/03/2024", storage: "Refrigerate"},
        {name: "chicken", expiry: "01/05/2024", storage: "Freeze"},
        {name: "toast", expiry: "05/04/2024", storage: "Normal temperature"},
        {name: "instant noodles", expiry: "01/04/2025", storage: "Normal temperature"},
        {name: "fish", expiry: "05/04/2024", storage: "Freeze"},
        {name: "rice", expiry: "01/04/2024", storage: "Normal temperature"},
        {name: "beef", expiry: "05/04/2024", storage: "Freeze"}
      ]
    },
    {
      id: 4,
      date: "25/03/2024",
      store: "Woolworths",
      amount: 145,
      items: [
        {name: "yogurt", expiry: "29/03/2024", storage: "Refrigerate"}
      ]
    },
    {
      id: 5,
      date: "24/03/2024",
      store: "Woolworths",
      amount: 340,
      items: [
        {name: "dumpling", expiry: "01/06/2024", storage: "Freeze"},
        {name: "pork", expiry: "15/04/2024", storage: "Freeze"}
      ]
    },
    {
      id: 6,
      date: "23/03/2024",
      store: "Costco",
      amount: 679,
      items: [
        {name: "butter", expiry: "03/04/2024", storage: "Refrigerate"},
        {name: "ham", expiry: "01/04/2024", storage: "Refrigerate"}
      ]
    },
    {
      id: 7,
      date: "22/03/2024",
      store: "IKEA",
      amount: 218,
      items: [
        {name: "meatballs", expiry: "01/05/2024", storage: "Freeze"}
      ]
    },
    {
      id: 8,
      date: "21/03/2024",
      store: "Coles",
      amount: 110,
      items: [
        {name: "tofu", expiry: "25/03/2024", storage: "Refrigerate"},
        {name: "cabbage", expiry: "24/03/2024", storage: "Refrigerate"}
      ]
    },
    {
      id: 9,
      date: "20/03/2024",
      store: "7-11",
      amount: 99,
      items: [
        {name: "rice ball", expiry: "20/03/2024", storage: "Normal temperature"}
      ]
    },
    {
      id: 10,
      date: "19/03/2024",
      store: "Aldi",
      amount: 280,
      items: [
        {name: "juice", expiry: "01/04/2024", storage: "Refrigerate"},
        {name: "fries", expiry: "01/05/2024", storage: "Freeze"}
      ]
    }
  ]);

  const openModal = (receipt) => {
    console.log("Selected Receipt:", receipt); // 查看收到的 receipt
    setSelectedReceipt((prev) => {
      return { ...receipt }; // 使用副本來防止直接修改原資料
    });
  };
  const closeModal = () => setSelectedReceipt(null);

  // 更新 selectedReceipt 的 storage
  const handleStorageChange = (index, newStorage) => {
    setSelectedReceipt((prevReceipt) => {
      if (!prevReceipt) return prevReceipt;

      const updatedItems = [...prevReceipt.items];
      updatedItems[index] = { ...updatedItems[index], storage: newStorage };

      return { ...prevReceipt, items: updatedItems };
    });
  };

  // 更新 selectedReceipt 的 Expiry Date
  const handleExpiryChange = (index, date) => {
    const updatedReceipt = { ...selectedReceipt };
    updatedReceipt.items[index].expiry = date; // 更新特定項目的過期日期
    setSelectedReceipt(updatedReceipt); // 更新整個收據
  };

  
  // 按下「Save」按鈕時，更新 mockReceipts
  const saveChanges = () => {
    setMockReceipts((prevReceipts) =>
      prevReceipts.map((receipt) =>
        receipt.id === selectedReceipt.id ? selectedReceipt : receipt
      )
    );
    closeModal();
  };
  
  return (
    <div className="receipt-page">
        <img
          src="/receipt_title.png"
          className="receipt-title-image"
        />
      <div className="receipt-list">
        {mockReceipts.map((r) => (
          <div
            className="receipt-card"
            key={r.id}
            onClick={() => openModal(r)}
            style={{ cursor: "pointer"}}
          >
            <div className="store-name">🧾 {r.store}</div>
            <p>📅 {r.date}</p>
            <p>💵 $ {r.amount}</p>
          </div>
        ))}
      </div>

      {selectedReceipt && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{selectedReceipt.store}</h3>
              <div className="line-container">
                <div className="modal-line"></div>
                <span className="date-text">{selectedReceipt.date}</span>
                <div className="modal-line"></div>
              </div>
            </div>

            <div className="modal-body">
              <div className="receipt-container">
                {selectedReceipt.items.map((item, index) => (
                  <div key={index} className="receipt-item">
                    <div className="item-header">
                      <span className="item-name">{item.name}</span>
                    </div>
                    <div className="item-detail">
                      <label>Expiry:</label>
                      <DatePicker
                        selected={
                          // 檢查 item.expiry 是否為 Date 物件
                          item.expiry instanceof Date 
                            ? item.expiry 
                            : new Date(item.expiry.split('/').reverse().join('-'))  // 如果是字符串，進行轉換
                        }
                        onChange={(date) => handleExpiryChange(index, date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select expiry"
                        calendarClassName="custom-calendar"
                        popperContainer={({ children }) => <div>{children}</div>}
                      />
                    </div>
                    <div className="item-detail">
                      <label>Preservation:</label>
                      <select
                        value={item.storage} 
                        onChange={(e) => handleStorageChange(index, e.target.value)}
                      >
                        <option value="Refrigerate">Refrigerate</option>
                        <option value="Freeze">Freeze</option>
                        <option value="Normal temperature">Normal temperature</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="confirm-button" onClick={saveChanges}>
              Save
            </button>
            </div>
        </div>
      )}
    </div>
  );
}
