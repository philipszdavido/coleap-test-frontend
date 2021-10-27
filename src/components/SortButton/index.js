import "./SortButton.css";

export default function SortButton({ styling, clickFn, children }) {
  return (
    <button style={{ ...styling }} className="sortButton" onClick={clickFn}>
      {children}
    </button>
  );
}
