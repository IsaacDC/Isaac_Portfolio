import React from "react";
import pharmavision from "../assets/images/projects/pharmavision.mp4";
import pieza from "../assets/images/projects/pieza.mp4";
import mlProject from "../assets/images/projects/mlproject.mp4";
import canvas from "../assets/images/projects/canvas.mp4";
import geektextlogo from "../assets/images/projects/geektextlogo.webp";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectsData = [
    {
      title: "Pieza",
      description: [
        "Developed a startup project analyzer using ReactJS, Python, MongoDB, and AI models to assist developers and entrepreneurs in structuring and refining startup ideas.",
      ],
      link: "https://github.com/d4julian/mlh-2025",
      technologies: ["ReactJS", "Python", "Llama 3.2", "MongoDB"],
      media: pieza,
    },
    {
      title: "Live Collaborative Drawing Canvas",
      description: [
        "Developed a real-time collaborative drawing application leveraging Node.js, Express, and Socket.IO, enabling multiple users to draw simultaneously on a shared canvas.",
      ],
      link: "https://github.com/IsaacDC/drawing_canvas",
      technologies: ["Node.js", "Express", "Socket.IO", "Redis", "MySQL"],
      media: canvas,
    },
    {
      title: "Pharma-Vision",
      description: [
        "Developed a healthcare-focused application designed to streamline communication between doctors, pharmacists, and patients by securely tracking and managing patient prescriptions.",
        " The app utilizes React.js for the front-end, Supabase for the back-end, and Python with OpenCV and Roboflow APIs for AI-powered video detection to count and identify different pill types.",
      ],
      link: "https://github.com/d4julian/pharma-vision",
      technologies: ["React.js", "Supabase", "Python", "OpenCV", "Roboflow"],
      media: pharmavision,
    },
    {
      title: "API Integration and Database Management Project",
      description: [
        "Created an API service to support a mock online web application bookstore. My team completed the project using the POSTman API platform, Java, Spring, and MySQL.",
      ],
      link: "https://github.com/IsaacDC/CEN-4010-Group-6-Team-Project-Geek-Text",
      technologies: ["Java", "Spring Boot", "MySQL"],
      media: geektextlogo,
    },
    {
      title: "Real-Time Multilingual Translation Application",
      description: [
        "This project focused on training a machine translation model using the MT5 (Multilingual Translation 5) model. The goal is to develop a robust translation system capable of translating text between multiple languages in real-time, between two users who are using the application at the same time.",
      ],
      link: "https://gitlab.com/cap4612/Machine-Learning-Project",
      technologies: ["Python", "TensorFlow", "Flask", "GitLab"],
      media: mlProject,
    },
  ];
  return (
    <Section title="Projects" id="projects">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Section>
  );
}

export default Projects;
