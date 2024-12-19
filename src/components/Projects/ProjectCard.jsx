import React, { useState } from "react";
import fadeIn from "../../hooks/fadeInHook";
import Media from "../Media";
import PropTypes from "prop-types";
import styles from "../../assets/styles/ProjectCard.module.css";
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

  return (
    <div
      ref={cardRef}
      className={`${
        styles.projectCard
      } fade-in border rounded p-1 flex-grow-1 d-flex flex-column gap-2
      ${isVisible ? "is-visible" : ""}`}
      style={{ flexBasis: 0, borderColor: "rgba(255,255,255,0.5)" }}
    >
      <div
        className="mw-100 d-flex justify-content-center"
        onClick={() => setShowModal(true)}
        style={{ aspectRatio: "16/9", cursor: "pointer" }}
      >
        <Media isVideo={isVideo} media={media} title={title} />
      </div>

      <div className="d-flex align-items-center" style={{ minHeight: "3rem" }}>
        <h5 className="fw-bold text-soft-blue">{title}</h5>
      </div>

      <div style={{ minHeight: "4rem" }}>
        <span>{description}</span>
      </div>

      <div
        className="d-flex gap-5 align-items-center"
        style={{ minHeight: "2.5rem" }}
      >
        {sourceCodeLink && (
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`d-inline-block my-2 ${styles.links}`}
          >
            View Source Code <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`d-inline-block my-2 ${styles.links}`}
          >
            View Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        )}
      </div>
      <div className="d-flex gap-2 flex-wrap mb-2 mt-auto">
        {technologies &&
          technologies.map((tech) => (
            <small
              key={tech}
              className={`d-block px-3 rounded-5 m-0 soft-blue`}
              style={{
                backgroundColor: "rgb(50 50 70)",
              }}
            >
              <span>{tech}</span>
            </small>
          ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="d-flex justify-content-center p-0">
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
