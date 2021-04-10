import React from "react";
import { Link } from "react-router-dom";

export const Dropdown = ({
  isDropdown,
  setIsDropdown,
  darkMode,
  setDarkMode,
}) => {
  let mode;

  if (darkMode) {
    mode = (
      <span
        onClick={() => {
          setDarkMode(!darkMode);
          setIsDropdown(false);
        }}
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        role="menuitem"
      >
        Light Mode
      </span>
    );
  } else {
    mode = (
      <span
        onClick={() => {
          setDarkMode(!darkMode);
          setIsDropdown(false);
        }}
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        role="menuitem"
      >
        Dark Mode
      </span>
    );
  }

  return (
    <div className={`drop-down ${isDropdown ? "drop-down-open" : ""}`}>
      <div
        class="ring-1 ring-black ring-opacity-5 rounded-lg shadow-lg bg-white focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none" onClick={() => setIsDropdown(false)}>
          <Link
            to="/teams"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            role="menuitem"
          >
            Teams
          </Link>
          {mode}
        </div>
      </div>
    </div>
  );
};
