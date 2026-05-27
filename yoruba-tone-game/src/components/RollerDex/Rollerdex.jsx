import React from "react";
import "../RollerDex/styles/Rollerdex.css";
import { getRollerDexSongs } from "./data/rollerDexData";
import { useRollerdex } from "../RollerDex/hooks/useRollerdex";

function Rollerdex() {
  const SONGS_BASE_URL = `${process.env.REACT_APP_ASSET_BASE_URL}/songs-rollerdex`;
  const songs = getRollerDexSongs(SONGS_BASE_URL);

  // Get everything from the hook
  const {
    showLyricsContainer,
    selectedSong,
    selectedSongIndex,
    isPlaying,
    currentTime,
    duration,
    playbackSpeed,
    audioRef,
    lyricsTextRef,
    handleCardClick,
    togglePlay,
    skipBack,
    skipForward,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleSongEnded,
    handleSliderChange,
    handlePlaybackSpeedChange,
    handleCloseContainer,
    handleListenFullSong,
    formatTime,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  } = useRollerdex(songs);

  // YOUR ORIGINAL renderCards - EXACTLY THE SAME
  const renderCards = () => {
    return songs.map((song, index) => (
      <div
        key={index}
        className={`card ${selectedSongIndex === index && showLyricsContainer ? "active-card" : ""}`}
        onClick={() => handleCardClick(song, index)}
        style={{ cursor: "pointer" }}
      >
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

  // YOUR ORIGINAL RETURN - EXACTLY THE SAME, line by line
  return (
    <div className="rolodex-container">
      <hr className="section-divider" />
      <h2 className="rollerdex">Songs & References Roller Dex</h2>

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

      {showLyricsContainer && selectedSong && (
        <div className="lyrics-permanent-container">
          <button
            className="close-container-btn"
            onClick={handleCloseContainer}
          >
            <i className="fas fa-times"></i>
          </button>

          <div className="lyrics-container-content">
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

            <div className="playback-speed-container">
              <div className="speed-slider-wrapper">
                <label className="speed-label">Playback Speed:</label>
                <input
                  type="range"
                  className="speed-slider"
                  min="0.5"
                  max="1.5"
                  step="0.1"
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

            <div className="permanent-song-info">
              <p className="permanent-artist-name">{selectedSong.artist}</p>
              <p className="permanent-song-title">{selectedSong.title}</p>
            </div>
          </div>
        </div>
      )}

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

      <div className="roller-container">
        <div className="track" id="track">
          {renderCards()}
        </div>
      </div>

      <div className="title-container">
        <p className="text-block tip">
          TIP: Non-musical repetition is boring HAVE FUN & send recommendations
        </p>
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