export function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h2>GAME OVER</h2>
      <p>{winner} won</p>

      <p>
        <button onClick={onRematch}>Rematch</button>
      </p>
    </div>
  );
}
