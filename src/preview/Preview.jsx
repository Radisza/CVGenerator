import PersonalView from './PersonalView';
import PropTypes from 'prop-types';

function Preview({ personal }) {
  return (
    <div className="preview">
      <div className="CV">
        <div className="CVLeft">
          <PersonalView personal={personal} />
        </div>
        <div className="CVRight">Right</div>
      </div>
    </div>
  );
}

Preview.propTypes = {
  personal: PropTypes.object.isRequired,
};

export default Preview;
