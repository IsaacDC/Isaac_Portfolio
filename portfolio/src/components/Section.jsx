import React, { useRef, useEffect, useState } from "react";
import styles from '../assets/styles/Section.module.css';
import "../App.css";

const Section = ({ title, children, className = "" }) => {
  const defaultStyling = `rounded p-5 bg-dark my-5 ${className} ${styles.section}`.trim();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`${defaultStyling} fade-in-section ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {title && <h1 className="text-center">{title}</h1>}
      {children}
    </section>
  );
};

export default Section;
