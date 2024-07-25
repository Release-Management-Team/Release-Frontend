import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import History from "./Routes/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="history" element={<History />}></Route>
        <Route path="project" element={<Project />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
