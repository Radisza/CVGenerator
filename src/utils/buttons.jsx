import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';

function EditBtn({ onClick }) {
  return (
    <button onClick={onClick}>
      <Icon className="icon" icon="mdi-edit" />
    </button>
  );
}

EditBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EditBtn;
