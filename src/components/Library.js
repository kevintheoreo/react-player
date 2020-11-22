import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryIsOpen,
}) => {
  return (
    <div className={`library ${libraryIsOpen ? "" : "library-hidden"}`}>
      <h1>Library</h1>
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
