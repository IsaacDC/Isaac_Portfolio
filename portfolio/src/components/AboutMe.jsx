import React from "react";
import styles from "../assets/styles/Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";

function AboutMe() {
  return (
    <div className="d-flex vh-100 p-5" id>
      <div className="card p-4">
        <div className="card-body">
          <h1 className="display-4 text-center mb-4">Isaac Del Castillo</h1>
          <p className="lead">
            I'm Isaac Del Castillo, a passionate frontend developer with a keen
            eye for creating visually appealing and user-friendly websites. I
            enjoy transforming ideas into interactive digital experiences using
            HTML, CSS, and JavaScript.
          </p>
        </div>
        <ul className="d-flex column p-0 m-0">
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
    </div>
  );
}

export default AboutMe;
