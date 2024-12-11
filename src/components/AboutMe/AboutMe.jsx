import React from "react";
import Section from "../Section.jsx";
import AboutMeCard from "./AboutMeCard.jsx";
import AboutMePfp from "./AboutMePfp.jsx";

function AboutMe() {
  return (
    <Section className="d-flex justify-content-center gap-5">
      <AboutMePfp />
      <AboutMeCard />
    </Section>
  );
}

export default AboutMe;
