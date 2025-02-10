import PropTypes from "prop-types";
const Media = ({ isVideo, media, title, modal = false }) =>
  isVideo ? (
    <video
      autoPlay
      controls={modal}
      muted
      loop
      alt={title}
      className={`${modal ? "rounded-bottom" : "rounded"}`}
    >
      <source src={media} type="video/mp4" />
    </video>
  ) : (
    <img
      src={media}
      alt={title}
      className={`img-fluid ${modal ? "rounded-bottom" : "rounded"}`}
      style={{
        objectFit: "contain",
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
