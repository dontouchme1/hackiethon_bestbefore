import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReceiptPage from "./pages/ReceiptPage";
import CapturePage from "./pages/CapturePage";
import "./MyWidget.css";

const MyWidget = () => {
  return (
    <div className="widget-wrapper">
      <div className="app-card">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/receipts" element={<ReceiptPage />} />
            <Route path="/capture" element={<CapturePage />} />
          </Routes>
        </div>

        <nav className="bottom-nav">
          <Link to="/receipts">
            <img src="/receipt_folder.png" alt="Receipts" className="nav-icon" />
          </Link>
          <Link to="/">
            <img src="/home.png" alt="Home" className="nav-icon" />
          </Link>
          <Link to="/capture">
            <img src="/camera.png" alt="Camera" className="nav-icon" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MyWidget;
