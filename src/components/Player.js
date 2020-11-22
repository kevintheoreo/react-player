import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  songs,
  audioRef,
  setSongs,
  songTime,
  setSongTime,
  songEndHandler,
}) => {
  useEffect(() => {
    //update active state of songs
    const newSongs = songs.map((item) => {
      return { ...item, active: item.id === currentSong.id };
    });
    setSongs(newSongs);
  }, [currentSong]);

  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const animationPercentage = (currentTime / duration) * 100;
    setSongTime({
      ...songTime,
      currentTime: currentTime,
      duration: duration,
      animationPercentage: animationPercentage,
    });
  };

  const dragTimeHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongTime({ ...songTime, currentTime: e.target.value });
  };

  const skipHandler = async (direction) => {
    let songIndex = songs.findIndex((item) => item.id === currentSong.id);
    let nextSong = null;
    if (direction === "forward") {
      nextSong = { ...songs[(songIndex + 1) % songs.length], active: true };
    } else if (direction === "backward") {
      if (songIndex === 0) {
        nextSong = { ...songs[songs.length - 1], active: true };
      } else {
        nextSong = { ...songs[songIndex - 1], active: true };
      }
    }
    await setCurrentSong(nextSong);
  };
  //create Promise to load song
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        audioRef.current.play();
      });
    }
  }

  //Functions
  const getTime = (seconds) => {
    return (
      Math.floor(seconds / 60) +
      ":" +
      ("0" + Math.floor(seconds % 60)).slice(-2)
    );
  };

  //Styles
  const trackAnim = {
    transform: `translateX(${songTime.animationPercentage - 100}%)`,
    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songTime.currentTime)}</p>
        <div className="track">
          <input
            type="range"
            min={0}
            max={songTime.duration || 0}
            value={songTime.currentTime}
            onChange={dragTimeHandler}
          />
          <div className="animate-track" style={trackAnim}></div>
        </div>

        <p>{songTime.duration ? getTime(songTime.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipHandler("backward")}
          className="back-icon"
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          className="play-icon"
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => skipHandler("forward")}
          className="forward-icon"
          icon={faAngleRight}
          size="2x"
        />
        <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedData={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          onEnded={songEndHandler}
        />
      </div>
    </div>
  );
};

export default Player;
