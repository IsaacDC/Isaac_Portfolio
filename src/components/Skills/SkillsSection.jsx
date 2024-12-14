import skillData from "./skillData";
import Section from "../Section";
import SkillBadge from "./SkillBadge";

function SkillsSection() {
  return (
    <Section title="Skills" id="skills">
      <div
        className="d-grid gap-2"
        style={{
          justifyItems: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {skillData.map((skills) => (
          <SkillBadge key={skills.skill} {...skills} />
        ))}
      </div>
    </Section>
  );
}
export default SkillsSection;
