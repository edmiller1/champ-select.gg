import React, { useState } from "react";
import tournaments from "../util/tournaments";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { TeamNav } from "../components/TeamNav";
import teamData from "../util/index";

export const Teams = () => {
  //const [active, setActive] = useState(false);

  return (
    <div className="flex main-dark max-h-screen">
      <div className="w-3/4 overflow-y-auto">
        <div className="py-5 pl-24 green tracking-wide uppercase text-lg list">
          <h1>All Teams</h1>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {teamData().map((team) => (
            <div className="w-1/4">
              <div className="pb-10 px-10 my-1 mx-2 shadow-lg flex flex-col justify-center items-center cursor-pointer">
                <img className="w-20 h-20" src={team.logo} alt="team-logo" />
                <span className="tracking-wide text-lg">{team.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TeamNav />
    </div>
  );
};
