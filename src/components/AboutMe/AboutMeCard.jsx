import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faCode,
  faGauge
} from "@fortawesome/free-solid-svg-icons";

import SocialsCoin from "./SocialsCoin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  { href: "https://dashboard.isaacofthecastle.com", icon: faGauge },
];

const AboutMeCard = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <div>
        <h1>Isaac Del Castillo</h1>
      </div>

      <div className="text-center">
        <ul className="m-0 p-0">
          <li>
            <FontAwesomeIcon className="me-2 text-warning" icon={faCode} />
            Software Developer
          </li>
          <li>
            <FontAwesomeIcon
              className="me-2 text-danger"
              icon={faLocationDot}
            />
            Miami, Florida
          </li>
        </ul>
      </div>

      <div className="mt-5">
        <ul className="d-flex justify-content-center align-items-center p-0 m-0 gap-3">
          {socialMedias.map((socials) => (
            <SocialsCoin key={socials.href} {...socials} />
          ))}
        </ul>
        <div />
      </div>
    </div>
  );
};

export default AboutMeCard;
