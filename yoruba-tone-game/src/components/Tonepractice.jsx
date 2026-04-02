import React, { useState } from 'react'
import '../styles/Tonepractice.css'
import '../styles/Alphabet.css'

// Import your audio files
import eleyeleAudio from '../assets/audio/eleyele.mp3'
import oluyoleAudio from '../assets/audio/oluyole.mp3'
import ijokodoAudio from '../assets/audio/ijokodo.mp3'
import opoileosaAudio from '../assets/audio/opoileosa.mp3'
import Ibarapa from '../assets/audio/Ibarapa.mp3'
import Morowore from '../assets/audio/Morowore.mp3'
import Igba from '../assets/audio/igba.mp3'

const tonePracticeData = [
  {
    words: ['O', 'lú', 'yọ̀', 'lé'],
    tones: ['RE', 'MI', 'DO', 'MI'],
    audio: oluyoleAudio,
  },
  {
    words: ['Ẹ', 'lẹ́', 'yẹ', 'lé'],
    tones: ['RE', 'MI', 'RE', 'MI'],
    audio: eleyeleAudio,
  },
  {
    words: ['Í', 'Jò', 'ko', 'dó'],
    tones: ['MI', 'DO', 'RE', 'MI'],
    audio: ijokodoAudio,
  },
  {
    words: ['o', 'pò', 'i', 'lé', 'ó', 'sá'],
    tones: ['RE', 'DO', 'RE', 'MI', 'MI', 'MI'],
    audio: opoileosaAudio,
  },
  {
    words: ['Ì', 'bà', 'rà', 'pá'],
    tones: ['DO', 'DO', 'DO', 'MII'],
    audio: Ibarapa,
  },
  {
    words: ['Mo', 'ró', 'wó', 'rè'],
    tones: ['RE', 'MI', 'MI', 'DO'],
    audio: Morowore,
  },
  {
    words: ['Ìg', 'bà'],
    tones: ['DO', 'DO'],
    audio: Igba,
  },
]

const WordBox = ({ word }) => <div className="wordBox">{word}</div>

const ToneBox = ({ tone }) => <div className="ToneBox">{tone}</div>

const TonePractice = () => {
  const [toneIndex, setToneIndex] = useState(0)

  const current = tonePracticeData[toneIndex]

  const handlePrev = () => {
    setToneIndex((prev) =>
      prev === 0 ? tonePracticeData.length - 1 : prev - 1,
    )
  }

  const handleNext = () => {
    setToneIndex((prev) => (prev + 1) % tonePracticeData.length)
  }

  const handlePlayAudio = () => {
    const audio = new Audio(current.audio) // from public/
    // Small delay helps with autoplay policies in some browsers
    setTimeout(() => {
      audio.play().catch((e) => console.error('Audio playback failed:', e))
    }, 100)
  }

  return (
    <div>
      <h2 className='practice'>Tone Practice</h2>
      <div className="Tone-practice">
        {/* Word Row */}
        <div className="word-row">
          {current.words.map((word, i) => (
            <WordBox key={i} word={word} />
          ))}
        </div>

        {/* Tone Row */}
        <div className="Tone-row">
          {current.tones.map((tone, i) => (
            <ToneBox key={i} tone={tone} />
          ))}
        </div>

        <button onClick={handlePlayAudio} className="play-button">
          ▶️ Play Audio
        </button>

        <div className="button">
          <button onClick={handlePrev} className="prev-button">
            ⬅️ Previous
          </button>
          <button onClick={handleNext} className="next-button">
            Next ➡️
          </button>
        </div>
      </div>{' '}
    </div>
  )
}

export default TonePractice