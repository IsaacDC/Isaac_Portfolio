import PropTypes from "prop-types";
const Media = ({ isVideo, media, title, modal = false }) =>
  isVideo ? (
    <video
      autoPlay
      muted
      loop
      alt={title}
      className={`img-fluid ${modal ? "" : "rounded"}`}
      style={{
        maxWidth: modal ? "200%" : "100%",
        maxHeight: modal ? "80vh" : "100%",
        borderRadius: "10px",
        border: modal ? "2px solid white" : "",
      }}
    >
      <source src={media} type="video/mp4" />
    </video>
  ) : (
    <img
      src={media}
      alt={title}
      className={`img-fluid ${modal ? "" : "rounded"}`}
      style={{
        maxWidth: modal ? "90%" : "100%",
        maxHeight: "80vh",
        objectFit: "contain",
        borderRadius: modal ? "10px" : "0",
      }}
    />
  );

Media.propTypes = {
  isVideo: PropTypes.bool.isRequired,
  media: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  modal: PropTypes.bool,
};

export default Media;
