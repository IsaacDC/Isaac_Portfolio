import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../../assets/styles/Skills.module.css";

function SkillBadge({
  bgColor = "rgba(255,255,255,0.3)",
  img = "",
  skill = "Skill",
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Function to adjust alpha of the color
  const adjustAlpha = (color, alpha) => {
    const rgbaMatch = color.match(/rgba?\(([^)]+)\)/);
    if (!rgbaMatch) return color;

    const parts = rgbaMatch[1]
      .split(",")
      .map((value) => value.trim())
      .map((v, index) => (index < 3 ? parseInt(v, 10) : parseFloat(v)));

    if (parts.length === 3) {
      parts.push(alpha);
    } else {
      parts[3] = alpha;
    }

    return `rgba(${parts.join(",")})`;
  };

  const shadowColor = adjustAlpha(bgColor, 1);
  const boxShadowStyle = isHovered ? `0 0 15px ${shadowColor}` : "none";

  return (
    <div
      className={`d-flex align-items-center gap-3 rounded-2 p-1 w-100 ${styles.skillBadge}`}
      style={{
        backgroundColor: bgColor,
        boxShadow: boxShadowStyle,
        transition: "box-shadow 0.5s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-1 rounded-2">
        <img
          src={img}
          alt={`${skill} logo`}
          className={`${styles.skillImg} img-fluid `}
        />
      </div>
      <div className="text-light">
        <p className="m-0 d-none d-md-block">{skill}</p>
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
