import React from "react";
import Navigation from "./layout/Navigation";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import AboutMe from "./pages/about/About";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Navigation />
      <div id="content">
        <Home />
        <Projects />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
