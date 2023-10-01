import React from "react";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(Math.trunc(Math.random() * 20 +1));
  const [userGuess, setUserGuess] = useState("");
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("Start guessing...");
  const [winStyle, setWinStyle] = useState(false);

  function checkGuess(){
    if (!userGuess){
      setMessage("Invalid Message")}
      else if (userGuess === randomNumber){
        setMessage ("Correct")
        setWinStyle(true)
        setHighScore((highScore) => score);
      }
      else if (userGuess > randomNumber){
        setMessage("Too High Try Again!");
        setScore((score) => score - 1);
      }
      else if (userGuess < randomNumber){

      }
  }

  function resetGame() {
    setRandomNumber(Math.trunc(Math.random() * 20 +1));
    setMessage("Start guessing...");
    setScore(20);
    setUserGuess("");
    setHighScore (score)
    setWinStyle (false)
  }
  return (
    <div>
      <Header
        resetGame={resetGame}
        randomNumber={randomNumber}
        winStyle = {winStyle}
      />
      <Main
        userGuess={userGuess}
        setUserGuess={setUserGuess}
        checkGuess={checkGuess}
        message={message}
        score={score}
        highScore={highScore}
      />
    </div>
  );
}

export default App;
