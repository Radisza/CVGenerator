import PersonalView from './PersonalView';
import LanguagesView from './LanguagesView';
import ExperienceView from './ExperienceView';
import EducationView from './EducationView';
import SkillsView from './SkillsView';
import PropTypes from 'prop-types';

function Preview({ personal, languages, experience, education, skills }) {
  return (
    <div className="preview">
      <div className="CV">
        <div className="CVLeft">
          <PersonalView personal={personal} />
          <LanguagesView languages={languages} />
          <SkillsView skills={skills} />
        </div>
        <div className="CVRight">
          <ExperienceView experience={experience} />
          <EducationView education={education} />
        </div>
      </div>
    </div>
  );
}

Preview.propTypes = {
  personal: PropTypes.object.isRequired,
  languages: PropTypes.object.isRequired,
  experience: PropTypes.object.isRequired,
  education: PropTypes.object.isRequired,
  skills: PropTypes.object.isRequired,
};

export default Preview;
