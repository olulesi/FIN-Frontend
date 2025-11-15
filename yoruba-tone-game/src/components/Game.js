 import React from "react";
 import Question from "./Question";
 import "../styles/Game.css";

 const Game = () => {
   return (
     <div className="game-container">
       <h1>Yoruba Tone Recognition Game</h1>
       <Question />
     </div>
   );
 };

 export default Game;
