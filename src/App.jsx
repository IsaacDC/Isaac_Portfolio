import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Experience from "./components/Experience/Experience.jsx";
import SkillsSection from "./components/Skills/SkillsSection.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import "./reset.css";

function App() {
  return (
    <>
      <div className="mx-auto d-flex flex-column gap-4 w-md-75 w-lg-50">
        <AboutMe />
        <SkillsSection />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
