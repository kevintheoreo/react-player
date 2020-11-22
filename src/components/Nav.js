import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryIsOpen, setLibraryIsOpen }) => {
  const libraryToggleHandler = () => {
    setLibraryIsOpen(!libraryIsOpen);
  };
  return (
    <div className="nav">
      <h1>MusicPlayer</h1>
      <button onClick={libraryToggleHandler}>
        Library
        <FontAwesomeIcon icon={libraryIsOpen ? faTimes : faMusic} />
      </button>
    </div>
  );
};
export default Nav;
