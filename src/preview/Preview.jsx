import PersonalView from './PersonalView';
import LanguagesView from './LanguagesView';
import ExperienceView from './ExperienceView';
import PropTypes from 'prop-types';

function Preview({ personal, languages, experience }) {
  return (
    <div className="preview">
      <div className="CV">
        <div className="CVLeft">
          <PersonalView personal={personal} />
          <LanguagesView languages={languages} />
        </div>
        <div className="CVRight">
          <ExperienceView experience={experience} />
        </div>
      </div>
    </div>
  );
}

Preview.propTypes = {
  personal: PropTypes.object.isRequired,
  languages: PropTypes.object.isRequired,
  experience: PropTypes.object.isRequired,
};

export default Preview;
