import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Properties from "pages/Properties/Properties";
import About from "pages/About/About";
import Investors from "pages/Investors/Investors";
import ContactPage from "pages/ContactPage/ContactPage";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
