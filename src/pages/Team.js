import React, { useState, useEffect } from "react";
import { TeamNav } from "../components/TeamNav";
import teamData from "../util/index";

export const Team = ({ match }) => {
  //const [selectedTeams, setSelectedTeams] = useState(teamData());

  return (
    <div className="flex main-dark">
      <div className="w-3/4 overflow-y-scroll">
        <div className="flex flex-wrap justify-center mt-10">
          {teamData()
            .filter((team) => team.region === match.params.name)
            .map((filteredTeam) => (
              <div
                to={`/teams/${filteredTeam.name}`}
                className="w-1/4 pb-10 px-10 my-1 mx-2 shadow-lg flex flex-col justify-center items-center cursor-pointer"
              >
                <img
                  className="w-20 h-20"
                  src={filteredTeam.logo}
                  alt="team-logo"
                />
                <span className="tracking-wide text-lg">
                  {filteredTeam.name}
                </span>
              </div>
            ))}
        </div>
      </div>
      <TeamNav />
    </div>
  );
};
