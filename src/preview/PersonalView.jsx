import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

function IconText({ icon, content }) {
  return (
    <div className="textWithIcon">
      <Icon className="icon" icon={icon} />
      <div>{content}</div>
    </div>
  );
}

IconText.propTypes = {
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function PersonalView({ personal }) {
  return (
    <div>
      <div className="title">{personal.data.fullName}</div>
      <IconText icon="mdi-phone" content={personal.data.phoneNumber} />
      <IconText icon="mdi-alternate-email" content={personal.data.email} />
      <IconText icon="mdi-location" content={personal.data.location} />
    </div>
  );
}

PersonalView.propTypes = {
  personal: PropTypes.object.isRequired,
};

export default PersonalView;
