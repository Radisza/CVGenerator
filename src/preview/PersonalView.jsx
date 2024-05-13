import PropTypes from 'prop-types';
import IconText from './IconText';

function PersonalView({ personal }) {
  return (
    <div className="flex-column">
      <div className="big-title">{personal.data.fullName}</div>
      <IconText
        icon="mdi-phone"
        content={personal.data.phoneNumber}
        key="personal_phone"
      />
      <IconText
        icon="mdi-alternate-email"
        content={personal.data.email}
        key="personal_email"
      />
      <IconText
        icon="mdi-location"
        content={personal.data.location}
        key="personal_location"
      />
    </div>
  );
}

PersonalView.propTypes = {
  personal: PropTypes.object.isRequired,
};

export default PersonalView;
