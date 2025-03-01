export function Logs({ logs }) {
  console.log("xxx", logs);
  return (
    <ol id="log">
      {logs.map((log) => {
        return (
          <li key={`${log.square.rowIndex}-${log.square.columnIndex}`}>
            {log.player} selected [
            {`${log.square.rowIndex},${log.square.columnIndex}`}]
          </li>
        );
      })}
    </ol>
  );
}
