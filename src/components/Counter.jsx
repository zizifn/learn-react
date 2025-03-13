import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { authActions, counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

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
        <button onClick={() => dispatch(counterActions.increment())}>
          incrment
        </button>
        <button onClick={() => dispatch(counterActions.increase(5))}>
          incrment by 5
        </button>
        <button onClick={() => dispatch(counterActions.decrement())}>
          decrment
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
