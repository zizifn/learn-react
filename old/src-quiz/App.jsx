import React, { useEffect, useState } from "react";

import { Question } from "./components/Question.jsx";
import { Header } from "./components/Header.jsx";

const TIMER = 5000;
function App() {
  const [step, setStep] = useState("quiz");
  function onEnd(answers) {
    console.log("answers", answers);
    setStep("result");
  }

  return (
    <>
      <Header />
      <main id="quiz">
        {step === "quiz" && <Question onEnd={onEnd} TIMER={TIMER}></Question>}
        {step === "result" && <p> this is result page</p>}
      </main>
    </>
  );
}

export default App;
