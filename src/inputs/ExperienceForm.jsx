import PropTypes from 'prop-types';
import FormInput from './FormInput';

function ExperienceForm({ obj, toRender }) {
  const elementId = toRender.id;
  return (
    <form>
      <FormInput
        type="text"
        id={`${toRender.id}_company`}
        value={toRender.company}
        label="Company"
        onChange={(e) => obj.changeCompany(elementId, e.target.value)}
      />
      <FormInput
        type="text"
        id={`${toRender.id}_jobTitle`}
        value={toRender.jobTitle}
        label="Job title"
        onChange={(e) => obj.changeJobTitle(elementId, e.target.value)}
      />
      <FormInput
        type="text"
        id={`${toRender.id}_since`}
        value={toRender.since}
        label="Start date"
        onChange={(e) => obj.changeSince(elementId, e.target.value)}
      />
      <FormInput
        type="text"
        id={`${toRender.id}_until`}
        value={toRender.until}
        label="End date"
        onChange={(e) => obj.changeUntil(elementId, e.target.value)}
      />
      <FormInput
        type="text"
        id={`${toRender.id}_description`}
        value={toRender.description}
        label="Description"
        onChange={(e) => obj.changeDescription(elementId, e.target.value)}
      />
    </form>
  );
}

ExperienceForm.propTypes = {
  obj: PropTypes.object.isRequired,
  toRender: PropTypes.object.isRequired,
};

export default ExperienceForm;
