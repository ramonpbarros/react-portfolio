import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Work") {
      return <Work />;
    }
    return <Contact />;
  };

  render() {
    return (
      <div>
        <Navbar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {/* <div>
          <img src="assets/img/ramon.png" alt="profileImg" className="profileImg animation" />
        </div> */}
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default PortfolioContainer;
