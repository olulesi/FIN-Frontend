import React, { useState, useEffect } from "react";
import "../styles/Question.css";

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
}) {
  // ===== DEBUG: Check what props Question received =====
  console.log(
    "%c📦 QUESTION COMPONENT RENDERED",
    "background: green; color: white",
  );
  console.log("Word:", word);
  console.log("Received currentImage:", currentImage);
  console.log("Received showImage:", showImage);
  console.log("showAnswer:", showAnswer);
  console.log(
    "Should show image?",
    showAnswer && showImage && currentImage ? "YES" : "NO",
  );

  // State to control sentence visibility
  const [showSentence, setShowSentence] = useState(false);

  // Reset sentence display when word changes
  useEffect(() => {
    setShowSentence(false);
  }, [word]);

  return (
    <div className="question-container">
      {/* Attempts Indicator */}
      <div className="attempts-indicator">
        Attempt: {attempts + 1} of 2
        {attempts > 0 && <span className="attempt-used"> (1 used)</span>}
      </div>

      {/* ===== IMAGE DISPLAY - Only shows after answer is revealed ===== */}
      {showAnswer && showImage && currentImage && (
        <div className="homonym-image-container">
          <img
            src={currentImage}
            alt={word}
            className="homonym-image"
            onLoad={() => console.log("✅ IMAGE LOADED SUCCESSFULLY for", word)}
            onError={(e) => {
              console.log("❌ IMAGE FAILED TO LOAD for", word);
              console.log("Error event:", e);
              console.log("Failed source:", currentImage);
            }}
          />
        </div>
      )}

      {/* Word Display */}
      <div className="word-display">
        {showAnswer ? word : "❓ Hidden until you answer"}
      </div>

      {/* Tone Options */}
      <div className="tone-options">
        {options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = index === correctAnswer;
          const showCorrectness = showAnswer || isLocked;

          let buttonClass = "tone-option";
          if (showCorrectness) {
            if (isCorrect) {
              buttonClass += " correct";
            } else if (isSelected && !isCorrect) {
              buttonClass += " wrong";
            }
          } else if (isSelected) {
            buttonClass += " selected";
          }

          if (isLocked) {
            buttonClass += " locked";
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => onOptionSelect(index)}
              disabled={!hasPlayedAudio || isLocked}
            >
              {option}
              {showCorrectness && isCorrect && " ✓"}
              {showCorrectness && isSelected && !isCorrect && " ✗"}
            </button>
          );
        })}
      </div>

      {/* Play and Sentence Buttons - Side by Side */}
      <div className="button-row">
        <button
          className="play-btn"
          onClick={onPlayAudio}
          aria-label="Play audio"
        >
          ▶️ Play Audio
        </button>

        <button
          className={`sentence-btn ${showSentence ? "active" : ""}`}
          onClick={() => setShowSentence(true)}
          disabled={!hasPlayedAudio || showSentence}
          aria-label="Show example sentence"
        >
          📖 {showSentence ? "Sentence Shown" : "Show Sentence"}
        </button>
      </div>

      {/* Playback Speed Controls */}
      <div className="speed-controls">
        <i
          className="fas fa-tachometer-alt speed-icon"
          title="Playback Speed"
        ></i>
        <select
          value={playbackRate}
          onChange={(e) => onSetPlaybackRate(Number(e.target.value))}
          className="speed-select"
          aria-label="Playback speed"
        >
          <option value={0.75}>×0.75 (Slow)</option>
          <option value={1.0}>×1.0 (Normal)</option>
          <option value={1.25}>×1.25</option>
          <option value={1.5}>×1.5</option>
          <option value={2.0}>×2.0 (Fast)</option>
        </select>
      </div>

      {/* Sentence Display - Only show when activated */}
      {showSentence && (
        <div className="sentence-display" role="region" aria-live="polite">
          <div className="sentence-content">
            <p className="yoruba-sentence">{sentence}</p>
            <p className="english-translation">{translation}</p>
          </div>
        </div>
      )}

      {/* Feedback */}
      {feedback && (
        <div
          className={`feedback ${feedback.includes("Correct") ? "correct" : "wrong"}`}
        >
          {feedback}
        </div>
      )}

      {/* Last Played Indicator */}
      {showAnswer && lastPlayed && (
        <div className="last-played">
          Last played: <strong>{lastPlayed}</strong>
        </div>
      )}

      {/* Score Tracker */}
      {(correctCount > 0 || wrongCount > 0) && (
        <div className="score-tracker">
          <span className="correct">✓ Correct: {correctCount}</span>
          <span className="wrong">✗ Wrong: {wrongCount}</span>
          <span className="score">📊 Score: {scorePercentage}%</span>
        </div>
      )}

      {/* Next Word Button - Only show after answering or 2 attempts */}
      {(showAnswer || isLocked) && (
        <button
          className="next-btn"
          onClick={onNextWord}
          aria-label="Next word"
        >
          Next Word →
        </button>
      )}
    </div>
  );
}

export default Question;
