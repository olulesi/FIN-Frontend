import React, { useState } from 'react'
import Question from './Question'
import './Game.css'
import eleyeleAudio from '../assets/audio/eleyele.mp3'
import oluyoleAudio from '../assets/audio/oluyole.mp3'
import ijokodoAudio from '../assets/audio/ijokodo.mp3'
import opoileosaAudio from '../assets/audio/opoileosa.mp3'

// Sample game data - 4 words with placeholder options
const gameData = [
  {
    word: 'eleyele',
    audioFile: eleyeleAudio,
    options: [
      'Do Mi Re Mi', // Placeholder 1
      'Re Do Re Do', // Placeholder 2
      'Re Mi Re Mi', // Placeholder 3 (correct)
      'Do Re Do Re', // Placeholder 4
    ],
    correct: 2, // 0-indexed (Re Mi Re Mi is correct)
  },
  {
    word: 'oluyole',
    audioFile: oluyoleAudio,
    options: ['Mi Re Mi Re', 'Mi Do Mi Do', 'Re Mi Re Mi', 'Do Mi Do Mi'],
    correct: 1,
  },
  {
    word: 'ijokodo',
    audioFile: ijokodoAudio,
    options: ['Do Re Do Re', 'Re Do Re Do', 'Mi Re Mi Re', 'Re Mi Re Mi'],
    correct: 0,
  },
  {
    word: 'opoileosa',
    audioFile: opoileosaAudio,
    options: ['Re Do Re Do', 'Do Re Do Re', 'Mi Do Mi Do', 'Do Mi Do Mi'],
    correct: 3,
  },
]

function Game() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [lastPlayed, setLastPlayed] = useState('')

  const currentWord = gameData[currentWordIndex]

  // Handle option selection
  // const handleOptionSelect = (index) => {
  //   setSelectedOption(index);
  //   if (index === currentWord.correct) {
  //     setFeedback("Correct ✅");
  //   } else {
  //     setFeedback("Wrong ❌");
  //   }
  //   setShowAnswer(true);
  // };

  // Handle option selection
  const handleOptionSelect = (index) => {
    setSelectedOption(index)
    if (index === currentWord.correct) {
<<<<<<< HEAD
      setFeedback("Correct ✅");
      setShowAnswer(true);
      setLastPlayed(currentWord.word); // Only set lastPlayed on correct answer
    } else {
      setFeedback("Wrong ❌");
      setShowAnswer(true);
      // Do NOT set lastPlayed on wrong answer
    }
  };
=======
      setFeedback('Correct ✅')
    } else {
      setFeedback('Wrong ❌')
    }
    setShowAnswer(true)
  }
>>>>>>> 8f364eaea0dd90a3eab24db40820f2788d2781f4

  // Play actual audio file
  const playAudio = () => {
    setLastPlayed(currentWord.word)

    // Create audio element and play
    const audio = new Audio(currentWord.audioFile)
    audio.play().catch((e) => console.log('Audio play error:', e))
  }

  // Start over
  const startOver = () => {
    setCurrentWordIndex(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setFeedback('')
    setLastPlayed('')
  }

  // Next word
  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % gameData.length)
    setSelectedOption(null)
    setShowAnswer(false)
    setFeedback('')
  }

  return (
    <div className="game-container">
      {/* Top Controls */}
      <div className="top-controls">
        <button className="start-over-btn" onClick={startOver}>
          🔁 Start Over
        </button>
      </div>

      {/* Question Component */}
      <Question
        word={currentWord.word}
        options={currentWord.options}
        selectedOption={selectedOption}
        showAnswer={showAnswer}
        feedback={feedback}
        lastPlayed={lastPlayed}
        onOptionSelect={handleOptionSelect}
        onPlayAudio={playAudio}
        onNextWord={nextWord}
      />
    </div>
  )
}

export default Game
