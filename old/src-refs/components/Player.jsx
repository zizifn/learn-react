import { useState, useRef } from "react";

export default function Player() {
  const inputPlayerName = useRef();
  const [name, setName] = useState();

  function sumbit() {
    const value = inputPlayerName.current.value;
    setName(value);
  }

  function clear() {
    // setName("");
    inputPlayerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={inputPlayerName} type="text" />
        <button onClick={sumbit}>Set Name</button>
        <button onClick={clear}>Clear</button>
      </p>
      <h2>Welcome {name ?? "unknown entity"}</h2>
    </section>
  );
}
