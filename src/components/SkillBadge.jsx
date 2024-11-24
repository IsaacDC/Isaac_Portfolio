import React from "react";
import PropTypes from "prop-types";
import styles from "../assets/styles/Skills.module.css";

function SkillBadge({
  bgColor = "rgba(255,255,255,0.3)",
  img = "",
  skill = "Skill",
}) {
  return (
    <div
      className={`d-flex align-items-center gap-3 rounded-2 p-1 ${styles.skillBadge}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="p-1 rounded-2">
        <img
          src={img}
          alt={`${skill} logo`}
          className={`${styles.skillImg} img-fluid `}
        />
      </div>
      <div className="text-light">
        <p className="m-0">{skill}</p>
      </div>
    </div>
  );
}

SkillBadge.propTypes = {
  bgColor: PropTypes.string,
  img: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillBadge;
