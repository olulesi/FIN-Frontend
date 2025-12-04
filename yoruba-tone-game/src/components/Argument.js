
import React, { useState } from 'react';
import "../styles/Argument.css";

const pronouns = ['Mo', 'Ìwọ', 'Ó', 'Àwa', 'Wọ́n'];
const negPronouns = ['Mi ò', 'Ìwő ò', 'Kò', 'A ò', 'Wọ́n ò'];

const verbs = {
  jẹun: {
    past: {
      affirmative: ['Mo ti jẹun', 'Ìwọ ti jẹun', 'Ó ti jẹun', 'Àwa ti jẹun', 'Wọ́n ti jẹun'],
      negative: ['Mi ò tí jẹun', 'Ìwọ ò tí jẹun', 'Kò tí jẹun', 'A ò tí jẹun', 'Wọ́n ò tí jẹun'],
    },
    present: {
      affirmative: ['Mo ń jẹun', 'Ìwọ ń jẹun', 'Ó ń jẹun', 'Àwa ń jẹun', 'Wọ́n ń jẹun'],
      negative: ['Mo kì í jẹun', 'Ìwọ kì í jẹun', 'Ó kì í jẹun', 'Àwa kì í jẹun', 'Wọ́n kì í jẹun'],
    }
  },
  lọ: {
    past: {
      affirmative: ['Mo ti lọ', 'Ìwọ ti lọ', 'Ó ti lọ', 'Àwa ti lọ', 'Wọ́n ti lọ'],
      negative: ['Mi ò tí lọ', 'Ìwọ ò tí lọ', 'Kò tí lọ', 'A ò tí lọ', 'Wọ́n ò tí lọ'],
    },
    present: {
      affirmative: ['Mo ń lọ', 'Ìwọ ń lọ', 'Ó ń lọ', 'Àwa ń lọ', 'Wọ́n ń lọ'],
      negative: ['Mo kì í lọ', 'Ìwọ kì í lọ', 'Ó kì í lọ', 'Àwa kì í lọ', 'Wọ́n kì í lọ'],
    }
  },
  dé: {
    past: {
      affirmative: ['Mo ti dé', 'Ìwọ ti dé', 'Ó ti dé', 'Àwa ti dé', 'Wọ́n ti dé'],
      negative: ['Mi ò tí dé', 'Ìwọ ò tí dé', 'Kò tí dé', 'A ò tí dé', 'Wọ́n ò tí dé'],
    },
    present: {
      affirmative: ['Mo ń dé', 'Ìwọ ń dé', 'Ó ń dé', 'Àwa ń dé', 'Wọ́n ń dé'],
      negative: ['Mo kì í dé', 'Ìwọ kì í dé', 'Ó kì í dé', 'Àwa kì í dé', 'Wọ́n kì í dé'],
    }
  },
  sùn: {
    past: {
      affirmative: ['Mo ti sùn', 'Ìwọ ti sùn', 'Ó ti sùn', 'Àwa ti sùn', 'Wọ́n ti sùn'],
      negative: ['Mi ò tí sùn', 'Ìwő ò tí sùn', 'Kò tí sùn', 'A ò tí sùn', 'Wọ́n ò tí sùn'],
    },
    present: {
      affirmative: ['Mo ń sùn', 'Ìwọ ń sùn', 'Ó ń sùn', 'Àwa ń sùn', 'Wọ́n ń sùn'],
      negative: ['Mo kì í sùn', 'Ìwọ kì í sùn', 'Ó kì í sùn', 'Àwa kì í sùn', 'Wọ́n kì í sùn'],
    }
  },
  kà: {
    past: {
      affirmative: ['Mo ti kà', 'Ìwọ ti kà', 'Ó ti kà', 'Àwa ti kà', 'Wọ́n ti kà'],
      negative: ['Mi ò tí kà', 'Ìwọ ò tí kà', 'Kò tí kà', 'A ò tí kà', 'Wọ́n ò tí kà'],
    },
    present: {
      affirmative: ['Mo ń kà', 'Ìwọ ń kà', 'Ó ń kà', 'Àwa ń kà', 'Wọ́n ń kà'],
      negative: ['Mo kì í kà', 'Ìwọ kì í kà', 'Ó kì í kà', 'Àwa kì í kà', 'Wọ́n kì í kà'],
    }
  },
};

const playAudio = (filename) => {
  const audioPath = `${process.env.PUBLIC_URL}/audio/${filename}.mp3`;
  const audio = new Audio(audioPath);
  audio.play().catch((err) => console.warn('Audio playback failed:', err));
};

const ConjugationTable = ({ tense, polarity, verbKey }) => {
  const isAffirmative = polarity === 'affirmative';
  const pronounList = isAffirmative ? pronouns : negPronouns;
  const sentences = verbs[verbKey][tense][polarity];

  return (
    <table className="conjugation-table">
      <thead>
        <tr>
          {['Pronoun', 'Tense', 'Verb', 'Yorùbá Sentence', 'Audio'].map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sentences.map((sentence, i) => {
          const audioFilename = `${tense}_${polarity}_${verbKey}_${i + 1}`;
          const isMo = i === 0;

          return (
            <tr key={i}>
              <td>{pronounList[i]}</td>
              <td>{tense === 'past' ? 'Tí' : 'Present'}</td>
              <td>{verbKey}</td>
              <td>{sentence}</td>
              <td className="audio-cell">
                {isMo ? (
                  <button onClick={() => playAudio(audioFilename)} className="play-button">
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
  const [selectedTense, setSelectedTense] = useState('past'); // 'past' or 'present'
  const [selectedVerb, setSelectedVerb] = useState('jẹun');

  const verbKeys = Object.keys(verbs);

  return (
    <div className="verb-conjugation">
      <h2>Yorùbá Verb Conjugation</h2>

      {/* 1. Affirmative Table */}
      <h3>Affirmative</h3>
      <ConjugationTable tense={selectedTense} polarity="affirmative" verbKey={selectedVerb} />

      {/* 2. Negative Table */}
      <h3>Negative</h3>
      <ConjugationTable tense={selectedTense} polarity="negative" verbKey={selectedVerb} />

      {/* 3. Tense Buttons */}
      <div className="tense-selector">
        <button
          className={`tense-button ${selectedTense === 'past' ? 'active' : ''}`}
          onClick={() => setSelectedTense('past')}
        >
          Past (Tí)
        </button>
        <button
          className={`tense-button ${selectedTense === 'present' ? 'active' : ''}`}
          onClick={() => setSelectedTense('present')}
        >
          Present
        </button>
      </div>

      {/* 4. Verb Buttons (LAST) */}
      <div className="verb-selector">
        {verbKeys.map((verb) => (
          <button
            key={verb}
            onClick={() => setSelectedVerb(verb)}
            className={`verb-button ${selectedVerb === verb ? 'active' : ''}`}
          >
            {verb}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VerbConjugation;