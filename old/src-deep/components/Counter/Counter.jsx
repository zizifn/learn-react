import { useState, memo, useMemo, useEffect } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.js";
import React, { useCallback } from "react";
import HistoryItem from "./CounterHistory.jsx";
import { flushSync } from "react-dom";

console.log("PlusIcon", PlusIcon);
function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const Counter = memo(function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);
  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount],
  );

  // const [counter, setCounter] = useState(initialCount);
  const [countHistory, setCountHistory] = useState([
    { value: initialCount, id: crypto.randomUUID() },
  ]);

  // useEffect(() => {
  //   setCountHistory([{ value: initialCount, id: crypto.randomUUID() }]);
  // }, [initialCount]);

  const counter = countHistory.reduce((pre, current) => pre + current.value, 0);

  function handleDecrement() {


    flushSync(()=>{
      setCountHistory((countHistory) => [
        { value: -1, id: crypto.randomUUID() },
        ...countHistory,
      ]);
    })
    console.log(countHistory)
  }

  const handleIncrement = useCallback(function handleIncrement() {
    console.log("counter", counter);
    setCountHistory((countHistory) => [
      { value: 1, id: crypto.randomUUID() },
      ...countHistory,
    ]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <HistoryItem history={countHistory}></HistoryItem>
    </section>
  );
});

export default Counter;
