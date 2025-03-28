import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './navbar'
import Dropdown from './Dropdown'
import DropZone from './Dropzone'
import HomePage from "./pages/HomePage";
import ReceiptPage from "./pages/ReceiptPage";
import CapturePage from "./pages/CapturePage";
import './App.css'

function App() {
  let MyUrl = "";
  if (MyUrl){
    return (
      <div className="App">
        <Navbar />
        <DropZone url={MyUrl}/>
      </div>
    )
  }

  return (
    <>
    <div className="App" style={{ backgroundImage: 'url(/stars.png)', height: '100vh' }}>
        <Navbar />
        <div className="relative text-center mt-10">
          <h1 className="outline-text">
            SHOWCASE
          </h1>
          <h2 className="main-title">
            Hackiethon Widget Showcase
          </h2>
        </div>

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/receipts" element={<ReceiptPage />} />
            <Route path="/capture" element={<CapturePage />} />
          </Routes>
        <DropZone/>
    </div>
    <nav className="bottom-nav">
        <Link to="/receipts">📋</Link>
        <Link to="/">🏠</Link>
        <Link to="/capture">📷</Link>
        </nav>
  </>
  );      
}
export default App;