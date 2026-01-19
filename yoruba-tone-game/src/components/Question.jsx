import React from "react";
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
  onSetPlaybackRate
}) {
  
  return (
    <div className="question-container">
      {/* Word Display */}
      <div className="word-display">
        {showAnswer ? word : "❓ Hidden until you answer"}
      </div>

      {/* Tone Options */}
      <div className="tone-options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`tone-option ${
              selectedOption === index ? "selected" : ""
            }`}
            onClick={() => onOptionSelect(index)}
            disabled={!hasPlayedAudio}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Play Button */}
      <button className="play-btn" onClick={onPlayAudio}>
        ▶️ Play
      </button>

      {/* Playback Speed Controls */}
      <div className="speed-controls">
        <i className="fas fa-play speed-icon" title="Playback Speed"></i>
         <select
    value={playbackRate}
    onChange={(e) => onSetPlaybackRate(Number(e.target.value))}
    className="speed-select"
  >
    <option value={0.75}>×0.75</option>
    <option value={1.0}>×1.0</option>
    <option value={1.25}>×1.25</option>
    <option value={1.5}>×1.5</option>
    <option value={2.0}>×2.0</option>
  </select>
      </div>

      {/* Feedback */}
      {feedback && <div className="feedback">{feedback}</div>}

      {/* Last Played - Only show if answer is correct */}
      {showAnswer && lastPlayed && (
        <div className="last-played">
          Last played: <strong>{lastPlayed}</strong>
        </div>
      )}

      {/* Score Tracker - Only show after first answer */}
      {(correctCount > 0 || wrongCount > 0) && (
        <div className="score-tracker">
          <span className="correct">Correct: {correctCount}</span>
          <span className="wrong">Wrong: {wrongCount}</span>
          <span className="score">Score: {scorePercentage}%</span>
        </div>
      )}

      {/* Next Word Button */}
      <button className="next-btn" onClick={onNextWord}>
        Next Word →
      </button>
    </div>
  );
}



export default Question;
