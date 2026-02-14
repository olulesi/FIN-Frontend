import React from 'react'
import Game from './components/Game'
import ToneGenerator from './components/ToneGenerator'
import './App.css'
import TonePractice from './components/Tonepractice'
import Argument from './components/Argument'
import Rollerdex from './components/Rollerdex'
import YorubaUseCasesCarousel from './components/YorubaUseCasesCarousel'
import Alphabet from './components/Alphabet'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Alphabet />
      <Game />
      <ToneGenerator />
      <TonePractice />
      <Argument />
      <Rollerdex />
      <YorubaUseCasesCarousel />
    </div>
  )
}

export default App
