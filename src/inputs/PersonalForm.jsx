import PropTypes from 'prop-types';

function PersonalForm({ personal, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const name = 'personal';
  return (
    <form>
      <input
        type="text"
        name={name + '_fullname'}
        value={personal.data.fullName}
        label="Full name"
        onChange={personal.changeName}
      />
      <input
        type="text"
        name={name + '_email'}
        value={personal.data.email}
        label="e-mail"
        onChange={personal.changeEmail}
      />
      <input
        type="text"
        name={name + '_email'}
        value={personal.data.phoneNumber}
        label="Phone number"
        onChange={personal.changePhone}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

PersonalForm.propTypes = {
  personal: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PersonalForm;
