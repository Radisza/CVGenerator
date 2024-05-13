import PersonalView from './PersonalView';
import LanguagesView from './LanguagesView';
import ExperienceView from './ExperienceView';
import EducationView from './EducationView';
import SkillsView from './SkillsView';
import ToolsView from './ToolsView';
import PropTypes from 'prop-types';
import LinksView from './LinksView';

function Preview({
  personal,
  languages,
  experience,
  education,
  skills,
  tools,
  links,
  cvRef,
}) {
  return (
    <div className="preview">
      <div ref={cvRef} className="CV">
        <div className="CVLeft">
          <div>
            <PersonalView personal={personal} />
            <LanguagesView languages={languages} />
            <SkillsView skills={skills} />
            <ToolsView tools={tools} />
          </div>
          <div>
            <LinksView links={links} />
          </div>
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
  tools: PropTypes.object.isRequired,
  links: PropTypes.object.isRequired,
  cvRef: PropTypes.object.isRequired,
};

export default Preview;
