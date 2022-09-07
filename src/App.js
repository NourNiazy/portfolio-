import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
