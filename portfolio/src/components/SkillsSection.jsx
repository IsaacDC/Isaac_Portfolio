import htmlImg from "../assets/images/skills/html.png";
import cssImg from "../assets/images/skills/css.png";
import javascriptImg from "../assets/images/skills/javascript.png";
import javaImg from "../assets/images/skills/java.png";
import pythonImg from "../assets/images/skills/python.png";
import mySqlImg from "../assets/images/skills/mysql.png";
import Section from "./Section";
import { SkillBadge } from "./SkillBadge";

const skillData = [
  {
    img: htmlImg,
    bgColor: "rgba(255,69,0, 0.3)",
    alt: "HTML5 Logo",
    skill: "HTML5",
  },
  {
    img: cssImg,
    bgColor: "rgba(38, 77, 228, 0.3)",
    alt: "CSS3 Logo",
    skill: "CSS3",
  },
  {
    img: javascriptImg,
    alt: "JavaScript Logo",
    bgColor: "rgba(255,255,0,0.3)",
    skill: "JavaScript",
  },
  {
    img: javaImg,
    bgColor: "rgba(255, 255, 255, 0.1)",
    alt: "Java Logo",
    skill: "Java",
  },
  {
    img: pythonImg,
    bgColor: "rgba(55, 123, 235, 0.3)",
    alt: "Python Logo",
    skill: "Python",
  },
  {
    img: mySqlImg,
    bgColor: "rgba(0, 117, 143, 0.3)",
    alt: "MySQL Logo",
    skill: "MySQL",
  },
];

function SkillsSection() {
  return (
    <Section title="Skills" className="p-0" id="skills">
      <div className="d-flex gap-3 flex-wrap">
        {skillData.map((skills, index) => (
          <div key={index}>
            <SkillBadge {...skills} />
          </div>
        ))}
      </div>
    </Section>
  );
}
export default SkillsSection;
