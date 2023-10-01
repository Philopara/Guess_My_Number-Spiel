import React from "react";

const Main = ({
  userGuess,
  setUserGuess,
  checkGuess,
  message,
  score,
  highScore,
  backgroundColor,
}) => {
  return (
    <main>
      <section className="left">
        <input
          style={{ backgroundColor }}
          type="number" 
          className="guess"
          value={userGuess}
          onChange={(e) => setUserGuess(Number(e.target.value))}
        />
        <button className="btn check" onClick={checkGuess}>
          Check!
        </button>
      </section>
      <section className="right">
        <p className="message">{message}</p>
        <p className="label-score">
          💯 Score: <span className="score">{score}</span>
        </p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">{highScore}</span>
        </p>
      </section>
    </main>
  );
};

export default Main;
