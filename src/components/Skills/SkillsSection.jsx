import skillData from "./skillData";
import Section from "../Section";
import SkillBadge from "./SkillBadge";

function SkillsSection() {
  return (
    <Section title="Skills" id="skills">
      <div className="row gap-2 justify-content-center">
        {skillData.map((skills) => (
          <SkillBadge key={skills.skill} {...skills} />
        ))}
      </div>
    </Section>
  );
}
export default SkillsSection;
