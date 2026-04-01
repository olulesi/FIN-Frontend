import React from 'react'
import ToneGame from './components/ToneGame'
import ToneGenerator from './components/ToneGenerator'

import TonePractice from './components/Tonepractice'
import Argument from './components/Argument'
import Rollerdex from './components/Rollerdex'
// import YorubaUseCasesCarousel from './components/YorubaUseCasesCarousel'
import Alphabet from './components/Alphabet'

function App() {
  return (
    <div className="App">
      <Alphabet />
      <ToneGenerator />
      <TonePractice />
      <ToneGame />
      <Argument />
      <Rollerdex />
      {/* <YorubaUseCasesCarousel /> */}
    </div>
  )
}

export default App
