import React from "react";
import ExperienceCard from "./ExperienceCards";
import Section from "./Section";

function Experience() {
  const experienceData = [
    {
      title: "IT Systems Assistant",
      company: "Florida International University",
      location: "11200 SW 8th St, Miami, FL",
      dates: "March 2024 - Present",
      description: [
        "Assist with various activities, such as debugging network connectivity issues and diagnosing hardware and software problems.",
        " Helped with hardware installation, website management, and software updates.",
        " Worked with a variety of programming languages and operating systems.",
      ],
    },
    {
      title: "I.T. Intern",
      company: "Florida International University",
      location: "11200 SW 8th St, Miami, FL",
      dates: "July 2019 - August 2019",
      description: [
        "Learned the fundamentals of front-end development, including HTML, CSS, and JavaScript.",
        " Collaborated with a team to apply this knowledge by developing a website that integrated these core technologies.",
      ],
    },
  ];
  return (
    <Section title="Experience" id="experience">
      {experienceData.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </Section>
  );
}

export default Experience;
