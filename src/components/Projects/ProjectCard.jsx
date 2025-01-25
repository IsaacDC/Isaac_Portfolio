import React, { useState } from "react";
import fadeIn from "../../hooks/fadeInHook";
import Media from "./Media";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";

const ProjectCard = ({
  title,
  description,
  sourceCodeLink,
  demoLink,
  technologies,
  media,
}) => {
  const [showModal, setShowModal] = useState(false);
  const isVideo = media.toLowerCase().endsWith(".mp4");
  const [isVisible, cardRef] = fadeIn(0.1);
  const [isSourceHovered, setIsSourceHovered] = useState(false);
  const [isDemoHovered, setIsDemoHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className={`h-100 fade-in rounded-3 p-2 d-flex flex-column gap-1 shadow
      ${isVisible ? "is-visible" : ""}`}
      style={{
        backgroundColor: "rgba(31, 41, 55, 0.7)",
      }}
    >
      <div
        className="mw-100 d-flex justify-content-center"
        onClick={() => setShowModal(true)}
        style={{ aspectRatio: "16/9", cursor: "pointer" }}
      >
        <Media isVideo={isVideo} media={media} title={title} />
      </div>

      <div
        className="d-flex align-items-center flex-wrap"
        style={{ minHeight: "3rem" }}
      >
        <h5 className="fw-bold text-soft-blue">{title}</h5>
      </div>

      <div
        className="d-flex align-items-center flex-wrap"
        style={{ minHeight: "120px" }}
      >
        <span>{description}</span>
      </div>

      <div
        className="d-flex gap-5 gap-md-3 gap-sm-2 align-items-center"
        style={{ minHeight: "2.5rem" }}
      >
        {sourceCodeLink && (
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            style={{
              textDecoration: "none",
              color: isSourceHovered ? "gray" : "white",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={() => setIsSourceHovered(true)}
            onMouseLeave={() => setIsSourceHovered(false)}
          >
            View Code <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" icon-link"
            style={{
              textDecoration: "none",
              color: isDemoHovered ? "gray" : "white",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={() => setIsDemoHovered(true)}
            onMouseLeave={() => setIsDemoHovered(false)}
          >
            View Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        )}
      </div>
      <div className="d-flex gap-2 flex-wrap mt-auto">
        {technologies &&
          technologies.map((tech) => (
            <small
              key={tech}
              className={`d-block px-3 rounded-5 m-0 soft-blue shadow-sm`}
              style={{
                backgroundColor: "rgb(50 50 70)",
              }}
            >
              <span>{tech}</span>
            </small>
          ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered dialogClassName="custom-modal">
        <Modal.Body
          className="p-1"
        >
          <div className="d-flex justify-content-end p-1">
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            ></button>
          </div>
          <Media isVideo={isVideo} media={media} title={title} modal={true} />
        </Modal.Body>
      </Modal>
    </div>
  );
};
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sourceCodeLink: PropTypes.string,
  demoLink: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  media: PropTypes.string.isRequired,
};

export default ProjectCard;
