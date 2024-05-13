import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';

function Skill({ skill, level, maxLevel }) {
  let level_dots = [];
  for (let i = 0; i < maxLevel; i++) {
    const icon =
      i < level
        ? 'mdi-checkbox-blank-circle'
        : 'mdi-checkbox-blank-circle-outline';
    level_dots.push(<Icon icon={icon} key={`level_${i}`} />);
  }
  return (
    <div className="flex-column">
      <div className="centered">{skill}</div>
      <div className="dots">{level_dots}</div>
    </div>
  );
}

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  maxLevel: PropTypes.number.isRequired,
};

function SkillsView({ skills }) {
  console.log(skills.data);
  return (
    <div className="flex-column">
      {skills.data.length > 0 && (
        <div className="title">{skills.getName()}</div>
      )}
      {skills.data.map((item) => {
        return (
          <Skill
            key={item.id}
            skill={item.skill}
            level={Number(item.level)}
            maxLevel={Number(skills.maxLevel())}
          />
        );
      })}
    </div>
  );
}

SkillsView.propTypes = {
  skills: PropTypes.object.isRequired,
};

export default SkillsView;
