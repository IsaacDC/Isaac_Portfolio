import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";
import { Navigation, A11y, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const ProjectsCarousel = () => {
  return (
    <div >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={3}
        className="swiper-container"
      >
        {projectData.map((project) => (
          <SwiperSlide key={project.title}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-controler">
        <button className="swiper-button-prev slider-arrow">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="swiper-button-next slider-arrow">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
