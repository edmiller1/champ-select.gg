import React, { useState, useEffect } from "react";
import teamData from "../util/index";

export const Home = () => {
  const [teams, setTeams] = useState(teamData());
  const [champions, setChampions] = useState([]);
  const imageURL =
    "http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/";

  useEffect(() => {
    fetchChampions();
  }, []);

  const fetchChampions = async () => {
    console.log(typeof champions);
    const response = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.7.1/data/en_US/champion.json"
    );
    const data = await response.json();
    setChampions(data.data);
    console.log(data.data);
    console.log(typeof champions);
  };

  return (
    <div className="home dark flex justify-center mt-5">
      <div className="box">
        <div id="teams" className="border h-24 flex">
          <div className="w-5/12 border-r h-24 flex justify-between">
            <img className="h-24 w-24" src={teamData()[0].logo} alt="logo" />
            <span className="text-4xl px-4 py-2 font-black tracking-wide">
              {teamData()[0].name}
            </span>
          </div>
          <div className="w-2/12 h-24 flex justify-center items-center">
            <span className="text-6xl">60</span>
          </div>
          <div className="w-5/12 border-l h-24 flex justify-between">
            <span className="text-4xl px-4 py-2 font-black tracking-wide">
              {teamData()[8].name}
            </span>
            <img className="h-24 w-24" src={teamData()[8].logo} alt="logo" />
          </div>
        </div>
        <div className="flex h-full">
          <div className="w-1/4 border">
            <div className="h-1/5 w-full border"></div>
            <div className="h-1/5 w-full border"></div>
            <div className="h-1/5 w-full border"></div>
            <div className="h-1/5 w-full border"></div>
            <div className="h-1/5 w-full border"></div>
          </div>
          <div className="grid-container flex justify-center">
            {/*             {champions.map((champ) => (
              <div key="champ.id" className="cursor-pointer">
                <img
                  className="h-20 w-54"
                  src={imageURL + champ.image.full}
                  alt="champ-icon"
                />
              </div>
            ))} */}
          </div>
          <div className="w-1/4 border">
            <div className="h-1/5 w-full border"></div>
            <div className="h-1/5 w-full border"></div>
            <div className="h-1/5 w-full border"></div>
            <div className="h-1/5 w-full border"></div>
            <div className="h-1/5 w-full border"></div>
          </div>
        </div>
        <div className="border h-24 flex">
          <div className="w-1/2 h-24 border flex justify-start">
            <div className="w-20 h-20 border rounded-full my-2 mx-2"></div>
            <div className="w-20 h-20 border rounded-full my-2 mx-2"></div>
            <div className="w-20 h-20 border rounded-full my-2 mx-2"></div>
            <div className="w-20 h-20 border rounded-full my-2 mx-2"></div>
            <div className="w-20 h-20 border rounded-full my-2 mx-2"></div>
          </div>
          <div className="w-1/2 h-24 border flex justify-end">
            <div className="w-20 h-20 border rounded-full my-2 mx-2"></div>
            <div className="w-20 h-20 border rounded-full my-2 mx-2"></div>
            <div className="w-20 h-20 border rounded-full my-2 mx-2"></div>
            <div className="w-20 h-20 border rounded-full my-2 mx-2"></div>
            <div className="w-20 h-20 border rounded-full my-2 mx-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
