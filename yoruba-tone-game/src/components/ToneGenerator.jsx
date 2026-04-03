import React, { useState } from 'react'
import '../styles/ToneGenerator.css'
import ToneAudio from './ToneAudio' // Import the new child component

const ToneGenerator = () => {
  const tones = ['DO', 'RE', 'MI']
  const initialTones = [
    ['DO', 'DO', 'RE', 'RE', 'MI'],
    ['MI', 'DO', 'MI', 'RE', 'DO'],
    ['DO', 'RE', 'RE', 'MI', 'DO'],
  ]

  const [toneGrid, setToneGrid] = useState(initialTones)

  const shuffleTones = () => {
    const shuffled = toneGrid.map((row) =>
      row.map(() => tones[Math.floor(Math.random() * tones.length)]),
    )
    setToneGrid(shuffled)
  }

  return (
    <div>
      <hr />
      <h2 className="tone">Tone Generator</h2>
      {/* New Audio Player Component */}
      <div>
        <p className="Block-text tip">
          Tip: Be extra expressive with each tone.
        </p>
      </div>
      <div className="audio-section">
        <ToneAudio />
      </div>
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
}

export default ToneGenerator