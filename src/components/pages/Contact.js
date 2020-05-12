import React from "react";

function Contact() {
  return (
    <div className="col animation indexContainer" style={{paddingBottom: 5}}>
      <p
        className="paddingTopHome paddingLeftHome"
        style={{color: "white", fontSize: 60, fontWeight: "bolder"}}
      >
        Let's talk
      </p>
      <p className="paddingLeftHome" style={{color: "white", fontSize: 18}}>
        Get in touch via form below, or by email
        <a href="mailto:ramonpbarros@gmail.com" style={{color: "#f0860d"}}>
          ramonpbarros@gmail.com
        </a>
      </p>
      <br />

      <div className="col-lg-6">
        <form
          action="https://formspree.io/ramonpbarros@gmail.com"
          method="POST"
        >
          <div className="form-row">
            <div className="form-group col-sm-6">
              <label for="inputText" style={{color: "white"}}>
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="inputText"
                placeholder="Full name"
                style={{backgroundColor: "#191919"}}
              />
            </div>
            <div className="form-group col-sm-6">
              <label for="inputEmail4" style={{color: "white"}}>
                E-mail
              </label>
              <input
                type="email"
                name="_replyto"
                className="form-control"
                id="inputEmail4"
                placeholder="name@example.com"
                style={{backgroundColor: "#191919"}}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1" style={{color: "white"}}>
              Message Me
            </label>
            <textarea
              name="message"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter your message"
              style={{backgroundColor: "#191919", color: "white"}}
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="btn btn-light btn-lg"
            style={{color: "#f0860d", backgroundColor: "#191919"}}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
