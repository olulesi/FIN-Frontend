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

  // Image state for homonyms
  const [currentImage, setCurrentImage] = useState(null);
  const [showImage, setShowImage] = useState(false);

  // Audio queue states
  const [isPlayingQueue, setIsPlayingQueue] = useState(false);
  const [audioQueue, setAudioQueue] = useState([]);
  const [currentQueueIndex, setCurrentQueueIndex] = useState(0);

  // ===== DEBUG: Monitor image state changes =====
  useEffect(() => {
    console.log("showImage:", showImage);
    console.log("currentImage:", currentImage);
    if (currentImage) {
      console.log("Image type:", typeof currentImage);
      console.log("Image value:", currentImage);
    }
  }, [showImage, currentImage]);

  // ===== DEBUG: Check for duplicate audio files in homonyms =====
  useEffect(() => {
    const homonymsData = gameData.filter(
      (item) => item.category === "homonyns",
    );
    const audioFiles = homonymsData.map((item) => item.audioFile);
    const uniqueCount = new Set(audioFiles).size;

    console.log("🔍 HOMONYM AUDIO DEBUG:");
    console.log("Total homonyms:", homonymsData.length);
    console.log("Total audio files:", audioFiles.length);
    console.log("Unique audio files:", uniqueCount);

    if (audioFiles.length !== uniqueCount) {
      console.warn("⚠️ DUPLICATE AUDIO FILES FOUND!");
      const duplicates = audioFiles.filter(
        (file, index) => audioFiles.indexOf(file) !== index,
      );
      console.warn("Duplicates:", duplicates);
    } else {
      console.log("✅ All audio files are unique (no duplicates)");
    }
  }, []);

  // Initialize with null instead of empty array
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

  // Pre-shuffle homonyms on mount
  useEffect(() => {
    const homonymsData = gameData.filter(
      (item) => item.category === "homonyns",
    );
    setShuffledHomonyms(shuffleArray(homonymsData));
  }, []);

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
    setShowImage(false);
    setCurrentImage(null);
    setIsPlayingQueue(false);
    setAudioQueue([]);

    // Re-shuffle when switching TO homonyms
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
      return shuffledHomonyms || [];
    }
    return gameData;
  }, [selectedCategory, shuffledHomonyms]);

  // Safety check
  const currentWord = filteredData[currentWordIndex];

  // If no word available
  if (!currentWord) {
    return <div className="game-container">Loading...</div>;
  }

  // ===== NEW: Function to get all homonym audio files (each audio ONLY ONCE) =====
  const getAllHomonymAudioFiles = () => {
    // Get ALL homonyms from the ORIGINAL gameData (not shuffledHomonyms)
    const homonymsData = gameData.filter(
      (item) => item.category === "homonyns",
    );

    // Extract audio files - each appears exactly once
    const audioFiles = homonymsData.map((item) => item.audioFile);

    // Log to verify no duplicates
    console.log("📊 Total homonym audio files:", audioFiles.length);
    console.log("📊 Unique audio files:", new Set(audioFiles).size);

    // Remove any potential duplicates (just in case)
    const uniqueAudioFiles = [...new Set(audioFiles)];

    console.log("🎵 Unique audio files count:", uniqueAudioFiles.length);

    // Shuffle and return
    return shuffleArray(uniqueAudioFiles);
  };

  // ===== NEW: Function to play audio queue (ensures each plays only once) =====
  const playAudioQueue = (audioFiles, callback) => {
    if (!audioFiles || audioFiles.length === 0) {
      if (callback) callback();
      return;
    }

    // Prevent multiple queue starts
    if (isPlayingQueue) {
      console.log("⚠️ Queue already playing, ignoring duplicate request");
      return;
    }

    setIsPlayingQueue(true);
    setAudioQueue(audioFiles);
    let currentIndex = 0;
    let isPlaying = false; // Track if currently playing an audio

    const playNext = () => {
      if (currentIndex >= audioFiles.length) {
        // All audio files finished playing
        setIsPlayingQueue(false);
        setAudioQueue([]);
        setCurrentQueueIndex(0);
        console.log("✅ All homonym audio files played (each once)");
        if (callback) callback();
        return;
      }

      // Prevent playing multiple at once
      if (isPlaying) {
        console.log("⚠️ Still playing previous audio, waiting...");
        return;
      }

      isPlaying = true;
      console.log(
        `🎵 Playing audio ${currentIndex + 1} of ${audioFiles.length}`,
      );
      setCurrentQueueIndex(currentIndex);

      const audio = new Audio(audioFiles[currentIndex]);
      audio.playbackRate = playbackRate;

      audio
        .play()
        .then(() => {
          console.log(`✅ Audio ${currentIndex + 1} started playing`);
        })
        .catch((e) => console.log("Audio play error:", e));

      audio.onended = () => {
        console.log(`✅ Audio ${currentIndex + 1} finished`);
        isPlaying = false;
        currentIndex++;
        playNext();
      };

      // Fallback in case onended doesn't fire
      audio.onerror = () => {
        console.log(`❌ Audio ${currentIndex + 1} error, skipping`);
        isPlaying = false;
        currentIndex++;
        playNext();
      };
    };

    playNext();
  };

  // ===== NEW: Process the answer after audio queue completes =====
  const processAnswer = (index) => {
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

  // ===== UPDATED: Handle option select with audio queue for homonyms =====
  const handleOptionSelect = (index) => {
    if (!hasPlayedAudio) {
      alert("Please play the sound first to hear the tone pattern!");
      return;
    }

    if (isLocked) return;

    if (isPlayingQueue) {
      alert("Please wait, audio sequence is still playing...");
      return;
    }

    // For homonyms category, play all shuffled audio files first
    if (selectedCategory === "homonyns") {
      // Get unique audio files (each plays only once)
      const allAudioFiles = getAllHomonymAudioFiles();

      console.log("🎵 Audio files to play:", allAudioFiles.length);
      console.log("🎵 First 3 files:", allAudioFiles.slice(0, 3));

      if (allAudioFiles.length > 0) {
        console.log(
          "🎵 Playing all homonym audio files (each ONCE) in sequence...",
        );

        // Play all audio files, then process answer
        playAudioQueue(allAudioFiles, () => {
          console.log("✅ Audio queue complete - all files played once");
          processAnswer(index);
        });
        return;
      }
    }

    // For non-homonyms, process answer immediately
    processAnswer(index);
  };

  // UPDATED: Play audio with image display
  const playAudio = () => {
    console.log("%c🔊 PLAY AUDIO CLICKED", "background: orange; color: black");
    console.log(
      "Does word have imageFile?",
      currentWord.hasOwnProperty("imageFile"),
    );
    console.log("imageFile value:", currentWord.imageFile);

    setHasPlayedAudio(true);
    setLastPlayed(currentWord.word);

    if (currentWord.imageFile) {
      console.log("✅ Image property exists! Setting state...");
      console.log("Setting currentImage to:", currentWord.imageFile);
      setCurrentImage(currentWord.imageFile);
      setShowImage(true);
    } else {
      console.log("❌ No imageFile property found for this word");
    }

    const audio = new Audio(currentWord.audioFile);
    audio.playbackRate = playbackRate;
    audio.play().catch((e) => console.log("Audio play error:", e));
  };

  // UPDATED: Start over with image reset and audio queue reset
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
    setShowImage(false);
    setCurrentImage(null);
    setIsPlayingQueue(false);
    setAudioQueue([]);

    // Re-shuffle homonyms on start over if in homonyms category
    if (selectedCategory === "homonyns") {
      const homonymsData = gameData.filter(
        (item) => item.category === "homonyns",
      );
      setShuffledHomonyms(shuffleArray(homonymsData));
    }
  };

  // UPDATED: Next word with image reset and audio queue reset
  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % filteredData.length);
    setSelectedOption(null);
    setShowAnswer(false);
    setFeedback("");
    setLastPlayed("");
    setHasPlayedAudio(false);
    setAttempts(0);
    setIsLocked(false);
    setShowImage(false);
    setCurrentImage(null);
    setIsPlayingQueue(false);
    setAudioQueue([]);
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

        {/* Audio Queue Status Indicator */}
        {isPlayingQueue && (
          <div className="audio-queue-status">
            🎵 Playing homonyms audio sequence... ({currentQueueIndex + 1}/
            {audioQueue.length})
          </div>
        )}

        {/* Question Component with all props */}
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
            isPlayingQueue={isPlayingQueue}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
