import React, { useRef, useState } from "react";

export default function Login() {
  const [enterValues, setEnterValue] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidedit] = useState({
    email: false,
    password: false,
  });

  const emailIsInVaild = didEdit.email && !enterValues.email.includes("@");

  function handleChanges(type, event) {
    setEnterValue((pre) => {
      return {
        ...pre,
        [type]: event.target.value,
      };
    });
    setDidedit((old) => {
      return {
        ...old,
        [type]: false,
      };
    });
  }

  function handleInputBlur(type, event) {
    console.log("handleInputBlur--");
    setDidedit((old) => {
      return {
        ...old,
        [type]: true,
      };
    });
  }

  console.log(enterValues, emailIsInVaild, didEdit);

  function handleSumbit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // console.log(Object.fromEntries(formData.entries()));
  }
  return (
    <form onSubmit={handleSumbit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            value={enterValues.email}
            id="email"
            type="email"
            name="email"
            onBlur={(event) => handleInputBlur("email", event)}
            onChange={(event) => handleChanges("email", event)}
          />
          <div className="control-error">
            {emailIsInVaild && <p>please enter vaild email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            value={enterValues.password}
            id="password"
            type="password"
            name="password"
            onBlur={(event) => handleInputBlur("password", event)}
            onChange={(event) => handleChanges("password", event)}
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
