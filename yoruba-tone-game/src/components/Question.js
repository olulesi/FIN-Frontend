import React from "react";
import "../styles/Question.css"
function Question({
  word,
  options,
  selectedOption,
  showAnswer,
  feedback,
  lastPlayed,
  hasPlayedAudio, // 🔥 NEW PROP
  onOptionSelect,
  onPlayAudio,
  onNextWord,
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
            disabled={!hasPlayedAudio} // 🔥 Disable if audio not played
          >
            {option}
          </button>
        ))}
      </div>

      {/* Play Button */}
      <button className="play-btn" onClick={onPlayAudio}>
        ▶️ Play
      </button>

      {/* Feedback */}
      {feedback && <div className="feedback">{feedback}</div>}

      {/* Last Played - Only show if answer is correct */}
      {showAnswer && lastPlayed && (
        <div className="last-played">
          Last played: <strong>{lastPlayed}</strong>
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
