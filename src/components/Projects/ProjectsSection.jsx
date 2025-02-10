import React, { useState } from "react";
import Section from "../Section";
import ProjectCard from "./ProjectCard";
import ProjectData from "./projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <Section title="Projects">
      <div
        className="d-grid gap-3 w-100"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {ProjectData.map((project, index) => (
          <div
            key={project.title}
            style={{
              display: index >= 2 && !showMore ? "none" : "block",
            }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn d-flex justify-content-center align-items-center gap-2"
          onClick={toggleShowMore}
          style={{
            color: "var(--blue-text)",
          }}
        >
          {showMore ? "SHOW LESS" : "SHOW MORE"}{" "}
          <FontAwesomeIcon icon={showMore ? faCaretDown : faCaretRight} />
        </button>
      </div>
    </Section>
  );
};

export default Projects;
