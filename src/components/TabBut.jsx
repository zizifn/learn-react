export function TabBut({ children, onSelect, isSelected }) {
    // new Array(10000000).fill(0).reduce((a, b) => a + b, 0);
  return (
    <li>
      <button className= {isSelected? 'active': null} onClick={onSelect}>{children}</button>
    </li>
  );
}
