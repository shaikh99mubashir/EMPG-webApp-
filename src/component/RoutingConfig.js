import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Investor from "./Investor";
import Careers from "./Careers";
import InTouch from "./InTouch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RoutingConfig = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/inTouch" element={<InTouch />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default RoutingConfig;