import React from "react";
import { Link } from "react-router-dom";

export const Nav = ({ darkMode, setDarkMode, isDropdown, setIsDropdown }) => {
  return (
    <div className="h-20 bg-black list">
      <div className="flex justify-between">
        <Link to="/">
          <h1 className="py-4 text-3xl font-extrabold px-5 cursor-pointer green">
            Champ Select.GG
          </h1>
        </Link>
        <div className="absolute right-1 top-4">
          <Link
            to="/teams"
            className="block px-6 py-1 text-xl cursor-pointer uppercase hover:text-gray-500 green"
            role="menuitem"
          >
            Teams
          </Link>
        </div>
      </div>
    </div>
  );
};
