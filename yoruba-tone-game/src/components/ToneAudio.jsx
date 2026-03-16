import React, { useState, useRef, useEffect } from 'react'
import '../styles/ToneAudio.css'
import yorubaTones from '../assets/audio/yorubaTones.mp3'
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa'

const AudioPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1.0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Handle audio playback
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const rewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  // Handle dragging on progress bar
  const handleProgressDrag = (e) => {
    if (!isDragging || !audioRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percent = x / rect.width
    const newTime = percent * duration
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleProgressMouseDown = () => {
    setIsDragging(true)
  }

  const handleProgressMouseUp = () => {
    setIsDragging(false)
  }

  // Update time and duration
  useEffect(() => {
    const audio = audioRef.current

    if (audio) {
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime)
        setDuration(audio.duration)
      }

      audio.addEventListener('timeupdate', handleTimeUpdate)
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [])

  // Handle speed change via slider (circular dial)
  const handleSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value)
    setSpeed(newSpeed)
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed
    }
  }

  return (
    <div className="audio-player">
      {/* Progress Bar with Drag Support */}
      <div
        className="progress-container"
        onMouseDown={handleProgressMouseDown}
        onMouseMove={isDragging ? handleProgressDrag : undefined}
        onMouseUp={handleProgressMouseUp}
        onMouseLeave={handleProgressMouseUp}
      >
        <div
          className="progress-bar"
          style={{
            width: duration ? `${(currentTime / duration) * 100}%` : '0%',
          }}
        />
      </div>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={yorubaTones}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={() => {
          setDuration(audioRef.current.duration)
        }}
      />
      {/* Centralized Controls */}
      <div className="controls-center">
        <div className="control-buttons">
          <button onClick={rewind} className="control-btn">
            <FaStepBackward size={20} />
          </button>
          <button onClick={togglePlay} className="control-btn">
            {isPlaying ? <FaPause size={15} /> : <FaPlay size={15} />}
          </button>
          <button onClick={rewind} className="control-btn">
            <FaStepForward size={15} />
          </button>
        </div>
        {/* Speed Dial (Circular Slider) */}
        <div className="speed-dial-container">
          <input
            type="range"
            min="0.5"
            max="2.0"
            step="0.25"
            value={speed}
            onChange={handleSpeedChange}
            className="speed-slider"
            aria-label="Playback Speed"
          />
          <div className="speed-label">{speed}x</div>
        </div>
      </div>
      <div className="linkk1">
        <a
          href="https://www.yorubaizm.com/"
          target="_blank"
          rel="noreferrer"
          className="link2"
        >
          from Yorubaizm
        </a>
      </div>
    </div>
  )
}

export default AudioPlayer
