import React from "react";
import styles from "../../assets/styles/Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialsCoin = ({ href, icon, download }) => {
  return (
    <li className={`${styles.smIcon}`}>
      <a
        href={href}
        target="_blank"
        download={download ? "Isaac_DelCastillo_Resume.pdf" : undefined}
      >
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </a>
    </li>
  );
};

export default SocialsCoin;
