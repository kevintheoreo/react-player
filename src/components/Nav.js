import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faTimes,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({
  libraryIsOpen,
  setLibraryIsOpen,
  aboutIsOpen,
  setAboutIsOpen,
}) => {
  const libraryToggleHandler = () => {
    setLibraryIsOpen(!libraryIsOpen);
  };
  const aboutToggleHandler = () => {
    setAboutIsOpen(!aboutIsOpen);
  };
  return (
    <div className="nav">
      <h1>MusicPlayer</h1>
      <div>
        <button onClick={aboutToggleHandler}>
          About
          <FontAwesomeIcon icon={aboutIsOpen ? faTimes : faQuestionCircle} />
        </button>
        <button onClick={libraryToggleHandler}>
          Library
          <FontAwesomeIcon icon={libraryIsOpen ? faTimes : faMusic} />
        </button>
      </div>
    </div>
  );
};
export default Nav;
