import React, { useState, useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import "./styles/app.scss";
import data from "./data";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryIsOpen, setLibraryIsOpen] = useState(false);
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  //Ref
  const audioRef = useRef(null);

  //Handlers
  const songEndHandler = async () => {
    let songIndex = songs.findIndex((item) => item.id === currentSong.id);
    if (isPlaying)
      await setCurrentSong({
        ...songs[(songIndex + 1) % songs.length],
        active: true,
      });
  };

  return (
    <div className={`App ${libraryIsOpen ? "library-active" : ""}`}>
      <About aboutIsOpen={aboutIsOpen} setAboutIsOpen={setAboutIsOpen} />
      <Nav
        libraryIsOpen={libraryIsOpen}
        setLibraryIsOpen={setLibraryIsOpen}
        aboutIsOpen={aboutIsOpen}
        setAboutIsOpen={setAboutIsOpen}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryIsOpen={libraryIsOpen}
        setLibraryIsOpen={setLibraryIsOpen}
      />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef}
        songTime={songTime}
        setSongTime={setSongTime}
        songEndHandler={songEndHandler}
      />
    </div>
  );
}

export default App;
