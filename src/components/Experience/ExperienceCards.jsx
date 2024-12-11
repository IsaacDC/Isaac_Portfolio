import React from "react";
import PropTypes from "prop-types";
import fadeIn from "../../hooks/fadeInHook";

function ExperienceCard({ title, company, location, dates, description }) {
  const [isVisible, cardRef] = fadeIn(0.1);

  return (
    <div
      ref={cardRef}
      className={`border-start container my-5 fade-in ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h2 className="fw-bold soft-blue">
            {title}
          </h2>
          {company} | {location}
        </div>
        <div>
          <span className="d-block">{dates}</span>
        </div>
      </div>
      <p></p>
      <p>{description}</p>
    </div>
  );
}

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
};

export default ExperienceCard;
