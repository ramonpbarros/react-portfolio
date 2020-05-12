import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  const pageNames = ["Home", "About", "Blog", "Contact"];

  const renderNavTab = (page) => {
    const href = `#${page.toLowerCase()}`;
    const className = currentPage === page ? "nav-link active" : "nav-link";
    const onClick = () => handlePageChange(page);

    return (
      <li className="nav-item" key={page}>
        <a href={href} onClick={onClick} className={className}>
          {page}
        </a>
      </li>
    );
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

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item inactive">
                  <a className="nav-link" href="about.html">
                    About <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item inactive">
                  <a className="nav-link" href="portfolio.html">
                    Work <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item inactive">
                  <a className="nav-link" href="contact.html">
                    Contact <span className="sr-only">(current)</span>
                  </a>
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
