import React from "react";
import { Link } from "react-router-dom";

function Burger() {
  return (
    <div className="animation">
      <div className="projectBgc row">
        <div className="col-lg-7">
          <p className="linkOne">
            <Link to="/work" href="/work" style={{ color: "#f0860d" }}>
              &lt; View all projects
            </Link>
          </p>
          <img
            src={require("../components/img/burgerLogo.png")}
            alt="burgerLogo"
            className="imgLogoTwo"
          />
          <p className="pName">Eat-Da-Burger</p>
          <p className="pDesc">
            A restaurant app that lets users input the names of burgers they'd
            like to eat. Whenever a user submits a burger's name, the app
            display the burger on the right side of the page -- waiting to be
            devoured.
          </p>
          <a
            href="https://peaceful-thicket-33597.herokuapp.com/"
            target="_blank"
            className="linkTwo"
          >
            Deployed Version >
          </a>
          <br />
          <br />
          <a
            href="https://github.com/ramonpbarros/burger"
            target="_blank"
            className="linkTwo"
          >
            Repository >
          </a>
        </div>
        <div className="col-lg-5">
          <img
            src={require("../components/img/burger.gif")}
            alt="gif"
            className="imgGif"
          />
        </div>
      </div>
      <br />
      <p className="gallery">Gallery</p>
      <br />
      <div className="container">
        <div className="gradientRightBgc">
          <img
            src={require("../components/img/burger.png")}
            alt="barhop"
            className="imgApp"
          />
          <p className="galleryName">Ramon Barros</p>
          <p className="galleryDesc">Design and Development</p>
          <div style={{ clear: "both" }}>
            <p
              className="galleryPath"
              style={{
                color: "grey",
                paddingLeft: 20,
                float: "left",
                fontWeight: "bold",
                fontSize: 14
              }}
            >
              ramonpbarros.me/ <span style={{ color: "white" }}>burger</span>
            </p>
            <p className="galleryCopyright">
              All trademarks &amp; copyrights belong to their respective owners.
            </p>
          </div>
        </div>
        <br />
      </div>
      <div style={{ paddingTop: 5 }}>
        <p className="linkThree full-text">
          <Link to="/barhop" href="/barhop" style={{ color: "#f0860d" }}>
            &lt; View last projects
          </Link>
        </p>
        <p className="linkThree short-text">
          <Link to="/barhop" href="/barhop" style={{ color: "#f0860d" }}>
            &lt; View last
          </Link>
        </p>
        <p className="linkFour full-text">
          <Link to="/weather" href="/weather" style={{ color: "#f0860d" }}>
            View next project &gt;
          </Link>
        </p>
        <p className="linkFour short-text">
          <Link to="/weather" href="/weather" style={{ color: "#f0860d" }}>
            View next &gt;
          </Link>
        </p>
        <p className="linkFive">
          Do you like what you see?{" "}
          <Link to="/contact" href="/contact" style={{ color: "#f0860d" }}>
            Let's talk
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Burger;
