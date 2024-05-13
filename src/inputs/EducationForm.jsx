import PropTypes from 'prop-types';
import FormInput from './FormInput';

function EducationForm({ obj, toRender }) {
  const elementId = toRender.id;
  return (
    <form>
      <FormInput
        type="text"
        id={`${toRender.id}_schoolName`}
        value={toRender.schoolName}
        label="School name"
        onChange={(e) => obj.changeSchoolName(elementId, e.target.value)}
      />
      <FormInput
        type="text"
        id={`${toRender.id}_profile`}
        value={toRender.profile}
        label="Profile"
        onChange={(e) => obj.changeProfile(elementId, e.target.value)}
      />
      <FormInput
        type="text"
        id={`${toRender.id}_location`}
        value={toRender.location}
        label="Location"
        onChange={(e) => obj.changeLocation(elementId, e.target.value)}
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

EducationForm.propTypes = {
  obj: PropTypes.object.isRequired,
  toRender: PropTypes.object.isRequired,
};

export default EducationForm;
