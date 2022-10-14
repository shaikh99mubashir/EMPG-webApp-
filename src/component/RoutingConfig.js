import React from "react";
import Footer from "./Footer";
// import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Investor from "./Investor";
import Careers from "./Careers";
import InTouch from "./InTouch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DrawerAppBar from "./AppBarWithDrawer";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

const RoutingConfig = () => {
  return (
    <div>
      <Router>
        <DrawerAppBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/inTouch" element={<InTouch />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default RoutingConfig;