import { useEffect } from "react";
import "./Dropdown.css";

export default function Dropdown({ clickFn, dropdownVisibleFn, showDropdown }) {
  useEffect(() => {
    if (showDropdown) {
      window.addEventListener("click", globalClickListener);
    } else window.removeEventListener("click", globalClickListener);

    return () => window.removeEventListener("click", globalClickListener);
  }, [showDropdown]);

  function globalClickListener(e) {
    dropdownVisibleFn(false);
  }

  return (
    <div className="dropdown">
      <ul>
        <li>
          <a onClick={() => clickFn("price")}>Price</a>
        </li>
        <li>
          <a onClick={() => clickFn("range")}>Range</a>
        </li>
      </ul>
    </div>
  );
}