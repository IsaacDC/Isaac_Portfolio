import React from "react";
import Section from "./Section";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import SocialsCoin from "./SocialsCoin";

const socialMedias = [
  { href: "https://github.com/isaacdc", icon: faGithub },
  {
    href: "https://linkedin.com/in/isaac-del-castillo-5a8a76204",
    icon: faLinkedin,
  },
  { href: "mailto:isaacdc03@hotmail.com", icon: faEnvelope },
  {
    href: "../assets/DelCastillo_Isaac_Resume.pdf",
    icon: faFile,
    download: true,
  },
];

function AboutMe() {
  return (
    <Section title="Isaac Del Castillo">
      <p className="lead">A software developer located in Miami, Florida</p>
      <ul className="d-flex column p-0 m-0 gap-3">
        {socialMedias.map((socials) => (
          <SocialsCoin key={socials.href} {...socials} />
        ))}
      </ul>
    </Section>
  );
}

export default AboutMe;
