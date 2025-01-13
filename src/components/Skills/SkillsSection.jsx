import skillData from "./skillData";
import Section from "../Section";
import SkillBadge from "./SkillBadge";

const SkillsSection = () => {
  return (
    <Section title="Skills" id="skills">
      <div
        className="d-flex flex-wrap justify-content-center gap-3"
      >
        {skillData.map((skills) => (
          <SkillBadge key={skills.skill} {...skills} />
        ))}
      </div>
    </Section>
  );
};
export default SkillsSection;
