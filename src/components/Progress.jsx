import React, { useEffect, useState } from "react";

export function ProgressBar({timer, onEnd}){
    const [remainingTime, setRemainingTime] = useState(timer);
    console.log("-----DeleteConfirmation");
    if (remainingTime < 0) {
        onEnd();
    }
    useEffect(() => {
      console.log("DeleteConfirmation-useEffect");
      const timer = setInterval(() => {
        setRemainingTime((oldremainingTime) => {
          return oldremainingTime - 10;
        });
      }, 10);
      return () => {
        console.log("clean up timer");
        clearInterval(timer);
      };
    }, [onEnd]);
    
    return <progress value={remainingTime} max={timer}></progress>
       
}