import React, { useState, useMemo, useEffect } from "react";
import Question from "./Question";
import "./Game.css";

// Import your audio files
import eleyeleAudio from "../assets/audio/eleyele.mp3";
import oluyoleAudio from "../assets/audio/oluyole.mp3";
import ijokodoAudio from "../assets/audio/ijokodo.mp3";
import opoileosaAudio from "../assets/audio/opoileosa.mp3";
import Ibarapa from "../assets/audio/Ibarapa.mp3";
import Morowore from "../assets/audio/Morowore.mp3";
import igba from "../assets/audio/igba.mp3";

// Sample game data - 4 words with placeholder options
const gameData = [
  {
    word: "eleyele",
    audioFile: eleyeleAudio,
    options: ["Do Do Do Do", "Re Do Re Do", "Re Mi Re Mi", "Do Re Do Re"],
    correct: 0,
    category: "location",
  },
  {
    word: "oluyole",
    audioFile: oluyoleAudio,
    options: ["Mi Re Mi Re", "Re Mi Do Mi", "Re Mi Re Mi", "Do Mi Do Mi"],
    correct: 1,
    category: "location",
  },
  {
    word: "ijokodo",
    audioFile: ijokodoAudio,
    options: ["Mi Do Re Mi", "Re Do Re Do", "Mi Re Mi Re", "Do Do Do Do"],
    correct: 3,
    category: "location",
  },
  {
    word: "opoileosa",
    audioFile: opoileosaAudio,
    options: [
      "Re Do Re Do Re Do",
      "Do Re Do Re Do Re",
      "Do Do Do Do Do Do",
      "Re Do Re Mi Mi Mi",
    ],
    correct: 2,
    category: "location",
  },
  {
    word: "Ibarapa",
    audioFile: Ibarapa,
    options: ["Do Mi Do Mi ", "Mi Re Do Re ", "Re Do Re Mi ", "Do Mi Do Do"],
    correct: 0,
    category: "location",
  },
  {
    word: "Morowore",
    audioFile: Morowore,
    options: ["Re Do Re Do", "Do Re Do Re", "Re Do Re Mi", "Do Mi Do Do"],
    correct: 3,
    category: "word",
  },
  {
    word: "Igba",
    audioFile: igba,
    options: ["Re Re", "Do Mi", "Do Do", "Mi Do"],
    correct: 2,
    category: "homonyns",
  },
];

const Game = () => {
  //STATE DATA
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [lastPlayed, setLastPlayed] = useState("");
  const [hasPlayedAudio, setHasPlayedAudio] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [playbackRate, setPlaybackRate] = useState(1.0); // default normal speed

  //to reset option after a category is selected (USEEFFECTS)
  React.useEffect(() => {
    setCurrentWordIndex(0);
    setHasPlayedAudio(false);
    setSelectedOption(null);
    setShowAnswer(false);
  }, [selectedCategory]);

  //filtered data USEMEMO
  const filteredData = useMemo(() => {
    if (selectedCategory === "all") return gameData;
    return gameData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const current = filteredData[currentWordIndex];

  const currentWord = filteredData[currentWordIndex];

  //EVENT HANDLERS FUNCTION

  // Handle option selection
  const handleOptionSelect = (index) => {
    if (!hasPlayedAudio) {
      alert("Please play the sound first!");
      return;
    }

    setSelectedOption(index);
    if (index === currentWord.correct) {
      setFeedback("Correct ✅");
      setShowAnswer(true);
      setLastPlayed(currentWord.word);
      setCorrectCount((prev) => prev + 1); // 🔥 Increment correct count
    } else {
      setFeedback("Wrong ❌");
      setShowAnswer(true);
      setWrongCount((prev) => prev + 1); // 🔥 Increment wrong count
    }
  };

  // Play actual audio file
  const playAudio = () => {
    setHasPlayedAudio(true);
    setLastPlayed(currentWord.word);

    const audio = new Audio(currentWord.audioFile);
    audio.playbackRate = playbackRate; //PLAYBACK
    audio.play().catch((e) => console.log("Audio play error:", e));
  };

  // Start over
  const startOver = () => {
    setCurrentWordIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setFeedback("");
    setLastPlayed("");
    setHasPlayedAudio(false);
    setCorrectCount(0); //  Reset score
    setWrongCount(0); //  Reset score
  };

  // Next word
  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % filteredData.length);
    setSelectedOption(null);
    setShowAnswer(false);
    setFeedback("");
    setLastPlayed("");
    setHasPlayedAudio(false);
  };

  // Calculate score percentage
  const totalAttempts = correctCount + wrongCount;
  const scorePercentage =
    totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

  return (
    <div className="game-container">
      {/* Top Controls */}
      <div className="top-controls">
        <button className="start-over-btn" onClick={startOver}>
          🔁 Start Over
        </button>
      </div>

      {/* radio buttons here*/}
      <div className="category-filter">
        {/* ALL CATEGORY */}
        <label>
          <input
            type="radio"
            name="category"
            value="all"
            checked={selectedCategory === "all"}
            onChange={() => setSelectedCategory("all")}
          />
          All
        </label>
        {/* WORD CATEGORY */}
        <label>
          <input
            type="radio"
            name="category"
            value="word"
            checked={selectedCategory === "word"}
            onChange={() => setSelectedCategory("word")}
          />
          Words
        </label>
        {/* LOCATION CATEGORY */}
        <label>
          <input
            type="radio"
            name="category"
            value="location"
            checked={selectedCategory === "location"}
            onChange={() => setSelectedCategory("location")}
          />
          Locations
        </label>
        {/* HOMONYMS CATEGORY */}
        <label>
          <input
            type="radio"
            name="category"
            value="homonyns"
            checked={selectedCategory === "homonyns"}
            onChange={() => setSelectedCategory("homonyns")}
          />
          Homonyms
        </label>
      </div>

      {/* THE CHILD COMPONENT AND PROPS PASS ACROSS */}
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
      />
    </div>
  );
};

export default Game;
