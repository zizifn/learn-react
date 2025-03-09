import React from "react";
import logImg from "../assets/quiz-logo.png";

export function Header() {
  return (
    <header>
      <img src={logImg} alt="logo" />
      <h1>REACTQUIZ</h1>
    </header>
  );
}
