import React from "react";
import htmlImg from "../assets/images/html.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectsData = [
    {
      title: "Live Collaborative Drawing Canvas",
      description:
        "Developed a real-time collaborative drawing application leveraging Node.js, Express, and Socket.IO, enabling multiple users to draw simultaneously on a shared canvas. Implemented WebSocket communication for live updates, utilized SQLite and MySql for session management and data persistence, and optimized for seamless performance.",
      link: "https://github.com/IsaacDC/drawing_canvas",
      technologies: ["Node.js", "Express", "Socket.IO", "Redis", "MySQL"],
      img: {htmlImg}
    },
    {
      title: "API Integration and Database Management Project",
      description:
        "Created an API service to support a mock online web application bookstore. My team completed the project using the POSTman API platform, Java, Spring, and MySQL. My feature included creating a User, retrieving that user's info, creating a credit card for that user, and having it all stored in the database to have Postman retrieve that data through different endpoints.",
      link: "https://github.com/IsaacDC/CEN-4010-Group-6-Team-Project-Geek-Text",
      technologies: ["Java", "Spring Boot", "MySQL"],
    },
    {
      title: "Real-Time Multilingual Translation Application",
      description:
        "This project focused on training a machine translation model using the MT5 (Multilingual Translation 5) model The goal is to develop a robust translation system capable of translating text between multiple languages in real-time, between two users who are using the application at the same time.",
      link: "https://gitlab.com/cap4612/Machine-Learning-Project",
      technologies: ["Python", "TensorFlow", "Flask", "GitLab"],
    },
    {
      title: "Neighborhood Connect",
      description:
        "Developed an iOS app using SwiftUI enabling users to join or create neighborhood groups within specified zip codes and organize local events. Integrated Firebase Authentication for user sign-up and login, with group chats, events, and groups stored in Firebase Realtime Database. Implemented Apple Maps API to display event locations, providing users with directions and hosting details. The app fosters local community engagement through real-time interaction and event coordination.",
      link: "https://github.com/IsaacDC/NeighborhoodConnect",
      technologies: ["SwiftUI", "Firebase", "Google Maps API"],
    },
  ];
  return (
    <section className="p-5 border-bottom border-top bg-dark" id="projects">
      <h1 className="text-center mb-5">Projects</h1>
      {projectsData.map((project, index) => (
        <div key={index}>
          <ProjectCard {...project} />
        </div>
      ))}
    </section>
  );
}

export default Projects;
