import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

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

  const results = calculateInvestmentResults(inputs);

  return (
    <>
      <div id="user-input" className="input-group ">
        <div>
          <label htmlFor="initial">INTIAL INVERSTMENT</label>
          <input
            onChange={(e) => updateInput("initialInvestment", e.target.value)}
            type="number"
            name=""
            id="initial"
          />
        </div>

        <div>
          <label htmlFor="annual">annual INVERSTMENT</label>
          <input
            onChange={(e) => updateInput("annualInvestment", e.target.value)}
            type="number"
            name=""
            id="annual"
          />
        </div>

        <div>
          <label htmlFor="return">EXPECTED RETURN</label>
          <input
            onChange={(e) => updateInput("expectedReturn", e.target.value)}
            type="number"
            name=""
            id="return"
          />
        </div>

        <div>
          <label htmlFor="period">Period</label>
          <input
            onChange={(e) => updateInput("duration", e.target.value)}
            type="number"
            step="1"
            required
            id="period"
          />
        </div>
      </div>

      <table id="result">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Investment Value</th>
            <th scope="col">Interest (Year)</th>
            <th scope="col">Total Interset</th>
            <th scope="col">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map(
            ({ year, interest, valueEndOfYear, investedCapital }) => {
              return (
                <tr key={year}>
                  <th scope="row">{year}</th>
                  <td>{formatter.format(valueEndOfYear)}</td>
                  <td>{formatter.format(interest)}</td>
                  <td>{formatter.format(valueEndOfYear - investedCapital)}</td>
                  <td>{formatter.format(investedCapital)}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
}

export default App;
