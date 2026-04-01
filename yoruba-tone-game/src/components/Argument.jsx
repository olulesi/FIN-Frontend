import React, { useState } from 'react'
import '../styles/Argument.css'
import { verbs, normalizeVerbKey } from '../assets/data/yorubaVerbs'

//pronoun data structure
console.log('Asset Base URL:', process.env.REACT_APP_ASSET_BASE_URL)
const pronouns = ['Mo', 'Ìwọ', 'Ó', 'À(wa)', 'Ẹ', 'Wọ́n']
const negPronouns = ['Mi ò', 'Ó', 'Kò', 'À', 'Ẹ ò', 'Wọ́n']
const PRONOUNS_WITH_AUDIO = new Set([0, 1, 2, 3, 4, 5])

//funtions
const playAudio = (filename, index) => {
  
  const indexToFolder = {
    0: 'moPronoun',
    1: 'iwoPronoun',
    2: 'oPronoun',
    3: 'awaPronoun',
    4: 'ePronoun',
    5: 'wonPronoun',
  }

  const folder = indexToFolder[index]
  const audioBaseUrl = process.env.REACT_APP_ASSET_BASE_URL
  const audioPath = `${audioBaseUrl}/argument-game/${folder}/${filename}.mp3`
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
            ),
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
                <td>{tense === 'past' ? 'ti' : 'Present'}</td>
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
  //state
  const [selectedTense, setSelectedTense] = useState('past')
  const [selectedVerb, setSelectedVerb] = useState('jẹun')
  const verbKeys = Object.keys(verbs)

  return (
    <>
      <hr/>
      <div className="verb-conjugation">

        <div className="title-container argument-game">
          <h2 className="heading2">ARGUMENT GAME</h2>

          <p className="argument-intro">
            It’s a game that plays with basic pronouns and negation using
            Yoruba’s most common verbs in the future and past tense. The goal is
            not to think, but to respond in the tone of an argument.
          </p>

          <p className="argument-text center-text">
            The game starts with a question of action.
          </p>

          <div className="argument-example">
            <p className="argument-text center-text">
              <strong>Example:</strong> <em>Ṣó ti jẹun?</em>
            </p>
          </div>

          <div className="argument-content">
            {/* LEFT COLUMN */}
            <div className="argument-column">
              <p className="argument-text">
                Every response must begin with a{' '}
                <strong>Disagreeing Statement</strong>, followed by a{' '}
                <strong>New Action Statement (NAS)</strong>.
              </p>

              <div className="argument-example">
                <p className="argument-text">
                  <strong>Disagreeing Statement (Negative):</strong>{' '}
                  <em>Mi ò ti jẹun</em>
                </p>
                <p className="argument-text">
                  <strong>New Action Statement (Affirmative):</strong>{' '}
                  <em>A ti jẹun</em>
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="argument-column">
              <p className="argument-text">
                Once a New Action Statement has been made, the next player must
                respond with a disagreeing statement based on that NAS.
              </p>

              <div className="argument-example">
                <p className="argument-text">
                  <strong>Following Disagreeing Statement (Negative):</strong>{' '}
                  <em>A ò ti jẹun</em>
                </p>
                <p className="argument-text">
                  <strong>New Action Statement (Affirmative):</strong>{' '}
                  <em>Won ti jẹun</em>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="tables-row">
          <div className="table-section">
            <h3>Affirmative</h3>
            <ConjugationTable
              tense={selectedTense}
              polarity="affirmative"
              verbKey={selectedVerb}
            />
          </div>
          {
            <div className="table-section">
              <h3>Negative</h3>
              <ConjugationTable
                tense={selectedTense}
                polarity="negative"
                verbKey={selectedVerb}
              />
            </div>
          }
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
        <p className="text-block tip">
          TIP: Find a partner and play around with the verbs. Many more to play
          with
        </p>
      </div>
    </>
  )
}

export default VerbConjugation
