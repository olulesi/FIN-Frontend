import React from "react";
import Game from "./components/Game";
import Starter from "./components/starter";
import FIN from "./components/FIN";
import ToneG from "./components/ToneG";
import "./App.css";
import TonePractice from "./components/Tonepractice";
import Argument from "./components/Argument";
import Rollerdex from "./components/Rollerdex";



function App() {
  return (
    <div className="App">
      <FIN />
      <Game />
      <ToneG />
      <TonePractice />
      <Argument />
      <Rollerdex />
    </div>
  );
}

export default App;
