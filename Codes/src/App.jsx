import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { useEffect } from "react";
import Footer from "./components/Footer";

const App = () => {
 
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<h1>Hi</h1>} />
          <Route path="/aboutus" element={<h1>Hi</h1>} />
          <Route path="/aboutus" element={<h1>Hi</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
