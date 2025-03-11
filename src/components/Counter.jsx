import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({
      type: "toggle",
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
            })
          }
        >
          incrment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: 5,
            })
          }
        >
          incrment by 5
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
            })
          }
        >
          decrment
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
