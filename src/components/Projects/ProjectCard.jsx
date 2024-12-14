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
      className={`${styles.projectCard} fade-in border rounded p-1 flex-grow-1
      ${isVisible ? "is-visible" : ""}`}
    >
      <div
        className="m-1"
        onClick={() => setShowModal(true)}
        style={{ cursor: "pointer" }}
      >
        {isVideo ? (
          <Media isVideo={isVideo} media={media} title={title} />
        ) : (
          <img src={media} alt={title} className="img-fluid rounded" />
        )}
      </div>
      <div className="d-flex flex-column">
        <h5 className="fw-bold soft-blue">{title}</h5>
        <p>{description}</p>
        <div className="d-flex gap-5">
          {sourceCodeLink && (
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`d-inline-block my-2 ${styles.links}`}
            >
              View Source Code{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
        {technologies && (
          <div className="d-flex gap-2 flex-wrap mb-3">
            {technologies.map((tech) => (
              <small key={tech}>
                <p
                  className={`d-block px-3 rounded-5 m-0 soft-blue`}
                  style={{
                    backgroundColor: "rgb(50 50 70)",
                  }}
                >
                  {tech}
                </p>
              </small>
            ))}
          </div>
        )}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="d-flex justify-content-center p-0">
          {isVideo ? (
            <Media isVideo={isVideo} media={media} title={title} modal={true}>
              <source src={media} type="video/mp4" />
            </Media>
          ) : (
            <Media isVideo={isVideo} media={media} title={title} modal={true} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string.isRequired),
  sourceCodeLink: PropTypes.string,
  demoLink: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  media: PropTypes.string.isRequired,
};

export default ProjectCard;
