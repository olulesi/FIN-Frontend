import React, { useState, useMemo, useEffect } from "react";
import Question from "./Question";
import "./Game.css";
import { gameData } from "../assets/data/toneGameData";

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
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  // ✅ FIX 1: Initialize with null instead of empty array
  const [shuffledHomonyms, setShuffledHomonyms] = useState(null);

  // Shuffle function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // ✅ FIX 2: Pre-shuffle homonyms on mount
  useEffect(() => {
    const homonymsData = gameData.filter(
      (item) => item.category === "homonyns",
    );
    setShuffledHomonyms(shuffleArray(homonymsData));
  }, []); // Run once on mount

  // Reset game state when category changes
  useEffect(() => {
    setCurrentWordIndex(0);
    setHasPlayedAudio(false);
    setSelectedOption(null);
    setShowAnswer(false);
    setCorrectCount(0);
    setWrongCount(0);
    setAttempts(0);
    setIsLocked(false);

    // ✅ FIX 3: Re-shuffle when switching TO homonyms (not on every category change)
    if (selectedCategory === "homonyns") {
      const homonymsData = gameData.filter(
        (item) => item.category === "homonyns",
      );
      setShuffledHomonyms(shuffleArray(homonymsData));
    }
  }, [selectedCategory]);

  // Filter game data by category
  const filteredData = useMemo(() => {
    if (selectedCategory === "all") return gameData;
    if (selectedCategory === "word")
      return gameData.filter((item) => item.category === "word");
    if (selectedCategory === "location")
      return gameData.filter((item) => item.category === "location");
    if (selectedCategory === "homonyns") {
      // ✅ FIX 4: Return empty array if not loaded yet (safer than undefined)
      return shuffledHomonyms || [];
    }
    return gameData;
  }, [selectedCategory, shuffledHomonyms]);

  // ✅ FIX 5: Safety check - prevent undefined access
  const currentWord = filteredData[currentWordIndex];

  // If no word available (shouldn't happen but safety first)
  if (!currentWord) {
    return <div className="game-container">Loading...</div>;
  }

  // EVENT HANDLERS
  const handleOptionSelect = (index) => {
    if (!hasPlayedAudio) {
      alert("Please play the sound first to hear the tone pattern!");
      return;
    }

    if (isLocked) return;

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setSelectedOption(index);

    if (index === currentWord.correct) {
      setFeedback("Correct ✅ Well done!");
      setShowAnswer(true);
      setIsLocked(true);
      setLastPlayed(currentWord.word);
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);

      if (newAttempts < 2) {
        setFeedback("Wrong ❌ Try again!");
      } else {
        setFeedback(
          `Wrong again ❌ The correct answer is: ${currentWord.options[currentWord.correct]}`,
        );
        setShowAnswer(true);
        setIsLocked(true);
        setLastPlayed(currentWord.word);
      }
    }
  };

  const playAudio = () => {
    setHasPlayedAudio(true);
    setLastPlayed(currentWord.word);

    const audio = new Audio(currentWord.audioFile);
    audio.playbackRate = playbackRate;
    audio.play().catch((e) => console.log("Audio play error:", e));
  };

  const startOver = () => {
    setCurrentWordIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setFeedback("");
    setLastPlayed("");
    setHasPlayedAudio(false);
    setCorrectCount(0);
    setWrongCount(0);
    setAttempts(0);
    setIsLocked(false);

    // Re-shuffle homonyms on start over if in homonyms category
    if (selectedCategory === "homonyns") {
      const homonymsData = gameData.filter(
        (item) => item.category === "homonyns",
      );
      setShuffledHomonyms(shuffleArray(homonymsData));
    }
  };

  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % filteredData.length);
    setSelectedOption(null);
    setShowAnswer(false);
    setFeedback("");
    setLastPlayed("");
    setHasPlayedAudio(false);
    setAttempts(0);
    setIsLocked(false);
  };

  // Calculate score percentage
  const totalAttempts = correctCount + wrongCount;
  const scorePercentage =
    totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

  return (
    <>
      <hr />
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
              checked={selectedCategory === "all"}
              onChange={() => setSelectedCategory("all")}
            />
            All
          </label>
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

        {/* Question Component with all props */}
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
        />
      </div>
    </>
  );
};

export default Game;
