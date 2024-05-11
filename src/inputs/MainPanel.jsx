import FormItem from './FormItem';
import PersonalForm from './PersonalForm';
import PropTypes from 'prop-types';

function MainPanel({ personal }) {
  return (
    <div className="mainPanel">
      <FormItem
        name={personal.data.fullName || 'Personal data'}
        renderForm={(onSubmit) => (
          <PersonalForm personal={personal} onSubmit={onSubmit} />
        )}
      />
    </div>
  );
}

MainPanel.propTypes = {
  personal: PropTypes.object.isRequired,
};

export default MainPanel;
