import React, { useRef, useState } from "react";
import { Input, InputV2 } from "./Input";
import { isNotEmpty, isEmail } from "../util/validation";
import { useInput } from "../hooks/inputhook";

export default function Login() {
  const {
    value: emailValue,
    didEdit: emailEdit,
    hasError: emailError,
    handleChanges: handleEmailchange,
    handleInputBlur: handleemailblur,
  } = useInput("", (value) => {
    return isNotEmpty(value) && isEmail(value);
  });

  const {
    value: passValue,
    hasError: passError,
    handleChanges: handlepasschange,
    handleInputBlur: handlepassblur,
  } = useInput("", (value) => {
    return isNotEmpty(value);
  });

  function handleSumbit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // console.log(Object.fromEntries(formData.entries()));
  }
  return (
    <form onSubmit={handleSumbit}>
      <h2>Login statefull</h2>

      <div className="control-row">
        <Input
          id="email"
          label={"email"}
          type="email"
          name="email"
          value={emailValue}
          error={emailError && "input right email"}
          onBlur={(event) => handleemailblur()}
          onChange={(event) => handleEmailchange(event)}
        ></Input>

        <Input
          id="password"
          label={"password"}
          type="password"
          name="password"
          value={passValue}
          error={passError && "input right pass"}
          onBlur={(event) => handlepassblur()}
          onChange={(event) => handlepasschange(event)}
        ></Input>
      </div>

      <div className="control-row">
        <InputV2
          validationFn={(value) => {
            return isNotEmpty(value) && isEmail(value);
          }}
          id="email"
          label={"email"}
          type="email"
          name="email2"
          error={"input right email"}
        ></InputV2>

        <InputV2
          id="password"
          label={"password"}
          type="password"
          name="password2"
          validationFn={(value) => {
            return isNotEmpty(value);
          }}
          error={"input right pass"}
        ></InputV2>
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
