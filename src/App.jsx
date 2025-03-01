import { useState } from "react";

import { UserInput } from "./components/UserInput";
import { Result } from "./components/Result";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 5,
  });

  function updateInput(type, value) {
    setInputs((old) => {
      return {
        ...old,
        [type]: Number(value),
      };
    });
  }

  const inputIsValid = inputs.annualInvestment > 0 && inputs.duration > 0;

  return (
    <>
      <UserInput inputs={inputs} updateInput={updateInput}></UserInput>
      {inputIsValid ? (
        <Result inputs={inputs}></Result>
      ) : (
        "please input valid number"
      )}
    </>
  );
}

export default App;
