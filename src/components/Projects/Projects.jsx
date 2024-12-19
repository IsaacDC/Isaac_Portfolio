import React from "react";
import Section from "../Section";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <Section title="Projects" id="projects">
      <div className="d-flex gap-3 w-100">
        {projectData.slice(0, 2).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="m-auto">
        <a>
          Show more <FontAwesomeIcon icon={faGreaterThan} />
        </a>
      </div>
    </Section>
  );
}

export default Projects;
