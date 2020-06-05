import React from "react";

function About() {
  return (
    <React.Fragment>
      <div>
        <img
          src={require("../components/img/ramon.png")}
          alt="profileImg"
          className="profileImg"
        />
      </div>
      <div className="col-lg-7 col-m-9 indexContainer animation textPosition">
        <p
          className="paddingLeftHome paddingTopAbout full-text"
          style={{ color: "white", fontSize: 60, fontWeight: "bolder" }}
          id="webDeveloper"
        >
          Passionate Developer
        </p>
        <p
          className="paddingLeftHome paddingTopAbout short-text"
          style={{ color: "white", fontSize: 50, fontWeight: "bolder" }}
          id="webDeveloper"
        >
          Passionate Developer
        </p>
        <p className="paddingLeftHome" style={{ color: "white", fontSize: 20 }}>
          I'm Ramon Barros, born and raised in Brazil.
        </p>
        <p className="paddingLeftHome" style={{ color: "white", fontSize: 20 }}>
          I've been living in San Diego for the past 12 years and during this
          time I had some experience working with mobile development, but mostly
          working on my own business. I was in the restaurant business for 5
          years, always applying technical tools in order to increase sales.
        </p>
        <p className="paddingLeftHome" style={{ color: "white", fontSize: 20 }}>
          I recently earned a certificate in Full Stack Web Development from the
          University of California San Diego, with newly developed skills.
        </p>
        <p className="paddingLeftHome" style={{ color: "white", fontSize: 20 }}>
          With a focus on front-end and back-end web development, I was able to
          test my skills building different projects either by myself or in
          groups. With each project, my goal is to best engage my audience for
          an impactful user-experience.
        </p>

        <p
          className="paddingLeftHome"
          style={{ color: "white", fontSize: 20, paddingBottom: 5 }}
        >
          Interested on getting to know me better?
          <a href="./contact.html" style={{ color: "#f0860d", fontSize: 20 }}>
            {" "}
            Let's Talk
          </a>
        </p>
      </div>
    </React.Fragment>
  );
}

export default About;
