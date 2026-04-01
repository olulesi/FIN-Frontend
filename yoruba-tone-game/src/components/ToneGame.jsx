import React, { useState, useMemo, useEffect } from 'react'
import Question from './Question'
import '../styles/ToneGame.css'
import { gameData } from '../assets/data/toneGameData'

const Game = () => {
  //STATE DATA
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [lastPlayed, setLastPlayed] = useState('')
  const [hasPlayedAudio, setHasPlayedAudio] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [attempts, setAttempts] = useState(0)
  const [isLocked, setIsLocked] = useState(false)

  // Image state for homonyms
  const [currentImage, setCurrentImage] = useState(null)
  const [showImage, setShowImage] = useState(false)
  const [shuffledHomonyms, setShuffledHomonyms] = useState(null)

  // Shuffle function
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Pre-shuffle homonyms on mount
  useEffect(() => {
    const homonymsData = gameData.filter((item) => item.category === 'homonyns')
    setShuffledHomonyms(shuffleArray(homonymsData))
  }, [])

  // Reset game state when category changes
  useEffect(() => {
    setCurrentWordIndex(0)
    setHasPlayedAudio(false)
    setSelectedOption(null)
    setShowAnswer(false)
    setCorrectCount(0)
    setWrongCount(0)
    setAttempts(0)
    setIsLocked(false)
    setShowImage(false)
    setCurrentImage(null)

    // Re-shuffle when switching TO homonyms
    if (selectedCategory === 'homonyns') {
      const homonymsData = gameData.filter(
        (item) => item.category === 'homonyns',
      )
      setShuffledHomonyms(shuffleArray(homonymsData))
    }
  }, [selectedCategory])

  // Filter game data by category
  const filteredData = useMemo(() => {
    // if (selectedCategory === "all") return gameData;
    // if (selectedCategory === "word")
    //   return gameData.filter((item) => item.category === "word");
    // if (selectedCategory === "location")
    //   return gameData.filter((item) => item.category === "location");
    if (selectedCategory === 'homonyns') {
      return shuffledHomonyms || []
    }
    return gameData
  }, [selectedCategory, shuffledHomonyms])

  // Safety check
  const currentWord = filteredData[currentWordIndex]

  // // If no word available
  // if (!currentWord) {
  //   return <div className="game-container">Loading...</div>;
  // }

  // Process the answer
  const processAnswer = (index) => {
    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    setSelectedOption(index)

    if (index === currentWord.correct) {
      setFeedback('Correct ✅ Well done!')
      setShowAnswer(true)
      setIsLocked(true)
      setLastPlayed(currentWord.word)
      setCorrectCount((prev) => prev + 1)
    } else {
      setWrongCount((prev) => prev + 1)

      if (newAttempts < 2) {
        setFeedback('Wrong ❌ Try again!')
      } else {
        setFeedback(
          `Wrong again ❌ The correct answer is: ${currentWord.options[currentWord.correct]}`,
        )
        setShowAnswer(true)
        setIsLocked(true)
        setLastPlayed(currentWord.word)
      }
    }
  }

  // Handle option select
  const handleOptionSelect = (index) => {
    if (!hasPlayedAudio) {
      alert('Please play the sound first to hear the tone pattern!')
      return
    }

    if (isLocked) return

    processAnswer(index)
  }

  // Play audio with image display
  const playAudio = () => {
    setHasPlayedAudio(true)
    setLastPlayed(currentWord.word)

    if (currentWord.imageFile) {
      setCurrentImage(currentWord.imageFile)
      setShowImage(true)
    }

    const audio = new Audio(currentWord.audioFile)
    audio.playbackRate = playbackRate
    audio.play().catch((e) => console.log('Audio play error:', e))
  }

  // Start over
  const startOver = () => {
    setCurrentWordIndex(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setFeedback('')
    setLastPlayed('')
    setHasPlayedAudio(false)
    setCorrectCount(0)
    setWrongCount(0)
    setAttempts(0)
    setIsLocked(false)
    setShowImage(false)
    setCurrentImage(null)

    // Re-shuffle homonyms on start over if in homonyms category
    if (selectedCategory === 'homonyns') {
      const homonymsData = gameData.filter(
        (item) => item.category === 'homonyns',
      )
      setShuffledHomonyms(shuffleArray(homonymsData))
    }
  }

  // Next word
  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % filteredData.length)
    setSelectedOption(null)
    setShowAnswer(false)
    setFeedback('')
    setLastPlayed('')
    setHasPlayedAudio(false)
    setAttempts(0)
    setIsLocked(false)
    setShowImage(false)
    setCurrentImage(null)
  }

  // Calculate score percentage
  const totalAttempts = correctCount + wrongCount
  const scorePercentage =
    totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0

  return (
    <>
      <hr />
      <div className="title-container">
        <h2 id="heading3">Tone Game</h2>
        <p className="text-block tip">
          Test your hearing of tones with Homonyms in Yoruba.
        </p>
      </div>

      <div className="game-container">
        {/* Top Controls */}
        <div className="top-controls">
          <button className="start-over-btn" onClick={startOver}>
            🔁 Start Over
          </button>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          <label>
            <input
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={() => setSelectedCategory('all')}
              disabled
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="word"
              checked={selectedCategory === 'word'}
              onChange={() => setSelectedCategory('word')}
              disabled
            />
            Words
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="location"
              checked={selectedCategory === 'location'}
              onChange={() => setSelectedCategory('location')}
              disabled
            />
            Locations
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="homonyns"
              checked={selectedCategory === 'homonyns'}
              onChange={() => setSelectedCategory('homonyns')}
            />
            Homonyms
          </label>
        </div>

        {/* Question Component with all props */}
        <div className="question-wrapper">
          <Question
            word={currentWord.word}
            options={currentWord.options}
            selectedOption={selectedOption}
            showAnswer={showAnswer}
            feedback={feedback}
            lastPlayed={lastPlayed}
            hasPlayedAudio={hasPlayedAudio}
            correctCount={correctCount}
            wrongCount={wrongCount}
            scorePercentage={scorePercentage}
            onOptionSelect={handleOptionSelect}
            onPlayAudio={playAudio}
            onNextWord={nextWord}
            playbackRate={playbackRate}
            onSetPlaybackRate={setPlaybackRate}
            sentence={currentWord.sentence}
            translation={currentWord.translation}
            attempts={attempts}
            isLocked={isLocked}
            correctAnswer={currentWord.correct}
            currentImage={currentImage}
            showImage={showImage}
          />
        </div>
      </div>
      <div className="title-container">
        <p className="text-block tip">
          TIP: Always try to mimic the audio to improve your pronunciation as
          you play
        </p>
      </div>
    </>
  )
}

export default Game
