import React from "react";
import useVisibility from "../hooks/fadeInHook.jsx";
import "../App.css";

const Section = ({ title, children, className = "" }) => {
  const defaultStyling = `p-5 border-bottom my-5 ${className}`.trim();
  const [isVisible, sectionRef] = useVisibility(0.1);
  return (
    <section
      ref={sectionRef}
      className={`${defaultStyling} fade-in ${isVisible ? "is-visible" : ""}`}
    >
      {title && <h1 className={`text-center `}>{title}</h1>}
      {children}
    </section>
  );
};

export default Section;
