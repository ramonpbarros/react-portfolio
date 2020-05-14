import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div>
        <img
          src={require("../img/ramon.png")}
          alt="profileImg"
          className="profileImg"
        />
      </div>
      <div className="col-lg-7 col-m-9 indexContainer animation textPosition">
        <p
          className="paddingTopHome paddingLeftHome"
          style={{ color: "white", fontSize: 40 }}
        >
          Hi, I'm Ramon.
        </p>
        <p
          className="paddingLeftHome full-text"
          style={{ color: "white", fontSize: 60, fontWeight: "bolder" }}
          id="webDeveloper"
        >
          Front End Web Developer
        </p>
        <p
          className="paddingLeftHome short-text"
          style={{ color: "white", fontSize: 50, fontWeight: "bolder" }}
          id="webDeveloper"
        >
          Front End
          <br />
          Web Dev
        </p>
        <p className="paddingLeftHome" style={{ color: "white", fontSize: 20 }}>
          A resilient and innovative problem-solver.
        </p>
        <p className="paddingLeftHome" style={{ color: "white", fontSize: 20 }}>
          Passionate about developing apps.
        </p>
        <p className="paddingLeftHome" style={{ color: "white", fontSize: 20 }}>
          Wanting to build a more intuitive user experience on the web.
        </p>
        <br />
        <Link
          to="/work"
          className="paddingLeftHome"
          href="./portfolio.html"
          style={{ color: "#f0860d", fontSize: 20 }}
        >
          Portfolio
        </Link>
        <br />
        <a
          className="paddingLeftHome"
          href="../img/Resume.pdf"
          download
          target="_blank"
          style={{ color: "#f0860d", fontSize: 20, paddingBottom: 5 }}
        >
          Download Resume
        </a>
      </div>
    </React.Fragment>
  );
}

export default Home;
