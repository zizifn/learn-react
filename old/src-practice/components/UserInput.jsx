export function UserInput({ inputs, updateInput }) {
  return (
    <section id="user-input" className="input-group ">
      <div>
        <label htmlFor="initial">INTIAL INVERSTMENT</label>
        <input
          defaultValue={inputs["initialInvestment"]}
          onChange={(e) => updateInput("initialInvestment", e.target.value)}
          type="number"
          name=""
          id="initial"
        />
      </div>

      <div>
        <label htmlFor="annual">annual INVERSTMENT</label>
        <input
          defaultValue={inputs["annualInvestment"]}
          onChange={(e) => updateInput("annualInvestment", e.target.value)}
          type="number"
          name=""
          id="annual"
        />
      </div>

      <div>
        <label htmlFor="return">EXPECTED RETURN</label>
        <input
          defaultValue={inputs["expectedReturn"]}
          onChange={(e) => updateInput("expectedReturn", e.target.value)}
          type="number"
          name=""
          id="return"
        />
      </div>

      <div>
        <label htmlFor="period">Period</label>
        <input
          defaultValue={inputs["duration"]}
          onChange={(e) => updateInput("duration", e.target.value)}
          type="number"
          step="1"
          required
          id="period"
        />
      </div>
    </section>
  );
}
