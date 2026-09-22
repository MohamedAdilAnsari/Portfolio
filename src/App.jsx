import React, { useState } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { ProjectModal } from "./components/Projects/ProjectModal";
import { Achievements } from "./components/Achievements/Achievements";
import { Contact } from "./components/Contact/Contact";

function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects onSelectProject={(project) => setActiveProject(project)} />


        
      <Achievements />
      <Contact />

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}

export default App;
