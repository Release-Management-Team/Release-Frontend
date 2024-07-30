import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Big/Home";
import Project from "./Routes/Big/Project";
import History from "./Routes/Big/History";
import { useMediaQuery } from "react-responsive";
import SmallHome from "./Routes/Small/SmallHome";
import SmallProject from "./Routes/Small/SmallProject";
import SmallHistory from "./Routes/Small/SmallHistory";
import About from "./Routes/Big/About";
import SmallAbout from "./Routes/Small/SmallAbout";

function App() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 730px)" });
  const SelectHome = isBigScreen ? Home : SmallHome;
  const SelectAbout = isBigScreen ? About : SmallAbout;
  const SelectHistory = isBigScreen ? History : SmallHistory;
  const SelectProject = isBigScreen ? Project : SmallProject;
  return (
    <HashRouter>
      <Routes>
        <Route path="about" element={<SelectAbout />}></Route>
        <Route path="history" element={<SelectHistory />}></Route>
        <Route path="project" element={<SelectProject />}></Route>
        <Route path="/" element={<SelectHome />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
