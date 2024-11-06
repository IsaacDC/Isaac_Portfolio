import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./components/AboutMe.jsx";
import Experience from "./components/Experience.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import "./reset.css";

function App() {
  return (
    <>
      <div className="bg-container">
        <div className="content">
          <AboutMe />
          <Experience />
          <Projects />
          <SkillsSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
