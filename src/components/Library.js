import React from "react";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryIsOpen,
  setLibraryIsOpen,
}) => {
  return (
    <div className={`library ${libraryIsOpen ? "" : "library-hidden"}`}>
      <div className="library-header">
        <h1>Library</h1>
        <div
          className="close-btn"
          onClick={() => {
            setLibraryIsOpen(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>

      {songs.map((song) => {
        return (
          <LibrarySong
            key={song.id}
            song={song}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        );
      })}
    </div>
  );
};

export default Library;
