import React, { useRef, useState } from "react";

export default function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // function handleEmailChange(event){
  //   setEmail(event.target.value);
  // }
  // function handlePasswordChange(event){
  //   setPassword(event.target.value);
  // }

  // const [enterValues, setEnterValue] = useState({
  //   email: "",
  //   password: "",
  // });

  // function handleChanges(type, event) {
  //   setEnterValue((pre) => {
  //     return {
  //       ...pre,
  //       [type]: event.target.value,
  //     };
  //   });
  // }

  // console.log(enterValues);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSumbit(event) {
    const email = emailRef.current?.value;
    const pass = passwordRef.current?.value;
    console.log(email, pass);
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
          <input ref={emailRef} id="email" type="email" name="email" required />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            // value={enterValues.password}
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            required
            minLength={6}
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
