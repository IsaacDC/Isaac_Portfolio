import React, { useState } from "react";
import fadeIn from "../../hooks/fadeInHook";
import Media from "./Media";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import Link from "../Link";

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
      className={`h-100 fade-in rounded-3 p-2 d-flex flex-column gap-1 shadow
      ${isVisible ? "is-visible" : ""}`}
      style={{
        backgroundColor: "var(--secondary-bg-color)",
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
        <h5
          className="fw-bold"
          style={{
            color: "var(--blue-text)",
          }}
        >
          {title}
        </h5>
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
          <Link
            link={sourceCodeLink}
            text="View Source"
            textTransform="uppercase"

          />
        )}
        {demoLink && (
          <Link
            link={demoLink}
            text="View Demo"
            textTransform="uppercase"
          />
        )}
      </div>
      <div className="d-flex gap-2 flex-wrap mt-auto">
        {technologies &&
          technologies.map((tech) => (
            <small
              key={tech}
              className={`d-block px-3 rounded-5 m-0 soft-blue shadow-sm`}
              style={{
                backgroundColor: "var(--tertiary)",
              }}
            >
              <span>{tech}</span>
            </small>
          ))}
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="xl"
        data-bs-theme="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "var(--blue-text" }}>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-auto">
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
