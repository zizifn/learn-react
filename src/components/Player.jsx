import { useState } from "react";

export function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleClick() {
    setIsEditing((oldEditing) => {
      return !oldEditing;
    });
  }

  function updateName(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li>
      {isEditing ? (
        <input onChange={updateName} type="text" defaultValue={playerName} />
      ) : (
        <span className="player-name">{playerName}</span>
      )}

      <span className="player-symbol">{symbol}</span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
