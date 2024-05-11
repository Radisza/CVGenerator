import PropTypes from 'prop-types';

function PersonalView({ personal }) {
  return (
    <div>
      <div>{personal.data.fullName}</div>
      <div>{personal.data.email}</div>
      <div>{personal.data.phoneNumber}</div>
    </div>
  );
}

PersonalView.propTypes = {
  personal: PropTypes.object.isRequired,
};

export default PersonalView;
