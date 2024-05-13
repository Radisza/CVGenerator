import PersonalView from './PersonalView';
import LanguagesView from './LanguagesView';
import PropTypes from 'prop-types';

function Preview({ personal, languages }) {
  return (
    <div className="preview">
      <div className="CV">
        <div className="CVLeft">
          <PersonalView personal={personal} />
          <LanguagesView languages={languages} />
        </div>
        <div className="CVRight">Right</div>
      </div>
    </div>
  );
}

Preview.propTypes = {
  personal: PropTypes.object.isRequired,
  languages: PropTypes.object.isRequired,
};

export default Preview;
