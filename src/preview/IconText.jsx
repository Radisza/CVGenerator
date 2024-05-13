import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

function IconText({ key, icon, content }) {
  if (!content) {
    return;
  }
  return (
    <div key={key} className="textWithIcon">
      <Icon className="icon" icon={icon} />
      <div>{content}</div>
    </div>
  );
}

IconText.propTypes = {
  key: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default IconText;
