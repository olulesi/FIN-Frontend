import React, { useState, useEffect, useRef, useCallback } from 'react'
import '../styles/RhythmMelody.css'

// ─── 1. SWAP THESE WITH YOUR ACTUAL IMPORTS ───────────────────────────────────
import doImg from '../assets/images/Rhythm/do.jpg';
import reImg  from '../assets/images/Rhythm/re.jpg'
import miImg  from '../assets/images/Rhythm/mi.jpg'
import faImg  from '../assets/images/Rhythm/fa.jpg'
import solImg from '../assets/images/Rhythm/sol.jpg'
import beat from '../assets/audio/Rhythm/cruelSantinoBeat.mp3'
//

const AUDIO_SRC = beat // ← replace with: beat

const CARDS = [
  { note: 'DO',  color: '#FF6B6B', image: doImg },
  { note: 'RE',  color: '#FF9F43', image:  reImg   },
  { note: 'MI',  color: '#FECA57', image:  miImg  },
  { note: 'FA',  color: '#48DBFB', image:  faImg },
  { note: 'SOL', color: '#FF9FF3', image: solImg },
]


function Card({ note, color, image, isActive, isFaint }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`rm-card ${isActive ? "is-active" : ""} ${isFaint ? "is-faint" : ""}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className={`rm-card__inner ${flipped ? "is-flipped" : ""}`}>
        {/* FRONT — image + note label */}
        <div className="rm-card__face rm-card__front">
          <img src={image} alt={note} className="rm-card__img" />
        </div>

        {/* BACK — big colored note word */}
        <div
          className="rm-card__face rm-card__back"
          style={{
            background: `linear-gradient(135deg,${color}22,${color}44)`,
            borderColor: `${color}66`,
          }}
        >
          <span className="rm-card__note" style={{ color }}>
            {note}
          </span>
          <span className="rm-card__sub">Solfège</span>
        </div>
      </div>
    </div>
  );
}

function Carousel({ activeIndex, sliding }) {
  const total = CARDS.length
  const POS   = { '-2': 'far-left', '-1': 'left', '0': 'center', '1': 'right', '2': 'far-right' }

  return (
    <div className="rm-carousel">
      <div className={`rm-carousel__track ${sliding ? 'is-sliding' : ''}`}>
        {[-2, -1, 0, 1, 2].map(offset => {
          const card = CARDS[(activeIndex + offset + total) % total]
          return (
            <div key={`${card.note}${offset}`} className={`rm-carousel__slot ${POS[offset]}`}>
              <Card
                note={card.note}
                color={card.color}
                image={card.image}
                isActive={offset === 0}
                isFaint={Math.abs(offset) >= 1}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Countdown({ active, onComplete }) {
  const [count,   setCount]   = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!active) { setCount(null); setVisible(false); return }
    let n = 3
    setCount(n); setVisible(true)

    const tick = () => {
      setTimeout(() => {
        setVisible(false)
        setTimeout(() => {
          n--
          if (n > 0) { setCount(n); setVisible(true); tick() }
          else        { setCount(null); onComplete?.() }
        }, 300)
      }, 800)
    }
    tick()
  }, [active])

  if (count === null) return <div className="rm-countdown--empty" />

  return (
    <div className="rm-countdown">
      <span className={`rm-countdown__num ${visible ? 'is-in' : 'is-out'}`}>{count}</span>
    </div>
  )
}

function ProgressBar({ currentTime, duration, playing }) {
  const pct = duration > 0 ? (currentTime / duration) * 100 : 0
  const fmt = s => (!s || isNaN(s)) ? '0:00' : `${Math.floor(s/60)}:${Math.floor(s%60).toString().padStart(2,'0')}`

  return (
    <div className="rm-progress">
      <div className="rm-progress__track">
        <div className="rm-progress__fill" style={{ width: `${pct}%` }}>
          {playing && <span className="rm-progress__dot" />}
        </div>
      </div>
      <div className="rm-progress__times">
        <span>{fmt(currentTime)}</span>
        <span>{fmt(duration)}</span>
      </div>
    </div>
  )
}

function Controls({ phase, onPlay, onPause, onStop }) {
  return (
    <div className="rm-controls">
      {/* Play — shown when idle or paused */}
      {(phase === 'idle' || phase === 'paused') && (
        <button className="rm-btn rm-btn--play" onClick={onPlay} aria-label="Play">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      )}
      {/* Pause — shown when playing */}
      {phase === 'playing' && (
        <button className="rm-btn rm-btn--pause" onClick={onPause} aria-label="Pause">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        </button>
      )}
      {/* Stop — shown when playing or paused */}
      {(phase === 'playing' || phase === 'paused') && (
        <button className="rm-btn rm-btn--stop" onClick={onStop} aria-label="Stop">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h12v12H6z"/></svg>
        </button>
      )}
    </div>
  )
}

export default function RhythmMelody() {
  const [phase,       setPhase]       = useState('idle')    // idle | counting | playing | paused
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliding,     setSliding]     = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration,    setDuration]    = useState(0)

  const audioRef    = useRef(null)
  const intervalRef = useRef(null)

  // Audio setup
  useEffect(() => {
    if (!AUDIO_SRC) return
    const audio = new Audio(AUDIO_SRC)
    audio.loop = true
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration))
    audio.addEventListener('timeupdate',     () => setCurrentTime(audio.currentTime))
    audioRef.current = audio
    return () => { audio.pause(); audio.src = '' }
  }, [])

  // Carousel auto-advance
  const startCarousel = useCallback(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setSliding(true)
      setTimeout(() => { setActiveIndex(i => (i + 1) % CARDS.length); setSliding(false) }, 400)
    }, 2000)
  }, [])

  const stopCarousel = useCallback(() => clearInterval(intervalRef.current), [])
  useEffect(() => () => clearInterval(intervalRef.current), [])

  // Handlers
  const handlePlay = () => {
    if (phase === 'paused') {
      audioRef.current?.play(); startCarousel(); setPhase('playing')
    } else {
      setPhase('counting')
    }
  }

  const handleCountdownDone = () => {
    audioRef.current?.play(); startCarousel(); setPhase('playing')
  }

  const handlePause = () => {
    audioRef.current?.pause(); stopCarousel(); setPhase('paused')
  }

  const handleStop = () => {
    audioRef.current?.pause()
    if (audioRef.current) audioRef.current.currentTime = 0
    stopCarousel()
    setActiveIndex(0); setCurrentTime(0); setSliding(false); setPhase('idle')
  }

  return (
    <section className="rm">
      <header className="rm__header">
        <h2 className="rm__title">Rhythm <em>&amp;</em> Melody</h2>
        <p className="rm__subtitle">Commonly Used Words</p>
      </header>

      <Carousel activeIndex={activeIndex} sliding={sliding && phase === 'playing'} />

      <div className="rm__controls-zone">
        {phase === 'counting'
          ? <Countdown active onComplete={handleCountdownDone} />
          : <Controls phase={phase} onPlay={handlePlay} onPause={handlePause} onStop={handleStop} />
        }
        {phase === 'paused' && <span className="rm__badge">⏸ Paused</span>}
      </div>

      <ProgressBar currentTime={currentTime} duration={duration} playing={phase === 'playing'} />

    </section>
  )
}