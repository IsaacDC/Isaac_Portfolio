import React from "react";
import styles from "../assets/styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <header className={`navbar navbar-expand-lg sticky-top ${styles.header}`}>
      <nav className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <a className={styles.link} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className={styles.link} href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className={styles.link} href="#projects">
              Projects
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className={`p-2 ${styles.smIcon}`}>
            <a href="https://github.com">
              <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            </a>
          </li>
          <li className={`p-2 ${styles.smIcon}`}>
            <a href="https://twitter.com">
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
            </a>
          </li>
          <li className={`p-2 ${styles.smIcon}`}>
            <a href="https://linkedin.com">
              <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
