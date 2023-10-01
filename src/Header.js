import React from "react";

const Header = ({ resetGame, randomNumber, winStyle }) => {
  return (
    <div style={{background : `${winStyle ? "green" : "black"}`}}>
    <header>
      <h1>Guess My Number!</h1>
      <p className="between"> (Between 1 and 20)</p>
      <button className="btn again" onClick={resetGame}>
        Again!
      </button>
      <div className="number">{winStyle ? randomNumber : "?"}</div>
    </header>
    </div>
  );
};

export default Header;
