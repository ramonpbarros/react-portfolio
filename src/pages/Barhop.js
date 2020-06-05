import React from "react";
import { Link } from "react-router-dom";

function Barhop() {
  return (
    <div className="animation">
      <div className="projectBgc row">
        <div className="col-lg-7">
          <p className="linkOne">
            <Link
              to="/work"
              href="../../portfolio.html"
              style={{ color: "#f0860d" }}
            >
              &lt; View all projects
            </Link>
          </p>
          <img
            src={require("../components/img/barhop-logo.svg")}
            alt="barHopLogo"
            className="imgLogo"
          />
          <p className="pName">Hop over to the nearest Brewery</p>
          <p className="pDesc">
            Application allows user to get information about breweries searching
            by zip-code and bar type. User is able to save favorite bars to
            favorites tab and save bars to route tab. On route tab user is able
            to see a map with the bars displayed on it as well as a list of the
            same bars.
          </p>
          <a
            href="https://ramonpbarros.github.io/bar-hop-webapp/"
            target="_blank"
            className="linkTwo"
          >
            Deployed Version >
          </a>
          <br />
          <br />
          <a
            href="https://github.com/ramonpbarros/bar-hop-webapp"
            target="_blank"
            className="linkTwo"
          >
            Repository >
          </a>
        </div>
        <div className="col-lg-5">
          <img
            src={require("../components/img/barhop.gif")}
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
            src={require("../components/img/barhop.png")}
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
              ramonpbarros.me/{" "}
              <span style={{ color: "white" }}>barhop.html</span>
            </p>
            <p className="galleryCopyright">
              All trademarks &amp; copyrights belong to their respective owners.
            </p>
          </div>
        </div>
        <br />
        <div className="gradientRightBgc">
          <img
            src={require("../components/img/barhopfav.png")}
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
              ramonbarros.me/{" "}
              <span style={{ color: "white" }}>barhop.html</span>
            </p>
            <p className="galleryCopyright">
              All trademarks &amp; copyrights belong to their respective owners.
            </p>
          </div>
        </div>
        <br />
        <div className="gradientRightBgc">
          <img
            src={require("../components/img/barhoproute.png")}
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
              ramonbarros.me/{" "}
              <span style={{ color: "white" }}>barhop.html</span>
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
          <Link to="/weather" href="/weather" style={{ color: "#f0860d" }}>
            &lt; View last projects
          </Link>
        </p>
        <p className="linkThree short-text">
          <Link to="/weather" href="/weather" style={{ color: "#f0860d" }}>
            &lt; View last
          </Link>
        </p>
        <p className="linkFour full-text">
          <Link to="/burger" href="/burger" style={{ color: "#f0860d" }}>
            View next project &gt;
          </Link>
        </p>
        <p className="linkFour short-text">
          <Link to="/burger" href="/burger" style={{ color: "#f0860d" }}>
            View next &gt;
          </Link>
        </p>
        <p className="linkFive">
          Do you like what you see?{" "}
          <Link to="/contact" href="contact" style={{ color: "#f0860d" }}>
            Let's talk
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Barhop;
