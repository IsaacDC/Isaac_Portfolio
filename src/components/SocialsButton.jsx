import React from "react";
import styles from "../assets/styles/Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialsButton({ href, icon, download }) {
  return (
    <li className={`${styles.smIcon}`}>
      <a href={href} download={download ? "Isaac_DelCastillo_Resume.pdf" : undefined}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </a>
    </li>
  );
}

export default SocialsButton;
