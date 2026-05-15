import React, { useState, useEffect } from 'react'
import '../styles/Question.css'

const TONE_COLORS = {
  Do: '#e74c3c',
  Re: '#8B4513',
  Mi: '#27ae60',
}

function Question({
  word,
  options,
  selectedOption,
  showAnswer,
  feedback,
  lastPlayed,
  hasPlayedAudio,
  correctCount,
  wrongCount,
  scorePercentage,
  onOptionSelect,
  onPlayAudio,
  onNextWord,
  playbackRate,
  onSetPlaybackRate,
  sentence,
  translation,
  attempts,
  isLocked,
  correctAnswer,
  currentImage,
  showImage,
  tonePattern,
}) {
  const [showSentence, setShowSentence] = useState(false)

  useEffect(() => {
    setShowSentence(false)
  }, [word])

  const renderWord = () => {
    if (!showAnswer) return '❓ Hidden until you answer'
    if (!word) return ''
    if (!tonePattern || tonePattern.length === 0) return word

    const charsPerSyllable = Math.floor(word.length / tonePattern.length)

    const syllables = tonePattern.map((_, i) => {
      const start = i * charsPerSyllable
      const end =
        i === tonePattern.length - 1 ? word.length : start + charsPerSyllable
      return word.slice(start, end)
    })

    return (
      <span>
        {syllables.map((syllable, index) => (
          <span
            key={index}
            style={{
              color: TONE_COLORS[tonePattern[index]] ?? '#333333',
              fontWeight: 'bold',
              fontSize: '2rem',
              marginRight: '2px',
            }}
          >
            {syllable}
          </span>
        ))}
      </span>
    )
  }

  const showImageDisplay =
    selectedOption !== null &&
    !(attempts === 1 && selectedOption !== correctAnswer) &&
    showImage &&
    currentImage

  return (
    <div className="question-container">
      <div className="attempts-indicator">
        Attempt: {attempts} of 2
        {attempts > 0 && (
          <span className="attempt-used"> ({attempts} used)</span>
        )}
      </div>

      {showImageDisplay && (
        <div className="homonym-image-container">
          <img src={currentImage} alt={word} className="homonym-image" />
        </div>
      )}

      <div className="word-display">{renderWord()}</div>

      <div className="tone-options">
        {options.map((option, index) => {
          const isSelected = selectedOption === index
          const isCorrect = index === correctAnswer
          const showCorrectness = showAnswer || isLocked

          let buttonClass = 'tone-option'
          if (showCorrectness) {
            if (isCorrect) buttonClass += ' correct'
            else if (isSelected) buttonClass += ' wrong'
          } else if (isSelected) {
            buttonClass += ' selected'
          }
          if (isLocked) buttonClass += ' locked'

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => onOptionSelect(index)}
              disabled={!hasPlayedAudio || isLocked}
            >
              {option}
              {showCorrectness && isCorrect && ' ✓'}
              {showCorrectness && isSelected && !isCorrect && ' ✗'}
            </button>
          )
        })}
      </div>

      <div className="button-row">
        <button className="play-btn" onClick={onPlayAudio}>
          ▶️ Play Audio
        </button>
        <button
          className={`sentence-btn ${showSentence ? 'active' : ''}`}
          onClick={() => setShowSentence(true)}
          disabled={!hasPlayedAudio || showSentence}
        >
          📖 {showSentence ? 'Sentence Shown' : 'Show Sentence'}
        </button>
      </div>

      <div className="speed-controls">
        <i className="fas fa-tachometer-alt speed-icon"></i>
        <select
          value={playbackRate}
          onChange={(e) => onSetPlaybackRate(Number(e.target.value))}
        >
          <option value={0.75}>×0.75 (Slow)</option>
          <option value={1.0}>×1.0 (Normal)</option>
          <option value={1.25}>×1.25</option>
          <option value={1.5}>×1.5</option>
          <option value={2.0}>×2.0 (Fast)</option>
        </select>
      </div>

      {showSentence && (
        <div className="sentence-display">
          <div className="sentence-content">
            <p className="yoruba-sentence">{sentence}</p>
            <p className="english-translation">{translation}</p>
          </div>
        </div>
      )}

      {feedback && (
        <div
          className={`feedback ${feedback.includes('Correct') ? 'correct' : 'wrong'}`}
        >
          {feedback}
        </div>
      )}

      {showAnswer && lastPlayed && (
        <div className="last-played">
          Last played: <strong>{lastPlayed}</strong>
        </div>
      )}

      {(correctCount > 0 || wrongCount > 0) && (
        <div className="score-tracker">
          <span className="correct">✓ Correct: {correctCount}</span>
          <span className="wrong">✗ Wrong: {wrongCount}</span>
          <span className="score">📊 Score: {scorePercentage}%</span>
        </div>
      )}

      {(showAnswer || isLocked) && (
        <button className="next-btn" onClick={onNextWord}>
          Next Word →
        </button>
      )}
    </div>
  )
}

export default Question
