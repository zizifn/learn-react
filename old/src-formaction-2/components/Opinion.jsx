import React, { useContext, useActionState, useOptimistic } from "react";
import { useFormState } from "react-dom";
import { OpinionsContext } from "../store/opinions-context";

export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const { upvoteOpinion, downvoteOpinion } = useContext(OpinionsContext);

  const [optimisticVotes, saveVotes] = useOptimistic(
    votes,
    (oldVotes, mode) => {
      console.log("useOptimistic---");
      if (mode === "up") {
        return oldVotes + 2;
      } else {
        return oldVotes - 1;
      }
    },
  );

  async function handleUP(pre, formData) {
    console.log("handleUP", formData);
    saveVotes("up");
    // await new Promise((res)=>{
    //   setTimeout(()=>{
    //     res("111")
    //   }, 1000)
    // })
    await upvoteOpinion(id);
  }

  async function handleDown(pre, formData) {
    console.log("handleDown", formData);
    saveVotes("down");
    await downvoteOpinion(id);
  }

  const [upformState, upDispatch, upDending] = useActionState(handleUP, null);
  const [downformState, downDispatch, downPending] = useActionState(
    handleDown,
    null,
  );

  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button formAction={upDispatch} disabled={upDending || downPending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <span>{optimisticVotes}</span>

        <button formAction={downDispatch} disabled={downPending || upDending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
