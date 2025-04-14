import React from "react";
import isaacPfp from "../../assets/isaac.jpg";

const AboutMePfp = () => {
  return (
    <div
      style={{
        width: "40%",
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      <img
        src={isaacPfp}
        className="img-thumbnail img-fluid rounded-circle"
        alt="Isaac's Profile Picture"
      />
    </div>
  );
};

export default AboutMePfp;
