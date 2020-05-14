import React from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Work from "../pages/Work"
import Contact from "../pages/Contact"

function Navbar() {
  const location = useLocation();
  const linkClassName = (linkPath) => {
    if (linkPath === location.pathname) {
      return "nav-link active";
    }
    return "nav-link";
  };

  return (
    <header className="row header">
      <div className="col">
        <nav className="navbar navbar-expand-xl fixed-top navbar-dark navbar-custom">
          <div className="col-9">
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/home" className={linkClassName("/home")}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className={linkClassName("/about")}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/work" className={linkClassName("/work")}>
                    Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={linkClassName("/contact")}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
