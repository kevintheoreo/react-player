import React from "react";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = async () => {
    //Update active state of songs
    const newSongs = songs.map((item) => {
      return { ...item, active: item === song };
    });
    setSongs(newSongs);
    //Set Current Song
    setCurrentSong(song);
    //create Promise to load song
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
  };

  //styles
  const selectedColor = {
    border: `2px solid ${song.color[0]}`,
  };

  return (
    <div
      onClick={songSelectHandler}
      style={song.active ? selectedColor : null}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
