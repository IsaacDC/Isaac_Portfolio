import React from "react";
import Section from "../Section.jsx";
import AboutMeCard from "./AboutMeCard.jsx";
import AboutMePfp from "./AboutMePfp.jsx";

const AboutMe = () => {
  return (
    <Section className="gap-lg-5 vh-100">
      <AboutMePfp />
      <AboutMeCard />
    </Section>
  );
};

export default AboutMe;
