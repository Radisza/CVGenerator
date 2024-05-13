import PropTypes from 'prop-types';
import FormInput from './FormInput';

function SkillsForm({ obj, toRender }) {
  const elementId = toRender.id;
  const levelId = `${toRender.id}_lvl`;
  return (
    <form>
      <FormInput
        type="text"
        id={`${toRender.id}_skill`}
        value={toRender.skill}
        label="Skill name"
        onChange={(e) => obj.changeSkill(elementId, e.target.value)}
      />
      <div className="formInput">
        <label htmlFor={levelId}>Skill level</label>
        <input
          type="range"
          step="1"
          max="5"
          id={levelId}
          name={levelId}
          value={toRender.level}
          onChange={(e) => obj.changeLevel(elementId, e.target.value)}
        />
      </div>
    </form>
  );
}

SkillsForm.propTypes = {
  obj: PropTypes.object.isRequired,
  toRender: PropTypes.object.isRequired,
};

export default SkillsForm;
