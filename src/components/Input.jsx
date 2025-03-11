import React from "react";
import { useInput } from "../hooks/inputhook";

function Input({ label, id, type, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}

function InputV2({ label, id, type, error, validationFn, ...props }) {
  const { value, hasError, handleChanges, handleInputBlur } = useInput(
    "",
    validationFn,
  );
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        onBlur={handleInputBlur}
        onChange={handleChanges}
        {...props}
      />
      <div className="control-error">{hasError && <p>{error}</p>}</div>
    </div>
  );
}

export { Input, InputV2 };
