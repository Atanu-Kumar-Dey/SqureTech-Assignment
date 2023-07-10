import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { useEffect } from "react";
import Footer from "./components/Footer";
import About from "./pages/About";
import BusinessPage from "./pages/BusinessPage";

const App = () => {
 
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About/>} />
          <Route path="/business" element={<BusinessPage/>} />
          <Route path="/aboutus" element={<h1>Hi</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
