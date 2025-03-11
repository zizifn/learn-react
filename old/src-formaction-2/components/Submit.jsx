import React from "react";
import { useFormStatus } from "react-dom";

function Submit() {
  const { pending, data, method, action } = useFormStatus();

  console.log("Submit --", pending, data, method, action);
  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submit....." : "Submit"}
      </button>
    </p>
  );
}

export { Submit };
