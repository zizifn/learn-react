export function GameBoard({ onSwitchPlayer, gameBoard }) {
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
                      disabled={!!playerSymbol}
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
