import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faCode } from "@fortawesome/free-solid-svg-icons";

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
];

const AboutMeCard = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="row align-items-center">
        <div className="col-md-4">
          <img
            src="https://placehold.co/200x200"
            className="img-fluid rounded-circle"
            alt="..."
          />
        </div>
        <div className="d-flex flex-column gap-3 col-md-8">
          <div>
            <h1>Isaac Del Castillo</h1>
            <ul className="m-0 p-0" style={{ listStyleType: "none" }}>
              <li>
                <FontAwesomeIcon icon={faCode} /> {" "}
                Software Developer
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />{" "}
                Miami, Florida
              </li>
            </ul>
          </div>
          <div>
            <ul className="d-flex column p-0 m-0 gap-3">
              {socialMedias.map((socials) => (
                <SocialsCoin key={socials.href} {...socials} />
              ))}
            </ul>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
