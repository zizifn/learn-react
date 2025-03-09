import React, { useEffect, useState } from "react";

export function QuestionTimer({ timeout, onTimerOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("QuestionTimer-effect");
    const timer = setInterval(() => {
      setRemainingTime((old) => {
        const newTime = old - 100;
        if(newTime < 0){
            onTimerOut();
        }
        return newTime;
      });
    }, 100);
    return () => {
        console.log("QuestionTimer-effect-------");
      clearInterval(timer);
    };
  }, [onTimerOut]);

  return <progress value={remainingTime} max={timeout}></progress>;
}
