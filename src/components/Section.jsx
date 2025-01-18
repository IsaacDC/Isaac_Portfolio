import React from "react";
import useVisibility from "../hooks/fadeInHook.jsx";
import "../App.css";

const Section = ({
  title,
  children,
  className = "",
  flexDirection = "column",
}) => {
  const defaultStyling = `p-4 d-flex flex-${flexDirection} justify-content-center align-items-center gap-3`;
  const [isVisible, sectionRef] = useVisibility(0.1);

  return (
    <section
      ref={sectionRef}
      className={`${defaultStyling} ${className} fade-in ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {title && <h1 className="text-center">{title}</h1>}
      {children}
    </section>
  );
};

export default Section;
