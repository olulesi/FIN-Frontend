// src/components/Rollerdex.jsx

import React, { useState, useRef, useEffect } from 'react'
import '../styles/Rollerdex.css'
import { getRollerDexSongs } from '../assets/data/rollerDexSongs'

function Rollerdex() {
  // State for lyrics container visibility - HIDDEN BY DEFAULT
  const [showLyricsContainer, setShowLyricsContainer] = useState(false)

  // State for selected song
  const [selectedSong, setSelectedSong] = useState(null)
  const [selectedSongIndex, setSelectedSongIndex] = useState(0)

  // Audio player state
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0)

  // Draggable scroll state
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)

  // Audio ref
  const audioRef = useRef(null)

  // Lyrics text ref for draggable scroll
  const lyricsTextRef = useRef(null)

  // Referencing the Audio from S3 Bucket
  const SONGS_BASE_URL = `${process.env.REACT_APP_ASSET_BASE_URL}/songs-rollerdex`


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  HEAD
  // Hardcoded songs with lyrics (5 total)
  const songs = [
    {
      title: "The Horse, The Man & The Son",
      artist: "Chief Ebeneezer Obey",
      link: "https://www.youtube.com/clip/UgkxbfbRpvYXfcdXDgOgVP30v4xR2avdCJRR",
      audioFile: `${SONGS_BASE_URL}/TheHorseTheManTheSonFIN.mp3`,
      coverImage: horseManSonCover,
      lyrics: `This is the lyrics for The Horse, The Man & The Son by Chief Ebeneezer Obey.\n\nVerse 1:\nThe horse, the man, and the son\nWalking together as one\nThrough the valleys and hills\nFollowing divine wills\n\nChorus:\nOh what a journey it has been\nWith blessings from within\nKeep moving forward everyday\nGod will always show the way`,
    },
    {
      title: "Won Kere Si Number",
      artist: "Fatai Rolling Dollar",
      link: "https://www.youtube.com/clip/UgkxuqPQ0aF58opBjzMeT6xxSbG4It59x0Wd",
      audioFile: `${SONGS_BASE_URL}/wonKereSiFIN.mp3`,
      coverImage: wonKereSiCover,
      lyrics: `This is the lyrics for Won Kere Si Number by Fatai Rolling Dollar.\n\nVerse 1:\nWon kere si number o\nWon npe oruko mi\nOluwa lo nso mi\nOluwa lo nto mi\n\nChorus:\nNumber won kere si\nOluwa l'okan mi\nNumber won kere si\nOluwa l'okan mi`,
    },
    {
      title: "Appreciation",
      artist: "King Sunny Ade",
      link: "https://www.youtube.com/clip/Ugkx999WH8ccSsMh2j4e974MquindL0-8Y1U",
      audioFile: `${SONGS_BASE_URL}/AppreciationFIN.mp3`,
      coverImage: appreciationCover,
      lyrics: `This is the lyrics for Appreciation by King Sunny Ade.\n\nVerse 1:\nI thank you Lord for everything\nFor the joy that you bring\nMorning, noon, and night\nYou are my guiding light\n\nChorus:\nAppreciation, appreciation\nMy heart is full of gratitude\nAppreciation, appreciation\nFor all you do`,
    },
    {
      title: "MMS",
      artist: "Asake ft Wizkid",
      link: "https://www.youtube.com/clip/UgkxNc5VLeHs9GbdxGirGHwHiM7iFgeqiPou",
      audioFile: `${SONGS_BASE_URL}/MMSFIN.mp3`,
      coverImage: mmsCover,
      lyrics: `This is the lyrics for MMS by Asake ft Wizkid.\n\nIntro:\nYeah yeah yeah\nMMS\n\nVerse 1 (Asake):\nMoney, music, success\nLiving life with no stress\nFrom the bottom to the top\nNever gonna stop\n\nChorus:\nMMS, that's the motto\nShining bright like a bottle\nMaking moves everyday\nIn our own special way`,
    },
    {
      title: "E wa Ba Mijo",
      artist: "Tony Tetuila",
      link: "https://www.youtube.com/clip/UgkxWA1TSNUzongnbVVut-kv6ABtzzXyqxh4",
      audioFile: `${SONGS_BASE_URL}/eWaBaMiJoFIN.mp3`,
      coverImage: eWaBaMijoCover,
      lyrics: `This is the lyrics for E wa Ba Mijo by Tony Tetuila.\n\nIntro:\nE wa ba mi jo\nE wa ba mi yo\n\nVerse 1:\nCome and dance with me\nLet the music set you free\nMoving to the rhythm\nEverybody in the system\n\nChorus:\nE wa ba mi jo (Come dance with me)\nE wa ba mi yo (Come rejoice with me)\nCelebration everywhere\nHappiness in the air`,
    },
  ];
=======
  const songs = getRollerDexSongs(SONGS_BASE_URL)
