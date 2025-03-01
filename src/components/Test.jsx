import { useState } from "react";
export function TestPorp({ name }) {
  const [playerName, setPlayerName] = useState(name);
  return <h3>{playerName}</h3>;
}
