import React, { useState } from 'react';
import "../styles/Argument.css";

// --- Keep your pronouns, negPronouns, verbs, and playAudio function unchanged ---
const pronouns = ['Mo', 'Ìwọ', 'Ó', 'Àwa', 'Wọ́n'];
const negPronouns = ['Mi ò', 'Ìwő ò', 'Kò', 'A ò', 'Wọ́n ò'];

const verbs = { // Verbs data
  jẹun: {
    affirmative: [
      "Mo ti jẹun",
      "Ìwọ ti jẹun",
      "Ó ti jẹun",
      "Àwa ti jẹun",
      "Wọ́n ti jẹun",
    ],
    negative: [
      "Mi ò tí jẹun",
      "Ìwọ ò tí jẹun",
      "Kò tí jẹun",
      "A ò tí jẹun",
      "Wọ́n ò tí jẹun",
    ],
  },
  lọ: {
    affirmative: ["Mo ti lọ", "Ìwọ ti lọ", "Ó ti lọ", "Àwa ti lọ", "Wọ́n ti lọ"],
    negative: [
      "Mi ò tí lọ",
      "Ìwọ ò tí lọ",
      "Kò tí lọ",
      "A ò tí lọ",
      "Wọ́n ò tí lọ",
    ],
  },
  dé: {
    affirmative: ["Mo ti dé", "Ìwọ ti dé", "Ó ti dé", "Àwa ti dé", "Wọ́n ti dé"],
    negative: [
      "Mi ò tí dé",
      "Ìwọ ò tí dé",
      "Kò tí dé",
      "A ò tí dé",
      "Wọ́n ò tí dé",
    ],
  },
  sùn: {
    affirmative: [
      "Mo ti sùn",
      "Ìwọ ti sùn",
      "Ó ti sùn",
      "Àwa ti sùn",
      "Wọ́n ti sùn",
    ],
    negative: [
      "Mi ò tí sùn",
      "Ìwő ò tí sùn",
      "Kò tí sùn",
      "A ò tí sùn",
      "Wọ́n ò tí sùn",
    ],
  },
  kà: {
    affirmative: ["Mo ti kà", "Ìwọ ti kà", "Ó ti kà", "Àwa ti kà", "Wọ́n ti kà"],
    negative: [
      "Mi ò tí kà",
      "Ìwọ ò tí kà",
      "Kò tí kà",
      "A ò tí kà",
      "Wọ́n ò tí kà",
    ],
  },
  };


const playAudio = (filename) => {
  const audioPath = `${process.env.PUBLIC_URL}/audio/${filename}.mp3`;
  const audio = new Audio(audioPath);
  audio.play().catch((err) => console.warn('Audio playback failed:', err));
};

const ConjugationTable = ({ dataType, verbKey }) => {
  const verbData = verbs[verbKey][dataType];
  const pronounList = dataType === 'affirmative' ? pronouns : negPronouns;

  return (
    <table className="conjugation-table">
      <thead>
        <tr>
          {['Pronoun', 'Tense', 'Verb', 'Yorùbá Sentence', 'Audio'].map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {verbData.map((sentence, i) => {
          const audioFilename = `${dataType}_${verbKey}_${i + 1}`;
          const isMo = i === 0;

          return (
            <tr key={i}>
              <td>{pronounList[i]}</td>
              <td>Tí</td>
              <td>{verbKey}</td>
              <td>{sentence}</td>
              <td className="audio-cell">
                {isMo ? (
                  <button
                    onClick={() => playAudio(audioFilename)}
                    className="play-button"
                  >
                    ▶️ Play
                  </button>
                ) : (
                  <button disabled title="Audio not available yet">
                    🔇
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const VerbConjugation = () => {
  const [selectedVerb, setSelectedVerb] = useState('jẹun');
  const verbKeys = Object.keys(verbs);

  return (
    <div className="verb-conjugation">
      <h2>ARGUMENT GAME </h2>

      <div className="tables">
        <h3>Affirmative</h3>
        <ConjugationTable dataType="affirmative" verbKey={selectedVerb} />

        <h3>Negative</h3>
        <ConjugationTable dataType="negative" verbKey={selectedVerb} />
      </div>

      <div className="verb-selector">
        {verbKeys.map((verb) => (
          <button
            key={verb}
            onClick={() => setSelectedVerb(verb)}
            className={`verb-button ${selectedVerb === verb ? "active" : ""}`}
          >
            {verb}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VerbConjugation;



