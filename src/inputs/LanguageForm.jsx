import PropTypes from 'prop-types';
import FormInput from './FormInput';

function LanguageForm({ obj, languageToRender }) {
  const langName = languageToRender.language;
  const elementId = languageToRender.id;
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
        value={languageToRender.level}
        label="Level"
        onChange={(e) => obj.changeLevel(elementId, e.target.value)}
      />
    </form>
  );
}

export default LanguageForm;

LanguageForm.propTypes = {
  obj: PropTypes.object.isRequired,
  languageToRender: PropTypes.object.isRequired,
};
