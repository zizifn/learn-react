const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard({ onSwitchPlayer, logs }) {
  let gameBoard = initGameBoard;
  for (const {
    square: { rowIndex, columnIndex },
    player,
  } of logs) {
    gameBoard[rowIndex][columnIndex] = player;
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
                        onSwitchPlayer(rowIndex, cellIndex);
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
