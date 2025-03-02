import { useState } from "react";
import styled from "styled-components";

const TESTP = styled.p`
  background-color: red;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: #d1d5db;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  color: ${({ invalid }) => (invalid ? "#ef4444" : "red")};
  background-color: ${({ invalid }) => (invalid ? "#fed2d2" : "d1d5db")};
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <TESTP className="big-text">
          <label>Email</label>
          <Input
            // style={{
            //   backgroundColor: emailNotValid ? "red" : undefined,
            // }}
            type="email"
            invalid={emailNotValid ?? false}
            // className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </TESTP>
        <p>
          <label>Password</label>
          <Input
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
