import { v4 as uuidv4 } from "uuid";

function tournaments() {
  return [
    {
      id: uuidv4(),
      name: "LCS",
      location: "North America",
      logo:
        "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Flcs-gold.png",
      active: false,
    },
    {
      id: uuidv4(),
      name: "LEC",
      location: "Europe",
      logo:
        "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592516184297_LEC-01-FullonDark.png",
      active: false,
    },
    {
      id: uuidv4(),
      name: "LCK",
      location: "Korea",
      logo:
        "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Flck-color-on-black.png",
    },
    {
      id: uuidv4(),
      name: "LPL",
      location: "China",
      logo:
        "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592516115322_LPL-01-FullonDark.png",
    },
    {
      id: uuidv4(),
      name: "LCO",
      location: "Oceania",
      logo:
        "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Flco-color-white.png",
    },
    {
      id: uuidv4(),
      name: "TCL",
      location: "Turkey",
      logo:
        "https://am-a.akamaihd.net/image?resize=120:&f=https%3A%2F%2Flolstatic-a.akamaihd.net%2Fesports-assets%2Fproduction%2Fleague%2Fturkiye-sampiyonluk-ligi-8r9ofb9.png",
    },
    {
      id: uuidv4(),
      name: "CBLOL",
      location: "Brazil",
      logo:
        "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Fcblol-logo-symbol-offwhite.png",
    },
    {
      id: uuidv4(),
      name: "Liga Latinoamérica",
      location: "Latin america",
      logo:
        "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592516315279_LLA-01-FullonDark.png",
    },
    {
      id: uuidv4(),
      name: "LJL",
      location: "japan",
      logo:
        "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592516354053_LJL-01-FullonDark.png",
    },
    {
      id: uuidv4(),
      name: "LCL",
      location: "Commonwealth of Independent States",
      logo:
        "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1593016885758_LCL-01-FullonDark.png",
    },
  ];
}

export default tournaments;
