import React, { useState } from "react";
import Question from "./Question";
import "./Game.css";

// Sample game data - 4 words with placeholder options
const gameData = [
  {
    word: "eleyele",
    audioFile: "eleyele.mp3",
    options: [
      "Do Mi Re Mi", // Placeholder 1
      "Re Do Re Do", // Placeholder 2
      "Re Mi Re Mi", // Placeholder 3 (correct)
      "Do Re Do Re", // Placeholder 4
    ],
    correct: 2, // 0-indexed (Re Mi Re Mi is correct)
  },
  {
    word: "oluyole",
    audioFile: "oluyole.mp3",
    options: ["Mi Re Mi Re", "Mi Do Mi Do", "Re Mi Re Mi", "Do Mi Do Mi"],
    correct: 1,
  },
  {
    word: "ijokodo",
    audioFile: "ijokodo.mp3",
    options: ["Do Re Do Re", "Re Do Re Do", "Mi Re Mi Re", "Re Mi Re Mi"],
    correct: 0,
  },
  {
    word: "opoileosa",
    audioFile: "opoileosa.mp3",
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

  const currentWord = gameData[currentWordIndex];

  // Handle option selection
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    if (index === currentWord.correct) {
      setFeedback("Correct ✅");
    } else {
      setFeedback("Wrong ❌");
    }
    setShowAnswer(true);
  };

  // Play audio
  const playAudio = () => {
    setLastPlayed(currentWord.word);
    // In real app, you'd play the actual audio file
    console.log(`Playing audio for: ${currentWord.word}`);

    // Simulate playing audio with Web Audio API
    const tones = currentWord.options[currentWord.correct]
      .split(" ")
      .map((t) => t.toLowerCase());
    playToneSequence(tones);
  };

  // Simulate tone playback
  const playToneSequence = (tones) => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const duration = 0.3;
    const gap = 0.1;
    let currentTime = audioContext.currentTime;

    const toneMapping = {
      do: 262,
      re: 294,
      mi: 330,
    };

    tones.forEach((tone, index) => {
      const frequency = toneMapping[tone];
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;

      gainNode.gain.setValueAtTime(0, currentTime + (duration + gap) * index);
      gainNode.gain.linearRampToValueAtTime(
        0.5,
        currentTime + (duration + gap) * index + 0.01
      );
      gainNode.gain.linearRampToValueAtTime(
        0,
        currentTime + (duration + gap) * index + duration - 0.01
      );

      oscillator.start(currentTime + (duration + gap) * index);
      oscillator.stop(currentTime + (duration + gap) * index + duration);
    });
  };

  // Start over
  const startOver = () => {
    setCurrentWordIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setFeedback("");
    setLastPlayed("");
  };

  // Next word
  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % gameData.length);
    setSelectedOption(null);
    setShowAnswer(false);
    setFeedback("");
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
        onOptionSelect={handleOptionSelect}
        onPlayAudio={playAudio}
        onNextWord={nextWord}
      />
    </div>
  );
}

export default Game;
