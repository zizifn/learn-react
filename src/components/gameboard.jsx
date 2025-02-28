import { useState } from "react";

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initGameBoard);
  function handleClick(rowIndex, cellIndex) {
    // Handle cell click
    setGameBoard((prevGameBoard) => {
      const newGameBoard = prevGameBoard.map((row) => [...row]);
      newGameBoard[rowIndex][cellIndex] = "X";
      return newGameBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, cellIndex) => {
                return (
                  <li key={cellIndex} className="cell">
                    <button
                      onClick={() => {
                        handleClick(rowIndex, cellIndex);
                      }}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
