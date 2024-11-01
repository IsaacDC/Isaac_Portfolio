import React from "react";
import PropTypes from "prop-types";

function ExperienceCard({ title, company, location, dates, description }) {
  return (
    <div className="container mb-4 p-4">
      <h4>{title}</h4>
      <p>
        {company} | {location}
        <span className="d-block">{dates}</span>
      </p>
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
