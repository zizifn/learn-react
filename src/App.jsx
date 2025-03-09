import { useEffect, useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import React from "react";
import { ConfigureCounter } from "./components/Counter/ConfigureCounter.jsx";

function App() {
  console.log("app render!")
  useEffect(() => {
    console.log("app-effect");
  }, []);
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetClick(enteredNumber) {
    setChosenCount(enteredNumber);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetClick}></ConfigureCounter>
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={chosenCount} />

      </main>
    </>
  );
}

export default App;
