import React, { useState } from "react";
import tournaments from "../util/tournaments";
import { NavLink } from "react-router-dom";

export const TeamNav = () => {
  const [regions, setRegions] = useState(tournaments());

  return (
    <nav className="w-1/4 right-nav max-h-screen overflow-y-auto">
      <div className="list py-3">
        <span className="uppercase text-base font-semibold px-3 green">
          Filter
        </span>
      </div>
      {regions.map((region) => (
        <NavLink
          to={`/teams/${region.name}`}
          key={region.id}
          activeClassName="active"
        >
          <ul>
            <li
              className="flex py-3 pl-3 cursor-pointer hover:bg-gray-800 list"
              onClick={() => (region.active = !region.active)}
            >
              <img
                className="w-20 h-20 text-gray-800"
                src={region.logo}
                alt="logo"
              />
              <div className="flex flex-col justify-center pl-3">
                <span className="font-light text-xl text-gray-300">
                  {region.name}
                </span>
                <span className="uppercase font-semibold tracking-wider text-gray-400">
                  {region.location}
                </span>
              </div>
            </li>
          </ul>
        </NavLink>
      ))}
    </nav>
  );
};
