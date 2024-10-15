import React from "react";
import styles from "../assets/styles/Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";

function AboutMe() {
  return (
    <div className="rounded bg-dark text-white m-5 p-5">
      <div className="card-body">
        <h1 className="display-4 text-center mb-4">Isaac Del Castillo</h1>
        <p className="lead">
          I'm a front-end developer located in Miami, Florida
        </p>
      </div>
      <ul className="d-flex column p-0 m-0 gap-2">
        <li className={`${styles.smIcon}`} id="githubIcon">
          <a href="https://github.com/IsaacDC">
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
          </a>
        </li>
        <li className={`${styles.smIcon}`} id="linkedinIcon">
          <a href="https://linkedin.com/in/isaac-del-castillo-5a8a76204">
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          </a>
        </li>
        <li className={`${styles.smIcon}`} id="mailIcon">
          <a href="mailto:isaacdc03@hotmail.com">
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          </a>
        </li>
        <li className={`${styles.smIcon}`} id="resumeIcon">
          <a href="">
            <FontAwesomeIcon className={styles.icon} icon={faFile} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
