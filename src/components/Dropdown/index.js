import { useCallback, useEffect } from "react";
import "./Dropdown.css";

export default function Dropdown({
  clickFn,
  dropdownVisibleFn,
  dropdownVisible,
}) {
  const globalClickListener = useCallback(() => {
    dropdownVisibleFn(false);
  }, [dropdownVisibleFn]);

  useEffect(() => {
    if (dropdownVisible) {
      window.addEventListener("click", globalClickListener);
    } else window.removeEventListener("click", globalClickListener);

    return () => window.removeEventListener("click", globalClickListener);
  }, [dropdownVisible, globalClickListener]);

  return (
    <div className="dropdown">
      <ul>
        <li>
          <a href="!#" onClick={() => clickFn("price")}>
            Price
          </a>
        </li>
        <li>
          <a href="!#" onClick={() => clickFn("range")}>
            Range
          </a>
        </li>
      </ul>
    </div>
  );
}
