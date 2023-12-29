import React from 'react';
import FlashCardContainer from './FlashCardContainer';
import Home from './Home';
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/flash" element={<FlashCardContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;