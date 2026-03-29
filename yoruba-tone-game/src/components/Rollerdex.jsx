// src/components/Rollerdex.jsx

import React, { useState, useRef } from 'react'
import '../styles/Rollerdex.css'

function Rollerdex() {
  // State for lyrics display
  const [showLyrics, setShowLyrics] = useState(false)
  const [currentSongLyrics, setCurrentSongLyrics] = useState('')
  const [currentSongTitle, setCurrentSongTitle] = useState('')
  const [currentSongArtist, setCurrentSongArtist] = useState('')
  const [currentSongIndex, setCurrentSongIndex] = useState(0)

  // Audio player state
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  // Audio ref
  const audioRef = useRef(null)

  // Referencing the Audio from S3 Bucket
  const SONGS_BASE_URL = `${process.env.REACT_APP_ASSET_BASE_URL}/songs-rollerdex`

  // Hardcoded songs with lyrics and audio files (5 total)
  const songs = [
    {
      title: 'The Horse, The Man & The Son',
      artist: 'Chief Ebeneezer Obey',
      link: 'https://www.youtube.com/clip/UgkxbfbRpvYXfcdXDgOgVP30v4xR2avdCJRR',
      audioFile: `${SONGS_BASE_URL}/TheHorseTheManTheSonFIN.mp3`,
      lyrics: ``,
    },
    {
      title: 'Won Kere Si Number',
      artist: 'Fatai Rolling Dollar',
      link: 'https://www.youtube.com/clip/UgkxuqPQ0aF58opBjzMeT6xxSbG4It59x0Wd',
      audioFile: `${SONGS_BASE_URL}/wonKereSiFIN.mp3`,
      lyrics: ``,
    },
    {
      title: 'Appreciation',
      artist: 'King Sunny Ade',
      link: 'https://www.youtube.com/clip/Ugkx999WH8ccSsMh2j4e974MquindL0-8Y1U',
      audioFile: `${SONGS_BASE_URL}/AppreciationFIN.mp3`,
      lyrics: ``,
    },
    {
      title: 'MMS',
      artist: 'Asake ft Wizkid',
      link: 'https://www.youtube.com/clip/UgkxNc5VLeHs9GbdxGirGHwHiM7iFgeqiPou',
      audioFile: `${SONGS_BASE_URL}/MMSFIN.mp3`,
      lyrics: ``,
    },
    {
      title: 'E wa Ba Mijo',
      artist: 'Tony Tetuila',
      link: 'https://www.youtube.com/clip/UgkxWA1TSNUzongnbVVut-kv6ABtzzXyqxh4',
      audioFile: `${SONGS_BASE_URL}/eWaBaMiJoFIN.mp3`,
      lyrics: ``,
    },
  ]

  console.log(songs[0].audioFile)
  // Format time as mm:ss
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Show lyrics and load song
  const showLyricsModal = (song, index) => {
    setCurrentSongLyrics(song.lyrics)
    setCurrentSongTitle(song.title)
    setCurrentSongArtist(song.artist)
    setCurrentSongIndex(index)
    setShowLyrics(true)

    // Load audio
    if (audioRef.current) {
      audioRef.current.src = song.audioFile
      audioRef.current.load()
      setIsPlaying(false)
      setCurrentTime(0)
    }
  }

  // Hide lyrics
  const hideLyrics = () => {
    setShowLyrics(false)
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  // Toggle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch((err) => {
        console.error('❌ Playback failed:', err)
        alert(
          `Cannot play: ${err.message}\n\nCheck if audio file exists in public/audio/`,
        )
      })
    }
    setIsPlaying(!isPlaying)
  }

  // Skip to previous song
  const skipBack = () => {
    const newIndex =
      currentSongIndex > 0 ? currentSongIndex - 1 : songs.length - 1
    loadSong(newIndex)
  }

  // Skip to next song
  const skipForward = () => {
    const newIndex =
      currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0
    loadSong(newIndex)
  }

  // Load song by index
  const loadSong = (index) => {
    const song = songs[index]
    setCurrentSongIndex(index)
    setCurrentSongLyrics(song.lyrics)
    setCurrentSongTitle(song.title)
    setCurrentSongArtist(song.artist)

    if (audioRef.current) {
      audioRef.current.src = song.audioFile
      audioRef.current.load()
      setIsPlaying(false)
      setCurrentTime(0)
    }
  }

  // Handle time update
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  // Handle duration loaded
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  // Handle song ended
  const handleSongEnded = () => {
    skipForward() // Auto-play next song
  }

  // Handle slider change
  const handleSliderChange = (e) => {
    const newTime = Number(e.target.value)
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

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
              window.open(song.link, '_blank', 'noopener,noreferrer')
            }
          >
            <i className="fas fa-play"></i> Play
          </button>

          <button
            className="lyricsbtn"
            onClick={() => showLyricsModal(song, index)}
          >
            <i className="fas fa-file-lines"></i> Lyrics
          </button>
        </div>
      </div>
    ))
  }

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
          console.error('🔊 Audio Error:', e)
          console.log('🔊 Current src:', audioRef.current?.src)
        }}
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
              <i className="fas fa-times"></i> Close
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
              <i className="fas fa-backward-step"></i>
            </button>

            <button
              className={`player-btn play-pause-btn ${isPlaying ? 'playing' : ''}`}
              onClick={togglePlay}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <i className="fas fa-pause"></i>
              ) : (
                <i className="fas fa-play"></i>
              )}
            </button>

            <button
              className="player-btn skip-btn"
              onClick={skipForward}
              title="Next"
            >
              <i className="fas fa-forward-step"></i>
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
  )
}

export default Rollerdex
