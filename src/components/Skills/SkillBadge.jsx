import React, { useState } from "react";
import PropTypes from "prop-types";

const SkillBadge = ({
  bgColor = "rgba(255,255,255,0.3)",
  logo = "",
  skill = "Skill",
}) => {
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
      className="px-3 py-2 d-flex align-items-center justify-content-center gap-3 rounded-2"
      style={{
        backgroundColor: bgColor,
        boxShadow: boxShadowStyle,
        transition: "box-shadow 0.5s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-2">
        <img
          src={logo}
          alt={`${skill} logo`}
          style={{
            width: "clamp(10px, calc(60px + 10vw), 40px)",
            height: "clamp(10px, calc(60px + 10vw), 40px)",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="text-light d-none d-sm-block">
        <p className="m-0">{skill}</p>
      </div>
    </div>
  );
};

SkillBadge.propTypes = {
  bgColor: PropTypes.string,
  logo: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillBadge;
