import React from "react";
import Section from "../Section";
import ProjectsCarousel from "./ProjectsCarousel";

function Projects() {

  return (
    <Section title="Projects" id="projects" className="px-2">
      <ProjectsCarousel/>
    </Section>
  );
}

export default Projects;
