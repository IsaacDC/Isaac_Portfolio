import React from "react";


const ProjectsCarousel = () => {

  return (
    <div>
       
      <div className="slider-controler">
        <button className="swiper-button-prev slider-arrow">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="swiper-pagination"></div>
        <button className="swiper-button-next slider-arrow">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
