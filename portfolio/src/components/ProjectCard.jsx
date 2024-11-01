import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../assets/styles/ProjectCard.module.css";
import { Modal } from "react-bootstrap";

const ProjectCard = ({ title, description, link, technologies, media }) => {
  const [showModal, setShowModal] = useState(false);
  const isVideo = media.toLowerCase().endsWith(".mp4");

  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => {
    setShowModal(true);
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    console.log(scrollBarWidth);
  };

  return (
    <div className="container mb-4 p-4">
      <div className="row g-0">
        <div className="col-md-8 p-1">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              View Project
            </a>
          )}
          {technologies && (
            <div className="d-flex gap-3 flex-wrap">
              {technologies.map((tech, index) => (
                <small key={index}>
                  <p
                    className={`d-block p-2 rounded-5 ${styles.technologies}`}
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
  link: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  media: PropTypes.string.isRequired,
};

export default ProjectCard;
