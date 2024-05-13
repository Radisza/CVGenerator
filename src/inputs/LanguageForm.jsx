import PropTypes from 'prop-types';
import FormInput from './FormInput';

function LanguageForm({ obj, toRender }) {
  const langName = toRender.language;
  const elementId = toRender.id;
  return (
    <form>
      <FormInput
        type="text"
        id={`${langName}_${elementId}`}
        value={langName}
        label="Language"
        onChange={(e) => obj.changeLanguage(elementId, e.target.value)}
      />
      <FormInput
        type="text"
        id={`${langName}_level`}
        value={toRender.level}
        label="Level"
        onChange={(e) => obj.changeLevel(elementId, e.target.value)}
      />
    </form>
  );
}

export default LanguageForm;

LanguageForm.propTypes = {
  obj: PropTypes.object.isRequired,
  toRender: PropTypes.object.isRequired,
};