>>>>>>> 7447eb150401409c1a41f31b529e75ce1f00d5f3

  // Update playback speed when slider changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed
    }
  }, [playbackSpeed])

  // Format time as mm:ss
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Handle card click - update selected song and SHOW container
  const handleCardClick = (song, index) => {
<<<<<<< HEAD
    setSelectedSong(song);
    setSelectedSongIndex(index);
    setShowLyricsContainer(true); // THIS MAKES CONTAINER APPEAR
=======
    setSelectedSong(song)
    setSelectedSongIndex(index)
    setShowLyricsContainer(true) // Show container when card is clicked
>>>>>>> 7447eb150401409c1a41f31b529e75ce1f00d5f3

    // Load audio for the selected song
    if (audioRef.current) {
      const wasPlaying = isPlaying
      audioRef.current.src = song.audioFile
      audioRef.current.load()
      audioRef.current.playbackRate = playbackSpeed
      setIsPlaying(false)
      setCurrentTime(0)

      // Auto-play if it was playing before
      if (wasPlaying) {
        audioRef.current
          .play()
          .catch((err) => console.log('Auto-play failed:', err))
        setIsPlaying(true)
      }
    }
  }

  // Toggle play/pause
  const togglePlay = () => {
    if (!audioRef.current || !selectedSong) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch((err) => {
        console.error('❌ Playback failed:', err)
        alert(`Cannot play: ${err.message}`)
      })
    }
    setIsPlaying(!isPlaying)
  }

  // Skip to previous song
  const skipBack = () => {
    if (!selectedSong) return
    const newIndex =
      selectedSongIndex > 0 ? selectedSongIndex - 1 : songs.length - 1
    handleCardClick(songs[newIndex], newIndex)
  }

  // Skip to next song
  const skipForward = () => {
    if (!selectedSong) return
    const newIndex =
      selectedSongIndex < songs.length - 1 ? selectedSongIndex + 1 : 0
    handleCardClick(songs[newIndex], newIndex)
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

  // Handle playback speed change
  const handlePlaybackSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value)
    setPlaybackSpeed(newSpeed)
  }

  // Handle close lyrics container
  const handleCloseContainer = () => {
<<<<<<< HEAD
    setShowLyricsContainer(false); // THIS HIDES CONTAINER
=======
    setShowLyricsContainer(false)
>>>>>>> 7447eb150401409c1a41f31b529e75ce1f00d5f3
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  // Draggable scroll handlers
  const handleMouseDown = (e) => {
    if (lyricsTextRef.current) {
      setIsDragging(true)
      setStartY(e.clientY)
      setScrollTop(lyricsTextRef.current.scrollTop)
      lyricsTextRef.current.style.cursor = 'grabbing'
      e.preventDefault()
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !lyricsTextRef.current) return

    const deltaY = e.clientY - startY
    lyricsTextRef.current.scrollTop = scrollTop - deltaY
    e.preventDefault()
  }

  const handleMouseUp = () => {
    if (lyricsTextRef.current) {
      setIsDragging(false)
      lyricsTextRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseLeave = () => {
    if (isDragging && lyricsTextRef.current) {
      setIsDragging(false)
      lyricsTextRef.current.style.cursor = 'grab'
    }
  }

  // Handle YouTube link click
  const handleListenFullSong = () => {
    if (selectedSong) {
      window.open(selectedSong.link, '_blank', 'noopener,noreferrer')
    }
  }

  // Render all 5 cards
  const renderCards = () => {
    return songs.map((song, index) => (
      <div
        key={index}
        className={`card ${selectedSongIndex === index && showLyricsContainer ? 'active-card' : ''}`}
        onClick={() => handleCardClick(song, index)}
        style={{ cursor: 'pointer' }}
      >
        {/* Cover Image */}
        <div className="card-cover">
          <img
            src={song.coverImage}
            alt={`${song.title} cover`}
            className="cover-image"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://via.placeholder.com/200x200?text=No+Image'
            }}
          />
        </div>

        <h3>{song.title}</h3>
        <p className="artist">{song.artist}</p>
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

      {/* Lyrics Container - ONLY visible when showLyricsContainer is TRUE */}
      {showLyricsContainer && selectedSong && (
        <>
          <div className="lyrics-permanent-container">
            {/* Close Button - Top Right */}
            <button
              className="close-container-btn"
              onClick={handleCloseContainer}
            >
              <i className="fas fa-times"></i>
            </button>

<<<<<<< HEAD
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
=======
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
                style={{ cursor: 'grab' }}
              >
                <p className="permanent-lyrics-text">
                  {selectedSong.lyrics ||
                    'No lyrics available for this song yet.'}
                </p>
>>>>>>> 7447eb150401409c1a41f31b529e75ce1f00d5f3
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

<<<<<<< HEAD
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
=======
              <button
                className="permanent-control-btn permanent-play-btn"
                onClick={togglePlay}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <i className="fas fa-pause"></i>
                ) : (
                  <i className="fas fa-play"></i>
                )}
              </button>
>>>>>>> 7447eb150401409c1a41f31b529e75ce1f00d5f3

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
<<<<<<< HEAD
                  className="permanent-progress-slider"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSliderChange}
                  step="1"
=======
                  className="speed-slider"
                  min="0.5"
                  max="1.5"
                  step="0.1"
                  value={playbackSpeed}
                  onChange={handlePlaybackSpeedChange}
>>>>>>> 7447eb150401409c1a41f31b529e75ce1f00d5f3
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

          {/* Listen to Full Song Button - Only visible when container is open */}
          <div className="external-button-container">
            <button
              className="external-listen-btn"
              onClick={handleListenFullSong}
            >
              <i className="fas fa-music"></i> Listen to Full Song Here
            </button>
          </div>
        </>
      )}

      {/* Song Cards Grid */}
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
  )
}

export default Rollerdex
