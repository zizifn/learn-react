import gameLogo from "../public/game-logo.png";
import { Player } from "./components/Player";
import { GameBoard } from "./components/Gameboard2";
import { useState } from "react";
import { Logs } from "./components/Logs";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { GameOver } from "./components/GameOver";

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getCurrentPlayer(oldLogs) {
  let currentPlayer = "X";
  if (oldLogs[0]?.player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

/**
 *
 * @param {[{}]} logs
 * @returns
 */
function checkWinner(logs, players) {
  if (logs.length < 5) {
    return null;
  }
  let currentPlayer = logs[0]?.player;
  for (const winning of WINNING_COMBINATIONS) {
    const isWinning = winning.every(({ row, column }) => {
      const found = logs.find(
        ({ square: { rowIndex, columnIndex }, player }) => {
          return (
            currentPlayer === player &&
            rowIndex === row &&
            columnIndex === column
          );
        }
      );

      return found;
    });

    if (isWinning) {
      return players[currentPlayer];
    }

    if (logs.length === 9) {
    }
  }
}

function App() {
  const [logs, setLogs] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player1",
    O: "Player2",
  });
  // const [activePlayer, setActivePlayer] = useState("X");
  let currentPlayer = getCurrentPlayer(logs);
  let winner = checkWinner(logs, players);
  let gameBoard = initGameBoard.map((rows) => [...rows]);
  for (const {
    square: { rowIndex, columnIndex },
    player,
  } of logs) {
    gameBoard[rowIndex][columnIndex] = player;
  }

  function switchPlayer(rowIndex, columnIndex) {
    setLogs((oldLogs) => {
      let currentPlayer = getCurrentPlayer(oldLogs);
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

  function onRematch() {
    setLogs([]);
  }

  function onNameChange(player) {
    setPlayers((players) => {
      return {
        ...players,
        ...player,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            onNameChange={onNameChange}
            isActive={currentPlayer === "X"}
            name="Player1"
            symbol="X"
          />
          <Player
            onNameChange={onNameChange}
            isActive={currentPlayer === "O"}
            name="Player2"
            symbol="O"
          />
        </ol>
        {winner && <GameOver onRematch={onRematch} winner={winner}></GameOver>}
        <GameBoard
          gameBoard={gameBoard}
          activePlayer={currentPlayer}
          onSwitchPlayer={switchPlayer}
        />
      </div>
      <Logs logs={logs}></Logs>
    </main>
  );
}

export default App;
