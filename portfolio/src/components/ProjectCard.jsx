import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ title, description, link, technologies, img }) => {
  return (
    <div className="container text-white mb-4 p-4">
      <div className="row g-0">
        <div className="col-md-8">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          {technologies && (
            <div className="d-flex gap-3">
              {technologies.map((tech, index) => (
                <small className="text-light" key={index}>
                  <p>{tech}</p>
                </small>
              ))}
            </div>
          )}
        </div>
        <div className="col-md-4">
          <img src={img} alt={title} className="img-fluid" />
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary mt-2"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
