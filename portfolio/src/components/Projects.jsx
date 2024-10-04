import React from "react";
function Projects() {
  return (
    <section className="container mt-5" id="projects">
      <h1 className="text-center mb-5">Projects</h1>

      <div className="card mb-4 shadow-sm p-4">
        <h4>
          <a 
            rel="noopener"
            href="https://github.com/IsaacDC/drawing_canvas"
            target="_blank"
          >
            Live Collaborative Drawing Canvas
          </a>
        </h4>
        <ul className="list-unstyled">
          <li>
            Developed a real-time collaborative drawing application leveraging
            Node.js, Express, and Socket.IO, enabling multiple users to draw
            simultaneously on a shared canvas. Implemented WebSocket
            communication for live updates, utilized SQLite and MySql for
            session management and data persistence, and optimized for seamless
            performance. Integrated dynamic event handling for user interactions
            and ensured cross-browser compatibility with HTML5 and JavaScript.
          </li>
        </ul>
      </div>

      <div className="card mb-4 shadow-sm p-4">
        <h4>
          <a
            rel="noopener"
            href="https://github.com/IsaacDC/CEN-4010-Group-6-Team-Project-Geek-Text"
            target="_blank"
          >
            API Integration and Database Management Project
          </a>
        </h4>
        <ul className="list-unstyled">
          <li>
            Created an API service to support a mock online web application
            bookstore. My team completed the project using the POSTman API
            platform, Java, Spring, and MySQL. My feature included creating a
            User, retrieving that user's info, creating a credit card for that
            user, and having it all stored in the database to have Postman
            retrieve that data through different endpoints.
          </li>
        </ul>
      </div>

      <div className="card mb-4 shadow-sm p-4">
        <h4>
          <a
            rel="noopener"
            href="https://gitlab.com/cap4612/Machine-Learning-Project"
            target="_blank"
          >
            Real-Time Multilingual Translation Application
          </a>
        </h4>
        <ul className="list-unstyled">
          <li>
            This project focuses on training a machine translation model using
            the MT5 (Multilingual Translation 5) model, which is part of the
            Hugging Face Transformers library. The goal is to develop a robust
            translation system capable of translating text between multiple
            languages in real-time, between two users who are using the
            application at the same time.
          </li>
        </ul>
      </div>

      <div className="card mb-4 shadow-sm p-4">
        <h4>
          <a rel="noopener" href="" target="_blank">
            Neighborhood Connect
          </a>
        </h4>
        <ul className="list-unstyled">
          <li>
            Developed an iOS app using SwiftUI enabling users to join or create
            neighborhood groups within specified zip codes and organize local
            events. Integrated Firebase Authentication for user sign-up and
            login, with group chats, events, and groups stored in Firebase
            Realtime Database. Implemented Apple Maps API to display event
            locations, providing users with directions and hosting details. The
            app fosters local community engagement through real-time interaction
            and event coordination.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
