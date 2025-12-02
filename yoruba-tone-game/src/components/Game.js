import React, { useState } from "react";
import Question from "./Question";
import "./Game.css";

// Import your audio files
import eleyeleAudio from "../assets/audio/eleyele.mp3";
import oluyoleAudio from "../assets/audio/oluyole.mp3";
import ijokodoAudio from "../assets/audio/ijokodo.mp3";
import opoileosaAudio from "../assets/audio/opoileosa.mp3";

// Sample game data - 4 words with placeholder options
const gameData = [
  {
    word: "eleyele",
    audioFile: eleyeleAudio,
    options: ["Do Mi Re Mi", "Re Do Re Do", "Re Mi Re Mi", "Do Re Do Re"],
    correct: 2,
  },
  {
    word: "oluyole",
    audioFile: oluyoleAudio,
    options: ["Mi Re Mi Re", "Mi Do Mi Do", "Re Mi Re Mi", "Do Mi Do Mi"],
    correct: 1,
  },
  {
    word: "ijokodo",
    audioFile: ijokodoAudio,
    options: ["Do Re Do Re", "Re Do Re Do", "Mi Re Mi Re", "Re Mi Re Mi"],
    correct: 0,
  },
  {
    word: "opoileosa",
    audioFile: opoileosaAudio,
    options: ["Re Do Re Do", "Do Re Do Re", "Mi Do Mi Do", "Do Mi Do Mi"],
    correct: 3,
  },
];

function Game() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [lastPlayed, setLastPlayed] = useState("");
  const [hasPlayedAudio, setHasPlayedAudio] = useState(false); // 🔥 NEW STATE

  const currentWord = gameData[currentWordIndex];

  // Handle option selection
  const handleOptionSelect = (index) => {
    // 🔥 Check if audio has been played first
    if (!hasPlayedAudio) {
      alert("Please play the sound first!");
      return;
    }

    setSelectedOption(index);
    if (index === currentWord.correct) {
      setFeedback("Correct ✅");
      setShowAnswer(true);
      setLastPlayed(currentWord.word);
    } else {
      setFeedback("Wrong ❌");
      setShowAnswer(true);
      // Don't set lastPlayed for wrong answers
    }
  };

  // Play actual audio file
  const playAudio = () => {
    // 🔥 Mark that audio has been played
    setHasPlayedAudio(true);
    setLastPlayed(currentWord.word);

    const audio = new Audio(currentWord.audioFile);
    audio.play().catch((e) => console.log("Audio play error:", e));
  };

  // Start over
  const startOver = () => {
    setCurrentWordIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setFeedback("");
    setLastPlayed("");
    setHasPlayedAudio(false); // 🔥 Reset audio state
  };

  // Next word
  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % gameData.length);
    setSelectedOption(null);
    setShowAnswer(false);
    setFeedback("");
    setLastPlayed("");
    setHasPlayedAudio(false); // 🔥 Reset audio state for next word
  };

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
        hasPlayedAudio={hasPlayedAudio} // 🔥 Pass this prop
        onOptionSelect={handleOptionSelect}
        onPlayAudio={playAudio}
        onNextWord={nextWord}
      />
    </div>
  );
}

export default Game;
