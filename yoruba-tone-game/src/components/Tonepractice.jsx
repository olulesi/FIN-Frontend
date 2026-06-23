import React, { useState, useMemo } from "react";
import "../styles/Tonepractice.css";

import eleyeleAudio from "../assets/audio/eleyele.mp3";
import oluyoleAudio from "../assets/audio/oluyole.mp3";
import ijokodoAudio from "../assets/audio/ijokodo.mp3";
import opoileosaAudio from "../assets/audio/opoileosa.mp3";
import Ibarapa from "../assets/audio/Ibarapa.mp3";
import Morowore from "../assets/audio/Morowore.mp3";
import Igba from "../assets/audio/igba.mp3";
import Molade from "../assets/audio/Name/Molade.mp3";
import shola from "../assets/audio/Name/shola.mp3";

const tonePracticeData = [
  {
    words: ["O", "lú", "yọ̀", "lé"],
    tones: ["RE", "MI", "DO", "MI"],
    audio: oluyoleAudio,
    category: "places",
  },
  {
    words: ["Ẹ", "lẹ́", "yẹ", "lé"],
    tones: ["RE", "MI", "RE", "MI"],
    audio: eleyeleAudio,
    category: "places",
  },
  {
    words: ["Í", "Jò", "ko", "dó"],
    tones: ["MI", "DO", "RE", "MI"],
    audio: ijokodoAudio,
    category: "places",
  },
  {
    words: ["o", "pò", "i", "lé", "ó", "sá"],
    tones: ["RE", "DO", "RE", "MI", "MI", "MI"],
    audio: opoileosaAudio,
    category: "places",
  },
  {
    words: ["Ì", "bà", "rà", "pá"],
    tones: ["DO", "DO", "DO", "MI"],
    audio: Ibarapa,
    category: "places",
  },
  { words: ["Ìg", "bà"], tones: ["DO", "DO"], audio: Igba, category: "places" },
  {
    words: ["Mo", "ró", "wó", "rè"],
    tones: ["RE", "MI", "MI", "DO"],
    audio: Morowore,
    category: "word",
  },
  {
    words: ["Mó", "lá", "dé"],
    tones: ["RE", "DO", "MI"],
    audio: Molade,
    category: "names",
  },
  {
    words: ["Sh", "ó", "lá"],
    tones: ["DO", "MI", "DO"],
    audio: shola,
    category: "names",
  },
];

const toneColors = {
  DO: "#E53935",
  RE: "#6D4C41",
  MI: "#2E7D32",
};

const WordBox = ({ word, tone }) => (
  <div
    className="wordBox"
    style={{
      color: toneColors[tone] || "#000000",
      fontWeight: "bold",
    }}
  >
    {word}
  </div>
);

const ToneBox = ({ tone }) => <div className="ToneBox">{tone}</div>;

const TonePractice = () => {
  const [selectedCategory, setSelectedCategory] = useState("places");
  const [toneIndex, setToneIndex] = useState(0);

  const filteredData = useMemo(
    () => tonePracticeData.filter((item) => item.category === selectedCategory),
    [selectedCategory],
  );

  const current = filteredData[toneIndex];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setToneIndex(0);
  };

  const handlePrev = () => {
    setToneIndex((prev) => (prev === 0 ? filteredData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setToneIndex((prev) => (prev + 1) % filteredData.length);
  };

  const handlePlayAudio = () => {
    const audio = new Audio(current.audio);
    setTimeout(() => {
      audio.play().catch((e) => console.error("Audio playback failed:", e));
    }, 100);
  };

  return (
    <div className="Tone-container">
      <h2 className="practice">Tone Practice</h2>

      <div className="Tone-practice">
        {/* Category filter */}
        <div className="category-filter">
          <label className="active-category">
            <input
              type="radio"
              name="practice-category"
              value="places"
              checked={selectedCategory === "places"}
              onChange={() => handleCategoryChange("places")}
            />
            Places
          </label>
          <label className="active-category">
            <input
              type="radio"
              name="practice-category"
              value="names"
              checked={selectedCategory === "names"}
              onChange={() => handleCategoryChange("names")}
            />
            Names
          </label>
          <label className="active-category">
            <input
              type="radio"
              name="practice-category"
              value="word"
              checked={selectedCategory === "word"}
              onChange={() => handleCategoryChange("word")}
            />
            Word
          </label>
        </div>

        {!current ? (
          <p style={{ textAlign: "center", color: "#888" }}>
            No entries yet for this category.
          </p>
        ) : (
          <>
            {/* Legend — directly above word boxes */}
            <div
              style={{ display: "flex", gap: "16px", justifyContent: "center" }}
            >
              {[
                { tone: "DO", label: "Red", color: "#E53935" },
                { tone: "RE", label: "Brown", color: "#6D4C41" },
                { tone: "MI", label: "Green", color: "#2E7D32" },
              ].map(({ tone, label, color }) => (
                <div
                  key={tone}
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "15px", fontWeight: "700", color }}>
                    {tone}
                  </span>
                  <span style={{ fontSize: "14px", color: "#555" }}>
                    = {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Word row */}
            <div className="word-row">
              {current.words.map((word, i) => (
                <WordBox key={i} word={word} tone={current.tones[i]} />
              ))}
            </div>

            {/* Tone row */}
            <div className="Tone-row">
              {current.tones.map((tone, i) => (
                <ToneBox key={i} tone={tone} />
              ))}
            </div>

            <button onClick={handlePlayAudio} className="play-button">
              ▶️ Play Audio
            </button>

            <div className="button">
              <button onClick={handlePrev} className="prev-button">
                ← Prev
              </button>
              <button onClick={handleNext} className="next-button">
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TonePractice;
