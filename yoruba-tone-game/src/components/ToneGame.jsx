import React, { useState, useMemo, useEffect } from "react";
import Question from "./Question";
import "../styles/ToneGame.css";
import { gameData } from "../assets/data/toneGameData";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getHomonyms = () =>
  shuffleArray(gameData.filter((item) => item.category === "homonyns"));

const Game = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [lastPlayed, setLastPlayed] = useState("");
  const [hasPlayedAudio, setHasPlayedAudio] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("homonyns");
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [shuffledHomonyms, setShuffledHomonyms] = useState(getHomonyms);

  const resetWordState = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setFeedback("");
    setLastPlayed("");
    setHasPlayedAudio(false);
    setAttempts(0);
    setIsLocked(false);
    setShowImage(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    setCurrentWordIndex(0);
    setCorrectCount(0);
    setWrongCount(0);
    resetWordState();
    if (selectedCategory === "homonyns") {
      setShuffledHomonyms(getHomonyms());
    }
  }, [selectedCategory]);

  const filteredData = useMemo(() => {
    return selectedCategory === "homonyns" ? shuffledHomonyms : gameData;
  }, [selectedCategory, shuffledHomonyms]);

  const currentWord = filteredData[currentWordIndex];

  if (!currentWord) return <div className="game-container">Loading...</div>;

  const processAnswer = (index) => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setSelectedOption(index);

    if (currentWord.imageFile && !showImage) setShowImage(true);

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

  const handleOptionSelect = (index) => {
    if (!hasPlayedAudio) {
      alert("Please play the sound first to hear the tone pattern!");
      return;
    }
    if (isLocked) return;
    processAnswer(index);
  };

  const playAudio = () => {
    setHasPlayedAudio(true);
    setLastPlayed(currentWord.word);
    if (currentWord.imageFile) setCurrentImage(currentWord.imageFile);

    const audio = new Audio(currentWord.audioFile);
    audio.playbackRate = playbackRate;
    audio.play().catch((e) => console.error("Audio play error:", e));
  };

  const startOver = () => {
    setCurrentWordIndex(0);
    setCorrectCount(0);
    setWrongCount(0);
    resetWordState();
    if (selectedCategory === "homonyns") setShuffledHomonyms(getHomonyms());
  };

  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % filteredData.length);
    resetWordState();
  };

  const totalAttempts = correctCount + wrongCount;
  const scorePercentage =
    totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

  return (
    <>
      <hr />
      <div className="title-container">
        <h2 id="heading3">Tone Game</h2>
        <p className="text-blockTip">
          Test your hearing of tones with Homonyms in Yoruba.
        </p>
      </div>

      <div className="game-container">
        <div className="top-controls">
          <button className="start-over-btn" onClick={startOver}>
            🔁 Start Over
          </button>
        </div>

        <div className="category-filter">
          {["all", "word", "location"].map((cat) => (
            <label key={cat} className="disabled-category">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
                disabled
              />
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          ))}
          <label className="active-category">
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
            tonePattern={currentWord.tonePattern}
          />
        </div>
      </div>

      <div className="title-container">
        <p className="text-blockTip">
          TIP: Always try to mimic the audio to improve your pronunciation as
          you play
        </p>
      </div>
    </>
  );
};

export default Game;