export function ResultModal({ ref, remainingTime, targetTime, handleReset }) {
  return (
    <dialog ref={ref} className="result-modal" onClose={handleReset}>
      <h2>You {remainingTime <= 0 ? "Lost" : "Won"}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        The stopped the timer with{" "}
        <strong>{(remainingTime / 1000).toFixed(2)} seconds</strong>
      </p>
      <form action="" method="dialog" onSubmit={handleReset}>
        <button>close</button>
      </form>
    </dialog>
  );
}
