import React from "react";
import {
  FaInstagram,
  FaGithubSquare,
  FaEnvelope,
  FaLinkedin
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer d-flex justify-content-center navbar-custom">
      <a
        href="mailto:ramonpbarros@gmail.com"
        target="_blank"
        className="fa zoom mr-2"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://www.instagram.com/ramonpbarros/"
        target="_blank"
        className="fa zoom mr-2"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/ramonpbarros"
        target="_blank"
        className="fa zoom mr-2"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://www.linkedin.com/in/ramon-barros-095b0b72/"
        target="_blank"
        className="fa zoom mr-2"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <p className="mt-1">© Copyright</p>
    </footer>
  );
}

export default Footer;
