// src/components/SongRolodex.jsx

import React, { useState, useRef, useEffect } from "react";
import "../styles/Rollerdex.css";




function Rollerdex() {
  // State for lyrics display
  const [showLyrics, setShowLyrics] = useState(false);
  const [currentSongLyrics, setCurrentSongLyrics] = useState("");
  const [currentSongTitle, setCurrentSongTitle] = useState("");
  const [currentSongArtist, setCurrentSongArtist] = useState("");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Audio player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Audio ref
  const audioRef = useRef(null);

  // Hardcoded songs with lyrics and audio files (5 total)
  const songs = [
    {
      title: "The Horse, The Man & The Son",
      artist: "Chief Ebeneezer Obey",
      link: "https://www.youtube.com/clip/UgkxbfbRpvYXfcdXDgOgVP30v4xR2avdCJRR",
      audioFile: "/audio/horse-man-son.mp3", // Add your MP3 files here
      lyrics: `
[Verse 1] Ẹṣin, ọkùnrin àti ọmọ Ní ilẹ̀ Yorùbá ayé Ọlá àti òyìnbó Nípa ẹ̀tọ́ àti òmìnira [Chorus] Kí a máa bọ̀wọ̀ fún ara wa Ní ilẹ̀ yìí tí a ń gbé Ẹṣin, ọkùnrin àti ọmọ Jọ ń gbé ní àlàáfíà
      `,
    },
    {
      title: "Won Kere Si Number",
      artist: "Fatai Rolling Dollar",
      link: "https://www.youtube.com/clip/UgkxuqPQ0aF58opBjzMeT6xxSbG4It59x0Wd",
      audioFile: "/audio/won-kere-si.mp3",
      lyrics: `
[Chorus] Wọn kéré sí nọ́mbà Wọn kéré sí nọ́mbà Kí ló dé tí wọn kéré sí nọ́mbà? Wọ́n ní kò sí owó [Verse 1] Nígbà tí owó kò bá sí Nǹkan kì í ṣe déédé Ṣùgbọ́n a ó máa gbìyànjú Kí a lè rí i padà
      `,
    },
    {
      title: "Appreciation",
      artist: "King Sunny Ade",
      link: "https://www.youtube.com/clip/Ugkx999WH8ccSsMh2j4e974MquindL0-8Y1U",
      audioFile: "/audio/appreciation.mp3",
      lyrics: `
[Verse 1] Ẹ ṣeun fún gbogbo rẹ̀ Tí ẹ̀ ṣe fún mi Ọlọ́run á bùkún yín Ní ààyè àti ìlera [Chorus] Appreciation, appreciation Fún àwọn tí wọ́n ṣe rere Appreciation, appreciation Ẹ̀ṣẹ́ yín kò ní parẹ́
      `,
    },
    {
      title: "Mumbo Jumbo",
      artist: "Masoyinbo",
      link: "https://www.youtube.com/clip/Ugkxss3wAGLAmw6AKX8W2RbSWoeo5aeN2DEY",
      audioFile: "/audio/mumbo-jumbo-1.mp3",
      lyrics: `
[Verse 1] Mumbo jumbo, kò lẹ́yìn Ọ̀rọ̀ tí kò ní ìtumọ̀ Ṣùgbọ́n a máa ń sọ ọ́ Nígbà tí a kò mọ̀ ohun tí a ń sọ [Chorus] Mumbo jumbo, jumbo mumbo Kí ló ń ṣẹlẹ̀? Mumbo jumbo, jumbo mumbo Jẹ́ kí a mọ̀ ọ́
      `,
    },
    {
      title: "Mumbo Jumbo 2",
      artist: "Masoyinbo",
      link: "https://www.youtube.com/clip/UgkxFbf3cle6bQgF3tC8pmw4WYBI2XwYa-ie",
      audioFile: "/audio/mumbo-jumbo-2.mp3",
      lyrics: `
[Verse 1] Mumbo jumbo part two Ọ̀rọ̀ míràn tí ń bọ̀ Kí a máa fi sọ̀rọ̀ Nípa àwọn nǹkan yìí [Bridge] Ìjìnlẹ̀ ọ̀rọ̀ Ní a ń wá Mumbo jumbo 2 Kí a lè mọ̀ ọ́n
      `,
    },
  ];

  // Format time as mm:ss
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Show lyrics and load song
  const showLyricsModal = (song, index) => {
    setCurrentSongLyrics(song.lyrics);
    setCurrentSongTitle(song.title);
    setCurrentSongArtist(song.artist);
    setCurrentSongIndex(index);
    setShowLyrics(true);

    // Load audio
    if (audioRef.current) {
      audioRef.current.src = song.audioFile;
      audioRef.current.load();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  // Hide lyrics
  const hideLyrics = () => {
    setShowLyrics(false);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Skip to previous song
  const skipBack = () => {
    const newIndex =
      currentSongIndex > 0 ? currentSongIndex - 1 : songs.length - 1;
    loadSong(newIndex);
  };

  // Skip to next song
  const skipForward = () => {
    const newIndex =
      currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0;
    loadSong(newIndex);
  };

  // Load song by index
  const loadSong = (index) => {
    const song = songs[index];
    setCurrentSongIndex(index);
    setCurrentSongLyrics(song.lyrics);
    setCurrentSongTitle(song.title);
    setCurrentSongArtist(song.artist);

    if (audioRef.current) {
      audioRef.current.src = song.audioFile;
      audioRef.current.load();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  // Handle time update
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Handle duration loaded
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Handle song ended
  const handleSongEnded = () => {
    skipForward(); // Auto-play next song
  };

  // Handle slider change
  const handleSliderChange = (e) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // Render all 5 cards
  const renderCards = () => {
    return songs.map((song, index) => (
      <div key={index} className="card">
        <h3>{song.title}</h3>
        <p className="artist">{song.artist}</p>

        <div className="button-group">
          <button
            className="playbtn"
            onClick={() =>
              window.open(song.link, "_blank", "noopener,noreferrer")
            }
          >
            ▶️ Play
          </button>

          <button
            className="lyricsbtn"
            onClick={() => showLyricsModal(song, index)}
          >
            📝 Lyrics
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="rolodex-container">
      <hr className="section-divider" />
      <h2 id="heading5">Songs & References Roller Dex</h2>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleSongEnded}
      />

      {/* Lyrics Container */}
      {showLyrics && (
        <div className="lyrics-container">
          <div className="lyrics-header">
            <div className="lyrics-title-section">
              <h3>{currentSongTitle}</h3>
              <p className="lyrics-artist">{currentSongArtist}</p>
            </div>
            <button className="close-btn" onClick={hideLyrics}>
              ✕ Close
            </button>
          </div>

          <div className="lyrics-body">
            <p className="lyrics-text">{currentSongLyrics}</p>
          </div>
        </div>
      )}

      {/* Mini Audio Player - Below Lyrics */}
      {showLyrics && (
        <div className="audio-player">
          <div className="player-controls">
            <button
              className="player-btn skip-btn"
              onClick={skipBack}
              title="Previous"
            >
              ⏮️
            </button>

            <button
              className="player-btn play-pause-btn"
              onClick={togglePlay}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? "⏸️" : "▶️"}
            </button>

            <button
              className="player-btn skip-btn"
              onClick={skipForward}
              title="Next"
            >
              ⏭️
            </button>
          </div>

          <div className="player-progress">
            <span className="time-current">{formatTime(currentTime)}</span>
            <input
              type="range"
              className="progress-slider"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSliderChange}
              step="1"
            />
            <span className="time-total">{formatTime(duration)}</span>
          </div>

          <div className="player-song-info">
            <span className="player-song-title">{currentSongTitle}</span>
          </div>
        </div>
      )}

      {/* Song Cards */}
      <div className="roller-container">
        <div className="track" id="track">
          {renderCards()}
        </div>
      </div>

      <div className="controls">
        <button id="prevBtn" disabled>
          ← Prev
        </button>
        <button id="nextBtn" disabled>
          Next →
        </button>
      </div>
    </div>
  );
}

export default Rollerdex;
