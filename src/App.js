import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Teams } from "./pages/Teams";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { useState } from "react";

function App() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className="dark w-full max-h-screen">
        <Nav
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          isDropdown={isDropdown}
          setIsDropdown={setIsDropdown}
        />
        <Route path="/" exact component={Home} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/teams/:name" exact component={Team} />
      </div>
    </BrowserRouter>
  );
}

export default App;
