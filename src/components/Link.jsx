import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Link = ({ link, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="icon-link text-uppercase"
      style={{
        color: isHovered ? "gray" : "white",
        transition: "color 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </a>
  );
};

Link.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  textTransform: PropTypes.string,
};
export default Link;
