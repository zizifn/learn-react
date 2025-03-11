import React, { useRef, useState } from "react";

export default function Login() {
  const [emailISinvalid, setemailisinvalid] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSumbit(event) {
    event.preventDefault();

    const email = emailRef.current?.value;
    const pass = passwordRef.current?.value;
    console.log(email, pass);

    if (!email.includes("@")) {
      setemailisinvalid(true);
      return;
    }

    setemailisinvalid(false);
  }
  return (
    <form onSubmit={handleSumbit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            // value={enterValues.email}
            id="email"
            name="email"
            // onChange={(event) => handleChanges("email", event)}
          />
          <div className="control-error">
            {emailISinvalid && <p>please enter vaild email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            // value={enterValues.password}
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            // onChange={(event) => handleChanges("password", event)}
          />
        </div>
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
