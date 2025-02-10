import React from "react";
import PropTypes from "prop-types";
import fadeIn from "../../hooks/fadeInHook";

const ExperienceCard = ({ title, company, location, dates, description }) => {
  const [isVisible, cardRef] = fadeIn(0.1);

  return (
    <div
      ref={cardRef}
      className={` p-3 rounded shadow fade-in ${
        isVisible ? "is-visible" : ""
      }`}
      style={{
        backgroundColor: "rgba(31, 41, 55, 0.7)",
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h3 className="fw-bold soft-blue">{title}</h3>
          {company} | {location}
        </div>
        <div>
          <span className="d-block">{dates}</span>
        </div>
      </div>
      <br></br>
      <p>{description}</p>
    </div>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
};

export default ExperienceCard;
