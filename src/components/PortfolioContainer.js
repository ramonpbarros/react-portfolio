import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "../App.css";
import "../style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Barhop from "./pages/Barhop";
import Burger from "./pages/Burger";

function PortfolioContainer() {
  return (
    <Router>
      <Route exact path="/">
        <Navbar />
        <Home />
      </Route>
      <Route exact path="/home">
        <Navbar />
        <Home />
      </Route>
      <Route exact path="/about">
        <Navbar />
        <About />
      </Route>
      <Route exact path="/work">
        <Navbar />
        <Work />
      </Route>
      <Route exact path="/contact">
        <Navbar />
        <Contact />
      </Route>
      <Route exact path="/barhop">
        <Navbar />
        <Barhop />
      </Route>
      <Route exact path="/burger">
        <Navbar />
        <Burger />
      </Route>
      <Footer />
    </Router>
  );
}

export default PortfolioContainer;
