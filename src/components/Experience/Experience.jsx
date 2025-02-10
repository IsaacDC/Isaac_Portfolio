import React from "react";
import ExperienceCard from "./ExperienceCards";
import Section from "../Section";
import experienceData from "./ExperienceData";

const Experience = () => {
  return (
    <Section title="Experience" id="experience">
      {experienceData.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </Section>
  );
};

export default Experience;
