// src/components/Rollerdex.jsx

import React, { useState, useRef, useEffect } from "react";
import "../styles/Rollerdex.css";

// IMPORT COVER IMAGES from assets/images/covers
import horseManSonCover from "../assets/images/covers/horse-man-son.jpg";
import wonKereSiCover from "../assets/images/covers/won-kere-si.jpg";
import appreciationCover from "../assets/images/covers/appreciation.jpg";
import mmsCover from "../assets/images/covers/mms.jpg";
import eWaBaMijoCover from "../assets/images/covers/e-wa-ba-mijo.jpg";

function Rollerdex() {
  // State for lyrics container visibility - HIDDEN BY DEFAULT
  const [showLyricsContainer, setShowLyricsContainer] = useState(false);

  // State for selected song
  const [selectedSong, setSelectedSong] = useState(null);
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);

  // Audio player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);

  // Draggable scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  // Audio ref
  const audioRef = useRef(null);

  // Lyrics text ref for draggable scroll
  const lyricsTextRef = useRef(null);

  // Referencing the Audio from S3 Bucket
  const SONGS_BASE_URL = `${process.env.REACT_APP_ASSET_BASE_URL}/songs-rollerdex`;

  // Hardcoded songs with lyrics (5 total)
  const songs = [
    {
      title: "The Horse, The Man & The Son",
      artist: "Chief Ebeneezer Obey",
      link: "https://www.youtube.com/clip/UgkxbfbRpvYXfcdXDgOgVP30v4xR2avdCJRR",
      audioFile: `${SONGS_BASE_URL}/TheHorseTheManTheSonFIN.mp3`,
      coverImage: horseManSonCover,
      lyrics: `This is the lyrics for The Horse, The Man & The Son by Chief Ebeneezer Obey.\n\nVerse 1:\nThe horse, the man, and the son\nWalking together as one\nThrough the valleys and hills\nFollowing divine wills\n\nChorus:\nOh what a journey it has been\nWith blessings from within\nKeep moving forward everyday\nGod will always show the way\n\nVerse 2:\nLessons learned along the path\nThrough joy and through wrath\nPatience and faith we hold\nStories yet untold\n\nBridge:\nNever give up the fight\nKeep your dreams in sight\nWith courage in your heart\nYou'll never fall apart\n\nOutro:\nThe horse, the man, and the son\nTheir journey has just begun\nA story of hope and grace\nIn this sacred place`,
    },
    {
      title: "Won Kere Si Number",
      artist: "Fatai Rolling Dollar",
      link: "https://www.youtube.com/clip/UgkxuqPQ0aF58opBjzMeT6xxSbG4It59x0Wd",
      audioFile: `${SONGS_BASE_URL}/wonKereSiFIN.mp3`,
      coverImage: wonKereSiCover,
      lyrics: `This is the lyrics for Won Kere Si Number by Fatai Rolling Dollar.\n\nVerse 1:\nWon kere si number o\nWon npe oruko mi\nOluwa lo nso mi\nOluwa lo nto mi\n\nChorus:\nNumber won kere si\nOluwa l'okan mi\nNumber won kere si\nOluwa l'okan mi\n\nVerse 2:\nIwo lo nse oluwa\nIwo lo nse olorun\nIwo ni mo gbekele\nIwo ni mo sin\n\nOutro:\nNumber won kere si\nOluwa l'okan mi o\nNumber won kere si\nOluwa l'okan mi`,
    },
    {
      title: "Appreciation",
      artist: "King Sunny Ade",
      link: "https://www.youtube.com/clip/Ugkx999WH8ccSsMh2j4e974MquindL0-8Y1U",
      audioFile: `${SONGS_BASE_URL}/AppreciationFIN.mp3`,
      coverImage: appreciationCover,
      lyrics: `This is the lyrics for Appreciation by King Sunny Ade.\n\nVerse 1:\nI thank you Lord for everything\nFor the joy that you bring\nMorning, noon, and night\nYou are my guiding light\n\nChorus:\nAppreciation, appreciation\nMy heart is full of gratitude\nAppreciation, appreciation\nFor all you do\n\nVerse 2:\nThrough the storms and rain\nYou have been my strength again\nNever left me alone\nMade my heart your home\n\nBridge:\nI lift my hands in praise\nThroughout all my days\nYour love never fails\nYour grace prevails\n\nFinal Chorus:\nAppreciation, appreciation\nForever I will sing\nAppreciation, appreciation\nTo my King of kings`,
    },
    {
      title: "MMS",
      artist: "Asake ft Wizkid",
      link: "https://www.youtube.com/clip/UgkxNc5VLeHs9GbdxGirGHwHiM7iFgeqiPou",
      audioFile: `${SONGS_BASE_URL}/MMSFIN.mp3`,
      coverImage: mmsCover,
      lyrics: `This is the lyrics for MMS by Asake ft Wizkid.\n\nIntro:\nYeah yeah yeah\nMMS\n\nVerse 1 (Asake):\nMoney, music, success\nLiving life with no stress\nFrom the bottom to the top\nNever gonna stop\n\nChorus:\nMMS, that's the motto\nShining bright like a bottle\nMaking moves everyday\nIn our own special way\n\nVerse 2 (Wizkid):\nInternational vibes\nWe taking over the tribes\nAfrican to the world\nOur flag is unfurled\n\nBridge:\nTogether we stand strong\nThis is where we belong\nRising higher each day\nWatch us lead the way\n\nOutro:\nMMS... forever\nMMS... together`,
    },
    {
      title: "E wa Ba Mijo",
      artist: "Tony Tetuila",
      link: "https://www.youtube.com/clip/UgkxWA1TSNUzongnbVVut-kv6ABtzzXyqxh4",
      audioFile: `${SONGS_BASE_URL}/eWaBaMiJoFIN.mp3`,
      coverImage: eWaBaMijoCover,
      lyrics: `This is the lyrics for E wa Ba Mijo by Tony Tetuila.\n\nIntro:\nE wa ba mi jo\nE wa ba mi yo\n\nVerse 1:\nCome and dance with me\nLet the music set you free\nMoving to the rhythm\nEverybody in the system\n\nChorus:\nE wa ba mi jo (Come dance with me)\nE wa ba mi yo (Come rejoice with me)\nCelebration everywhere\nHappiness in the air\n\nVerse 2:\nRaise your hands up high\nTouch the sky\nNo worries no stress\nJust blessings and success\n\nBridge:\nThis is our time to shine\nEverything will be fine\nDance until the morning light\nEverything will be alright\n\nOutro:\nE wa ba mi jo\nE wa ba mi yo\nDance, dance, dance\nOh, oh, oh`,
    },
  ];

  // Update playback speed when slider changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Format time as mm:ss
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle card click - update selected song and show container
  const handleCardClick = (song, index) => {
    setSelectedSong(song);
    setSelectedSongIndex(index);
    setShowLyricsContainer(true); // Show container when card is clicked

    // Load audio for the selected song
    if (audioRef.current) {
      const wasPlaying = isPlaying;
      audioRef.current.src = song.audioFile;
      audioRef.current.load();
      audioRef.current.playbackRate = playbackSpeed;
      setIsPlaying(false);
      setCurrentTime(0);

      // Auto-play if it was playing before
      if (wasPlaying) {
        audioRef.current
          .play()
          .catch((err) => console.log("Auto-play failed:", err));
        setIsPlaying(true);
      }
    }
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (!audioRef.current || !selectedSong) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("❌ Playback failed:", err);
        alert(`Cannot play: ${err.message}`);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Skip to previous song
  const skipBack = () => {
    if (!selectedSong) return;
    const newIndex =
      selectedSongIndex > 0 ? selectedSongIndex - 1 : songs.length - 1;
    handleCardClick(songs[newIndex], newIndex);
  };

  // Skip to next song
  const skipForward = () => {
    if (!selectedSong) return;
    const newIndex =
      selectedSongIndex < songs.length - 1 ? selectedSongIndex + 1 : 0;
    handleCardClick(songs[newIndex], newIndex);
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

  // Handle playback speed change
  const handlePlaybackSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value);
    setPlaybackSpeed(newSpeed);
  };

  // Handle close lyrics container
  const handleCloseContainer = () => {
    setShowLyricsContainer(false);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Draggable scroll handlers
  const handleMouseDown = (e) => {
    if (lyricsTextRef.current) {
      setIsDragging(true);
      setStartY(e.clientY);
      setScrollTop(lyricsTextRef.current.scrollTop);
      lyricsTextRef.current.style.cursor = "grabbing";
      e.preventDefault();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !lyricsTextRef.current) return;

    const deltaY = e.clientY - startY;
    lyricsTextRef.current.scrollTop = scrollTop - deltaY;
    e.preventDefault();
  };

  const handleMouseUp = () => {
    if (lyricsTextRef.current) {
      setIsDragging(false);
      lyricsTextRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging && lyricsTextRef.current) {
      setIsDragging(false);
      lyricsTextRef.current.style.cursor = "grab";
    }
  };

  // Handle YouTube link click
  const handleListenFullSong = () => {
    if (selectedSong) {
      window.open(selectedSong.link, "_blank", "noopener,noreferrer");
    }
  };

  // Render all 5 cards
  const renderCards = () => {
    return songs.map((song, index) => (
      <div
        key={index}
        className={`card ${selectedSongIndex === index && showLyricsContainer ? "active-card" : ""}`}
        onClick={() => handleCardClick(song, index)}
        style={{ cursor: "pointer" }}
      >
        {/* Cover Image */}
        <div className="card-cover">
          <img
            src={song.coverImage}
            alt={`${song.title} cover`}
            className="cover-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/200x200?text=No+Image";
            }}
          />
        </div>

        <h3>{song.title}</h3>
        <p className="artist">{song.artist}</p>
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
        onError={(e) => {
          console.error("🔊 Audio Error:", e);
          console.log("🔊 Current src:", audioRef.current?.src);
        }}
      />

      {/* Lyrics Container - Only visible when showLyricsContainer is true */}
      {showLyricsContainer && selectedSong && (
        <div className="lyrics-permanent-container">
          {/* Close Button - Top Right */}
          <button
            className="close-container-btn"
            onClick={handleCloseContainer}
          >
            <i className="fas fa-times"></i>
          </button>

          <div className="lyrics-container-content">
            {/* Lyrics Text - Draggable Scroll */}
            <div className="lyrics-scroll-container">
              <div
                ref={lyricsTextRef}
                className="lyrics-text-draggable"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: "grab" }}
              >
                <p className="permanent-lyrics-text">
                  {selectedSong.lyrics ||
                    "No lyrics available for this song yet."}
                </p>
              </div>
            </div>

            {/* Music Controls - Small, Centered */}
            <div className="permanent-music-controls">
              <button
                className="permanent-control-btn"
                onClick={skipBack}
                title="Previous"
              >
                <i className="fas fa-backward-step"></i>
              </button>

              <button
                className="permanent-control-btn permanent-play-btn"
                onClick={togglePlay}
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <i className="fas fa-pause"></i>
                ) : (
                  <i className="fas fa-play"></i>
                )}
              </button>

              <button
                className="permanent-control-btn"
                onClick={skipForward}
                title="Next"
              >
                <i className="fas fa-forward-step"></i>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="permanent-progress-bar">
              <span className="permanent-time-current">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                className="permanent-progress-slider"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSliderChange}
                step="1"
              />
              <span className="permanent-time-total">
                {formatTime(duration)}
              </span>
            </div>

            {/* Horizontal Draggable Playback Speed Slider */}
            <div className="playback-speed-container">
              <div className="speed-slider-wrapper">
                <label className="speed-label">Playback Speed:</label>
                <input
                  type="range"
                  className="speed-slider"
                  min="0.5"
                  max="1.5"
                  step="0.01"
                  value={playbackSpeed}
                  onChange={handlePlaybackSpeedChange}
                />
                <div className="speed-markers">
                  <span>0.5x</span>
                  <span>1.0x</span>
                  <span>1.5x</span>
                </div>
                <div className="speed-value-display">
                  Current: {playbackSpeed.toFixed(2)}x
                </div>
              </div>
            </div>

            {/* Song Info - Centered */}
            <div className="permanent-song-info">
              <p className="permanent-artist-name">{selectedSong.artist}</p>
              <p className="permanent-song-title">{selectedSong.title}</p>
            </div>
          </div>
        </div>
      )}

      {/* Listen to Full Song Button - Only visible when container is open */}
      {showLyricsContainer && selectedSong && (
        <div className="external-button-container">
          <button
            className="external-listen-btn"
            onClick={handleListenFullSong}
          >
            <i className="fas fa-music"></i> Listen to Full Song Here
          </button>
        </div>
      )}

      {/* Song Cards Grid */}
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
