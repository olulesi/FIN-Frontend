import React, { useState } from 'react'
import '../styles/Argument.css'
import { verbs, normalizeVerbKey } from '../assets/data/yorubaVerbs'

const pronouns = ['Mo', 'Ìwọ', 'Ó', 'Àwa', 'Wọ́n']
const negPronouns = ['Mi ò', 'Ìwő ò', 'Kò', 'A ò', 'Wọ́n ò']
const PRONOUNS_WITH_AUDIO = new Set([0,2,3,4]) // 0 = Mo, 3 = awa 4 = Wọ́n

const playAudio = (filename, index) => {
  const indexToFolder = {
    0: 'moPronoun',
    1: 'iwoPronoun',
    2: 'oPronoun',
    3: 'awaPronoun',
    4: 'wonPronoun',
  }

  const folder = indexToFolder[index] || 'moPronoun' // fallback
  const audioPath = `${process.env.PUBLIC_URL}/audio/argumentGame/${folder}/${filename}.mp3`

  console.log('Playing audio from:', audioPath)
  const audio = new Audio(audioPath)
  audio.play().catch((err) => console.warn('Audio playback failed:', err))
}

const ConjugationTable = ({ tense, polarity, verbKey }) => {
  const isAffirmative = polarity === 'affirmative'
  const pronounList = isAffirmative ? pronouns : negPronouns
  const sentences = verbs[verbKey][tense][polarity]

  return (
    <table className="conjugation-table">
      <thead>
        <tr>
          {['Pronoun', 'Tense', 'Verb', 'Yorùbá Sentence', 'Audio'].map(
            (header) => (
              <th key={header}>{header}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {sentences.map((sentence, i) => {
          const audioFilename = `${polarity}_${normalizeVerbKey(verbKey)}_${
            i + 1
          }`
          return (
            <tr key={i}>
              <td>{pronounList[i]}</td>
              <td>{tense === 'past' ? 'Tí' : 'Present'}</td>
              <td>{verbKey}</td>
              <td>{sentence}</td>
              <td className="audio-cell">
                {PRONOUNS_WITH_AUDIO.has(i) ? (
                  <button
                    onClick={() => playAudio(audioFilename, i)}
                    className="play-button"
                  >
                    ▶️ Play
                  </button>
                ) : (
                  <span title="Audio not available yet">🔇</span>
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const VerbConjugation = () => {
  const [selectedTense, setSelectedTense] = useState('past')
  const [selectedVerb, setSelectedVerb] = useState('jẹun')

  const verbKeys = Object.keys(verbs)

  return (
    <>
      <hr />
      <div className="verb-conjugation">
        <h2>ARGUMENT GAME </h2>

        {/* Side-by-side tables */}
        <div className="tables-row">
          <div className="table-section">
            <h3>Affirmative</h3>
            <ConjugationTable
              tense={selectedTense}
              polarity="affirmative"
              verbKey={selectedVerb}
            />
          </div>
          <div className="table-section">
            <h3>Negative</h3>
            <ConjugationTable
              tense={selectedTense}
              polarity="negative"
              verbKey={selectedVerb}
            />
          </div>
        </div>

        {/* Tense Buttons */}
        <div className="tense-selector">
          <button
            className={`tense-button ${
              selectedTense === 'past' ? 'active' : ''
            }`}
            onClick={() => setSelectedTense('past')}
          >
            Past
          </button>
          <button
            className={`tense-button ${
              selectedTense === 'present' ? 'active' : ''
            }`}
            onClick={() => setSelectedTense('present')}
          >
            Present
          </button>
        </div>

        {/* Verb Buttons (LAST) */}
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
    </>
  )
}

export default VerbConjugation
