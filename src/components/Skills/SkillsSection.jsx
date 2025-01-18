import skillData from "./skillData";
import Section from "../Section";
import SkillBadge from "./SkillBadge";
import { useState } from "react";

const SkillsSection = () => {
  const [activeBadge, setActiveBadge] = useState(null);

  return (
    <Section title="Skills" id="skills">
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {skillData.map((skills) => (
          <SkillBadge
            key={skills.skill}
            {...skills}
            isActive={activeBadge === skills.skill}
            onToggle={() =>
              setActiveBadge(activeBadge === skills.skill ? null : skills.skill)
            }
          />
        ))}
      </div>
    </Section>
  );
};
export default SkillsSection;
