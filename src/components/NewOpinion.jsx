import React, { use, useActionState, useContext, useLayoutEffect } from "react";
import { OpinionsContext } from "../store/opinions-context";
import { useFormStatus } from "react-dom";
import {Submit} from "./Submit"

export function NewOpinion() {
  console.log("-----------NewOpinion")
  const { addOpinion } = useContext(OpinionsContext);
  /**
   *
   * @param {*} pre
   * @param {FormData} formData
   * @returns
   */
  async function submitOpinion(pre, formData) {
    const option = Object.fromEntries(formData.entries());
    console.log(option);
    const errors = [];
    if (!option.userName) {
      errors.push("name can't be empty");
    }
    if (!option.title) {
      errors.push("title can't be empty");
    }
    if (!option.body) {
      errors.push("body can't be empty");
    }

    if (errors.length > 0) {
      return {
        errors,
        option,
      };
    }
    await addOpinion(option);
    // fetch upload the data
    console.log("addOpinion is done!");
    return {
      errors: [],
    };
  }

  const [optionState, dispatch, pending] = useActionState(submitOpinion, {
    errors: [],
  });

  console.log(optionState);
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={dispatch}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={optionState.option?.userName?.toString()}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={optionState.option?.title?.toString()}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={optionState.option?.body?.toString()}
          ></textarea>
        </p>
        {optionState.errors.length > 0 && (
          <ul className="errors">
            {optionState.errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <Submit></Submit>
      </form>
    </div>
  );
}
