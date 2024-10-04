import React from 'react';

function Experience() {
  return (
    <section className="container mt-5" id="experience">
      <h1 className="text-center mb-5">Experience</h1> {/* Centered heading with bottom margin */}

      {/* Experience 1 */}
      <div className="card mb-4 shadow-sm p-4">
        <h4>IT Systems Assistant</h4>
        <p className="text-muted">
          Florida International University | 11200 SW 8th St, Miami, FL 
          <span className="d-block">March 2024 - Present</span> {/* Date on a new line */}
        </p>
        <ul className="list-unstyled">
          <li>
            Assist with various activities, such as debugging network
            connectivity issues and diagnosing hardware and software problems.
            Helped with hardware installation, website management, and software
            updates. Additionally, worked with a variety of programming
            languages and operating systems.
          </li>
        </ul>
      </div>

      {/* Experience 2 */}
      <div className="card mb-4 shadow-sm p-4"> {/* Another card for the second job */}
        <h2 className="h4">I.T. Intern</h2>
        <p className="text-muted">
          Florida International University | 11200 SW 8th St, Miami, FL 
          <span className="d-block">July 2019 - August 2019</span> {/* Date on a new line */}
        </p>
        <ul className="list-unstyled">
          <li>
            Learned the fundamentals of front-end development, including HTML,
            CSS, and JavaScript. Collaborated with a team to apply this
            knowledge by developing a website that integrated these core
            technologies.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
