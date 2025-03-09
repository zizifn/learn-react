import React, { useEffect, useState } from "react";
import QUESTIONS from "../questions.js";
import { QuestionTimer } from "./QuestionTimer.jsx";

export function Question({ TIMER, onEnd }) {
  //   const [questionId, setQuestionId] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestId = userAnswers.length;

  const quizComplete = activeQuestId === QUESTIONS.length;
  if(quizComplete){
    return <>quiz complete</>
  }
 
  const question = QUESTIONS[activeQuestId];
  const shuffledAnswers = [...question.answers].sort(( ()=> Math.random() - 0.5));

  const correctAnswer = 1;
  console.log("-----", question);

  function sumbitAnswer(index) {
    setUserAnswers((old) => {
      return [...old, index];
    });
  }

  function onTimerOut(){
    sumbitAnswer(null);
  }

  return (
    <>
      <div id="question">
        <QuestionTimer key={activeQuestId} onTimerOut={onTimerOut} timeout={TIMER}></QuestionTimer>
        <p id="question-overview">
          {question?.id}+{question?.text}
        </p>
      </div>
      <ul id="answers">
        {shuffledAnswers.map((answer, index) => {
          return (
            <li key={question.id + index} className="answer">
              <button
                disabled={userAnswers[activeQuestId] !== undefined}
                className={''}
                onClick={() => sumbitAnswer(index)}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
