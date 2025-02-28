import gameLogo from "../public/game-logo.png";
import { Player } from "./components/Player";
import { GameBoard } from "./components/gameboard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player1" symbol="X" />
          <Player name="Player2" symbol="0" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
