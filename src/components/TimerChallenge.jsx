import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ResultModal } from "./ResultModal";

export function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const resultDialog = useRef();
  //   const [timerExpired, setTimerExpired] = useState(false);
  //   const [timerStarted, setTimerStarted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    resultDialog.current.showModal();
  }

  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((old) => {
        return old - 10;
      });
    }, 10);

    setTimerStarted(true);
  }

  function handleStop() {
    clearInterval(timer.current);
    resultDialog.current.showModal();
  }
  return (
    <>
      {createPortal(
        <ResultModal
          ref={resultDialog}
          targetTime={targetTime}
          remainingTime={remainingTime}
          handleReset={handleReset}
        ></ResultModal>,
        document.getElementById("modal"),
      )}

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {" "}
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
