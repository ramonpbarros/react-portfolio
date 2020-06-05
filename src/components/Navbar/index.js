import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {


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
                  <Link to="/home" >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/work" >
                    Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" >
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
