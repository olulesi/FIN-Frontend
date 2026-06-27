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
// import Sola from "../assets/audio/Name/Sola.mp3";
import Ayodeji from "../assets/audio/Name/Ayodeji.mp3";
import Ayotunde from "../assets/audio/Name/Ayotunde.mp3";
import Bolutife from "../assets/audio/Name/Bolutife.mp3";
import Ibukunoluwa from "../assets/audio/Name/Ibukunoluwa.mp3";
import Adeyinka from "../assets/audio/Name/Adeyinka.mp3";
import Aibinuola from "../assets/audio/Name/Aibinuola.mp3";
import Erioluwa from "../assets/audio/Name/Erioluwa.mp3";
import Bolajoko from "../assets/audio/Name/Bolajoko.mp3";
import Enitan from "../assets/audio/Name/Enitan.mp3";
import Akintola from "../assets/audio/Name/Akintola.mp3";
import Adesola from "../assets/audio/Name/Adesola.m4a";
import Ayoola from "../assets/audio/Name/Ayoola.mp3";
import Ekundayo from "../assets/audio/Name/Ekundayo.mp3";
import Anjolaoluwa from "../assets/audio/Name/Anjolaoluwa.mp3";
import Emiola from "../assets/audio/Name/Emiola.mp3";
import Adeyemi from "../assets/audio/Name/Adeyemi.mp3";
import Ayodele from "../assets/audio/Name/Ayodele.mp3";
import Afolorunso from "../assets/audio/Name/Afolorunso.mp3";

