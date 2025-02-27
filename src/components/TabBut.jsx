export function TabBut({ children, onSelect }) {
    // new Array(10000000).fill(0).reduce((a, b) => a + b, 0);
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
