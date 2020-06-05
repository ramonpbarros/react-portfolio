import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import "./style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Barhop from "./pages/Barhop";
import Burger from "./pages/Burger";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="">
        <Redirect>
          <Home />
        </Redirect>
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/work">
        <Work />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/barhop">
        <Barhop />
      </Route>
      <Route exact path="/burger">
        <Burger />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
