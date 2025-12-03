import React, { useState } from "react";
import "../styles/FIN.css"; // Optional: if you move your CSS there

const ToneG = () => {
  const tones = ["DO", "RE", "MI"];

  // Initial 3 rows of 5 tones (matches your HTML structure)
  const initialTones = [
    ["DO", "DO", "RE", "RE", "MI"],
    ["MI", "DO", "MI", "RE", "DO"],
    ["DO", "RE", "RE", "MI", "DO"],
  ];

  const [toneGrid, setToneGrid] = useState(initialTones);

  const shuffleTones = () => {
    const shuffled = toneGrid.map((row) =>
      row.map(() => tones[Math.floor(Math.random() * tones.length)])
    );
    setToneGrid(shuffled);
  };

  return (
    <div>
      <h2 id="heading3">Tone Generator</h2>

      <div className="tone-container">
        {toneGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="tone-row">
            {row.map((tone, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="toneCard">
                {tone}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button id="shuffleBtn" onClick={shuffleTones}>
          Shuffle Tones
        </button>
      </div>

      <hr style={{ marginTop: "2rem" }} />
    </div>
  );
};

export default ToneG;
