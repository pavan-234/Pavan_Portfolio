import React from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import "./App.css";  // Ensure this line exists


function App() {
  return (
    //className
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content with padding to avoid overlap with fixed navbar */}
      <main className="w-full min-h-screen flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
