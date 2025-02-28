import gameLogo from "../public/game-logo.png";
import { Player } from "./components/Player";
import { GameBoard } from "./components/Gameboard2";
import { useState } from "react";
import { Logs } from "./components/Logs";

function App() {
  const [logs, setLogs] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function switchPlayer(rowIndex, columnIndex) {
    setActivePlayer((prevPlayer) => {
      return prevPlayer === "X" ? "O" : "X";
    });

    setLogs((oldLogs) => {
      let currentPlayer = "X";
      if (oldLogs[0]?.player === "X") {
        currentPlayer = "O";
      }
      const updatedLogs = [
        {
          square: {
            rowIndex,
            columnIndex,
          },
          player: currentPlayer,
        },
        ...oldLogs,
      ];

      return updatedLogs;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player isActive={activePlayer === "X"} name="Player1" symbol="X" />
          <Player isActive={activePlayer === "O"} name="Player2" symbol="O" />
        </ol>
        <GameBoard
          logs={logs}
          activePlayer={activePlayer}
          onSwitchPlayer={switchPlayer}
        />
      </div>
      <Logs logs={logs}></Logs>
    </main>
  );
}

export default App;
