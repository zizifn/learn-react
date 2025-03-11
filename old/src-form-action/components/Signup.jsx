import React, { useActionState } from "react";
import { isEmail, isNotEmpty, isEqualToOtherValue } from "../util/validation";
function handleFormAction(prevFormState, formData) {
  // event.preventDefault();
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");
  const acquisitions = formData.getAll("acquisition");
  const terms = formData.get("terms");
  let role = formData.get("role");
  console.log("terms", formData, terms, role);

  let errors = [];
  if (!isEmail(email)) {
    errors.push("email is not vaild");
  }
  if (!isNotEmpty(password)) {
    errors.push("password must be prvoide");
  }

  if (!isEqualToOtherValue(password, confirmPassword)) {
    errors.push("password not match");
  }
  if (acquisitions.length < 1) {
    errors.push("must choose acquisition");
  }
  if (!terms) {
    errors.push("you must agree!");
  }

  if (errors.length > 0) {
    return {
      errors,
      enteredValue: {
        email,
        password,
        confirmPassword,
        acquisitions,
        terms,
        role,
      },
    };
  }

  return {
    errors: null,
  };
}

export default function Signup() {
  const [formState, formAction, pending] = useActionState(handleFormAction, {
    errors: null,
  });

  console.log(formState);
  console.log("formState.enteredValue?.terms ", formState.enteredValue?.terms);
  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={formState.enteredValue?.email}
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            defaultValue={formState.enteredValue?.password}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.enteredValue?.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select
          id="role"
          name="role"
          defaultValue={formState.enteredValue?.role}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState.enteredValue?.acquisitions.includes(
              "google",
            )}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            defaultChecked={formState.enteredValue?.terms ?? false}
          />
          I agree to the terms and conditions
        </label>
      </div>

      {formState.errors && (
        <ul className="erros">
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
