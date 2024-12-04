import React, { useState } from "react";
import fadeIn from "../hooks/fadeInHook";
import PropTypes from "prop-types";
import styles from "../assets/styles/ProjectCard.module.css";
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

  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <div
      ref={cardRef}
      className={`fade-in container my-5 border-start 
      ${isVisible ? "is-visible" : ""}`}
    >
      <div className="row">
        <div className="col-md-8 d-flex flex-column gap-2">
          <h2
            className="fw-bold"
            style={{ color: "rgb(217 249 157)" }}
          >
            {title}
          </h2>
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
            <div className="d-flex gap-3 flex-wrap mb-3">
              {technologies.map((tech, index) => (
                <small key={index}>
                  <p
                    className={`d-block px-3 rounded-5 m-0`}
                    style={{
                      color: "rgb(217 249 157)",
                      backgroundColor: "	#4F7942",
                    }}
                  >
                    {tech}
                  </p>
                </small>
              ))}
            </div>
          )}
        </div>
        <div className="col-md-4">
          <div onClick={handleShow} style={{ cursor: "pointer" }}>
            {isVideo ? (
              <video
                autoPlay
                muted
                loop
                alt={title}
                className="img-fluid rounded"
              >
                <source src={media} type="video/mp4" />
              </video>
            ) : (
              <img src={media} alt={title} className="img-fluid rounded" />
            )}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body
          className="d-flex justify-content-center"
          style={{ padding: "0" }}
        >
          {isVideo ? (
            <video
              autoPlay
              controls
              loop
              alt={title}
              className="img-fluid"
              style={{
                maxWidth: "200%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "10px",
                border: "2px solid white",
              }}
            >
              <source src={media} type="video/mp4" />
            </video>
          ) : (
            <img
              src={media}
              alt={title}
              className="img-fluid"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />
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
