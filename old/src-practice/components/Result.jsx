import { calculateInvestmentResults, formatter } from "../util/investment";
export function Result({ inputs }) {
  const results = calculateInvestmentResults(inputs);

  return (
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
        {results.map(({ year, interest, valueEndOfYear, investedCapital }) => {
          return (
            <tr key={year}>
              <th scope="row">{year}</th>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(valueEndOfYear - investedCapital)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
