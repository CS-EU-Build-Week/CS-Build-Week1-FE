import React from "react";

const Game = props => {
    handleClick = (e) => {
        
    }
  return (

    <h1> MUD Game </h1>
    <h3>Welcome</h3>

    <div>Current Room: </div>
    <div>Room Description: </div>

    <div className="controller">
      <button
        className="directions"
        onClick={e => handleClick(e)}
        value="w"
      >
        ◄
      </button>
      <button
        className="directions"
        onClick={e => handleClick(e)}
        value="n"
      >
        ▲
      </button>
      <button
        className="directions"
        onClick={e => handleClick(e)}
        value="s"
      >
        ▼
      </button>
      <button
        className="directions"
        onClick={e => handleClick(e)}
        value="e"
      >
        ►
      </button>
    </div>
  );
};
export default Game;
