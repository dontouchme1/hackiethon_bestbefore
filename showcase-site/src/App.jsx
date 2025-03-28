import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReceiptPage from "./pages/ReceiptPage";
import CapturePage from "./pages/CapturePage";
import "./App.css";

function App() {
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
          <Link to="/receipts">📋</Link>
          <Link to="/">🏠</Link>
          <Link to="/capture">📷</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;