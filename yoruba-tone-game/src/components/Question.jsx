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
  tonePattern, // NEW: receive tonePattern from parent
}) {
  // State to control sentence visibility
  const [showSentence, setShowSentence] = useState(false);

  // Reset sentence display when word changes
  useEffect(() => {
    setShowSentence(false);
  }, [word]);

  // ===== NEW: Function to split Yoruba word into syllables =====
  // Handles words with spaces (e.g., "ó jó") and regular words (e.g., "òjò")
  const splitWordIntoSyllables = (word) => {
    if (!word) return [];

    // Check if word contains a space (multi-part word like "ó jó")
    if (word.includes(" ")) {
      return word.split(" ");
    }

    // For single words, split by character (each character is a syllable in Yoruba)
    // But Yoruba syllables can be multiple characters like "gbà", "yẹ"
    // For simplicity, we'll split into individual characters for now
    // You can enhance this later for complex syllables
    const syllables = [];
    for (let i = 0; i < word.length; i++) {
      syllables.push(word[i]);
    }
    return syllables;
  };

  // ===== NEW: Function to get color based on tone =====
  const getColorForTone = (tone) => {
    switch (tone) {
      case "Do":
        return "#e74c3c"; // Red
      case "Re":
        return "#8B4513"; // Brown (SaddleBrown)
      case "Mi":
        return "#27ae60"; // Green
      default:
        return "#333333"; // Default dark gray
    }
  };

  // ===== NEW: Function to render colored word =====
  const renderColoredWord = () => {
    if (!showAnswer) return "❓ Hidden until you answer";

    // If no tonePattern exists, just return the plain word
    if (!tonePattern || tonePattern.length === 0) {
      return word;
    }

    const syllables = splitWordIntoSyllables(word);

    // If syllable count doesn't match tone pattern count, return plain word
    if (syllables.length !== tonePattern.length) {
      console.warn(
        `Syllable mismatch: ${word} has ${syllables.length} syllables but tonePattern has ${tonePattern.length}`,
      );
      return word;
    }

    return (
      <span className="colored-word">
        {syllables.map((syllable, index) => (
          <span
            key={index}
            style={{
              color: getColorForTone(tonePattern[index]),
              fontWeight: "bold",
              marginRight: index < syllables.length - 1 ? "0.1em" : "0",
              display: "inline-block",
            }}
          >
            {syllable}
            {index < syllables.length - 1 && word.includes(" ") ? " " : ""}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="question-container">
      {/* Attempts Indicator */}
      <div className="attempts-indicator">
        Attempt: {attempts} of 2
        {attempts > 0 && (
          <span className="attempt-used"> ({attempts} used)</span>
        )}
      </div>

      {/* Image Display */}
      {selectedOption !== null &&
        !(attempts === 1 && selectedOption !== correctAnswer) &&
        showImage &&
        currentImage && (
          <div className="homonym-image-container">
            <img src={currentImage} alt={word} className="homonym-image" />
          </div>
        )}

      {/* Word Display - NOW WITH COLORED SYLLABLES */}
      <div className="word-display">{renderColoredWord()}</div>

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

      {/* Play and Sentence Buttons */}
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

      {/* Sentence Display */}
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

      {/* Next Word Button */}
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
