import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const About = ({ aboutIsOpen, setAboutIsOpen }) => {
  return (
    <div className={`about ${aboutIsOpen ? "" : "about-hidden"}`}>
      <div className="about-header">
        <div
          className="about-close-btn"
          onClick={() => {
            setAboutIsOpen(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>

      <div>
        <h1>About</h1>
        <p style={{ textAlign: "left" }}>
          This application was developed by{" "}
          <a href="https://kevintheoreo.github.io">Kevin De Rozario</a> using
          ReactJS. Music is retrieved from Chillhop.com
        </p>
      </div>
    </div>
  );
};

export default About;
