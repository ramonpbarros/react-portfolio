import React from "react";
import { Link } from "react-router-dom";

function Weather() {
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
            src={require("../img/weather_logo.jpg")}
            alt="weatherLogo"
            className="imgLogoTwo"
          />
          <p className="pName">Weather Forecast</p>
          <p className="pDesc">
            Weather application allows user to get information about current
            weather as well as forecast of the next five consecutive days by
            searching cities by name. User can search weather from different
            cities around the world. Last searched cities will be set to local
            storage.
          </p>
          <a
            href="https://ramonpbarros.github.io/weather-forecast/"
            target="_blank"
            className="linkTwo"
          >
            Deployed Version >
          </a>
          <br />
          <br />
          <a
            href="https://github.com/ramonpbarros/weather-forecast"
            target="_blank"
            className="linkTwo"
          >
            Repository >
          </a>
        </div>
        <div className="col-lg-5">
          <img
            src={require("../img/weather.gif")}
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
            src={require("../img/weather.png")}
            alt="weather"
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
              ramonpbarros.me/ <span style={{ color: "white" }}>weather</span>
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
          <Link to="/burger" href="/burger" style={{ color: "#f0860d" }}>
            &lt; View last projects
          </Link>
        </p>
        <p className="linkThree short-text">
          <Link to="/burger" href="/burger" style={{ color: "#f0860d" }}>
            &lt; View last
          </Link>
        </p>
        <p className="linkFour full-text">
          <Link to="/barhop" href="/barhop" style={{ color: "#f0860d" }}>
            View next project &gt;
          </Link>
        </p>
        <p className="linkFour short-text">
          <Link to="/barhop" href="/barhop" style={{ color: "#f0860d" }}>
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

export default Weather;
