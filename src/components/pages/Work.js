import React from "react";

function Work() {
  return (
    <React.Fragment>
    <div className="col animation">
      <p
        className="paddingLeftHome paddingTopAbout"
        style={{color: "white", fontSize: 60, fontWeight: "bolder"}}
        id="webDeveloper"
      >
        Portfolio
      </p>
      <p className="paddingLeftHome" style={{color: "white", fontSize: 20}}>
        Gallery of most of my work.
      </p>
      <p
        className="paddingLeftHome paddingBottomPort"
        style={{color: "white", fontSize: 20}}
      >
        More projects to come!
      </p>
    </div>

      <div className="animation">

        <div className="jumbotron projectBgc">
          <img src="assets/img/barhop-logo.svg" alt="barHopLogo" className="barHopLogo"/>
          <h1 className="display-4 barHopName">BarHop</h1>
          <a href="assets/public/barhop.html"><img src="assets/img/barhop.png" alt="mockup" className="imgMock"/></a>
          <p className="lead projectDesc">
            Application allows user to get information about breweries <br />
            searching by zip-code and bar type.
          </p>
          <a className="btn btn-primary btn-lg barHopDesc" href="assets/public/barhop.html" role="button">Learn More ></a>
        </div>

        <div className="jumbotron projectBgc">
          <img src="assets/img/burgerLogo.png" alt="barHopLogo" className="weatherLogo"/>
          <h1 className="display-4 barHopName full-text">Eat-Da-Burger</h1>
          <h1 className="display-4 barHopName short-text">Burger</h1>
          <a href="assets/public/burger.html"><img src="assets/img/burger.png" alt="mockup" className="imgMock"/></a>
          <p className="lead projectDesc">
            A restaurant app that lets users input the names of <br/>
            burgers they'd like to eat.
          </p>
          <a className="btn btn-primary btn-lg barHopDesc" href="assets/public/burger.html" role="button">Learn More ></a>
        </div>

        <div className="jumbotron projectBgc">
          <img src="assets/img/weather_logo.jpg" alt="barHopLogo" className="weatherLogo"/> 
          <h1 className="display-4 barHopName full-text">Weather App</h1>
          <h1 className="display-4 barHopName short-text">WeatherApp</h1>
          <a href="assets/public/weather.html"><img src="assets/img/weather.png" alt="mockup" className="imgMock"/></a>
          <p className="lead projectDesc">
            Weather application allows user to get information about <br />
            current weather as well as forecast of the next five <br />
            consecutive days by searching cities by name.
          </p>
          <a className="btn btn-primary btn-lg barHopDesc" href="assets/public/weather.html" role="button">Learn More ></a>
        </div>

        <div className="jumbotron projectBgc">
          <img src="assets/img/terminal.svg" alt="barHopLogo" className="weatherLogo"/>
          <h1 className="display-4 barHopName full-text">Employee Summary</h1>
          <h1 className="display-4 barHopName short-text">Employee</h1>
          <a href="assets/public/employee.html"><img src="assets/img/employee.png" alt="mockup" className="imgMock"/></a>
          <p className="lead projectDesc">
            Node CLI that takes in information about employees <br />
            and generates an HTML webpage that displays summaries <br />
            for each person.
          </p>
          <a className="btn btn-primary btn-lg barHopDesc" href="assets/public/employee.html" role="button">Learn More ></a>
        </div>

        <div className="jumbotron projectBgc">
          <img src="assets/img/terminal.svg" alt="barHopLogo" className="weatherLogo"/>
          <h1 className="display-4 barHopName full-text">Readme Generator</h1>
          <h1 className="display-4 barHopName short-text">Generator</h1>
          <a href="assets/public/readme.html"><img src="assets/img/readmeTwo.png" alt="mockup" className="imgMock"/></a>
          <p className="lead projectDesc">
            This is a command-line application that dynamically <br />
            generates a README.md from a user's input.
          </p>
          <a className="btn btn-primary btn-lg barHopDesc" href="assets/public/readme.html" role="button">Learn More ></a>
        </div>

        <div className="jumbotron projectBgc">
          <img src="assets/img/schedule.png" alt="barHopLogo" className="weatherLogo"/>
          <h1 className="display-4 barHopName">Scheduler</h1>
          <a href="assets/public/scheduler.html"><img src="assets/img/scheduler.png" alt="mockup" className="imgMock"/></a>
          <p className="lead projectDesc">
            Simple calendar application that allows the user <br />
            to save events for each hour of the day.
          </p>
          <a className="btn btn-primary btn-lg barHopDesc" href="assets/public/scheduler.html" role="button">Learn More ></a>
        </div>

        <div className="jumbotron projectBgc">
          <img src="assets/img/quiz.jpg" alt="barHopLogo" className="weatherLogo"/>
          <h1 className="display-4 barHopName">Code Quiz</h1>
          <a href="assets/public/quiz.html"><img src="assets/img/codequiz.png" alt="mockup" className="imgMock"/></a>
          <p className="lead projectDesc">
            This application is a timed code quiz with multiple-choice <br />
            questions on Javascript fundamentals that stores high scores <br />
            so that user can gauge his/her progress compared to others.
          </p>
          <a className="btn btn-primary btn-lg barHopDesc" href="assets/public/quiz.html" role="button">Learn More ></a>
        </div>

      </div>  
  </React.Fragment>
  )
  
}

export default Work;
