import React from 'react'
import ToneGame from './components/ToneGame'
import ToneGenerator from './components/ToneGenerator'
import TonePractice from './components/TonePractice'
import Argument from './components/Argument'
import Rollerdex from './components/Rollerdex'
import YorubaUseCasesCarousel from './components/YorubaUseCasesCarousel'
import Alphabet from './components/Alphabet'
import EmailListing from './components/EmailListing'

function App() {
  return (
    <div className="App">
      <Alphabet />
      <ToneGenerator />
      <TonePractice />
      <ToneGame />
      <Argument />
      <Rollerdex />
      <YorubaUseCasesCarousel />
      <EmailListing />
    </div>
  );
}

export default App
