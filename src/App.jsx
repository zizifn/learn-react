import { useState } from "react";

import { UserInput } from "./components/UserInput";
import { Result } from "./components/Result";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  function updateInput(type, value) {
    setInputs((old) => {
      return {
        ...old,
        [type]: Number(value),
      };
    });
  }

  return (
    <>
      <UserInput updateInput={updateInput}></UserInput>
      <Result inputs={inputs}></Result>
    </>
  );
}

export default App;
