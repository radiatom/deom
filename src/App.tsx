import React from "react";
import "./main.scss";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="content">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