// New names batch
import Abidemi from "../assets/audio/Name/Abidemi.mp3";
import Tokunbo from "../assets/audio/Name/Tokunbo.mp3";
import Abiona from "../assets/audio/Name/Abiona.mp3";
import Iyabo from "../assets/audio/Name/Iyabo.mp3";
import Momolaoluwa from "../assets/audio/Name/Momolaoluwa.mp3";
import Oluwaseyifunmi from "../assets/audio/Name/Oluwaseyifunmi.mp3";
import Ifeoluwaiitan from "../assets/audio/Name/Ifeoluwaiitan.mp3";
import Iremide from "../assets/audio/Name/Iremide.mp3";
import Adeife from "../assets/audio/Name/Adeife.mp3";
import Olaoluwakiitan from "../assets/audio/Name/Olaoluwakiitan.mp3";
import Oyeronke from "../assets/audio/Name/Oyeronke.mp3";
import Olaseeni from "../assets/audio/Name/Olaseeni.mp3";
import Modiromoluwa from "../assets/audio/Name/Modiromoluwa.mp3";
import Mojolaade from "../assets/audio/Name/Mojolaade.mp3";
import Adedire from "../assets/audio/Name/Adedire.mp3";
import Ademide from "../assets/audio/Name/Ademide.mp3";
import Bewaji from "../assets/audio/Name/Bewaji.mp3";
import Koremade from "../assets/audio/Name/Koremade.mp3";
import Iyiola from "../assets/audio/Name/Iyiola.mp3";
import Amiifeoluwa from "../assets/audio/Name/Amiifeoluwa.mp3";
import Oluwabamise from "../assets/audio/Name/Oluwabamise.mp3";
import Araoluwa from "../assets/audio/Name/Araoluwa.mp3";
import Ebunifewamiri from "../assets/audio/Name/Ebunifewamiri.mp3";
import Eriife from "../assets/audio/Name/Eriife.mp3";
import Eyitayo from "../assets/audio/Name/Eyitayo.mp3";
import Eyitomilola from "../assets/audio/Name/Eyitomilola.mp3";
import Fadesope from "../assets/audio/Name/Fadesope.mp3";
import Mofarayolaoluwa from "../assets/audio/Name/Mofarayolaoluwa.mp3";
import Irerogbayimika from "../assets/audio/Name/Irerogbayimika.mp3";
import Yosolaoluwa from "../assets/audio/Name/Yosolaoluwa.mp3";
import Tobalase from "../assets/audio/Name/Tobalase.mp3";

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
    words: ["A", "yọ̀", "dé", "jì"],
    tones: ["RE", "DO", "MI", "DO"],
    audio: Ayodeji,
    category: "names",
  },
  {
    words: ["A", "yọ̀", "tún", "dé"],
    tones: ["RE", "DO", "MI", "MI"],
    audio: Ayotunde,
    category: "names",
  },
  {
    words: ["Bó", "lú", "tí", "fẹ́"],
    tones: ["MI", "MI", "MI", "MI"],
    audio: Bolutife,
    category: "names",
  },
  {
    words: ["Ì", "bù", "kún", "o", "lú", "wa"],
    tones: ["DO", "DO", "MI", "RE", "MI", "RE"],
    audio: Ibukunoluwa,
    category: "names",
  },
  {
    words: ["A", "dé", "yin", "ká"],
    tones: ["RE", "MI", "RE", "MI"],
    audio: Adeyinka,
    category: "names",
  },
  {
    words: ["A", "ì", "bí", "nú", "o", "lá"],
    tones: ["RE", "DO", "MI", "MI", "RE", "MI"],
    audio: Aibinuola,
    category: "names",
  },
  {
    words: ["È", "rí", "o", "lú", "wa"],
    tones: ["DO", "MI", "RE", "MI", "RE"],
    audio: Erioluwa,
    category: "names",
  },
  {
    words: ["Bó", "lá", "jọ̀", "kọ́"],
    tones: ["MI", "MI", "DO", "MI"],
    audio: Bolajoko,
    category: "names",
  },
  {
    words: ["Ẹ", "ní", "tàn"],
    tones: ["RE", "MI", "DO"],
    audio: Enitan,
    category: "names",
  },
  {
    words: ["A", "kín", "tọ́", "lá"],
    tones: ["RE", "MI", "MI", "MI"],
    audio: Akintola,
    category: "names",
  },
  {
    words: ["A", "dé", "ṣọ", "lá"],
    tones: ["RE", "MI", "RE", "MI"],
    audio: Adesola,
    category: "names",
  },
  {
    words: ["A", "yọ̀", "ọ", "lá"],
    tones: ["RE", "DO", "RE", "MI"],
    audio: Ayoola,
    category: "names",
  },
  {
    words: ["È", "kún", "dá", "yọ̀"],
    tones: ["DO", "MI", "MI", "DO"],
    audio: Ekundayo,
    category: "names",
  },
  {
    words: ["À", "njọ", "lá", "o", "lú", "wa"],
    tones: ["DO", "RE", "MI", "RE", "MI", "RE"],
    audio: Anjolaoluwa,
    category: "names",
  },
  {
    words: ["È", "mí", "o", "lá"],
    tones: ["DO", "MI", "RE", "MI"],
    audio: Emiola,
    category: "names",
  },
  {
    words: ["Mó", "lá", "dé"],
    tones: ["MI", "MI", "MI"],
    audio: Molade,
    category: "names",
  },
  {
    words: ["Ṣọ", "lá"],
    tones: ["RE", "MI"],
    // audio: Sola,
    category: "names",
  },
  {
    words: ["A", "dé", "yẹ", "mí"],
    tones: ["RE", "MI", "RE", "MI"],
    audio: Adeyemi,
    category: "names",
  },
  {
    words: ["A", "yọ̀", "dé", "lé"],
    tones: ["RE", "DO", "MI", "MI"],
    audio: Ayodele,
    category: "names",
  },
  {
    words: ["A", "fọ", "ló", "rún", "sọ̀"],
    tones: ["RE", "RE", "MI", "MI", "DO"],
    audio: Afolorunso,
    category: "names",
  },

  // ===== NEW NAMES BATCH =====
  {
    words: ["A", "bí", "dẹ̀", "mi"],
    tones: ["RE", "MI", "DO", "RE"],
    audio: Abidemi,
    category: "names",
  },
  {
    words: ["Tò", "kun", "bọ̀"],
    tones: ["DO", "RE", "DO"],
    audio: Tokunbo,
    category: "names",
  },
  {
    words: ["A", "bí", "ọ́", "nà"],
    tones: ["RE", "MI", "MI", "DO"],
    audio: Abiona,
    category: "names",
  },
  {
    words: ["Ì", "yá", "bọ̀"],
    tones: ["DO", "MI", "DO"],
    audio: Iyabo,
    category: "names",
  },
  {
    words: ["Mo", "mọ", "lá", "o", "lú", "wa"],
    tones: ["RE", "RE", "MI", "RE", "MI", "RE"],
    audio: Momolaoluwa,
    category: "names",
  },
  {
    words: ["O", "lú", "wa", "sé", "yi", "fún", "mi"],
    tones: ["RE", "MI", "RE", "MI", "RE", "MI", "RE"],
    audio: Oluwaseyifunmi,
    category: "names",
  },
  {
    words: ["Ì", "fẹ", "o", "lú", "wa", "ìí", "tán"],
    tones: ["DO", "RE", "RE", "MI", "RE", "DO-MI", "MI"],
    audio: Ifeoluwaiitan,
    category: "names",
  },
  {
    words: ["I", "re", "mí", "dé"],
    tones: ["RE", "RE", "MI", "MI"],
    audio: Iremide,
    category: "names",
  },
  {
    words: ["A", "dé", "ì", "fẹ"],
    tones: ["RE", "MI", "DO", "RE"],
    audio: Adeife,
    category: "names",
  },
  {
    words: ["O", "la", "o", "lú", "wa", "kìí", "tán"],
    tones: ["RE", "RE", "RE", "MI", "RE", "DO-MI", "MI"],
    audio: Olaoluwakiitan,
    category: "names",
  },
  {
    words: ["O", "yè", "rón", "ke"],
    tones: ["RE", "DO", "MI", "RE"],
    audio: Oyeronke,
    category: "names",
  },
  {
    words: ["O", "lá", "se", "é", "ni"],
    tones: ["RE", "MI", "RE", "MI", "RE"],
    audio: Olaseeni,
    category: "names",
  },
  {
    words: ["Mo", "dì", "rọ̀", "mó", "lú", "wa"],
    tones: ["RE", "DO", "DO", "MI", "MI", "RE"],
    audio: Modiromoluwa,
    category: "names",
  },
  {
    words: ["Mo", "jọ", "lá", "a", "dé"],
    tones: ["RE", "RE", "MI", "RE", "MI"],
    audio: Mojolaade,
    category: "names",
  },
  {
    words: ["A", "dé", "di", "re"],
    tones: ["RE", "MI", "RE", "RE"],
    audio: Adedire,
    category: "names",
  },
  {
    words: ["A", "dé", "mí", "dé"],
    tones: ["RE", "MI", "MI", "MI"],
    audio: Ademide,
    category: "names",
  },
  {
    words: ["Bẹ", "wá", "ji"],
    tones: ["RE", "MI", "RE"],
    audio: Bewaji,
    category: "names",
  },
  {
    words: ["Kó", "re", "má", "dé"],
    tones: ["MI", "RE", "MI", "MI"],
    audio: Koremade,
    category: "names",
  },
  {
    words: ["I", "yì", "ọ", "lá"],
    tones: ["RE", "DO", "RE", "MI"],
    audio: Iyiola,
    category: "names",
  },
  {
    words: ["À", "mì", "ì", "fẹ", "o", "lú", "wa"],
    tones: ["DO", "DO", "DO", "RE", "RE", "MI", "RE"],
    audio: Amiifeoluwa,
    category: "names",
  },
  {
    words: ["O", "lú", "wa", "bá", "mi", "ṣé"],
    tones: ["RE", "MI", "RE", "MI", "RE", "MI"],
    audio: Oluwabamise,
    category: "names",
  },
  {
    words: ["À", "rà", "o", "lú", "wa"],
    tones: ["DO", "DO", "RE", "MI", "RE"],
    audio: Araoluwa,
    category: "names",
  },
  {
    words: ["Ẹ", "bùn", "ì", "fẹ", "wá", "mi", "ri"],
    tones: ["RE", "DO", "DO", "RE", "MI", "RE", "RE"],
    audio: Ebunifewamiri,
    category: "names",
  },
  {
    words: ["Ẹ", "rí", "ì", "fẹ"],
    tones: ["RE", "MI", "DO", "RE"],
    audio: Eriife,
    category: "names",
  },
  {
    words: ["È", "yí", "tà", "yọ́"],
    tones: ["DO", "MI", "DO", "MI"],
    audio: Eyitayo,
    category: "names",
  },
  {
    words: ["È", "yí", "tó", "mi", "lọ́", "lá"],
    tones: ["DO", "MI", "MI", "RE", "MI", "MI"],
    audio: Eyitomilola,
    category: "names",
  },
  {
    words: ["Fa", "dé", "ṣọ", "pẹ"],
    tones: ["RE", "MI", "RE", "RE"],
    audio: Fadesope,
    category: "names",
  },
  {
    words: ["Mo", "fa", "ra", "yọ́", "lá", "o", "lú", "wa"],
    tones: ["RE", "RE", "RE", "MI", "MI", "RE", "MI", "RE"],
    audio: Mofarayolaoluwa,
    category: "names",
  },
  {
    words: ["I", "ré", "rò", "gbà", "yí", "mí", "ká"],
    tones: ["RE", "MI", "DO", "DO", "MI", "MI", "MI"],
    audio: Irerogbayimika,
    category: "names",
  },
  {
    words: ["Yọ̀", "sọ́", "lá", "o", "lú", "wa"],
    tones: ["DO", "MI", "MI", "RE", "MI", "RE"],
    audio: Yosolaoluwa,
    category: "names",
  },
  {
    words: ["To", "ba", "là", "ṣẹ"],
    tones: ["RE", "RE", "DO", "RE"],
    audio: Tobalase,
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
    setToneIndex((prev) =>
      prev === 0 ? filteredData.length - 1 : prev - 1,
    );
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
            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              {[
                { tone: "DO", label: "Red", color: "#E53935" },
                { tone: "RE", label: "Brown", color: "#6D4C41" },
                { tone: "MI", label: "Green", color: "#2E7D32" },
              ].map(({ tone, label, color }) => (
                <div key={tone} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
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
                  <span style={{ fontSize: "14px", color: "#555" }}>= {label}</span>
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