import pharmavision from "../../assets/media/projects/pharmavision.mp4";
import pieza from "../../assets/media/projects/pieza.mp4";
import neighborhoodConnect from "../../assets/media/projects/neighborhood-connect.mp4";
import mlProject from "../../assets/media/projects/mlproject.mp4";
import canvas from "../../assets/media/projects/canvas.mp4";
import geektextlogo from "../../assets/media/projects/geektextlogo.jpg";

const ProjectData = [
  {
    title: "Pieza",
    description:
      "Developed a startup project analyzer to assist developers and entrepreneurs in structuring and refining startup ideas.",
    sourceCodeLink: "https://github.com/d4julian/mlh-2025",
    demoLink: "N/A",
    technologies: ["React.js", "Python", "Llama 3.2", "MongoDB"],
    media: pieza,
  },
  {
    title: "Collaborative Drawing Canvas",
    description:
      "A real-time collaborative drawing application enabling multiple users to draw simultaneously on a shared canvas.",
    sourceCodeLink: "https://github.com/IsaacDC/drawing_canvas",
    demoLink: "https://google.com",
    technologies: ["Node.js", "Express", "Socket.IO", "Redis", "MySQL"],
    media: canvas,
  },
  {
    title: "Pharma-Vision",
    description:
      "A healthcare-focused application designed to securely track and manage patient prescriptions using real-time AI-powered pill detection.",
    sourceCodeLink: "https://github.com/d4julian/pharma-vision",
    demoLink: "N/A",
    technologies: ["React.js", "Supabase", "Python", "OpenCV", "Roboflow"],
    media: pharmavision,
  },
  {
    title: "Bookstore API",
    description:
      "An API service to support a mock online web application bookstore. My team completed the project using the POSTman API platform, Java, Spring, and MySQL.",
    sourceCodeLink:
      "https://github.com/IsaacDC/CEN-4010-Group-6-Team-Project-Geek-Text",
    demoLink: "N/A",
    technologies: ["Java", "Spring Boot", "MySQL", "Postman"],
    media: geektextlogo,
  },
  {
    title: "Real-Time Multilingual Translation Chat",
    description:
      "A robust translation system capable of translating text between multiple languages in real-time, between two users who are using the application at the same time.",
    sourceCodeLink: "https://gitlab.com/cap4612/Machine-Learning-Project",
    demoLink: "N/A",
    technologies: ["Python", "TensorFlow", "Flask", "GitLab"],
    media: mlProject,
  },
  {
    title: "Neighborhood Connect",
    description:
      "An iOS app using SwiftUI that enables users to join or create neighborhood groups within specified zip codes and organize local events.",
    sourceCodeLink: "https://github.com/IsaacDC/Neighborhood-Connect",
    demoLink: "N/A",
    technologies: ["SwiftUI", "Firebase", "Google Maps API"],
    media: neighborhoodConnect,
  },
];

export default ProjectData;
