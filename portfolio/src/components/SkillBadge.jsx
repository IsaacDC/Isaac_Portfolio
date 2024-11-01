import React from "react";
import styles from "../assets/styles/Skills.module.css";
export const SkillBadge = (props) => {
  return (
    <div
      className={`d-flex align-items-center gap-3 rounded-2 ${styles.skillBadge}`}
      style={{ backgroundColor: props.bgColor }}
    >
      <div className="p-1 rounded-2">
        <img
          src={props.img}
          alt={props.alt}
          className={`${styles.skillImg} img-fluid`}
        />
      </div>
      <div className="text-light">
        <p className="m-0">{props.skill}</p>
      </div>
    </div>
  );
};
