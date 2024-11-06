import htmlImg from "../assets/images/skills/html.png";
import reactImg from "../assets/images/skills/react.png";
import cssImg from "../assets/images/skills/css.png";
import javascriptImg from "../assets/images/skills/javascript.png";
import javaImg from "../assets/images/skills/java.png";
import pythonImg from "../assets/images/skills/python.png";
import mySqlImg from "../assets/images/skills/mysql.png";
import gitImg from "../assets/images/skills/git.png";
import Section from "./Section";
import SkillBadge from "./SkillBadge";

const skillData = [
  {
    img: reactImg,
    bgColor: "rgba(97,219,251,0.3)",
    skill: "React",
  },
  {
    img: htmlImg,
    bgColor: "rgba(255,69,0, 0.3)",
    skill: "HTML5",
  },
  {
    img: cssImg,
    bgColor: "rgba(38, 77, 228, 0.3)",
    skill: "CSS3",
  },
  {
    img: javascriptImg,
    bgColor: "rgba(255,255,0,0.3)",
    skill: "JavaScript",
  },
  {
    img: javaImg,
    bgColor: "rgba(255, 255, 255, 0.1)",
    skill: "Java",
  },
  {
    img: pythonImg,
    bgColor: "rgba(55, 123, 235, 0.3)",
    skill: "Python",
  },
  {
    img: mySqlImg,
    bgColor: "rgba(0, 117, 143, 0.3)",
    skill: "MySQL",
  },
  {
    img: gitImg,
    bgColor: "rgba(241,80,47,0.3)",
    skill: "Git",
  },
];

function SkillsSection() {
  return (
    <Section title="Skills" id="skills">
      <div className="d-flex gap-3 flex-wrap mt-4">
        {skillData.map((skills) => (
          <SkillBadge key={skills.skill} {...skills} />
        ))}
      </div>
    </Section>
  );
}
export default SkillsSection;
